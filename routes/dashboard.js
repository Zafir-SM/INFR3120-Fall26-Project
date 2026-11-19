
var express = require('express');
var router = express.Router();

// Temporary items for testing
var items = [
  {
    id: 1,
    name: 'Black Wallet',
    type: 'Lost',
    location: 'University Library',
    date: '2026-11-19',
    description: 'Black leather wallet',
    status: 'Open'
  },
  {
    id: 2,
    name: 'Student ID Card',
    type: 'Found',
    location: 'Campus Cafeteria',
    date: '2026-11-18',
    description: 'Student identification card',
    status: 'Open'
  }
];

router.get('/', function(req, res) {
  var filter = (req.query.filter || 'all').toLowerCase();

  if (!['all', 'lost', 'found'].includes(filter)) {
    filter = 'all';
  }

  var filteredItems = items.filter(function(item) {
    return filter === 'all' ||
      item.type.toLowerCase() === filter;
  });

  res.render('dashboard', {
    title: 'FindIt Dashboard',
    items: filteredItems,
    activeFilter: filter
  });
});

module.exports = router;
