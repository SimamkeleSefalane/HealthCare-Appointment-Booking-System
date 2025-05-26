require('dotenv').config();

console.log('SID:', process.env.TWILIO_ACCOUNT_SID);
console.log('TOKEN:', process.env.TWILIO_AUTH_TOKEN);

const twilio = require('twilio');

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

client.messages
    .create({
        body: 'Hello! This is a test reminder from your health app.',
        from: 'whatsapp:' + process.env.TWILIO_PHONE_NUMBER, // ✅ CORRECT
        to: 'whatsapp:+27797495582' // ✅ Make sure your number is joined to the sandbox
    })
    .then(message => console.log('✅ Message sent with SID:', message.sid))
    .catch(error => console.error('❌ Error sending message:', error));
