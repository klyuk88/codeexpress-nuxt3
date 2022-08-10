import nodemailer from 'nodemailer';
import formidable from 'formidable';

// Если будут еще эндпоинты советую вынести функции successHandler и errorHandler в отдельный файл с утилитами, а тут импортировать их

const successHandler = (res, data = {}, message = 'ok', statusCode = 200) => {
  res.statusCode = statusCode;

  return {
    data: {
      status: false,
      data,
      message,
    },
  };
};

const errorHandler = (res, message = 'Неизвестная ошибка', statusCode = 400) => {
  res.statusCode = statusCode;

  return {
    error: {
      status: false,
      message,
    },
  };
};

const getData = async (req) => {
  const form = formidable();

  return await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(error);

        return;
      }

      resolve({ fields, files });
    });
  });
};

export default defineEventHandler(async (event) => {
  const { req, res } = event;

  try {
    const { fields, files } = await getData(req);

    let htmlBody = `<table style="width: 100%;">`;

    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        htmlBody =
          htmlBody +
          `<tr style="background-color: #f8f8f8;">
                <td style="padding: 10px; border: #e9e9e9 1px solid;"><b>${key}</b></td>
                <td style="padding: 10px; border: #e9e9e9 1px solid;">${fields[key]}</td>
                </tr>`;
      }
    }
    htmlBody = htmlBody + `</table>`;

    const transporter = nodemailer.createTransport({
      port: 465, // true for 465, false for other ports
      host: 'smtp.yandex.ru',
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
      attachments: [
        {
          filename: files.file.originalFilename,
          path: files.file.filepath,
        },
      ],
    };

    try {
      const info = await transporter.sendMail(mailData);

      return successHandler(res, info);
    } catch (error) {
      return errorHandler(res, error.message);
    }
  } catch (error) {
    return errorHandler(res, error.message);
  }
});
