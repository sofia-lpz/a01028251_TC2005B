import express from 'express';
import fs from 'fs';


const port = 4000;
const app = express();


app.use(express.json())
app.use(express.static('public'))  

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res)=>
    {
        fs.readFile('./public/html_cheat_sheet.html', 'utf8', 
        (err, html) => {
            if(err)
            {
                res.status(500).send('There was an error: ' + err)
                return 
            }
            
            res.send(html)
            console.log("Page sent")
        })
    })

    app.get('/css', (req, res)=>
    {
        fs.readFile('./public/css_cheat_sheet.html', 'utf8', 
        (err, html) => {
            if(err)
            {
                res.status(500).send('There was an error: ' + err)
                return 
            }
            
            res.send(html)
            console.log("Page sent")
        })
    }
    )