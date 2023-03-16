const http = require('http');
const fs = require('fs');
const port=3000;
function requestHandeler(request,response){
    console.log(request.url+"The response is: "+ response);
    response.writeHead(200,{'content-type':'text/html'},{'connection':'zombie'});
   
    let filePath;
    switch(request.url){
        case'/':
        filePath='./index.html'
        break;
        case'/profile':
        filePath='./profile.html'
        break;
        default:
            filePath='./Error404.html'

    }
    fs.readFile(filePath,function(err, data){
        if(err){
            console.log('error', err);
            return response.end('<h1>Error!</h1>');
        }
        
        
        return response.end(data);
        
    })   


}
var server= http.createServer(requestHandeler);
server.listen(port, function(err){
    if(err){
        console.log("Error: ",err);
        return;
    }
    console.log("The server is up and running on port: ",port);

}); 