const express = require('express');
const router = express.Router();
const Hero = require('../models/hero')

router.get('/hero',(req,res)=>{
    Hero.find({})
    .sort({update_at:-1})
    .then(heros=>{
        res.json(heros);
    })
    .catch(err=>{
        console.log(2);
        res.json(err);
    })
});

router.get('/hero/:id',(req,res)=>{
    Hero.findById(req.params.id)
    .then(hero=>{
        res.json(hero);
    })
    .catch(err=>{
        res.json(err);
    })
})

router.post('/hero',(req,res)=>{
    Hero.create(req.body,(err,hero)=>{
        if(err){
            res.json(err);
        }else{
            res.json(hero);
        }
    })
})

router.put('/hero/:id',(req,res)=>{
    Hero.findOneAndUpdate({
        _id:req.params.id
    },{
        $set:{
            name:req.body.name,
            age:req.body.age,
            sex:req.body.sex,
            address:req.body.address,
            dowhat:req.body.dowhat,
            favourite:req.body.favourite,
            explain:req.body.explain
        }
    },{
        new:true
    })
    .then(hero=>res.json(hero))
    .catch(err=>res.json(err))
})

router.put('/addpic/:id',(req,res)=>{
    Hero.findOneAndUpdate(
        {_id:req.params.id},
        {
            $push:{
                imgArr:req.body.url
            }
        },
        {
            new:true
        }
    )
    .then(hero=>res.json(hero))
    .catch(err=>json(err));
});

router.delete('/hero/:id',(req,res)=>{
    Hero.findOneAndRemove({
        _id:req.params.id
    })
    .then(hero=>res.send(`${hero.title}删除成功`))
    .catch(err=>res.json(err));
});

module.exports=router