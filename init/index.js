const mongoose=require('mongoose');
const  sampleListings=require('./data');
const Listing=require('../models/listing');
async function main() {
        try{
  await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
   console.log('db connectes successfully') 
   await Listing.insertMany(sampleListings)   
   console.log('sample data insertesd')
}
catch(err){
        console.log(err)
}
}
main()
