const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db('posts');
}
//just looks and distributes the table as an array

function findById(id) {
  return db('posts').where({ id: Number(id) });
}
// takes the post table and says where the id is in the table, you pass it a number id in req.params to filter it out
function insert(post) {
  return db('posts')
    .insert(post)
    .then(ids => ({ id: ids[0] }));
}
// select the table you want then used insert based on the parameter you feed it
// then let the ids be sav ed in the array at the index of id: ids[0] from the post  its incrememented automatically
function update(id, post) {
  return db('posts')
    .where('id', Number(id))
    .update(post);
}

function remove(id) {
  return db('posts')
    .where('id', Number(id))
    .del();
}
