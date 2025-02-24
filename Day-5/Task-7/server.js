// server.js

const http = require('http'); // Built-in module to create the server
const port = 3000; // Port number for the server

// Create the web server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html'); // Set response type to HTML

  switch (req.url) {
    case '/':
      res.write('<h1>Welcome to the Home Page!</h1>');
      break;

    case '/about':
      res.write('<h1>ℹ️ About Us</h1><p>This is the About page.</p>');
      break;

    case '/contact':
      res.write('<h1> Contact Us</h1><p>Email: contact@example.com</p>');
      break;

    default:
      res.statusCode = 404;
      res.write('<h1> 404 - Page Not Found</h1>');
  }

  res.end(); // End the response
});

// Start the server
server.listen(port, () => {
  console.log(` Server is running at http://localhost:${port}`);
});
