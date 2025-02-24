# WhatsApp Bot

A simple WhatsApp bot built using Node.js and the `whatsapp-web.js` library. This bot can be extended to perform various automated tasks on WhatsApp.

---

## Features

- **Basic Messaging**: Send and receive messages.
- **Automated Replies**: Configure the bot to reply to specific commands or keywords.
- **Customizable**: Easily extend the bot's functionality by adding new commands or features.

---

## Prerequisites

Before running the bot, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/xoaryaa/whatsapp-bot.git
   cd whatsapp-bot

2. **Install dependencies** :
   ```bash
   npm install
3. **Start the bot** :
   ```bash
   node index.js <recepient_contact> "<message>"
4. **Scan the QR code**:
   Open WhatsApp on your phone.

    Go to Linked Devices and scan the QR code displayed in the terminal.

## Configuration
```bash 
whatsapp-bot/
├── index.js          # Main bot logic
├── contacts.json
├── session-data/
├── .wwebjs_cache/
├── package.json      
├── .gitignore        
└── README.md         

   