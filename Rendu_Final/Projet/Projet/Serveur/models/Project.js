// backend/models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  title: String,
  description: String,
  images: [String],
  isPrivate: { type: Boolean, default: true }
});

const Project = mongoose.model('Project', projectSchema);
export default Project;


