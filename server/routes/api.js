import express from 'express';
import fileReader from '../services/fileReader';
import diacriticsRemover from '../services/diacriticsRemover';

const router = new express.Router();

router.get('/name', (req, res) => {
  const items = fileReader.getFile('names.json');
  const item = fileReader.getRandomItem(items);
  return res.status(200).json({
    id: item.id,
    picture: item.picture,
  });
});

router.get('/name/:nameId', (req, res) => {
  const items = fileReader.getFile('names.json');
  const item = items.find((elem) => elem.id === parseInt(req.params.nameId, 10));
  if (!item) {
    return res.status(404).json({ error: 'Wrong param' });
  }
  return res.status(200).json({
    id: item.id,
    name: item.firstname,
  });
});

router.post('/name', (req, res) => {
  const items = fileReader.getFile('names.json');
  const item = items.find((elem) => elem.id === parseInt(req.body.nameId, 10));
  if (!item) {
    return res.status(404).json({ error: 'Wrong param' });
  }

  if (diacriticsRemover.remove(item.firstname).toUpperCase()
    === diacriticsRemover.remove(req.body.guess).toUpperCase()) {
    return res.status(200).json({
      result: true,
    });
  }

  return res.status(200).json({
    result: false,
  });
});

router.get('/names', (req, res) => {
  const items = fileReader.getFile('names.json');
  const itemsPicture = items.map((elem) => elem.picture);
  res.status(200).json(itemsPicture);
});

export default router;
