const express = require('express');
const router = express.Router();

// Landing / Home Page
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'FindIt | Campus Lost & Found',
    activePage: 'home'
  });
});

// Report Lost/Found Item Page
router.get('/report', (req, res, next) => {
  res.render('report', {
    title: 'Report an Item | FindIt',
    activePage: 'report'
  });
});

// Handle Static Form Submission
router.post('/report', (req, res, next) => {
  res.redirect('/dashboard?submitted=true');
});

// Dashboard Page
router.get('/dashboard', (req, res, next) => {
  res.render('dashboard', {
    title: 'Dashboard | FindIt',
    activePage: 'dashboard',
    submitted: req.query.submitted === 'true'
  });
});

module.exports = router;