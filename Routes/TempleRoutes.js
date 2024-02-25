const Temple = require('../module/Temple');
const express = require('express');
const router = express.Router();

router.get('/Temples' ,async (req,res)=>{
  try {
    const AllTemples= await Temple.find({});
    res.render( 'index',  {AllTemples} ) 
  } catch (error) {
     res.send(error)
  }
    
})
router.get('/Temples/new', (req,res)=>{
  try {
    res.render('new')
  } catch (error) {
    res.send(error)
  }
})

router.post('/Temples' ,async (req,res)=>{
try {
  await Temple.create(req.body);
  res.redirect('/Temples')

} catch (error) {
  res.send(error)
}
    
})
// show 
router.get('/Temples/:id' , async(req,res)=>{
  try {
    const {id} = req.params;
    const CurrentTem = await Temple.findById(id);
     res.render('show' , {CurrentTem })
  } catch (error) {
    res.send(error)
  }
 // res.send('thik chal rha')
  
})

// edit 

router.get('/Temples/:id/edit' , async ( req,res)=>{
 
  try {
    const {id} = req.params;
    const CurrentTem = await Temple.findById(id);
     res.render('edit' , {CurrentTem })
  } catch (error) {
    res.send(error)
  }

})

router.patch('/Temples/:id' , async(req,res)=>{
try {
  const { id } = req.params;
  const {name,Address,img,about} = req.body;
  await Temple.findByIdAndUpdate(id, {name,Address,img,about})
  res.redirect('/Temples')

} catch (error) {
  res.send(error)
}
  



})

router.delete('/Temples/:id', async(req,res)=>{
try {
const {id} = req.params;
await Temple.findByIdAndDelete(id);
res.redirect('/Temples');

} catch (error) {
  res.send(error)
}
})








module.exports = router;