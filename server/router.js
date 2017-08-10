const express = require('express')
const router = express.Router()
const db = require('./db')





// 储存用户名
router.post('/api/admin/signup', function(req, res) {
  new db.User(req.body.userInfo).save(function(err) {
    if (err) {
      res.status(500).send()
      return
    }
    res.send()
  })
})

// 登录
router.post('/api/admin/signin', function(req, res) {
  // req.session.user = req.body.userInfo
  res.send()
})

// 根据用户名获取用户
router.get('/api/admin/getUser/:name', function(req, res) {
  db.User.findOne({
    name: req.params.name
  }, function(err, docs) {
    if (err) {
      console.error(err)
      return
    }
    res.send(docs)
  })
})

// 获取所有食物信息
router.get('/api/foodList/:name', function(req, res) {
    db.food.findOne({ name: req.params.name }, function(err, docs) {
      if (err) {
        console.error(err)
        return
      }
      res.json(docs);
    })
  })
// 获取所有食物信息
// router.get('/api/foodList', function(req, res) {
//     db.food.find({}, function(err, docs) {
//       if (err) {
//         console.error(err)
//         return
//       }
//       res.json(docs);
//     })
//   })


module.exports = router
