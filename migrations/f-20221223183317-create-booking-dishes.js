'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_dishes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_booking: {
        type: Sequelize.INTEGER,
        references: { model: 'bookings', key: 'id' },
        onDelete: 'CASCADE',      
      },
      id_dish: {
        type: Sequelize.INTEGER,
        references: { model: 'dishes', key: 'id' },
        onDelete: 'CASCADE',      
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('booking_dishes');
  }
};