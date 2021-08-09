const Sequelize = require('sequelize')
const db = require('../config/database')

const Project = db.define('project', {
  title: {
    type : Sequelize.STRING
  },
  text : {
    type : Sequelize.STRING
  },
  image_url : {
    type: Sequelize.STRING
  }
})

Project.sync().then(() => {
  console.log('table created');
});

module.exports = Project