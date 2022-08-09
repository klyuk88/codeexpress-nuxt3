import nodemailer from 'nodemailer';
import formidable from 'formidable';

export default defineEventHandler(async (event) => {
  const { req } = event;

  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    console.log('fields: ', fields);
    console.log('files: ', files);
  });

  // console.log(body);

  // const transporter = nodemailer.createTransport({
  //     port: 465, // true for 465, false for other ports
  //     host: "smtp.yandex.ru",
  //     auth: {
  //         user: '',
  //         pass: '',
  //     },
  //     secure: true,
  // });
  // const mailData = {
  //     from: '',
  //     to: '',
  //     subject: 'Бриф с сайта launch',
  //     text: ``,
  //     html: `<div>${body}</div>`,
  // }
  // transporter.sendMail(mailData, (error, info) => {
  //     if (error) {
  //         console.log(error);
  //     } else {
  //       console.log(info);
  //     }
  // })
  // console.log(body);
  // return { body }
});
