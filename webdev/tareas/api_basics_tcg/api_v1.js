/*
API v1
*/
import express from 'express';
import fs from 'fs';
const port = 4000;
const app = express();

app.use(express.json());

const cartas = JSON.parse(fs.readFileSync('cartas.json').toString());


app.get('/cartas', (req, res) => {
        if (cartas.cartas.length === 0) {
            res.status(404).send('No hay cartas');
        }
        res.send(cartas);
});

app.get('/cartas/:id', (req, res) => {
    const id = req.params.id;
    const carta = cartas.cartas.find(carta => carta.id === id);
    if (!carta) {
        res.status(404).send('No existe la carta');
    }
    res.send(carta);
});

app.post('/cartas', (req, res) => {
    const nuevaCarta = req.body;

    if (!nuevaCarta.id || !nuevaCarta.name || !nuevaCarta.element || nuevaCarta.energy_cost === undefined) {
        res.status(400).send('Datos incompletos');
    } else if (cartas.cartas.find(card => card.id === nuevaCarta.id)) {
        res.status(400).send('La carta ya existe');
    } else {
        cartas.cartas.push(nuevaCarta);
        fs.writeFileSync('cartas.json', JSON.stringify(cartas, null, 2));
        res.status(200).send('Carta creada correctamente');
    }
});

app.delete('/cartas/:id', (req, res) => {
    const id = req.params.id;
    const carta = cartas.cartas.find(carta => carta.id === id);
    if (!carta) {
        res.status(404).send('No existe la carta');
    } else {
        cartas.cartas = cartas.cartas.filter(carta => carta.id !== id);
        res.status(200).send(carta);
    }
    fs.writeFileSync('cartas.json', JSON.stringify(cartas, null, 2));
});

app.patch('/cartas/:id', (req, res) => {
    const id = req.params.id;
    const carta = cartas.cartas.find(carta => carta.id === id);
    if (!carta) {
        res.status(404).send({ message: 'No existe la carta' });
    } else {
        const { name, element, energy_cost } = req.body;
        if (name) {
            carta.name = name;
        }
        if (element) {
            carta.element = element;
        }
        if (energy_cost !== undefined) {
            carta.energy_cost = energy_cost;
        }
        fs.writeFileSync('cartas.json', JSON.stringify(cartas, null, 2));
        res.status(200).send('Carta actualizada correctamente');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hola bienvenid@ a mi api<br> Para ver las cartas almacenadas ve a /cartas<br> Para ver una carta en especifico ve a /carta/id<br> Para agregar una carta ve a /cartas<br> Para borrar una carta ve a /carta/id<br> Para actualizar una carta ve a /cartas/id<br>');
});

