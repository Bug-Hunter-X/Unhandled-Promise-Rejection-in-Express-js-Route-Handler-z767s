const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation without error handling
  someAsyncOperation().then(result => {
    res.send(result);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 100);
  });
}