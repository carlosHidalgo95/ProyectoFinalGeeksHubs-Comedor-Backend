'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('users', [{
      id:1,
      email: 'admin@email.com',
      username:'admin',
      password:"PFZQ04QEQ72D144YAHfdrp4xWt+JC28f6f6NsmQrPqzXHgSalNMUylFRB0Rg3Fi8IDy5zMItlQA39YvgR95OOA==",
      id_role:1,
      createdAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    }], {});
      },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
