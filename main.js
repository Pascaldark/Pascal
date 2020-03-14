'use strict';

const { Client, MessageAttachment, } = require('discord.js');

const fs = require("fs");

const { MessageEmbed } = require('discord.js');

const  { Presence } = require('discord.js')

const client = new Client();

const prefix = "!";

const queue = new Map();

client.on("ready", () => {
  console.log("Bereit!")
  client.user.setActivity("https://discord.gg/nRUQx7F", {
  type:"PLAYING"
  });
  });

  //dm command

  client.on('message', message => {
    if(message.content.startsWith("Server")) {
      message.author.send("Joint >>> https://discord.gg/nRUQx7F <<< >>> https://discord.gg/Q3Kqcqn <<< oder >>> https://discord.gg/YVPMMwf <<<")
      }
    });
  
  
    client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
      if(message.content.startsWith("!dm")) {
        let member = message.mentions.members.first();
        member.send(message.author.tag +":" + " \n" +args.join(' '))}
        });

        //help command
        client.on('message', message => {
          if (message.content === '"dms') {
            const embed = new MessageEmbed()
              .setTitle('Die Commands des Dm Bots')
              .setColor(0x009dff)
              .setDescription('Hallo du hast dafür gesorgt das dies abgerufen wird');
              embed.addField("Server", "Sendet dir 3 Server");
              embed.addField("!dm", "Benutzung: !dm <@user> <Nachricht>")
              embed.addField("Commands Ende", "Ich werde Neue Commands hinzufügen euer Pascal");
              message.channel.send(embed);
               }
               });

        client.login('Njg4NDI4MjM1Mzc3MjEzNjA2.Xm0LOA.6lVa46O7cF3YF03e2C0JPyO9r0o');