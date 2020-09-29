const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');

/*======================================
=               SERVER                 =
======================================*/

const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(__dirname + '/client/build', {
  extensions: ['html']
}));
app.use('/static', express.static('public'));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 1569;

app.listen(port, function(){
  console.log(`server is running on port ${port}`)
})
