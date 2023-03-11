const http = require('http');
const port=3000;
function requestHandeler(request,response){
    console.log(request.url+"The response is: "+ response);
    response.end("<h1>Gotcha!</h1");

}
var server= http.createServer(requestHandeler);
server.listen(port, function(err){
    if(err){
        console.log("Error: ",err);
        return;
    }
    console.log("The server is up and running on port: ",port);

}); 