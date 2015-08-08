var models = require('../models/models.js');

exports.load = function(req, res, next, quizId){
  models.Quiz.find(quizId).then(
    function(quiz){
      if(quiz) {
        req.quiz = quiz;
        next();
      } else { next(new Error ('No existe quizId=' + quizId));}
    }
  ).catch(function(error){next(error);});
};

exports.index=function(req,res){
  models.Quiz.findAll().then(function(quizes){
      res.render('quizes/index',{quizes:quizes});
  }).catch(function(error){next(error);})
};

//get /quizes/question
exports.show = function(req,res){
  models.Quiz.find(req.params.quizId).then(function(quiz){
  res.render('quizes/show', {quiz:req.quiz});
})
};
//get /quizes/answer
exports.answer = function(req,res){
  var resultado = 'Incorrecto';
  if(req.query.respuesta === req.quiz.respeusta){
    resultado='Correcto';
  }

    res.render('quizes/answer', {quiz:req.quiz, respuesta:resultado});
};
