const express = require('express');

const app = express();

const d = new Date();

const port = process.env.PORT || 3000;

const america = d.toLocaleString('en',{timeZone:'America/Toronto'});

const australia = d.toLocaleString('en',{timeZone:'Australia/Canberra'});

const asia = d.toLocaleString('en',{timeZone:'Asia/Tokyo'});

const greece = d.toLocaleString('en',{timeZone:'Europe/Athens'});

const africa = d.toLocaleString('en',{timeZone:'Africa/Bangui'});

app.get('/Time/:country',(req, res)=>{

    const country=req.params.country

    if(country=="america"){
        return res.send(america)
    }
    else if(country=="africa"){
        return res.send(africa)
    }
    else if(country=="australia"){
        return res.send(australia)
    }
    else if(country=="asia"){
        return res.send(asia)
    }
    else if(country=="greece"){
        return res.send(greece)
    }
    else{
         res.send("Please enter valid country")
    }

    res.send(country)

})

app.listen(port,()=>{

    console.log(`server is listining in http://localhost:${port}`);

})