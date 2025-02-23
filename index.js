// // // const { Client } = require('whatsapp-web.js');
// // // const qrcode = require('qrcode-terminal');

// // // // Step 1: Load contacts
// // // const contacts = require('./contacts.json');

// // // // Step 2: Start WhatsApp
// // // const client = new Client();

// // // // Show QR code to scan
// // // client.on('qr', qr => {
// // //     qrcode.generate(qr, { small: true });
// // // });

// // // // When WhatsApp is ready
// // // client.on('ready', () => {
// // //     console.log('WhatsApp is ready! 🎉');

// // //     // Get the name and message from the command
// // //     const [name, message] = process.argv.slice(2);

// // //     // Find the phone number
// // //     const number = contacts[name];
// // //     if (!number) {
// // //         console.log("❌ Friend not found in contacts!");
// // //         return;
// // //     }

// // //     // Send the message!
// // // //     client.sendMessage(number, message)
// // // //         .then(() => console.log('Message sent! ✅'))
// // // //         .catch(() => console.log('Failed to send! ❌'));
// // // // });
// // //     client.sendMessage(number, message)
// // //         .then(() => console.log('Message sent! ✅'))
// // //         .catch((err) => {
// // //             console.log('Failed to send! ❌');
// // //             console.log('Error:', err); // Log the error details
// // //         });
// // // });

// // // // Start the bot
// // // client.initialize();


// // // const { Client, LocalAuth } = require('whatsapp-web.js');
// // // const qrcode = require('qrcode-terminal');
// // // const fs = require('fs');

// // // // Step 1: Load contacts
// // // const contacts = require('./contacts.json');

// // // // Step 2: Start WhatsApp with session saving
// // // const client = new Client({
// // //     authStrategy: new LocalAuth({ dataPath: './session-data' }) // Save session here
// // // });

// // // // Show QR code to scan
// // // client.on('qr', qr => {
// // //     qrcode.generate(qr, { small: true });
// // // });

// // // // When WhatsApp is ready
// // // client.on('ready', () => {
// // //     console.log('WhatsApp is ready! 🎉');

// // //     // Get the name and message from the command
// // //     const [name, message] = process.argv.slice(2);

// // //     // Find the phone number
// // //     const number = contacts[name];
// // //     if (!number) {
// // //         console.log("❌ Friend not found in contacts!");
// // //         return;
// // //     }

// // //     // Log the number being used
// // //     console.log('Sending to:', number);

// // //     // Send the message!
// // //     client.sendMessage(number, message)
// // //         .then(() => console.log('Message sent! ✅'))
// // //         .catch((err) => {
// // //             console.log('Failed to send! ❌');
// // //             console.log('Error:', err); // Log the error details
// // //         });
// // // });

// // // // Start the bot
// // // client.initialize();


// // const { Client, LocalAuth } = require('whatsapp-web.js');
// // const qrcode = require('qrcode-terminal');
// // // const fs = require('fs');

// // // Step 1: Load contacts
// // const contacts = require('./contacts.json');

// // // Step 2: Start WhatsApp with session saving
// // const client = new Client({
// //     authStrategy: new LocalAuth({ dataPath: './session-data' }) // Save session here
// // });

// // // Show QR code to scan
// // client.on('qr', qr => {
// //     qrcode.generate(qr, { small: true });
// // });

// // // When WhatsApp is ready
// // client.on('ready', async () => {
// //     console.log('WhatsApp is ready! 🎉');

// //     // Get the name and message from the command
// //     const [name, message] = process.argv.slice(2);

// //     // Find the phone number
// //     const number = contacts[name];
// //     if (!number) {
// //         console.log("❌ Friend not found in contacts!");
// //         return;
// //     }

// //     // Log the number being used
// //     console.log('Sending to:', number);

// //     // Validate the number
// //     const isRegistered = await client.isRegisteredUser(number);
// //     if (!isRegistered) {
// //         console.log('❌ Number is not registered on WhatsApp!');
// //         return;
// //     }

// //     // Send the message!
// //     client.sendMessage(number, message)
// //         .then(() => console.log('Message sent! ✅'))
// //         .catch((err) => {
// //             console.log('Failed to send! ❌');
// //             console.log('Error:', err); // Log the error details
// //         });
// // });

// // // Start the bot
// // client.initialize();

// const { Client } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');
// const contacts = require('./contacts.json'); // Ensure this file exists with valid contacts
// const fs= require('fs');
// // Step 2: Start WhatsApp with session saving
// const client = new Client({
//     authStrategy: new LocalAuth({ dataPath: './session-data' }) // Save session here
// });

// // Initialize WhatsApp Web client
// const client = new Client();

// // Show QR code for authentication
// client.on('qr', qr => {
//     qrcode.generate(qr, { small: true });
// });

// // WhatsApp is ready
// client.on('ready', async () => {
//     console.log('WhatsApp is ready! 🎉');

//     const [name, message] = process.argv.slice(2);

//     if (!name || !message) {
//         console.log("❌ Please provide a contact name and a message.");
//         return;
//     }

//     const rawNumber = contacts[name];
//     if (!rawNumber) {
//         console.log("❌ Contact not found in contacts.json!");
//         return;
//     }

//     try {
//         // Validate the number with WhatsApp
//         const numberId = await client.getNumberId(rawNumber);
//         if (!numberId) {
//             console.log("❌ The provided number is not registered on WhatsApp!");
//             return;
//         }

//         // Send the message
//         await client.sendMessage(numberId._serialized, message);
//         console.log(`✅ Message sent to ${name} (${numberId._serialized})`);
//     } catch (err) {
//         console.error('❌ Failed to send the message:', err);
//     }
// });

// // Error handling
// client.on('auth_failure', msg => {
//     console.error('❌ Authentication failure:', msg);
// });

// client.on('disconnected', reason => {
//     console.log('⚠️ Client disconnected:', reason);
// });

// // Start the bot
// client.initialize();

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');

// Step 1: Load contacts
const contacts = require('./contacts.json');

// Step 2: Start WhatsApp with session saving
const client = new Client({
    authStrategy: new LocalAuth({ dataPath: './session-data' }) // Save session here
});

// Show QR code to scan
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// When WhatsApp is ready
client.on('ready', () => {
    console.log('WhatsApp is ready! 🎉');

    // Get the name and message from the command
    const [name, message] = process.argv.slice(2);

    // Find the phone number
    const number = contacts[name];
    if (!number) {
        console.log("❌ Friend not found in contacts!");
        return;
    }

    // Log the number being used
    console.log('Sending to:', number);

    // Send the message!
    client.sendMessage(number, message)
        .then(() => console.log('Message sent! ✅'))
        .catch((err) => {
            console.log('Failed to send! ❌');
            console.log('Error:', err); // Log the error details
        });
});

// Start the bot
client.initialize();