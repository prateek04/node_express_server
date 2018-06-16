let {Boot} = require("../boot/server")

exports.restCalls = class Rest {
    constructor(){
        Boot.App.get("/", (req, res)=>{
            res.end("Hello World");
        })
        Boot.App.get("/getImages", (req, res)=>{
            const imageSet1=[
                {
                src:"1.png",
                imageId:1
                },
                {
                src:"2.ppg",
                imageId :2
                },
                { 
                src:"3.png",  
                imageId :3
                },
                {
                src:"4.png",
                imageId :4
                },
                {
                src:"5.ppg",
                imageId :5
                },
                {
                src:"6.ppg",
                imageId :6
                },
                {
                src:"1.png",
                imageId :7
                },
                {
                src:"2.png",
                imageId :8
                },
                {
                src:"3.png",
                imageId :9
                }
              ]
            res.end(JSON.stringify(imageSet1));
        })
        
    }
}