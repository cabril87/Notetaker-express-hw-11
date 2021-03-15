const fs = require('fs');
const jsonData = JSON.parse(fs.readFileSync('db/db.json', "utf8"));


module.exports = (app) => {
    


    app.get('/api/notes', (req, res) => {
        res.send(jsonData);

    });

    app.get('/api/notes/:id', (req, res) => {
        res.json(jsonData[req.params.id, 1]);

    });
    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        jsonData.push(newNote);
        res.send(newNote.title);
        jsonUpdate(jsonData);
        


    });


    app.delete('/api/notes/:id', (req, res) => {
        jsonData.splice(req.params.id);
        jsonUpdate();
        console.log(req.params.id);
    });

    const jsonUpdate = () => {
    
    
        fs.writeFileSync('db/db.json', JSON.stringify(jsonData), err => {
            if (err) throw err;
            res.json(jsonData);
        })
    
    }


};




