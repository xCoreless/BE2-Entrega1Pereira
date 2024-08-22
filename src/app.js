import express from "express";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//Routes
app.get("/", (req, res ) => {
    res.send("estamos en be2");
})

app.listen(3000, () => {
    console.log("escuchando en el 3000")
})