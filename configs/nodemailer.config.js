require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	host: process.env.NODEMAILER_HOST,
	port: process.env.NODEMAILER_PORT,
	secure: true, // true for 465, false for other ports
	auth: {
		user: process.env.NODEMAILER_AUTH_USER, // generated ethereal user
		pass: process.env.NODEMAILER_AUTH_PASS // generated ethereal password
	},
	tls: {
		rejectUnauthorized: false
	}
});

async function sendMail(recipient) {
	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Dennis 👻" <test@dennis-deuling.de', // sender address
		to: 'dennis.deuling@gmail.com', // list of receivers
		subject: 'Hello ✔', // Subject line
		text: 'Hello world?', // plain text body
		html: '<b>Hello world?</b>' // html body
	});

	console.log('Message sent: %s', info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = sendMail;
