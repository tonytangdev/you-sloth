'use strict'
const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns')

module.exports.sendSms = async (event) => {

  const client = new SNSClient({
    region: process.env.REGION
  })

  const params = {
    Message: process.env.SMS_MESSAGE,
    PhoneNumber: process.env.PHONE_NUMBER,
    MessageAttributes: {
      'AWS.SNS.SMS.SenderID': {
        'DataType': 'String',
        'StringValue': 'YouSloth'
      }
    }
  }

  const command = new PublishCommand(params)

  let body = null

  try {
    const data = await client.send(command)
    body = JSON.stringify({
      message: data,
      input: event
    }, null, 2)
  } catch (error) {
    console.error(error)
    body = JSON.stringify(
      {
        error: error,
        input: event
      }, null, 2)
  }

  let res = {
    statusCode: 200,
    body
  }

  return res
}
