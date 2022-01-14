import express from 'express';
import * as path from 'path';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'));
});

app.get('/download/file.html', (req, res) => {
    res.set('Content-Disposition', 'attachment; filename=file.html');
    res.sendFile(path.resolve('./file.html'));
});

app.get('/view/file.html', (req, res) => {
    res.set('Content-Disposition', 'inline'); //default value
    res.sendFile(path.resolve('./file.html'));
});

app.listen(3234, () => {
    console.log('http://localhost:3234')
});
