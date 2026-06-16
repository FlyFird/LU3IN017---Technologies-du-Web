// backend/server.js
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './db.js';
import Project from './models/Project.js';
import chatRoutes from './routes/chatRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import dotenv from 'dotenv';
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const upload = multer({ dest: 'uploads/' });

connectDB();
app.use(express.json()); 
app.use("/uploads", express.static("uploads"))
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/api/project', upload.array('images'), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, title, description } = req.body;
    const isPrivate = req.body.isPrivate === 'true';
    const images = req.files.map(file => file.path);

    const newProject = new Project({
      firstName,
      lastName,
      email,
      phone,
      title,
      description,
      images,
      isPrivate
    });

    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Erreur POST /api/project:', err);
    res.status(500).json({ error: 'Erreur serveur lors de la création du projet' });
  }
});

app.get('/api/project', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error('Erreur GET /api/project:', err);
    res.status(500).json({ error: 'Erreur lors de la récupération des projets' });
  }
});

app.delete('/api/project/:id', async (req, res) => {
  try {
    const result = await Project.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Projet non trouvé' });
    res.json({ message: 'Projet supprimé' });
  } catch (err) {
    console.error('Erreur DELETE:', err);
    res.status(500).json({ error: 'Erreur lors de la suppression' });
  }
});

app.patch('/api/project/:id/privacy', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Projet introuvable' });

    project.isPrivate = !project.isPrivate;
    await project.save();
    res.json({ message: 'Visibilité modifiée', isPrivate: project.isPrivate });
  } catch (err) {
    console.error('PATCH erreur:', err);
    res.status(500).json({ error: 'Erreur lors du changement de visibilité' });
  }
});

// Middlewares
app.use(cors());
app.use(express.json()); // important pour body JSON
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // rendre les images accessibles

app.use('/api/chat', chatRoutes);
app.use("/api/project", projectRoutes);

app.use((err, req, res, next) => {
  console.error('Erreur non gérée:', err.stack);
  res.status(500).send('Erreur serveur');
});

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
