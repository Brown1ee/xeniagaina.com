const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const nodemailer = require("nodemailer");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

app.post("/send-mail", (req, res) => {
  const { firstName, email, lastName, phone, description } = req.body;
  console.log("reqqq", firstName);
  // Send the email
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: { user: "atomacu@gmail.com", pass: "20042000To" }
  });
  let mailOptions = {
    from: "xenia.gaina@mail.ru",
    to: email,
    subject: `Contact form ${firstName} ${lastName}`,
    text: `${phone} ${description}`
  };

  return res.status(200).send("pidr");
  transporter.sendMail(mailOptions, function(err) {
    if (err) {
      return res.status(500).send({ msg: err.message });
    }
    res.status(200).send(`A verification email has been sent to ${email}`);
  });
  //   res.json({
  //     message: "Behold The MEVN Stack!"
  //   });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
