import { createServer } from 'http';
import { readFileSync, readFile } from 'fs';

const fileTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css'
}

const server = createServer((req, res) => {
    let fname = req.url;
    if(fname.startsWith('/server/')) {
        res.end();
        return;
    }
    if(fname === '/') fname = '/index.html';
    fname = '..' + fname;
    console.log(fname.slice(fname.indexOf('.', 3)))
    console.log(fileTypes[fname.slice(fname.indexOf('.', 3))])
    try {
        res.writeHead(200, {'Content-Type': fileTypes[fileTypes[fname.slice(fname.indexOf('.', 3))]]} | null);
        res.write(readFileSync(fname));
    } catch {
        res.end();
        return;
    }
    res.end();
});
server.listen(3000);