# Name
「COVID LIVE DASHBORD」
海外と日本のコロナ感染状況をリアルタイムで取得し、データをグラフ化表示したWebアプリケーション。

# DEMO
ページ遷移：
![demo](https://gyazo.com/eee886d5965c15cc8a23e9797573dde4/raw)
COVID LIVE DASHBOARD WORLD：
![demo](https://gyazo.com/458364e74545eb9c3ecd9bba500b9ea8/raw)
全国医療提供体制状況：
![demo](https://gyazo.com/563c0e392a0f571e0c6df9952fd7458c/raw)

# URL
https://original-covid-app-microfront.web.app/

# Structure
- Container<br>
Prefecture ComponentとWorld Componentを読み込み表示する<br>
Container側で表示を行なっているのは遷移ボタンのみで、他の表示は各コンポーネントから読み込んでいる

- Prefecture Component, World Component<br>
各ComponentのJavaScriptとCSSをWebpackでモジュールバンドルし、Container側で読み込めるようにする

- Proxy<br>
External covid Japan prefecture APIから取得したAPI情報の成形と、CORSの許可設定を行なう

- External covid Japan prefecture API<br>
全国医療提供体制状況の外部API 

- External covid World API<br>
世界のコロナ感染状況の外部API 
<br>

![demo](https://gyazo.com/c747970713a193679dab9bc67986ebfe/raw)

# Architecture
- Micro Frontends<br>
Micro Frontendsの技術を使用

- React<br>
フロントエンドにReactを使用しSPA化

- TypeScript<br>
Reactの型定義のため使用

- Redux Toolkit<br>
フロントエンドの状態管理のために使用

- Firebase<br>
デプロイ先

- Material UI<br>
デザインツールのライブラリー

- Chart.js<br>
グラフ描画のライブラリー

- Node.js(Express)<br>
Prefecture Componentのバックエンドで使用

# Micro Frontends
Micro Frontendsとは、各マイクロサービスが提供する画面の各コンポーネントを結合し、単独のアプリケーションのように動作させることできる技術。<br>
<br>
今回は既存プロダクトをマイクロフロントエンドで一つのアプリケーションで動作させるといったような事例を考慮し、コンテナ側とプロダクト側との依存が低い、Run-time integration via JavaScript の方式を採用。<br>
<br>
参考記事：<br>
https://martinfowler.com/articles/micro-frontends.html

# Repository
コンテナ側：<br>
- https://github.com/rui-watanabe/original-covid-app-container

<br>

プロダクト側：<br>
- https://github.com/rui-watanabe/original-covid-app-world
- https://github.com/rui-watanabe/original-covid-app-japan-prefecture

# Future
- フロントエンド側のテストコード作成
- コンテナ側と各プロダクト側のCI/CDパイプラインの作成
- 各プロダクトでのデータの連携
- 直接パス指定時とページ更新時にページが見つからないエラーの解決

# License
 [MIT license](https://en.wikipedia.org/wiki/MIT_License).
