const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error('Error in / route:', err);
      res.status(500).send('Internal Server Error');
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 100);
  });
}