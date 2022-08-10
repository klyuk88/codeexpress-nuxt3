import nodemailer from 'nodemailer';
import formidable from 'formidable';

export default defineEventHandler(async (event) => {
    const {
        req,
    } = event;

    const form = formidable();
    form.parse(req, (err, fields, files) => {
        if (err) {
          console.log(err);
            return
        } else {
            let htmlBody = `<table style="width: 100%;">`
            for (const key in fields) {
                if (Object.hasOwnProperty.call(fields, key)) {
                    htmlBody = htmlBody + `<tr style="background-color: #f8f8f8;">
                <td style="padding: 10px; border: #e9e9e9 1px solid;"><b>${key}</b></td>
                <td style="padding: 10px; border: #e9e9e9 1px solid;">${fields[key]}</td>
                </tr>`
                }
            }
            htmlBody = htmlBody + `</table>`

            const transporter = nodemailer.createTransport({
                port: 465, // true for 465, false for other ports
                host: "smtp.yandex.ru",
                auth: {
                    user: '',
                    pass: '',
                },
                secure: true,
            });
            const mailData = {
                from: 'no-replay@launchplus.ru',
                to: '',
                subject: 'Бриф с сайта launch',
                text: ``,
                html: htmlBody,
                // attachments: attachments
            }
            transporter.sendMail(mailData, (error, info) => {
                if (error) {
                    return console.log(error);
                } else {
                    return console.log(info);
                }
            })


        }
    });

});