'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../repository/db')

module.exports = function setupRedemptionModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define(
    'redemption',
    {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      broadcasted: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      created: {
        type: Sequelize.DATE,
        allowNull: false
      },
      honeybees: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      orderid: {
        type: Sequelize.STRING,
        allowNull: true
      },
      points: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lifeuserid: {
        type: Sequelize.STRING,
        allowNull: false
      },
      /* redemptionshippinginfo_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: "redemptionshippinginfo",
          key: "id",
        },
      },
      reward_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: "reward",
          key: "id",
        },
      }, */
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      pin: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      redemptionphone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      merchantrewardid: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      ivrcallid: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lifeuseremail: {
        type: Sequelize.STRING,
        allowNull: true
      },
      merchantid: {
        type: Sequelize.STRING,
        allowNull: true
      },
      redeemed: {
        type: Sequelize.DATE,
        allowNull: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true
      },
      value: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      canceleddate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      validatedby: {
        type: Sequelize.STRING,
        allowNull: true
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false
      },
      /*     pe_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: "pointevent",
          key: "id",
        },
      }, */
      discountacctcode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      discountexpires: {
        type: Sequelize.DATE,
        allowNull: true
      },
      discountvalue: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      discount_id: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      redemptiontype: {
        type: Sequelize.STRING,
        allowNull: true
      },
      is_externally_fulfilled: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      }
    },
    {
      tableName: 'redemption'
    }
  )
}
