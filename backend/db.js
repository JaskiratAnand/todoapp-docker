const mongoose = require('mongoose');
require('dotenv').config();

const MongoDBConnect = process.env.MongoDBConnect

mongoose.connect(MongoDBConnect);

// Schemas
const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: { type: Boolean, default: false },
})

const Todos = mongoose.model('Todos', TodoSchema);

module.exports = {
    Todos
}