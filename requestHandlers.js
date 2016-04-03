function start() {
  console.log("Request handler 'start' was called.");
}

function commit() {
  console.log("Request handler 'commit' was called.");
}

exports.start = start;
exports.commit = commit;
