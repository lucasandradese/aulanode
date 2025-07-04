const express = require("express");

const app = express();

app.use(express.json());

const UserModel = require("../src/database/modules/user.model");

app.get("/user", async (req, res) => {
  try {
    const user = await UserModel.find({});

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (erros) {
    res.status(500).send(error.message);
  }
});

// pull -> atualização total, path -> atualização parcial

app.patch("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndDelete(id);

    res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/user", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => {
  console.log(`Porta ${port} no ar`);
});
