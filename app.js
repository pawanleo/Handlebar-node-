const { engine } = require("express-handlebars");

const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));


app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});
// app.get("/about",(req,res)=>{
//   res.render("about")
// })
const portfolio=(req,res)=>{
  const name=req.params.name
  res.render('about',{name:name})
  console.log(name)
}
app.get("/about/:name?",portfolio)

app.listen(4000, () => {
  console.log("server running ");
});
