const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const pokedex =[];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


let message = " ";

app.get("/", (req, res) => {
  

  setTimeout(() => {
    message = "";
  }, 1000);

  res.render("index", { 
    pokedex,
    message,
  });
});

app.get("/registration", (req, res) => {
  res.render("cadastro");
});

app.post("/subscription", (req, res) => {
  const pokemon = req.body
  pokedex.push(pokemon);
  message = `Parabéns , foi adicionado na sua POKEDEX`;
  res.redirect("/");
});

app.get("/details" , (req, res) => {
  res.render("details");
  res.redirect("/")
});

app.get("/details0" , (req, res) => {
  res.render("details");
  res.redirect("/")
});


app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const pokedex =[];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


let message = " ";

app.get("/", (req, res) => {
  

  setTimeout(() => {
    message = "";
  }, 1000);

  res.render("index", { 
    pokedex,
    message,
  });
});

app.get("/registration", (req, res) => {
  res.render("cadastro");
});

app.post("/subscription", (req, res) => {
  const pokemon = req.body
  pokedex.push(pokemon);
  message = `Parabéns , foi adicionado na sua POKEDEX`;
  res.redirect("/");
});

app.get("/details" , (req, res) => {
  res.render("details");
  res.redirect("/")
});

app.get("/details0" , (req, res) => {
  res.render("details");
  res.redirect("/")
});


app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

