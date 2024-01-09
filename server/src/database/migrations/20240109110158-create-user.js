"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schemaName = "img_gallery";
    const tableName = "users";
    await queryInterface.createTable(
      { schema: schemaName, tableName },
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      }
    );
  },
  async down(queryInterface) {
    const schemaName = "img_gallery";
    const tableName = "users";
    await queryInterface.dropTable({ schema: schemaName, tableName });
  },
};
