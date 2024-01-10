"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schemaName = "img_gallery";
    const tableName = "users";

    return Promise.all([
      queryInterface.addColumn({ schema: schemaName, tableName }, "email", {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: true,
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    const schemaName = "img_gallery";
    const tableName = "users";

    return Promise.all([
      queryInterface.removeColumn({ schema: schemaName, tableName }, "email"),
    ]);
  },
};
