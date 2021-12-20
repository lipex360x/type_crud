const moduleGenerator = require('./modules')
const seedGenerator = require('./seeds')
const migrationGenerator = require('./migrations')
const startGenerator = require('./start')

module.exports = function (plop) {
  plop.setGenerator('Migration', migrationGenerator)
  plop.setGenerator('Modules', moduleGenerator)
  plop.setGenerator('Seed', seedGenerator)
  plop.setGenerator('Start', startGenerator)
}
