'use strict'

module.exports = function setupRedemption (RedemptionModel) {
  async function createOrUpdate (redemption) {
    const cond = {
      where: {
        id: redemption.id
      }
    }

    const existingRedemption = await RedemptionModel.findOne(cond)

    if (existingRedemption) {
      const updated = await RedemptionModel.update(redemption, cond)
      return updated ? RedemptionModel.findOne(cond) : existingRedemption
    }

    const result = await RedemptionModel.create(redemption)
    return result.toJSON()
  }

  function findById (id) {
    return RedemptionModel.findById(id)
  }

  /* function findByUuid(uuid) {
    return RedemptionModel.findOne({
      where: {
        uuid,
      },
    });
  } */

  function findAll () {
    return RedemptionModel.findAll()
  }

  /* function findConnected() {
    return RedemptionModel.findAll({
      where: {
        connected: true,
      },
    });
  } */

  /* function findByUsername(username) {
    return RedemptionModel.findAll({
      where: {
        username,
        connected: true,
      },
    });
  } */

  return {
    createOrUpdate,
    findById,
    findAll
  }
}
