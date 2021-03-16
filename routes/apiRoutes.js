const fs = require('fs');
let jsonData = JSON.parse(fs.readFileSync('db/db.json', "utf8"));
const { v4: uuidv4 } = require('uuid');


module.exports = (app) => {
    
    app.get('/api/notes', (req, res) => {
        res.send(jsonData);
    });

    app.get('/api/notes/:id', (req, res) => {
        res.json(jsonData[req.params.id, 1]);

    });
    app.post('/api/notes', (req, res) => {
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
        };
        jsonData.push(newNote);
        res.send(newNote.title);
        jsonUpdate(jsonData);
    });

    app.delete('/api/notes/:id', (req, res) => {
        let newId;
        
        jsonData = jsonData.filter((note) => note.id != req.params.id);
        console.log(jsonData);
        for (note of jsonData) {
            note.id = newId.toString();
            newId++;
        }
        jsonUpdate(jsonData);
        res.json(jsonData);
    });

    const jsonUpdate = (note) => {
        fs.writeFileSync('db/db.json', JSON.stringify(note), err => {
            if (err) throw err;
            res.json(jsonData);
        })
    }
};




