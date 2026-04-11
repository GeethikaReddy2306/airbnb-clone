const express=require('express')
const app=express()
const mongoose=require('mongoose')
const listing=require('./models/listing')
const port=3000;
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static('public'));
main().then((res)=>{console.log('mongoose connected successfully')})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
  
}
app.get('/',(req,res)=>{
        res.send('main page')
})
app.get('/listing',async (req,res)=>{
  let allData=await listing.find({});
 res.render('listing/index',{allData})
})
app.listen(port,()=>{console.log('server is running successfully')})
