const nodemailer = require("nodemailer");
const ejs = require("ejs");

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // use SSL
  auth: {
    user: "jacobprueba13@outlook.com",
    pass: "12345678prueba",
  },
});

ejs.renderFile(
  __dirname + "/views/template.ejs",
  {
    national_id:'***-****095-4',
    name: " Jacob Aldo",
    link: "https://qik.com.do/r/chris-vargas",
    id: "chris-vargas",
    tickets: 3,
    referralCode: "2332",
    code: 123,
    users: ["Diego Bonilla Victoriano "],
  },
  function (err, data) {
    if (err) {
      console.log(err);
    } else {
      var mainOptions = {
        from: '"Jacob Tester" jacobprueba13@outlook.com',
        to: "aldochd13@gmail.com", // EMAIL TO SENT
        subject: "Emm", // SUBJECT OF THE EMAIL
        html: data,
      };
      console.log("html data ======================>", mainOptions.html);
      transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log("Message sent: " + info.response);
        }
      });
    }
  }
);
