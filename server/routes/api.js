import express from 'express';
import fileReader from '../services/fileReader';
import diacriticsRemover from '../services/diacriticsRemover';
import storage from 'node-persist';
const router = new express.Router();

storage.initSync();

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
    debug: diacriticsRemover.remove(item.firstname).toUpperCase(),
  });
});

router.post('/name', (req, res) => {
  const items = fileReader.getFile('names.json');
  const item = items.find((elem) => elem.id === parseInt(req.body.submission.nameId, 10));
  if (!item) {
    return res.status(404).json({ error: 'Wrong param' });
  }

  const storedStreak = storage.getItem(req.body.uuid + '.streak');
  if (diacriticsRemover.remove(item.firstname).toUpperCase()
    === diacriticsRemover.remove(req.body.submission.guess).toUpperCase()) {
    const streak = storedStreak ? storedStreak + 1 : 1;
    storage.setItem(req.body.uuid + '.streak', streak);
    storage.setItem(req.body.uuid + '.tries', 2);
    return res.status(200).json({
      result: true,
      answer: {
        id: item.id,
        name: item.firstname,
        debug: diacriticsRemover.remove(item.firstname).toUpperCase(),
      },
      streak: streak,
    });
  }

  let streak = storedStreak;
  let tries = storage.getItem(req.body.uuid + '.tries');
  tries--;
  if (tries <= 0) {
    streak = 0;
    storage.setItem(req.body.uuid + '.streak', 0);
    tries = 2
  }
  storage.setItem(req.body.uuid + '.tries', tries);

  return res.status(200).json({
    result: false,
    answer: null,
    streak: streak,
  });
});

router.get('/names', (req, res) => {
  const items = fileReader.getFile('names.json');
  const itemsPicture = items.map((elem) => elem.picture);
  res.status(200).json(itemsPicture);
});

export default router;
