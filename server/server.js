import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import handlebars from 'handlebars';
import path from 'path'
 

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


let transporter = nodemailer.createTransport({
    host:'smtp.rackhost.hu',
    port:'465',
    secure: true,
    auth: {
        user:'info@dentalcoopplus.hu',
        pass:'Dentalcoop1'
    }
})

app.post('/api/contactmail',(req,res,next) => {
    var email = req.body.email
    var name = req.body.fullName    
    var phone = req.body.phone
    var subject =req.body.subject
    var message =req.body.message

    const mailOptions ={
        from :  email,
        to : 'info@dentalcoopplus.hu',
        phone: phone,
        subject: subject,
        html: `Üzenet érkezett tőle: 
        <br /><br />
        Név:${name} <noreply@${name}.com>
        <br /><br />
        Telefonszáma: ${phone}
        <br /><br />
        Tárgy: ${subject}
        <br /><br />
        <br /><br />
        ${message}`
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if(err){
            res.json({
                status:"err"
            }) 
            console.log(err)
        }else {
                res.json({
                    status: "success"
         })
         console.log("Email Sent " + data.response)
        }
    })

})
app.post('/api/shopmail',express.json(),(req,res,next) => {
    var email = req.body.email
    var name = req.body.fullName    
    var phone = req.body.phonenumber
    var city =req.body.city
    var address =req.body.address
    var postalCode= req.body.postalCode
    var vatNumber = req.body.vatNumber
    var bfullName = req.body.bfullName
    var bphoneNumber = req.body.bphonenumber
    var bcity = req.body.bcity
    var baddress = req.body.baddress
    var bpostalCode = req.body.bpostalCode
    var payment = req.body.payment
    var datas = req.body.datak
    var delivers = req.body.deliverInfo

    


    const mailOptions ={
        from :  email,
        to : 'info@dentalcoopplus.hu',
        phone: phone,
        subject: "Rendelés",
        html: `Üzenet érkezett tőle: 
        <br /><br />     
        -Név vagy Cégnév:${name} <noreply@${name}.com>
        <br /><br />
        -Adószám(cég esetén):${vatNumber}
        <br /><br />
        -Telefonszáma: ${phone}
        <br /><br />
        -Megrendelő címe: ${postalCode} ${city}, ${address}
        <br /><br />
        Email cím:${email}
        <br /><br />
        <br /><br />
        Szállítási adatok:
        <br /><br />
        -Név: ${bfullName}
        <br /><br />
        -Telefonszám:${bphoneNumber}
        <br /><br />
        -Szállítási cím:${bpostalCode} ${bcity}, ${baddress}
        <br /><br />
        <br /><br />
        -Rendelések:${datas}
        <br /><br />
        <br /><br />
        Fizetés módja: ${payment}
        <br /><br />
        Szállítás módja:${delivers}
        <br /><br />
        <br /><br />
        `
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if(err){
            res.json({
                status:"err"
            }) 
            console.log(err)
        }else {
                res.json({
                    status: "success"
         })
         console.log("Email Sent " + data.response)
        }
    })

})




const port = process.env.PORT || 5000;
app.listen(port , () => {
    console.log(`Serve at localhost: ${port}`)
})












// import express from 'express';
// import data from './data.js';

// const app = express();
// // for products
// app.get('/api/products',(req, res) => {
//     res.send(data.products);
// });

// //for category
// app.get('/api/category',(req, res) => {
//     res.send(data.category);
// });

// //slider
// // app.get('/api/slider',(req, res) => {
// //     res.send(data.sliderItems);
// // });


// //for product
// app.get('/api/products/slug/:slug',(req,res) => {
//    const product = data.products.find((x) => x.slug ===req.params.slug);
//    if(product) {
//        res.send(product)
//    } else{
//        res.status(404).send({message: 'Product Not found'})
//    }
// })


// const port = process.env.PORT || 5000;

// app.listen(port , () => {
//     console.log(`Serve at localhost: ${port}`)
// })