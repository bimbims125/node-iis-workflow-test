const express = require('express')
const port = process.env.PORT
const app = express()

app.get('/', async (req, res)=>{
  res.send(
    {
      message: 'Success Parahh'
    }
  )
})

app.listen(process.env.PORT, ()=>{
  console.log(`Success ${port}`)
})
