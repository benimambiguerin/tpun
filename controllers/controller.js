const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/technologies", (req, res) => {
  db.query("SELECT * FROM technologie", (err, results) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json(results);
  });
});

router.post("/technologies", (req, res) => {
  const technologie = {
    nom_techno: req.body.nom_techno,
    date_creation: new Date(),
    nom_createur: req.body.nom_createur,
  };

  db.query(
    "INSERT INTO technologie (nom_techno, date_creation, nom_createur) VALUES (?, ?, ?)",
    [technologie.nom_techno, technologie.date_creation, technologie.nom_createur],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      }

      res.status(201).send(results.insertId);
    }
  );
});

router.put("/technologies/:id", (req, res) => {
  const id = req.params.id;
  const technologie = {
    nom_techno: req.body.nom_techno,
    date_creation: req.body.date_creation,
    nom_createur: req.body.nom_createur,
  };

  db.query(
    "UPDATE technologie SET nom_techno = ?, date_creation = ?, nom_createur = ? WHERE id = ?",
    [technologie.nom_techno, technologie.date_creation, technologie.nom_createur, id],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      }

      res.status(200).send(results.affectedRows);
    }
  );
});

router.delete("/technologies/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM technologie WHERE id = ?", [id], (err, results) => {
    if (err) {
            res.status(500).send(err);
        }
    });
})
    