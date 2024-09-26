const express = require('express');
const cors = require('cors')


const app = express();
const port = 8080;
app.use(cors())



app.get('/sum', ( req, res ) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    console.log(a,' and ', b)
    const sum = parseInt(a) + parseInt(b);
    console.log(sum);
    res.json({ 'sum': sum });
})

app.listen(port, ()=>{
    console.log("Server is running of port:", port);
})