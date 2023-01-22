const mentor = require("../repository/model/mentor");

module.exports = {
  data: async (_req, res) => {
    try {
      const mentors = await mentor.findAll();
      res.status(200).json({
        status: 200,
        message: "data successfully sent",
        data: mentors,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: error,
        data: null,
      });
    }
  },
  index: async (req, res) => {
    try {
      const mentors = await mentor.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (mentor == null) {
        res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "data successfully sent",
          data: mentors,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: error.body,
        data: null,
      });
    }
  },
  store: async (req, res) => {
    try {
      const mentors = await mentor.create({
        name: req.body.name,
        class: req.body.class,
      });
      res.status(201).json({
        status: 201,
        message: "data successfully created",
        data: mentors,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 500,
        message: error.body,
        data: null,
      });
    }
  },
  update: async (req, res) => {
    const mentors = await mentor.update(
      {
        name: req.body.name,
        class: req.body.class,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (mentors == null){
      res.status(404).json({
        status: 404,
        message: 'data not found',
        data: null
      })
    } else {
      res.status(200).json({
        status: 200, 
        message: 'data successfully updated',
      })
    }
  },
  delete: async (req, res) => {
    const mentors = mentor.destroy({
      where: {
        id: req.params.id
      }
    })
    if(mentors == null){
      res.status(404).json({
        status: 404,
        message: 'data not found',
        data: null
      })
    } else {
      res.status(200).json({
        status: 200, 
        message: 'data successfully deleted',
      })
    }
  }
};
