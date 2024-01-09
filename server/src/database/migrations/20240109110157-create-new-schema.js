"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => {
    return queryInterface.createSchema("img_gallery");
  },

  down: (queryInterface) => {
    return queryInterface.dropSchema("img_gallery");
  },
};
