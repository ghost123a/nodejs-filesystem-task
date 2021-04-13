const fetch = require('node-fetch');
const fs = require('fs');

let url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
    .then(res => res.json())
    .then(json => {
        let data = JSON.stringify(json);
        fs.writeFile('./todos1.json', data, (err) => {
            if (err) throw err;
            console.log('File created');
        })
    });