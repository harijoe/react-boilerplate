import express from 'express';
import fs from 'fs';
import fileReader from '../services/fileReader';
import diacriticsRemover from '../services/diacriticsRemover';

let router = express.Router();

router.get('/name', function (req, res) {
  let items = fileReader.getFile('names.json');
  let item = fileReader.getRandomItem(items);
  res.status(200).json({
    id: item.id,
    picture: item.picture,
  });
});

router.get('/name/:nameId', function (req, res) {
  let items = fileReader.getFile('names.json');
  let item = items.find((item) => item.id === parseInt(req.params.nameId));
  if (!item) {
    return res.status(404).json({error: 'Wrong param'});
  }
  res.status(200).json({
    id: item.id,
    name: item.firstname,
  });
});

router.post('/name', function (req, res) {
  let items = fileReader.getFile('names.json');
  let item = items.find((item) => item.id === parseInt(req.body['nameId']));
  if (!item) {
    return res.status(404).json({error: 'Wrong param'});
  }

  if (diacriticsRemover.remove(item.firstname).toUpperCase() === diacriticsRemover.remove(req.body['guess']).toUpperCase()) {
    return res.status(200).json({
      result: true
    });
  } else {
    return res.status(200).json({
      result: false
    });
  }
});

router.get('/names', function (req, res) {
  let items = fileReader.getFile('names.json');
  let itemsPicture = items.map(function(elem) {
    return elem.picture;
  });
  res.status(200).json(itemsPicture);
});

export default router;
