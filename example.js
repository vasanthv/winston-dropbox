const winston = require('winston');
const winstonDropbox = require('./index');

const logger = new winston.Logger({
	level: 'info',
	transports: [
		new (winston.transports.Console)({'timestamp':true}),
		new (winstonDropbox)({apiKey: process.env.DROPBOX_API_TOKEN || 'DROPBOX_API_TOKEN'})
	]
});

logger.info('Hello Dropbox logger');