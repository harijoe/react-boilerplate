import express from 'express';
import fs from 'fs';

let router = express.Router();

router.get('*', function (req, res) {
  res.status(404).json({error: 'Unknown route'});
});

export default router;
