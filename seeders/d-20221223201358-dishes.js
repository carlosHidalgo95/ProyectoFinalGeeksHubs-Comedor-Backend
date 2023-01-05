'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let day;
    day=new Date().getDate();
    if (day=="0") {
      day=`0${new Date().getDate()}`;
    }    await queryInterface.bulkInsert('dishes', [
      {
        dish_name: "Ensalada",
        id_type:1,
        img:"https://cdn.pixabay.com/photo/2015/05/31/13/59/salad-791891_960_720.jpg",
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      },
      {
        dish_name: "Lentejas",
        id_type:2,
        img:"https://cdn.pixabay.com/photo/2018/10/10/22/28/lentil-soup-3738547_960_720.jpg",
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      },
      {
        dish_name: "Puré de patatas",
        id_type:2,
        img:"https://cdn.pixabay.com/photo/2014/09/09/11/27/mashed-potatoes-439984_960_720.jpg",
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      },
      {
        dish_name: "Paella",
        id_type:2,
        img:"https://cdn.pixabay.com/photo/2017/06/21/22/44/paella-2428945_960_720.jpg",
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      },
      {
        dish_name: "Filete de ternera",
        id_type:3,
        img:"https://cdn.pixabay.com/photo/2018/10/22/22/18/steak-3766548_960_720.jpg",
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      },
      {
        dish_name: "Hamburguesa con patatas",
        id_type:3,
        img:"https://cdn.pixabay.com/photo/2021/01/26/16/29/burguer-closeup-5952157_960_720.jpg",
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${day} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      },

  ], {});
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
