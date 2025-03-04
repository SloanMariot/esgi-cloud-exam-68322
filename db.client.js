const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres:postgresql://esgi_cloud_exam_db_68322_user:U7EuM1ZbXXLJTTzd47fzrPnD1R0q5Lic@dpg-cv3aqortq21c73bi9s6g-a/esgi_cloud_exam_db_68322',
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;