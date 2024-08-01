// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001; // Cambia este puerto si es necesario

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit_form', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'aweb978@gmail.com',
      pass: 'Joseadrian123'
    }
  });

  const mailOptions = {
    from: email,
    to: 'aweb978@gmail.com',
    subject: `Nuevo mensaje de ${nombre}`,
    text: mensaje
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error al enviar el mensaje.');
    }
    res.status(200).send('Mensaje enviado: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
