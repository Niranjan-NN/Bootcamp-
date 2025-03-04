const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    status: { type: String, enum: ["Open", "In Progress", "Completed"], default: "Open" },
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
