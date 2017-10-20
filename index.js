const Transport = require('winston-transport');
const util = require('util');

module.exports = class winstonDropboxLogger extends Transport {
	constructor(opts) {
		super(opts);

		this.fileName = opts.name || 'logs';
		this.dailyRotate = opts.dailyRotate || true;
		this.suffix = this.dailyRotate ? '-'+new Date().toISOString().slice(0, 10) : '';
		this.extension = '.log';
		this.dropboxfs = require('dropbox-fs')({
			apiKey: opts.apiKey
		});
	}

	log(level, msg, meta, callback) {
		this.emit('logged');

		// Perform the writing to the remote service
		const msgContent = new Date()+' - '+level+': '+msg;
		this.dropboxfs.readFile('/'+this.fileName+this.suffix+this.extension, {encoding: 'utf8'}, (err, result) => {
			const content = result ? result+'\n'+msgContent : msgContent;
			this.dropboxfs.writeFile('/'+this.fileName+this.suffix+this.extension, content, {encoding: 'utf8'}, (err, stat) => {
				if(err) callback(err);
				else callback(null);
			});
		});
	}
};
