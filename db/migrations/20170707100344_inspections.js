'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('inspections', function(t){
    t.increments()
    t.string('inspection_date').notNullable()
    t.string('weather')
    t.string('brood_age')
    t.integer('egg_pattern')
    t.integer('temperment')
    t.boolean('queen')
    t.boolean('honey')
    t.text('notes')
    t.integer('user_id')
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('inspections')
}
