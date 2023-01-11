import { createServer } from 'http';
import { readFileSync, writeFileSync } from 'fs';

const fileTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json'
}

const getPerson = id => {
    return JSON.parse(readFileSync("datastealer.json"))[id]
}

const server = createServer((req, res) => {
    switch(req.method) {
        case 'GET':
            let fname = req.url;
            if(fname.startsWith('/server/')) {
                res.end();
                return;
            } else if(fname.startsWith('/accounts/')) {
                let url = req.url;
                const info = JSON.parse(readFileSync("datastealer.json"))[url.slice(url.lastIndexOf('/') + 1)];
                res.writeHead(200, {
                    'Content-Length': Buffer.byteLength(JSON.stringify(info)),
                    'Content-Type': 'application/json'
                })
                res.write(JSON.stringify(info));
            }
            if(fname === '/') fname = '/index.html';
            fname = '..' + fname;
            try {
                res.writeHead(200, {'Content-Type': fileTypes[fileTypes[fname.slice(fname.indexOf('.', 3))]]} | null);
                res.write(readFileSync(fname));
            } catch {
                res.end();
                return;
            }
            break;
        case 'POST':
            let info = '';
            req.on('data', data => {
                info += data.toString();
            });
            req.on('end', () => {
                info = JSON.parse(info);
                if(info['type'] === 'signup') {
                    let data = JSON.parse(readFileSync('datastealer.json'));
                    delete info['type'];
                    data[info['uuid']] = info;
                    writeFileSync('datastealer.json', JSON.stringify(data));
                }
            });
            break;
    }
    res.end();
});
server.listen(3000);