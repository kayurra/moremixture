/**
 * @アプリケーションを起動するためのメインファイルです。
 *
 * @author Sei iwanaga
 * @version 1.0.0
 */

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/commit"] = requestHandlers.commit;

// 「ルータ」.ルートおよび、「ハンドラ」を元に「サーバ」.起動を呼び出します。
server.start(router.route, handle);
