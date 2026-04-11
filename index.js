const express=require('express')
const app=express()
const mongoose=require('mongoose')
const listing=require('./models/listing')
const port=3000;
main().then((res)=>{console.log('mongoose connected successfully')})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
  
}
app.get('/',(req,res)=>{
        res.send('main page')
})
app.get('/listing',async(req,res)=>{
  try{
let data1= await listing.create({
  title:'myplace',
   description:'3bhk',
   price:34000,
      location:'bandra,mumbai',
      country:'india'
});
console.log('datainserted')
res.send('it is inserted')}
catch(err){
console.log(err)
res.send('error occured')
}
})
app.listen(port,()=>{console.log('server is running successfully')})