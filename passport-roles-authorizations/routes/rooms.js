const router = require("express").Router();
const Room = require('../models/Room');
const { loginCheck } = require('./middlewares');


router.get('/', (req, res, next) => {

  // show only the rooms that the logged in user created
  // Room.find({ owner: req.user._id })
  //   .then(rooms => {
  //     res.render('rooms/index', { roomList: rooms });
  //   })
  //   .catch(err => {
  //     next(err);
  //   })

  Room.find()
    .then(rooms => {
      res.render('rooms/index', { roomList: rooms });
    })
    .catch(err => {
      next(err);
    })
});

router.get('/add', (req, res, next) => {
  res.render('rooms/add');
});

router.post('/', loginCheck(), (req, res, next) => {
  // for node-basic-auth the user is in: req.session.user
  const { name, price } = req.body;
  console.log(req.user);
  Room.create({
    name,
    price,
    // the owner should be the logged in user
    owner: req.user._id
  })
    .then(() => {
      res.redirect('/rooms');
    })
    .catch(err => {
      next(err);
    })
});

router.get('/:id/delete', (req, res, next) => {
  const query = { _id: req.params.id };
  if (req.user.role !== 'admin') {
    query.owner = req.user._id;
  }
  // an admin can delete any room
  // a user can only a room that they created
  Room.findOneAndDelete(query)
    .then(() => {
      res.redirect('/rooms');
    })
    .catch(err => {
      next(err);
    })
});



module.exports = router;