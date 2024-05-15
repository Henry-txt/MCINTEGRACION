const express = require("express");
const app = express();
const PORT = 3003;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("hellow service 3");
});

app.get("/users", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(err.message));
});

app.put("/users/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send(err.message));
});

app.delete("/users/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.send({ message: "Usuario eliminado" }))
    .catch((err) => res.status(500).send(err.message));
});

app.listen(PORT, () => {
  console.log(`Servicio 3 corriendo en puerto ${PORT}`);
});
