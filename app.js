const express = require('express')
const port = process.env.PORT
const app = express()

const { exec } = require('child_process');

app.get('/', async (req, res) => {
  exec('whoami', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send({ message: 'Error executing command' });
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
