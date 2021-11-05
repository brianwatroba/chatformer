const opts = {
	identity: {
		username: 'lxr417',
		password: 'oauth:68u6reu8vzxrctietxa7tuphmi16pe',
	},
	channels: ['Day9TV'],
};

const client = new tmi.client(opts);

export default client;
