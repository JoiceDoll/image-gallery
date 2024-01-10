"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schemaName = "img_gallery";
    const tableName = "users";

    return Promise.all([
      queryInterface.changeColumn({ schema: schemaName, tableName }, "email", {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    const schemaName = "img_gallery";
    const tableName = "users";

    return Promise.all([
      queryInterface.changeColumn({ schema: schemaName, tableName }, "email", {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: true,
      }),
    ]);
  },
};
