const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/utilisateurs", (req, res) => {
  db.query("SELECT * FROM utilisateur", (err, results) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json(results);
  });
});

router.post("/utilisateurs", (req, res) => {
  const utilisateur = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
  };

  db.query(
    "INSERT INTO utilisateur (nom, prenom, email) VALUES (?, ?, ?)",
    [utilisateur.nom, utilisateur.prenom, utilisateur.email],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      }

      res.status(201).send(results.insertId);
    }
  );
});

router.put("/utilisateurs/:id", (req, res) => {
  const id = req.params.id;
  const utilisateur = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
  };

  db.query(
    "UPDATE utilisateur SET nom = ?, prenom = ?, email = ? WHERE id = ?",
    [utilisateur.nom, utilisateur.prenom, utilisateur.email, id],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      }

      res.status(200).send(results.affectedRows);
    }
  );
});

router.delete("/utilisateurs/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM utilisateur WHERE id = ?", [id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).send(results.affectedRows);
  });
});

module.exports = router;