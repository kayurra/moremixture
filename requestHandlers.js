var exec = require("child_process").exec;

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  // ブロッキング確認用のコード
  exec("ls -lah", function (error, stdout, stderr) {
      var body = '<html>'+
          '<head>'+
          '<meta http-equiv="Content-Type" content="text/html; '+
          'charset=UTF-8" />'+
          '</head>'+
          '<body>'+
          '<form action="/commit" method="post">'+
          '<textarea name="text" rows="20" cols="60"></textarea>'+
          '<input type="submit" value="Submit text" />'+
          '</form>'+
          '</body>'+
          '</html>';

          response.writeHead(200, {"Content-Type": "text/html"});
          response.write(body);
          response.end();
  });
}

function commit(response, postData) {
  console.log("Request handler 'commit' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello Commit </br>");
  response.write("You've post: " + postData);
  response.end();
}

exports.start = start;
exports.commit = commit;
