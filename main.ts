// 1. Experimental TypeScript support 
type MyNode = string | number;
// @ts-ignore
console.log('Node.js ', process.versions.node) 
const a: string = 'a';
const b: number = 1;
console.log(a, b);

// 2. Experimental Network Inspection Support
// @ts-ignore
const http = require('http');
http.createServer((req: any, res: any) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(3000, '127.0.0.1');