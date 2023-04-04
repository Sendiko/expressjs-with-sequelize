const question = require("../repository/model/question");
const answer = require("../repository/model/answer");

module.exports = {
  data: async (_req, res) => {
    try {
      const questions = await question.findAll();
      await questions.forEach((element) => {
        const answers = answer.findAll({ where: { questionId: element.id } });
        questions.answers = answers;
      });
      res.status(200).json({
        status: 200,
        message: "data successfully sent",
        data: questions,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "server error.",
        data: error,
      });
    }
  },
  index: async (req, res) => {
    try {
      const questions = await question.findOne({
        where: { id: req.params.id },
      });
      if (questions == null) {
        res.status(404).json({
          status: 404,
          message: "data not found.",
          data: null,
        });
      } else {
        const answers = await answer.findAll({
          where: { questionId: questions.id },
        });
        res.status(200).json({
          status: 200,
          message: "data successfully sent",
          question: questions,
          answer: answers,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "server error.",
        data: error,
      });
    }
  },
  storeQuestion: async (req, res) => {
    try {
      const questions = await question.create({
        question: req.body.question,
      });
      res.status(201).json({
        status: 201,
        message: "data successfully created",
        question: questions,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "server error.",
        data: error,
      });
    }
  },
  storeAnswer: async (req, res) => {
    try {
      const questions = await question.findOne({ where: { id: req.body.questionId } });
      const answers = await answer.create({
        answer: req.body.answer,
        isCorrect: req.body.isCorrect,
        questionId: req.body.questionId,
      });
      console.log(questions);
      const newQuestion = await question.create({
        id: questions.id,
        question: questions.question,
        answers: answers,
      });
      res.status(201).json({
        status: 201,
        message: "data successfully created",
        question: newQuestion,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "server error.",
        data: error,
      });
    }
  },
  submitAnswers: async (req, res) => {
    try {
      const request = {
        questionId: req.body.questionIds,
        answer: req.body.answers,
      };
      const response = {
        questionId: [],
        answer: [],
      };
      let totalQuestion = request.questionId.length;
      for (let i = 0; i < totalQuestion; i++) {
        const answers = await answer.findOne({
          where: { id: request.answer },
          order: [["id", "DESC"]],
        });
        if (answers.isCorrect == true) {
          response.answer.push(true);
          response.questionId.push(request.questionId[i]);
        } else {
          response.answer.push(false);
          response.questionId.push(request.questionId[i]);
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "server error.",
        data: error,
      });
    }
  },
};
