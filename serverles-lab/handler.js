'use strict'
const db = require('./')
module.exports.hello = async (event, context) => {
  console.log('start init lambda jose manzano')
  console.log(context)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: await run()
        // input: event
      },
      null,
      2
    )
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}

async function run () {
  const config = {
    database: process.env.DB_NAME || 'xqirljbw',
    username: process.env.DB_USER || 'xqirljbw',
    password: process.env.DB_PASS || 'ANRFB8fCHxH0O4bgePMoVKnn8GSmmZKX',
    host: process.env.DB_HOST || 'ruby.db.elephantsql.com',
    dialect: 'postgres'
  }

  const { Redemption, sequelize } = await db(config).catch(handleFatalError)

  const redemption = await Redemption.createOrUpdate({
    id: Date.now().toFixed(0),
    broadcasted: true,
    created: Date.now(),
    honeybees: 123456,
    points: 900,
    status: 'DONE',
    lifeuserid: '123456565',
    code: Math.floor(Math.random() * Math.floor(50000)).toString(),
    pin: Math.floor(Math.random() * Math.floor(50000)).toString(),
    updated: Date.now()
  }).catch(handleFatalError)

  console.log('--redemption--')
  console.log(redemption)

  const redemptions = await Redemption.findAll().catch(handleFatalError)
  console.log('--redemptions--')
  console.log(redemptions)
}
function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
