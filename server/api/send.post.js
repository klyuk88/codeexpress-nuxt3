import nodemailer from 'nodemailer'
export default defineEventHandler(async (event) => {
    const body = await useBody(event)
    console.log(body);

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
        from: '',
        to: '',
        subject: '',
        text: ``,
        html: ``,
    }
    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            console.log(error);
        } else {
          console.log(info);
        }
    })
})