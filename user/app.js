const express = require("express");
const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("hellow service 2");
});

app.post("/users", (req, res) => {
  const newUser = new User(req.body);

  newUser
    .save()
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err.message));
});

app.listen(PORT, () => {
  console.log(`Servicio 2 corriendo en puerto ${PORT}`);
});
