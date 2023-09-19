const http = require('http')
const port=8080;
http.createServer((req,res)=>{
    res.write("Hello word")
    res.end();
    console.log(`server is running at Port: ${port} !`)
}).listen(port)