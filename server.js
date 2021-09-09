const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://MERN-STACK:4g8fJ790cyf5CsBV@cluster0.4s7rg.mongodb.net/MERN-STACK")

app.use("/", require("./routes/noteRoute.js"));

//heroku
if(process.env.NODE_ENV=="production"){
    app.use(express.static("prakhar-master/build"));
}

if(process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen( process.env.PORT || 3001, function() {
    console.log("express server is running port on 3001")
})