---
sidebar_position: 3
---

# API

Ginを利用したAPIを実装せよ。

- [前ページ](./01_schema.md)のスキーマに従ってGolangでAPIを作成せよ。ハンドラ/ユースケース/リポジトリ などの厳密な3層構造を取る必要はない。DBアクセスは実装せずに、リポジトリ層の処理はモックにすること
  - curlにて動作確認せよ
  - [前ページ](./02_screen.md)で作成した画面を起動して、画面にて動作確認せよ
- MySQLベースでテーブル定義を設計せよ
- MySQLをdockerで起動するようなdocker-compose.ymlを定義せよ
- リポジトリ層にMySQLベースの処理を追加せよ。モック処理は残してMySQLベースの処理は別ファイルで記述すること
  - curlにて動作確認せよ
  - [前ページ](./02_screen.md)で作成した画面を起動して、画面にて動作確認せよ
- MySQLをdockerで起動時に、タスク一覧のデータを流し込むようなdocker-compose.ymlとスクリプトを定義せよ
- DynamoDBベースでテーブル定義を設計せよ
- DynamoDB Localをdockerで起動するようなdocker-compose.yamlを定義せよ
- リポジトリ層にDymamoDBベースの処理を追加せよ。モック処理とMySQLベースの処理は残して、DynamoDBベースの処理は別ファイルで記述すること
  - curlにて動作確認せよ
  - [前ページ](./02_screen.md)で作成した画面を起動して、画面にて動作確認せよ
- DynamoDB Localをdockerで起動時に、タスク一覧のデータを流し込むようなdocker-compose.ymlとスクリプトを定義せよ
- 上記処理をハンドラ/ユースケース/リポジトリなどの厳密な3層構造で分離せよ、IFを駆使して、リポジトリ層をモックからMySQLベースに変えてもユースケース層の修正が不要にせよ
