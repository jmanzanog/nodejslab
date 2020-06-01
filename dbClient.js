'use strict'

const setupDatabase = require('./repository/db')

const setupRedemptionModel = require('./models/redemption')

const setupRedemption = require('./repository/redemptionRepo')

module.exports = async function (config) {
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
