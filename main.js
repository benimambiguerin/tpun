const express = require("express");
const app = express();
const db = require("./database/database");
const bodyParser = require("body-parser");
const cors = require("cors");
const filmRoutes = require("./routes/filmRoute");
const userRoutes = require("./routes/userRoute");
app.use(cors())

app.use('/api/films', filmRoute);
app.use('/api/users', userRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", require("./routes/users.routes"));


app.listen(3000, () => console.log("Serveur ouvert port: 3000")   );