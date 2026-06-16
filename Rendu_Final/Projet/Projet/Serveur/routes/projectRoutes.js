import express from "express";
import multer from "multer";
import Project from "../models/Project.js";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration du dossier d'upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

// POST /api/project
router.post("/", upload.array("images"), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, title, description } = req.body;
    const images = req.files.map(file => "/uploads/" + file.filename); // pour accès statique

    const project = new Project({
      firstName,
      lastName,
      email,
      phone,
      title,
      description,
      images,
      isPrivate: req.body.isPrivate === "true"
    });

    const saved = await project.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur lors de la création du projet." });
  }
});

// GET /api/project : liste de tous les projets
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération des projets." });
  }
});

export default router;