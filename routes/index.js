const express = require('express');
const router = express.Router();

let nextId = 5;

// In-memory list of reports
let reports = [
  {
    id: 1,
    status: 'Found',
    itemName: 'Silver MacBook Charger',
    location: 'Campus Library 1st Floor',
    date: '2026-11-18',
    description: 'USB-C 67W power adapter left near study pod 4.'
  },
  {
    id: 2,
    status: 'Lost',
    itemName: 'Blue Ontario Tech Lanyard & Keys',
    location: 'Student Centre Cafeteria',
    date: '2026-11-19',
    description: 'Has two silver keys and a black key fob attached.'
  },
  {
    id: 3,
    status: 'Found',
    itemName: 'Black Hydro Flask (32 oz)',
    location: 'Science Building Room 210',
    date: '2026-11-19',
    description: 'Matte black bottle with a white sticker on the lid.'
  },
  {
    id: 4,
    status: 'Lost',
    itemName: 'Apple AirPods Pro Case',
    location: 'Business & IT Building Atrium',
    date: '2026-11-20',
    description: 'White charging case inside a navy silicone cover.'
  }
];

// Landing / Home Page
router.get('/', (req, res) => {
  res.render('index', {
    title: 'FindIt | Campus Lost & Found',
    activePage: 'home'
  });
});

// Report Lost/Found Item Page
router.get('/report', (req, res) => {
  res.render('report', {
    title: 'Report an Item | FindIt',
    activePage: 'report'
  });
});

// Add New Item
router.post('/report', (req, res) => {
  const { itemName, status, date, location, description } = req.body;
  reports.unshift({
    id: nextId++,
    status,
    itemName,
    location,
    date,
    description
  });
  res.redirect('/dashboard?msg=created');
});

// Dashboard Page
router.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard | FindIt',
    activePage: 'dashboard',
    msg: req.query.msg || '',
    reports
  });
});

// Render Edit Page for a Specific Item
router.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = reports.find(r => r.id === id);
  if (!item) return res.redirect('/dashboard');

  res.render('edit', {
    title: 'Edit Report | FindIt',
    activePage: 'dashboard',
    item
  });
});

// Save Edited Item
router.post('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = reports.find(r => r.id === id);
  if (item) {
    item.itemName = req.body.itemName;
    item.status = req.body.status;
    item.date = req.body.date;
    item.location = req.body.location;
    item.description = req.body.description;
  }
  res.redirect('/dashboard?msg=updated');
});

// Remove an Item
router.post('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  reports = reports.filter(r => r.id !== id);
  res.redirect('/dashboard?msg=deleted');
});

module.exports = router;