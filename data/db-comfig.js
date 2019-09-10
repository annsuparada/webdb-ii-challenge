const knex = require('knex');
const knexFlie = require('../knexfile.js');

const knexConfig = knexFlie.development;

module.exports = knex(knexConfig);