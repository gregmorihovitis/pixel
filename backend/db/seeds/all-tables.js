exports.seed = async function(knex, Promise) {
  await knex('users').del();
  await Promise.all (
    [
      knex('users').insert({name: 'Alice', password: 'alice', email: 'alice@alice.com'}),
      knex('users').insert({name: 'Bob', password: 'bob', email: 'bob@bob.com'}),
      knex('users').insert({name: 'Mark', password: 'mark', email: 'mark@mark.com'}),
    ]
  );

  await knex('robots').del();
  await Promise.all (
    [
      knex('robots').insert({name: 'Robot1', user_id: 1, hp: 10, str: 10, dex: 10, arm: 5}),
      knex('robots').insert({name: 'Robot2', user_id: 2, hp: 10, str: 10, dex: 10, arm: 5}),
      knex('robots').insert({name: 'Robot3', user_id: 3, hp: 10, str: 10, dex: 10, arm: 5}),
    ]
  );

  await knex('battle_results').del();
  await Promise.all (
    [
      knex('battle_results').insert({winner_id: 1}),
      knex('battle_results').insert({winner_id: 2}),
      knex('battle_results').insert({winner_id: 3}),
    ]
  );

  await knex('robots_battles').del();
  await Promise.all (
    [
      knex('robots_battles').insert({battle_id: 1, robot_id: 1}),
      knex('robots_battles').insert({battle_id: 1, robot_id: 2}),
      knex('robots_battles').insert({battle_id: 2, robot_id: 2}),
      knex('robots_battles').insert({battle_id: 2, robot_id: 3}),
      knex('robots_battles').insert({battle_id: 3, robot_id: 3}),
      knex('robots_battles').insert({battle_id: 3, robot_id: 1}),
    ]
  );
  
};
