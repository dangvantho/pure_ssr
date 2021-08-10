import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'

const route= express.Router()

route.get('/', (req,res)=>{
    const content= renderToString(<App/>)
    res.render('index', {
        content
    })
})

export default route