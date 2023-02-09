const {request, response } = require('express');
const nodemailer = require("nodemailer");
const smptTransport = require('nodemailer-smpt-transport');


const envioCorreo = (req = request, resp = response) =>{
    let body = req.body;
    console.log(body);

    let config = nodemailer.createTransport({
        host: 'smpt.gmail.com',
        post: 587,
        //50069
        // auth:{
        //     user: 'auxiliar.tics@clinicasandiego.com.co',
        //     pass: 'Clinica2022*'
        // }
        auth:{
            user: 'davicha95@gmail.com',
            pass: 'davidchava95'
        }
    });

    const opciones = {
        from: 'Programacion',
        subject: body.name,
        to: body.email
    };

    config.sendMail(opciones, function(error, result){
        if (error) return response.json({ok:false, msg:error});
        return res.json({
            ok: true,
            msg: result
        });
    });
}

module.exports = {
    envioCorreo
}