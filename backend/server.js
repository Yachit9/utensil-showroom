// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://mahajanyachit:Yachitmahajanmagharmalandsons@cluster0.cvgru.mongodb.net/magharmalandsons?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// POST route to handle form submission
app.post('/api/contact', async (req, res) => {
    console.log('Received data:', req.body); // Log the received data
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
  
    try {
      await newContact.save();
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error saving contact:', error); // Log any error that occurs
      res.status(500).json({ error: 'Failed to send message' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
