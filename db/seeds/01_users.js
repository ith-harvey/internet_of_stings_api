
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, email: 'a@e.com', username: 'ae', hashed_password: '$2a$12$/tAYJHIfXmCgFrvTa39DYeAhitwbZ7lHAXEL13MoU6fHazLSDnnSG'},
        {id: 2, email: 'a1@e.com', username: 'ae1', hashed_password: '$2a$12$/tAYJHIfXmCgFrvTa39DYeAhitwbZ7lHAXEL13MoU6fHazLSDnnSG'}
      ]);
    });
};
