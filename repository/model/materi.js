const { Sql, DataTypes } = require("sequelize");
const database = require("../database");

const materi = database.define("materi", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  judul: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

materi
  .sync()
  .then(() => console.log("table created successfully"))
  .catch((error) => console.log("error creating table: " + error));

module.exports = materi;
