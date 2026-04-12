const express = require('express')
const app = express()
const mongoose = require('mongoose')
const listing = require('./models/listing')
const port = 3000;
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const path = require('path');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));
main().then(() => { console.log('mongoose connected successfully') })
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
  
}
app.get('/',(req,res)=>{
        res.send('main page')
})
app.get('/listing/new',async(req,res)=>{
   res.render('listing/new')
})
app.post('/listing/new',async(req,res)=>{
  let{title,description,price,location,country}=req.body;
  let data=new listing({
    title,
    description,price,location,country
  })
  
  await data.save();
  res.redirect('/listing')
})
app.get('/listing/:id/edit', async (req, res) => {
  let { id } = req.params;
  const place = await listing.findById(id);

  res.render('listing/edit', { listing: place });
});
app.put('/listing/:id', async (req, res) => {
  let { id } = req.params;
  let { title, description, price, location, country } = req.body;

  await listing.findByIdAndUpdate(id, {
    title,
    description,
    price,
    location,
    country
  });

  res.redirect('/listing');
});
app.get('/listing',async (req,res)=>{
  let allData=await listing.find({});
 res.render('listing/index',{allData})
})

app.get('/listing/:id',async(req,res)=>{
  let {id}=req.params;
  const place = await listing.findById(id);
  res.render('listing/show',{place})
})
app.listen(port,()=>{console.log('server is running successfully')})
