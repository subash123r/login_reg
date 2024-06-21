const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema and model for Cleaning Engineer Profiles
const engineerSchema = new mongoose.Schema({
    name: String,
    ratings: Number,
    feedback: String,
    amount: Number,
    booking: Date
});

const Engineer = mongoose.model('Engineer', engineerSchema);

// API endpoint to handle profile creation
app.post('/addProfile', async (req, res) => {
    const newEngineer = new Engineer(req.body);
    try {
        await newEngineer.save();
        res.status(201).send('Profile added successfully');
    } catch (error) {
        res.status(400).send('Error adding profile');
    }
});

// API endpoint to get all profiles
app.get('/profiles', async (req, res) => {
    try {
        const engineers = await Engineer.find();
        res.status(200).json(engineers);
    } catch (error) {
        res.status(400).send('Error fetching profiles');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
