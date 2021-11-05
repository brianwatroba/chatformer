const opts = {
	identity: {
		username: 'brianstestbot',
		password: 'oauth:ix3ismboqu6zsaankw8enhonev8f1m',
	},
	channels: ['xqcow'],
};

const client = new tmi.client(opts);

export default client;
