'use strict'

const setupDatabase = require('./repository/db')

const setupRedemptionModel = require('./models/redemption')

const setupRedemption = require('./repository/redemptionRepo')

const defaults = require('defaults')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)
  const RedemptionModel = setupRedemptionModel(config)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Redemption = setupRedemption(RedemptionModel)

  return {
    Redemption,
    sequelize
  }
}
