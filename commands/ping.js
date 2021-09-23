//jshint esversion:6

const execute = (client,msg) => msg.reply('*P on G*');

module.exports = {
    name: 'boot',
    description: 'responds with pong',
    command: '!ping',
    commandType: 'info',
    isDependent: false,
    help: undefined,
    execute};
