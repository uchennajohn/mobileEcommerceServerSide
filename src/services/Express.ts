import express, {Application}  from "express";
import bodyParser from "body-parser";

import path from "path";


export default async(app: Application)=>{
    app.use(bodyParser.json()) 
    app.use(bodyParser.urlencoded({extended:true})) 
    app.use('/images', express.static(path.join(__dirname, 'images')))
    
    
   
    
    return app

}