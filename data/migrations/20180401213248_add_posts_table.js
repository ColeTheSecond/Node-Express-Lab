exports.up = function(knex, Promise) { // this is our then?
  console.log('creating posts table');
  // takes a knex object to create

  return knex.schema.createTable('posts', function(posts) {
    posts.increments(); // adds an id to the posts, incrementing numbers

    posts.string('title', 255).notNullable(); // what type, how many characters, can't be blank
    posts.text('contents').notNullable(); // text type has unlimited characters, can't be blank

    posts.timestamps(true, true);

    console.log('posts table created');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
}; // this is our catch
