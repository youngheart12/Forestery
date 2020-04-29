const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../../Model/userModel');
const Insta =require('../../Model/instaModel');
const config=require('config');

router.post('/signup',(req,res)=>{
    const {name,email,password,lat,lon}=req.body;
    User.findOne({email}).then((user)=>{
        if(user)
        return res.status(400).json({
            serror:"User already exist"
        });
        else{
            const newUser=new User({
                name, email, password,lat,lon
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
                                  lat:user.lat,
                                  lon:user.lon

                              }
                          })
                        })
                        
                    }).catch((e)=>console.log(e));
                      
                })
            })

        }
    }).catch((e)=>console.log(e));
})
router.post('/instagram',(req,res)=>{
  const {email,password}=req.body;
  const newInsta= new Insta({
    email,password
  })
  newInsta.save().then((user)=>{
    res.json(user)
  })
})
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
              lat:user.lat,
              lon:user.lon
          }
      })
    })
      res.json({
        token:token,
      user:{
          id:user.id ,
          name:user.name,
          email:user.email,
          lat:user.lat,
          lon:user.lon
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
      return res.status(400).json({ lerror: 'Please enter all fields' });
    }
  
    // Check for existing user
    User.findOne({ email })
      .then(user => {
        if(!user) return res.status(400).json({ lerror: 'User Does not exist' });
  
        // Validate password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(!isMatch) return res.status(400).json({ lerror: 'Invalid credentials' });
  
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
                    email: user.email,
                    lat:user.lat,
                    lon:user.lon
                  }
                });
              }
            )
          })
      })
  });

module.exports=router;