const discord = require("discord.js");
const cordshandler = require("cords-handler");
const db = require("wio.db")
const chclient = new cordshandler.Client()
const client = new discord.Client();

let eventhandler = new cordshandler.EventHandler(client, chclient);
let cmdhandler = new cordshandler.CommandHandler(client, chclient);

eventhandler.setEventFolder("./events");
eventhandler.loader();

cmdhandler.setCommandFolder("./commands")
cmdhandler.setPrefix("?");
cmdhandler.loader();

client.login("Nzk2Njk2MTQzMzA3NjAzOTg5.X_brGg.BiBXDF4sa2ecu2xH2yturkn9tXE");
