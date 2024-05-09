import fs from 'fs';
import dotenv from "dotenv";
import path, { dirname } from 'path';
import http  from 'http';

class Server{
    server
    port

    constructor(port) {
        try {
            dotenv.config();
            this.port = process.env.PORT || port;

            this.server = http.createServer((req, res) => {
                const endpoint = req.url;

                // Check the pathname to determine the endpoint
                if(endpoint == "/"){
                    // host all file in public directory
                    const filePath = path.join(new URL('../public/', import.meta.url).pathname, 'index.html');
                    const fileStream = fs.createReadStream(filePath);

                    fileStream.pipe(res);
                }else{
                    const fileEndpoint = dirname(req.url);
                    const extname = path.extname(req.url);
                    
                    let contentType = "text/html";

                    switch (extname) {
                        case '.css':
                            contentType = 'text/css';
                            break;
                        case '.js':
                            contentType = 'application/javascript';
                            break;
                        case '.ico':
                            contentType = 'image/x-icon';
                            break;
                    }

                    res.writeHead(200, { 'Content-Type': contentType });
                    
                    if(fileEndpoint == "/"){
                        const libFilePath = path.join(new URL('../', import.meta.url).pathname, req.url.substring(1, req.url.length));
                        const libFileStream = fs.createReadStream(libFilePath);
                        
                        libFileStream.pipe(res);
                    }else{
                        const libFilePath = path.join(new URL('../', import.meta.url).pathname, req.url.substring(1, req.url.length));
                        const libFileStream = fs.createReadStream(libFilePath);
                        
                        libFileStream.pipe(res);
                    }
                }
            }
            );
        } catch (error) {
            console.error(error);

            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    }

    setCode(code){
        return this.server.on('request', (req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            
            return res.end(code);
        });
    }


    listen(){
        this.server.listen(this.port, () => {
            console.log(`Running on http://localhost:${this.port}`);
        });
    }
}

export { Server };