const express = require("express")
// const index = require("../index.html")
const app = express()

app.use(express.static("./"))

app.get("/", function (req, res) {
//   res.send("<h1>sdfsdf</h1>")
    res.render('index.html');
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));