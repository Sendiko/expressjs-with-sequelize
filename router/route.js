const express = require("express");
const router = express.Router();

const mentorController = require("../controllers/mentorController");
const quizController = require("../controllers/quizController");
const materiController = require("../controllers/materiController")

router.get("/mentors", mentorController.data);
router.get("/mentors/:id", mentorController.index);
router.post("/mentors", mentorController.store);
router.put("/mentors/:id", mentorController.update);
router.delete("/mentors/:id", mentorController.delete);

router.get("/quiz", quizController.data);
router.get("/quiz/:id", quizController.index);
router.post("/quiz", quizController.storeQuestion);
router.post("/answer", quizController.storeAnswer);
router.post("/submit", quizController.submitAnswers);

router.get("/api/materi", materiController.data);
router.get("/api/materi/:id", materiController.index);
router.post("/api/materi", materiController.createMateri);
router.post("/api/subbab", materiController.createSubbab);
router.put("/api/materi/:id", materiController.updateMateri);
router.put("/api/subbab/:id", materiController.updateSubbab);
router.delete("/api/materi/:id", materiController.deleteMateri);
router.delete("/api/subbab/:id", materiController.deleteSubbab);

module.exports = router;
