const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
app.use(bodyParser.json());

//Routes

const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')

app.get('/', (req, res) => {
    res.send('This is a string output from the API');
});

//Bidy Parse Middleware

app.use(express.json());

mongoose.connect('mongodb+srv://admin:Uvindu8800@cluster0.ywbansd.mongodb.net/UV_Fashion?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected!'));

//User routes

app.use('/api/users', userRoutes);

//product routes

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});