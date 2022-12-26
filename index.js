const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

app.use(express.json());
app.use('/public', express.static(path.join(__dirname, './public')));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("template", {
    national_id:'***-****095-4',
    name: " Jacob Aldo chi",
    link: "https://qik.com.do/r/chris-vargas",
    id: "chris-vargas",
    tickets: 3,
    referralCode: "12322",
    code: 123,
    users: ["Jacob aldo chipana delgado"],
  });
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
