/**
 * ハンドラ、アクションパス、「リクエスト」.レスポンス、「postDataChunk」から生成されたポストデータにてレスポンスデータを生成する。
 *
 * @param {router} router.route 「ルータ」.ルート
 * @param {handle} handle  「ハンドラ」
 */
function route(handle, pathname, response, postData) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        // ハンドラを呼びだす（パスにて振り分ける）
        handle[pathname](response, postData);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {
            "Content-Type": "text/plain"
        });
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
