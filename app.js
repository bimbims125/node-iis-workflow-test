const express = require('express')
const port = process.env.PORT
const app = express()

const { exec } = require('child_process');

app.get('/', async (req, res) => {
  exec('whoami', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send({ message: 'Error executing command cuy' });
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }

    res.send({
      message: 'Success test webhook',
      user: stdout.trim()
    });
  });
});
<<<<<<< HEAD
=======


>>>>>>> 2b2e1dd35dbe0f53e6c4c50c703ef6f2e119c989
app.get('/test-webhook', async (req, res)=>{
  res.send(
    {
      message: 'Ini hanya untuk test webhook #4'
    }
  )
})

app.listen(process.env.PORT, ()=>{
  console.log(`Success ${port}`)
})
