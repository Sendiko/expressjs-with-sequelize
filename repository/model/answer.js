const { Sql, DataTypes } = require("sequelize");
const database = require("../database");

const answer = database.define("answer", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  questionId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: "questions",
      key: "id",
    },
  },
});

answer
  .sync()
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("unable to create table: ", +error.body);
  });

module.exports = answer;
