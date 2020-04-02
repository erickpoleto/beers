const path = require('path')
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')

const {host, port, user, pass} = require('../config/mail.json')

const transport = nodemailer.createTransport({
    host,
    port,
    auth: {
        user, pass 
    }
});

transport.use('compile', hbs({
    viewEngine: {
        extName: '.html',
        partialsDir: path.resolve('./src/resource'),
        layoutsDir: path.resolve('./src/resource'),
        defaultLayout: '../resource/forgotPassword.html'
    },
    viewPath: path.resolve('./src/resource'),
    extName: '.html'
}));

module.exports = transport;