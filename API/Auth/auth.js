const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../../Model/userModel');
const config=require('config');

router.post('/signup',(req,res)=>{
    const {name,email,password,pincode}=req.body;
    User.findOne({email}).then((user)=>{
        if(user)
        return res.status(400).json({
            error:"User already exist"
        });
        else{
            const newUser=new User({
                name, email, password,pincode
            });
            
            //encryption password

            bcrypt.genSalt(8,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) throw err;
                    newUser.password=hash;
                    newUser.save().then(user=>{
                        jwt.sign({
                            id:user.id
                        },
                        config.get("jwtSecret"),{
                            expiresIn:36000
                        },
                        (err,token)=>{
                            if(err) throw new err ;
                            res.json({
                                token:token,
                              user:{
                                  id:user.id ,
                                  name:user.name,
                                  email:user.email,
                                  pincode:user.pincode
                              }
                          })
                        })
                        
                    }).catch((e)=>console.log(e));
                      
                })
            })

        }
    }).catch((e)=>console.log(e));
})
// router.get('/api/auth/access-token').reply((config) => {
//     const data = JSON.parse(config.data);
//     const {access_token} = data;

//     try
//     {
//         const {id} = jwt.verify(access_token, jwtConfig.secret);

//         const user = _.cloneDeep(authDB.users.find(_user => _user.uuid === id));
//         delete user['password'];

//         const updatedAccessToken = jwt.sign({id: user.uuid}, jwtConfig.secret, {expiresIn: jwtConfig.expiresIn});

//         const response = {
//             "user"        : user,
//             "access_token": updatedAccessToken
//         };

//         return [200, response];
//     } catch ( e )
//     {
//         const error = "Invalid access token detected";
//         return [401, {error}];
//     }
// });
router.post('/access',(req,res)=>{
const tokens=req.body.token;
const ids=req.body.id;
try{
    jwt.verify(tokens,config.get("jwtSecret"));
    User.findById(ids).then((user)=>{
      if(!user)
      console.log("no user ");
      else
       jwt.sign({
        id:user.id
    },
    config.get("jwtSecret"),{
        expiresIn:36000
    },
    (err,token)=>{
        if(err) throw new err ;
        res.json({
            token:token,
          user:{
              id:user.id ,
              name:user.name,
              email:user.email,
              pincode:user.pincode
          }
      })
    })
      res.json({
        token:token,
      user:{
          id:user.id ,
          name:user.name,
          email:user.email,
          pincode:user.pincode
      }
    })
    })
}catch (e)
{
    return res.send("Error");
}

})
router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Simple validation
    if(!email || !password) {
      return res.status(400).json({ error: 'Please enter all fields' });
    }
  
    // Check for existing user
    User.findOne({ email })
      .then(user => {
        if(!user) return res.status(400).json({ error: 'User Does not exist' });
  
        // Validate password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(!isMatch) return res.status(400).json({ error: 'Invalid credentials' });
  
            jwt.sign(
              { id: user.id },
              config.get('jwtSecret'),
              { expiresIn: 3600 },
              (err, token) => {
                if(err) throw err;
                res.json({
                  token,
                 id:user.id,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                  }
                });
              }
            )
          })
      })
  });

module.exports=router;