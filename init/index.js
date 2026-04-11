const mongoose=require('mongoose');
const sampleListings=require('./data');
const listing=require('./models/listing');
// getting-started.js
const mongoose = require('mongoose');

main().then((res)=>{console.log('db is connectes successfully')})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
}
const data2=async()=>{
        
}