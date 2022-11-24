exports.up = function (knex) {
  return knex.schema.createTable("farmersmarkets", (tbl) => {
    tbl.increments();
    tbl.string("listing_name");
    tbl.string("listing_id");
    tbl.string("update_time");
    tbl.string("location_address");
    tbl.string("location_x");
    tbl.string("location_y");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("farmersmarkets");
};
