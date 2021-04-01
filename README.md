# Name
「COVID LIVE DASHBORD」
海外と日本のコロナ感染状況をリアルタイムで取得し、データをグラフ化表示したWebアプリケーション。

# DEMO
ページ遷移：
![demo](https://gyazo.com/ace7d094e6cca7e12f589244352ce4a8/raw)
COVID LIVE DASHBOARD WORLD：
![demo](https://gyazo.com/b4bd6558a56093624f4bda41dc6fef0b/raw)
COVID LIVE DASHBOARD JAPAN：
![demo](https://gyazo.com/da4357bdd74b25cc360f51f5cae06cb4/raw)

# URL
https://original-covid-app-microfront.web.app/

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
- https://github.com/rui-watanabe/original-covid-app-japan
- https://github.com/rui-watanabe/original-covid-app-world

# Future
- フロントエンド側のテストコード作成
- コンテナ側と各プロダクト側のCI/CDパイプラインの作成
- 各プロダクトでのデータの連携
- 直接パス指定時にページが見つからないバグの解決

# License
 [MIT license](https://en.wikipedia.org/wiki/MIT_License).

# Note
COVID LIVE DASHBOARD JAPANについて、「Open Data API」のリファレンスに記載されていないがリクエスト数に上限があるため、503のエラーが出る可能性がある。
