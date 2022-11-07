require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/students');
const enrollmentRoutes = require('./routes/enrollments');
const registerRoutes = require('./routes/register'); // TODO cancel in production
const loginRoutes = require('./routes/login');
const expenseRoute = require('./routes/expense');

const app = express();

app.use(cors()); 

app.use(express.json()); // allows to access req.body

app.use(express.urlencoded({ extended: true })); //TODO why?

app.get('/', async (req, res) => {
    res.status(200).json({message: 'Welcome!'});
});

app.use('/api/v0/register', registerRoutes); // TODO cancel in production

app.use('/api/v0/login', loginRoutes);

app.use('/api/v0/students', studentRoutes);

app.use('/api/v0/enrollments', enrollmentRoutes);

app.use('/api/v0/expenses', expenseRoute)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server connected and listening up on port 4000`);
        });
    })
    .catch( error => console.log(error));
