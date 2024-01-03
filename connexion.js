const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tech_api",
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // Création des tables
  connection.query(`
    CREATE TABLE utilisateur (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nom VARCHAR(255),
      prenom VARCHAR(255),
      email VARCHAR(255) UNIQUE
    );
  `);

  connection.query(`
    CREATE TABLE commentaire (
      id INT AUTO_INCREMENT PRIMARY KEY,
      date_creation_commentaire DATETIME,
      utilisateur_id INT,
      technologie_id INT
    );
  `);

  connection.query(`
    CREATE TABLE technologie (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nom_techno VARCHAR(255)
    );
  `);

  connection.end();
});