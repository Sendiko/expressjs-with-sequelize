const { Sql, DataTypes } = require("sequelize");
const database = require("../database");

const mentor = database.define("mentor", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class: {
    type: DataTypes.STRING,
  },
});

mentor
  .sync()
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("unable to create table: ", +error);
  });

module.exports = mentor;
