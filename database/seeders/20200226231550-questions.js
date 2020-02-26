'use strict';

export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert('Questions', [{
    id: '1',
    content: 'What kind of app are you looking for?'
  }]);
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Questions', null, {});
}
