# Template

instalar dependencias:
npm install


en template.ejs colocar el html

en index.js linea 12 añadir variables.
en email.js linea 17 tambien añadir variables.


empezar a debuggear:
npm start

abri el navegador en http://localhost:3001/



mandar email:

coloca email y contraseña origen:
 auth: {
    user: "jacobprueba13@outlook.com",
    pass: "12345678prueba",
  },
  ___________
   var mainOptions = {
        from: '"Jacob test" jacobprueba13@outlook.com',
        to: "jchipana@baufet.com", // EMAIL TO SENT
        subject: "Emm", // SUBJECT OF THE EMAIL
        html: data,
      };
 en TO  y FROM colocar  email destino
npm run email
