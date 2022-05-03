const express = require('express');
const app = express();

app.get('/helloworld', function(res, rep) {
    rep.send('Hello, world!');
});

// app.get('/test/:id/hello', function(res, rep) {
//     rep.send('Hello, world!, 123');
// });
app.listen(3008);
