###More Mixture

##要件定義

# PJ親子関連
* 親PJ
  * ROOT
* 子PJ
  * aka_sei
    * sei.blue_bare
      * sei.blueドメインのコンテンツ管理として、sei.blueは基本的にtzukuneの配下、ではないか、、本来はtaaとの世界というか
      * 違うか、こういう風にあいまいのまま進むとおかしくなる。
      * sei.blueは岩永個人の世界、其の配下に、tzukuneドメインのカンバンサイトとしてのmoremixtureがいる、が正解か。

# やること一覧

* 概要:treememoの代わりとなる、ツリー折りたたみ表示や、できる、構造化エディタ
* 機能ブレスト
	* 簡易なインターフェースにて、ツリー構造の情報管理を行うための、機能
	* 逆にツリー構造を意識させないデータ管理を併せて提供できてもいいかもしれない
	*
* やること
	* ツリー表示
		* 超光速化のために、各項目を開いていく時の状況をあらかじめ、画像でキャプチャ状態でリアルタイムに保存していき、切り替えることで実現したら？
* やったこと
    * Nodeのserver index router handler とりあえず。

* やらないこと
* どちらか決めていないこと
	* インポート機能、ああ、treenemoからのインポートは涙流す人多し。
	* api化
		*
	* プラグイン化
	*
* 環境
	* 言語（案１−１）：JavaScript Node.js(単純にサーバサイドと、クライアント側を同時に作りたい)
		* メリット：使い方が限定されない
  * 言語（案１−２）：JavaScript React.js(コンポーネント化)
    * メリット：使い方が限定されない
	* 言語（案２）：Swift(withCocoa?)
		* メリット：
	* フレームワーク（）
	*

* 三角一覧の生成？
    * 【参考資料】
        * [三角関数利用したエクセルのベクあt−](http://yamav102.cocolog-nifty.com/blog/2012/02/post-1e09.html)

#作業
* １．Nodejsでのチュートリアル構築
* 基盤構築
* 規約の適用
*
*　１．Nodejsでのチュートリアル構築
  * 【参考】http://www.nodebeginner.org/index-jp.html#hello-world
  * server.jsの作成
  * 確認：http://localhost:8888/
  * モジュール化（export関数）
  *
    *
* 1-2 React.js
  * チュートリアル
    * https://facebook.github.io/react/docs/tutorial-ja-JP.html
  * 参考URL
    * [Reactのその後（魂震える人）](http://qiita.com/mizchi/items/82f205e16e78424df71b)
    * [Railsの問題点](http://qiita.com/kaiinui/items/2781219340d427543d08)
git clone ssh://hoge@sei.blue:20/home/repositories/remote.git
ssh://-i /Users/iwanagasei/Dropbox/document/net.EC2(ElasticComputeCloud)_AWS/kayurra@gmail.com/key/sei_blue002.pem

■sei.blueサーバ上のbearリポジトリ
ssh://centos@sei.blue:22/home/centos/gitbear/html.git/

■sei,blueサーバ上のgitbearのhookのpost-receive
cd /var/www/html/
sudo  git --git-dir=.git pull ~/gitbear/html.git  master
