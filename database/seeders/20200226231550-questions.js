'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        content: 'What kind of solution are you looking for?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'What kind of design do you want for your solution?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'How are you going to take benefits?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Does your solution need a login system?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Does your solution integrate into a web site?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Would users have their own profile?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Does your solution have an admin panel?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'How many languages will the solution support?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'What is the current status of your project?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'How long would you like to have your solution?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
