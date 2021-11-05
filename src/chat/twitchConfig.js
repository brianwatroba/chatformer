const opts = {
	identity: {
		username: 'brianstestbot',
		password: 'oauth:ix3ismboqu6zsaankw8enhonev8f1m',
	},
	channels: ['moistcr1tikal'],
};

const client = new tmi.client(opts);

export default client;
