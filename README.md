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

const options = {
	apiKey: 'DROPBOX_API_TOKEN'
}

const logger = new winston.Logger({
	level: 'info',
	transports: [
		new (winston.transports.Console)({'timestamp':true}),
		new (winstonDropbox)(options)
	]
});

logger.info('Hello Dropbox logger');
```

| Options                  | Description                                                                                                                                  |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| apiKey *(Required)*      | *String*. [Generate your own dropbox token](https://blogs.dropbox.com/developers/2014/05/generate-an-access-token-for-your-own-account/)  |
| name *(optional)*        | *String*. Default: **logs**.                                                                                                                 |
| dailyRotate *(optional)* | *Boolean*. Default **true**.                                                                                                                 |