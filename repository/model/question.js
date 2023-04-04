const { Sql, DataTypes } = require("sequelize");
const database = require("../database");
const answer = require("./answer");

const question = database.define("question", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  answers: {
    type: DataTypes.JSON
  }
});

question
  .sync()
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("unable to create table: ", +error);
  });

module.exports = question;
