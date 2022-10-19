const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');

app.use(cors());

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'public/models')
    },
    filename: function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage:storage}).single('file');

app.post('/upload',function(req,res){
    upload(req,res,function(err){
        if(err){
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file);
    })
})

app.get('/files',function(req,res){
    const pathName = __dirname+'/public/models';
    let files = fs.readdir(pathName,(error,files)=>{
        if(error){
        console.log(error);
        }
        console.log(files);
        return res.status(200).send(files);
  })
})

app.listen(8000,()=>console.log('App running on port 8000'));