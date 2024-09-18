const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// add CORS headers
server.use((req, res, next) => {
	res.header(
		'Access-Control-Allow-Origin',
		'https://audiophile-ecommerce-front-end.vercel.app'
	);
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Allow-Methods', '*');
	next();
});

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});
