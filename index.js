const express = require('express');

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hi')
})
app.post('/',(req, res) => {
    console.log(req.body.data.split(/(Last height farmed: \d{1,})/)[2].split('Plot count for all')[0].split(/TiB/)) 
    res.send('200')
})


app.listen(3000, () => {console.log('listening')})