var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controllers')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.param('quizId', quizController.load);

router.get('/author', function(req, res) {
  res.render('author', { author: 'Ksantos' });

});

router.get('/quizes', quizController.index);
router.get('/quizes/search', quizController.searchText);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

module.exports = router;
