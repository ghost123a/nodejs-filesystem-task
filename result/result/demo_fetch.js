const fetch = require('node-fetch');
const fs = require('fs');

let url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then(res => res.json())
    .then(json => {
        let data = JSON.stringify(json);
        fs.writeFile('./posts.json', data, (err) => {
            if (err) throw err;
            console.log('File created');
        })
    });