import express from "express";
import path from "path";

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd() + "/app/template/index.html"));
});

router.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

export default router;
