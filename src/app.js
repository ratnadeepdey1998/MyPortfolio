// const express = require("express");
// const server = express();
// const path = require("path");
// const port = process.env.PORT || 3000;
// const staticPath=path.join(__dirname, "../public");

// server.use(express.static(staticPath));
// // console.log(staticPath);

// server.get("/", (req, res) => {
//   res.render("index");
// });
// server.listen(port, () => console.log(`listening on port ${port}`));

require('dotenv').config()

const express=require("express");
const app=express();
const path=require("path");
const port=process.env.PORT || 4000;
const stateP=path.join(__dirname, "../public");

app.use(express.static(stateP));
app.get("/", (req, res) =>{
  res.render("index");
});

app.listen(port,() => console.log(`server listening on port ${port}`));

