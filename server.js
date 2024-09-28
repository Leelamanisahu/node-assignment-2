const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes.js');

const app = express();
app.use(express.json());


app.use((req,res,next)=>{
    console.log(`${req.method} request to ${req.url}`);
    next();
})

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/usersDB')
.then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
