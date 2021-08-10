const express= require('express')
const path= require('path')
const app= express()
const cookieParser= require('cookie-parser')
const port = process.env.PORT || 3000
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

import homeRoute from './routes/home.route'
import contactRoute from './routes/contact.route'
import appRoute from './routes/app'

app.use('/home', homeRoute)
app.use('/contact', contactRoute)
app.use('/app', appRoute)

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})



