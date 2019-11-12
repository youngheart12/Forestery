const data=[
    {
      "latitude": 13.02836,
      "longitude": 101.31152,
      "bright_ti4": 332.5,
      "scan": 0.41,
      "track": 0.45,
      "acq_date": "2019-11-11",
      "acq_time": "0606",
      "satellite": "N",
      "confidence": "nominal",
      "version": "1.0NRT",
      "bright_ti5": 293.7,
      "frp": 2.6,
      "daynight": "D"
    },
    {
      "latitude": 13.0553,
      "longitude": 101.23569,
      "bright_ti4": 338.3,
      "scan": 0.42,
      "track": 0.45,
      "acq_date": "2019-11-11",
      "acq_time": "0606",
      "satellite": "N",
      "confidence": "nominal",
      "version": "1.0NRT",
      "bright_ti5": 294.8,
      "frp": 4.3,
      "daynight": "D"
    }];
  
 export default  function search(lat,array)
   {
       for(let i=0;i<array.length;i++)
       {
           if(array[i].latitude===13.0553)
           {
              return array[i];
           }
       }
   }
   var resultObject=search(13.0553,data);
 console.log(resultObject);
 