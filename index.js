// Import json-server
const jsonserver = require('json-server');

// Create server
const mediaPlayerServer = jsonserver.create();

// Create router with your db.json file
const router = jsonserver.router('db.json');

// Use default middlewares
const middleware = jsonserver.defaults();

// Set port
const PORT = 4000 || process.env.PORT // Prioritize process.env.PORT, fallback to 4000

// Use middleware
mediaPlayerServer.use(middleware);

// Use router
mediaPlayerServer.use(router);

// Start server
mediaPlayerServer.listen(PORT, () => {
    console.log(`Server running successfully at port ${PORT}`);
});
