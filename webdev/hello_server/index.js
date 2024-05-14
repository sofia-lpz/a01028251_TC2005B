import express from 'express';
const port = 3000;
const app = express();


app.use(express.json())
app.use(express.static('public'))  


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hola');
});
