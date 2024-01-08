const express = require("express");
const router = express.Router();
const crytpo = require("crypto");
router.route("/").get((req, res) => {
  res.status(201).json({ message: "Get the contact" });
});
router.route("/:id").get((req, res) => {
  res.status(201).json({ message: `Get the contact by${req.params.id}` });
});
router.route("/").post((req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if ((!name, !email, !phone)) {
    throw new Error("Invalid");
  }
  res.json({ message: "Create the contact" });
});
router.route("/:id").put((req, res) => {
  res.json({ message: `Update the contact ${req.params.id}` });
});
router.route("/:id").delete((req, res) => {
  res.json({ message: `Delete the contact of ${req.params.id}` });
});

module.exports = router;
