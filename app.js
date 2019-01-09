const express = require('express');
const stripe = require('stripe')('secret key');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) => {
    res.render('index');

});

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
