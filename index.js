const express = require('express')
const app = express()

app.get('/', function (req, res) {
//   res.send('Hello World')

     res.json({
        massage : `hiii from express server 😍 ${process.pid}` 
     })
})

app.listen(3000, () => console.log(" server is running At PORT :3000"))