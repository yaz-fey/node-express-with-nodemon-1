const express = require('express');

const data = require('./data.js');


const server=express();


server.get('/', (req,res) => {
    res.send("Express Geldi...");
});


server.get("/aktorler", (req, res) => {
    res.status(200).json(data);
});

server.get("/aktorler/:id", (req,res) => {

    //  req.params.id
    // /aktorler/:id buradaki id değerimiz   req.params.id şeklinde alınıyor burası önemli
    

    const {id}=req.params;
    const aktor=data.find(aktor => aktor.id ===parseInt(id));
    if(aktor){
        res.status(200).json(aktor);
    }else{
        res.status(404).send("Aradığınız aktör bulunamadı çünkü yoktu55555555...");
    }

});


server.listen(5000, () => {
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor");
});


