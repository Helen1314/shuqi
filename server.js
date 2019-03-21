const express = require('express');
const app = express();
const request = require('request');
const bodyParser =require('body-parser')

app.use(express.static('./dist'));
app.use(bodyParser.urlencoded({
    extended:false// 是否为深度解析。true 深度，false 非深度
}))
// 首页的接口 
app.get(/home/,function(req,res){
    let url = `http://bookstoreapi.shuqireader.com${req.url.substr(5)}`;
    request(url,function(err,responseText,body){
        if(!err && responseText.statusCode===200){
            let data = JSON.parse(body);
            res.json(data)
        }else{
            res.json({
                ok:-1,
                err
            })
        }
    })
})
app.get(/hehe/,function(req,res){
    let url = `http://walden1.shuqireader.com${req.url.substr(5)}`;
    request(url,(err,responseText,body)=>{
        if(!err && responseText.status===200){
            let data = JSON.parse(body);
            res.json(data)
        }else{
            res.json({
                ok:-1,
                err
            })
        }
    })
})
// 分类的上部分显示
app.post(/hehe/,function(req,res){
    let url = `http://walden1.shuqireader.com${req.url.substr(5)}`;
    console.log(req.body)
    var formData = {};
    for(attr in req.body){
        formData[attr] = req.body[attr]
    }
    request.post({url,formData},(err,responseText,body)=>{
        if(!err && responseText.statusCode ===200){
            let data = JSON.parse(body);
            res.json(data)
        }else{
            res.json({
                ok:-1,
                err
            })
        }
    })
})
// 分类的下部分显示 
app.get(/haha/,function(req,res){
    let url = `http://read.xiaoshuo1-sm.com${req.url.substr(5)}`;
    request(url,(err,responseText,body)=>{
        if(!err && responseText.statusCode===200){
            let data = JSON.parse(body);
            res.json(data)
        }else{
            res.json({
                ok:-1,
                err
            })
        }
    })
})
app.get(/hkx/,(req,res)=>{
    let url = `http://bookapi.shuqiapi.com${req.url.substr(5)}`;
    request(url,(err,responseText,body)=>{
        if(!err && responseText.status===200){
            let data = JSON.parse(body);
            res.json(data)
        }else{
            res.json({
                ok:-1,
                err
            })
        }    
    })
})
app.listen(80,()=>console.log('SUCCESS'))


