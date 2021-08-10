import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'
import Home from '../client/Home'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
const route= express.Router()

route.get('/',async (req,res)=>{
    const data=await axios.get("https://reading-book-truyen-full.herokuapp.com/api/home/hot-book?id=all").then(value=>value.data)
    const filePath= path.join(__dirname, '../public/index.html')
    const content= renderToString(<Home route='/home' data={data.data}/>)
    fs.readFile(filePath, 'utf-8', (err,data)=>{
        if(err) return res.send('Server failure')
        const html= data.replace( '<div id="root"></div>', `<div id='root'>${content}</div>`)
        console.log(html)
        // console.log(content)
        return res.send(html)
    })
})

export default route