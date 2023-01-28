const express = require ("express")
const app = express()
const cors = require ("cors")
const mongoose = require ("mongoose")

app.use(cors())
app.use(express.json())

const card = new mongoose.Schema({

    img:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    }

})

const Card = mongoose.model("card",card)

app.get("/:id",(req,res)=>{

    const id = req.params.id
    Card.findById(id,(err,doc)=>{
        if (err) {
            res.json("error")
        } else {
            res.json(doc)
        }
    })


})


app.get("/",(req,res)=>{

    Card.find({},(err,doc)=>{
        if (err) {
            res.json("error")
        } else {
            res.json(doc)
        }
    })


})


app.delete("/:id",(req,res)=>{

    const id = req.params.id
    Card.findByIdAndDelete(id,(err,doc)=>{
        if (err) {
            res.json("error")
        } else {
            res.json(doc)
        }
    })


})
app.post("/",(req,res)=>{
    const newCard = new Card({
        img:req.body.img,
        title:req.body.title,
        des:req.body.des
    })
    newCard.save((err,result)=>{
if (err) {
    res.json("error")
} else {
    res.json(result)
}
    })
})


app.listen(5354)
mongoose.connect("mongodb+srv://ibrahimsadikhov:110203is.@cluster0.cpcsxzc.mongodb.net/?retryWrites=true&w=majority")