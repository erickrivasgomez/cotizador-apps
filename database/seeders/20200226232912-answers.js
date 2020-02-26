'use strict';

export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert('Answers', [
    {
      id: '1',
      content: 'Web',
      path: "",
      value: 3000,
      questionId: 1
    },
    {
      id: '2',
      content: 'Android',
      path: "",
      value: 3000,
      questionId: 1
    },
  ]);
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Answers', null, {});
}
