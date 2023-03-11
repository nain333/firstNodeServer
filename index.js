const http = require('http');
const fs = require('fs');
const port=3000;
function requestHandeler(request,response){
    console.log(request.url+"The response is: "+ response);
    response.writeHead(200,{'content-type':'text/html'},{'connection':'zombie'});
    fs.readFile('./index.htm',function(err,data){
        if(err){
            console.log(err);
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