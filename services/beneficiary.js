const { sendToQueue } = require("../connectionRabbit");

function produceBeneficiary(data) {
  return sendToQueue('beneficiary', data)
}

module.exports = produceBeneficiary