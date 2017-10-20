# Winston Dropbox Logger

A Winston transport to log into a dropbox file.

## Install

```bash
npm install winston winston-dropbox
```

## Setup

```js
const winston = require('winston');
const winstonDropbox = require('winston-dropbox');

const logger = new winston.Logger({
	level: 'info',
	transports: [
		new (winston.transports.Console)({'timestamp':true}),
		new (winstonDropbox)({apiKey: 'DROPBOX_API_TOKEN'})
	]
});

logger.info('Hello Dropbox logger');
```