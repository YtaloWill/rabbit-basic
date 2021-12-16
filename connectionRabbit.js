var amqp = require('amqplib');

const RABBIT_URL = 'amqp://localhost'

const connect = () => {
  return amqp.connect(RABBIT_URL)
    .then(connection => connection.createChannel())
    .catch(err => { console.error('deu ruim pra conectar', err) })
}

const createQueue = (channel, queue) => {
  return new Promise((resolve, reject) =>{
    channel.assertQueue(queue, { durable: true })
    resolve(channel)
  }) 
}

const sendToQueue = (queue, msg) => {
  return connect()
    .then(channel => createQueue(channel, queue))
    .then(channel => channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg))))
    .catch(err => { console.error('deu ruim pra enviar ', err) })
}

module.exports.sendToQueue = sendToQueue
