import express from 'express';

const router = new express.Router();

router.get('*', (req, res) => {
  res.status(404).json({ error: 'Unknown route' });
});

export default router;
