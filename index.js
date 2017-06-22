let url = require('url')
let http = require('http')
let fs = require('fs')


http.createServer(function(request, result){
  let _url = url.parse(request.url).pathname
  
  if(_url === "/"){
    fs.readFile("index.html", function(err, data) {
      result.writeHead(200, {'Content-Type': 'text/html'})
      result.write(data)
      result.end()
    })
  }else if(_url.substring(1, 2) === "*"){
    
    switch(_url.substring(2)){
      case "nextlevel":
        fs.readFile("../site_data/data1", function(err, data) {
          result.writeHead(200, {'Content-Type': 'text/html'})
          result.write(data)
          result.end()
        })
        break
      default:
        result.end()
    }
  }else{
    result.end()
  }

}).listen(8080)
