var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");

  // ブロッキング確認用のコード
  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}

function commit(response) {
  console.log("Request handler 'commit' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Commit");
  response.end();
}

exports.start = start;
exports.commit = commit;
