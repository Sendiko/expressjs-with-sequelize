const materyyyy = require("../repository/model/materi");
const subbabbbbb = require("../repository/model/subbab");

module.exports = {
  data: async function(req, res) {
    try {
      const materi = await materyyyy.findAll();
      res.status(200).json({
        status: 200,
        message: "data successfully sent",
        materi: materi,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  index: async function (req, res) {
    try {
      const materi = await materyyyy.findOne({
        where: {
          id: req.params.id,
        },
      });
      console.log(materi.id);
      const subbab = await subbabbbbb.findAll({
        where: {
          belongTo: materi.id,
        },
      });
      res.status(200).json({
        status: 200,
        message: "data successfully sent",
        materi: materi,
        subbab: subbab,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  createMateri: async function (req, res) {
    try {
      const materi = await materyyyy.create({
        judul: req.body.judul,
      });
      res.status(201).json({
        status: 201,
        message: "data succesfully created",
        materi: materi,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  createSubbab: async function (req, res) {
    try {
      const subbab = await subbabbbbb.create({
        judul: req.body.judul,
        isi: req.body.isi,
        belongTo: req.body.belongTo,
      });
      res.status(201).json({
        status: 201,
        message: "data succesfully created",
        subbab: subbab,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  updateMateri: async function (req, res) {
    try {
      await materyyyy.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        status: 200,
        message: "data successfully updated",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  updateSubbab: async function (req, res) {
    try {
      subbabbbbb.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        status: 200,
        message: "data successfully updated",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  deleteMateri: async function (req, res) {
    try {
      const materi = materyyyy.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        status: 200,
        message: "data successfully deleted",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  deleteSubbab: async function (req, res) {
    try {
      const subbab = subbabbbbb.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        status: 200,
        message: "data successfully deleted",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
};
