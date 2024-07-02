require('dotenv').config()
const express = require('express');

const port = 8000;
const app = express();

app.get('/', (req, res) => {
    res.json("Hello World");
});
app.get('/login',(req, res)=> {
res.send('<h1>o hello Login first</h1>')
})


app.listen(process.env.PORT, () => {
    console.log(`Express is listening on port ${port}`);
});
