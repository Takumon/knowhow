---
sidebar_position: 3
---

# 基礎学習

## 要求スキル

フロントエンド開発での最低限のスキルは以下３つです。<br/>
以降のセクションでは、下記スキルを習得するためのノウハウ・学習課題を示します。

- 姿勢
  - 有識者から教えてもらうのではなく、自身で成長する力が要求されます。
- 技術
  - Reactでの開発で利用するライブライ郡を中心に習得してほしい技術を示します。
- レビュー観点
  - ある程度の実装スキル取得のために、よくあるレビュー観点を理解し、そのような指摘がないことが要求されます。

## 習慣

### 学習手法

情報は一次ソースである公式リファレンス（英語）を確認してください。
二次ソースである参考書、[Qiita](https://qiita.com/),[Zenn](https://zenn.dev/), [Note](https://note.com/)も、取っ掛かりとしては有効活用できますが、最終的には一次ソースを確認してください。
慣れないうちは大変ですが、日本語ではなく英語でググるクセをつけてください。
英語が苦手ならGoogle翻訳などで翻訳してリファレンスを確認してください。

公式リファレンスを読んで概要を確認したら、必ず自分でコードを書いて、公式リファレンスの記載が、自分の環境でも当てはまる挙動か確かめてください。
学習はインプットだけでは不十分でアウトプットもあわせて実施すると理解がより深まります。スポーツでやり方を教えてもらった後に、実際に練習するのと同じイメージです。

体に覚え込ませるために、公式リファレンス通りコードを書いて動いたら、リファレンスとは少し違う書き方をしたり、別の要素と組み合わせて書いてみて、挙動を確かめてください。
挙動を確かめるときは、コンソールログに情報を出力したり、Chromeの開発者ツールでデバックしたりしてください。
コードを書く以外にも、誰かに説明したり、文章で記述したり、誰かに教えたりして、アウトプットするのも有効な手段です。

### 自己研鑽の姿勢

自己研鑽に励んでください。業務中に完全に理解できなかったことや、今後業務で必要そうだと思う技術領域について、後日自分の時間でコードを書いて、じっくりと体で習得してください。

## 技術（兼 学習課題）

### Gitの操作(VSCodeまたはCLIにて)

- 要求スキル：clone、checkout、pull、add、commit、pushなどのコマンド
- インプット：[Git リファレンス](https://git-scm.com/docs)
- アウトプット：デモ、口頭説明

### APIのリクエスト・レスポンス

- 要求スキル
  - CRUD操作のURL設計指針
  - Bearerトークン での認証
  - パスパラメターとクエリパラメータの使い分け
  - リクエストパラメータの定義
  - 以下ステータスコードの使い分け
    - 200,
    - 400, 401, 403, 404, 405, 409
    - 500, 503
- インプット：[オライリー | Web API: The Good Parts](https://www.amazon.co.jp/dp/4873116864)の1～5章
- アウトプット：口頭説明

### OpenAPI

- 要求スキル
  - URLパスパラメーターの定義方法
  - Bearer属性定義方法、APIキー定義方法 ※認証認可というより単に上記の定義の仕方
  - リクエストパラメータの定義
  - HTTPステータスコードごとのレスポンス定義
  - コンポーネント定義方法
    - コンポーネント参照方法
    - 型定義
      - 配列
      - 文字列
      - 数値
      - enum
      - オブジェクト
    - オブジェクトの属性の必須/任意の定義
    - 最大/最小 値 の定義
    - 最大/最小 桁数 の定義
    - 最大/最小 長 の定義
    - 入力規則の定義
- インプット
  - [Swagger | OpenAPI仕様](https://swagger.io/specification/)
  - [Fintan ハンズオン](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/todo-app/app-spec#rest-api)
- アウトプット
  - [Fintan ハンズオン](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/todo-app/app-spec#rest-api)のTODOアプリの仕様をもとにスキーマ定義のyaml作成
  - yamlファイルをインプットに[Mockoon CLI](https://mockoon.com/cli/)でモックローカルサーバーを起動してcurlで全APIを叩く
  - 上記デモ、口頭説明

### 言語：JavaScript

- インプット
  - [文法とデータ型 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Grammar_and_types)
  - [ループと反復処理 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)
  - [関数 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions)
  - [テキスト処理 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Text_formatting)
  - [オブジェクトでの作業 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Working_with_objects)
- アウトプット
  - インプットに記載しているコードを書いて、手元で動かす
  - 上記デモ、口頭説明

### 言語：TypeScript

:::info凡例

- ❎…スキップ箇所
- ❗・・・注意事項

:::

- インプット：[サバイバルTypeScript](https://typescriptbook.jp/)
  - はじめに
  - TypeScriptのあらまし
  - TypeScriptの特徴
  - JavaScriptはTypeScriptの一部
  - ❎TypeScript誕生の背景
  - TypeScriptとエコシステム
  - なぜTypeScriptを使うべきか
  - 静的型付け
  - ECMAScript
  - ❎TypeScriptの射程
  - ❎TypeScriptは何ではないか？
  - 作って学ぶTypeScript
  - 開発環境の準備 ❗IDEはVSCodeでOKです。
  - 簡単な関数を作ってみよう
  - Reactでいいねボタンを作ろう
  - ❎Next.jsで猫画像ジェネレーターを作ろう
  - ❎Vercelにデプロイしてみよう
  - Jestでテストを書こう
  - Reactコンポーネントのテストを書こう
  - Prettierでコード整形を自動化しよう ❗大事です
  - ESLintでコーディング規約を自動化しよう ❗大事です
  - ❎🚧huskyでコミット前チェックを自動化しよう
  - 読んで学ぶTypeScript
  - 値・型・変数
  - 文
  - 関数
  - 非同期処理
  - ❎オブジェクト指向
  - ❎組み込みAPI
  - ❎🚧モジュール
  - import、export、require
  - シングルプロセス・シングルスレッドとコールバック
  - 型の再利用
  - ジェネリクス
  - tsconfig 　❗概要つかんでもらえればOKですです
  - 型定義ファイル ❗大事です
  - ❎Advanced Topics
  - Tips ❗大事です
  - ❎索引:記号とキーワード
  - ❎TypeScriptの学習リソース
  - ❎TypeScript Playgroundの使い方
  - ❎🚧TypeScript超入門 〜10分でわかるTypeScriptの概要〜
- アウトプット
  - インプットに記載しているコードを書いて動かす
  - 上記デモ、口頭説明

### ライブラリ：React

- 要求スキル
  - useState
  - useContext
  - useReducer
  - useEffect
  - useCallback
  - useMemo
  - React.memo
- インプット：[クイックスタート – React](https://ja.react.dev/learn)
- アプトプット
  - インプットに記載しているコードを書いて、手元で動かす
  - 上記デモ、口頭説明

### ライブラリ：Material UI

- 要求スキル
  - table関連
  - Menu
  - Modal
  - TextField
- インプット：[Installation - Material-UI (v4)](https://v4.mui.com/getting-started/installation/)
- アウトプット
  - いままで作成したReactアプリのUIをMaterial UIで置き換え
  - 要求スキル記載の部品を使ったReactアプリ作成
  - 上記デモ、口頭説明

### ライブラリ：React Router v5

- 要求スキル
  - ルーティング
  - useHistory
- インプット：[クイックスタート - React Router v5](https://v5.reactrouter.com/web/guides/quick-start)
- アウトプット
  - インプットに従ってReactアプリ実装 ※TypeScript未使用でOKです
  - 上記デモ、口頭説明

### ライブラリ：React Query

- 要求スキル
  - useQuery
  - useMutation
  - invalidateQueries
- インプット
  - [TanStack](https://tanstack.com/)
  - [フロントエンド | Fintan](https://v5.reactrouter.com/web/guides/quick-start)
- アウトプット
  - Fintanコンテツに従ってReactアプリ実装
  - 上記デモ、口頭説明

### ライブラリ：React Hook Form

- 要求スキル
  - useForm
  - useFormProvider
  - controller
  - reset
  - register
  - setValue
  - setError
  - SubmitHandler
- インプット：[Get Started - React Hook Form](https://react-hook-form.com/get-started) Handl Errorsまで
- アプトプット
  - インプットに従ってReactアプリ実装 ※TypeScript未使用でOKです
  - 上記デモ、口頭説明

## レビュー観点

成果物レビューで以下のような指摘は事前に対処してください。

### 詳細設計

- コンポーネント分割：初期表示時のデータの取得処理（API呼び出し）と、データを描画する処理のコンポーネントを分けているか
- 共通コンポーネントと同じ処理を個別実装していないか（共通コンポーネントの中身を確認してから実装しているか）
- エラー処理の要/不要を検討したか（不要と判断した場合、理由が説明できるか）
- 型では読み取れないような特別な処理を避けているか(例：number型変数で 0に特別な意味を持ったせたり、array型で0番目に特別な意味を持たせたりしていないか)
- 暫定対応がある場合に「仮実装」が最小限か。未確定の部分のみ適切な単位で切り出してメソッド化またはコンポーネント化した実装か

### 実装

#### 自分で書いたコードに責任を持つ

- 自分で書いたコードでなくても担当した機能については責任を持つ
- コピペしたコードは、処理内容と、何故そのコードを採用したのかが説明できる
- 自分で書いたコードは「動くからOK」ではなく、使われているプログラミング言語（React、React Native、JavaScript、TypeScript）の文法を説明できる

参考：[コピペするプログラマに足りないもの 〜 プログラミング脳の鍛え方 | Social Change!](https://kuranuki.sonicgarden.jp/2017/02/programming-brain.html)

#### 書き方を統一する

- ファイル間、メソッド間、変数間、関連する別アプリで表記揺れや、書き方の違いをなくす

他の人がコードを見た時に、書き方が統一されていないと、書き方の違いについて書き手の意図があるのかと勘ぐり、処理自体を理解する妨げになります。
もし意図的な違いだとしても、変数名・メソッド名に違いがなかったり、コメントが無いは、読み手に伝わりません。

また、割れ窓理論の観点から、ささいな書き方の違いなども徹底して排除してください。
例えば実PJで100画面の場合、ファイル数も相当になり、プログラマー・レビューアーの人数も増えます。
そうなった時に、僅かな書き方の乱れが原因で、その後の機能改修などを経て乱れが拡大していきます。

参考：[美しいソースコードを残すためにレビュアーとして気を付けている10のこと | Casley Deep Innovations株式会社 技術ブログ](https://www.casleyconsulting.co.jp/blog/engineer/295/)

#### 変数名・関数名・コンポーネント名などの無意味な名前をつけない

実PJでは自分以外の他人と協力して開発します。そのため他人が読んで意味（理由）がわかる変数名を定義してください。

また実PJでは長期間にわたり開発を継続します。
たとえ自分が書いたコードでも6ヶ月後の自分はその時の考えを忘れています。
6ヶ月後の自分のためにも、意味（理由）がわかるような変数名を定義してください。

参考：[プログラミングでよく使う英単語のまとめ【随時更新】 - Qiita](https://qiita.com/Ted-HM/items/7dde25dcffae4cdc7923)

#### 読み手に理由を明示する

- 他人が見た時に「なぜ？」と思う箇所にはコメントを付ける
- コードのみで読み手に意図を伝えるのが難しい場合はコメントを添える
- なんらかの理由で作業途中などの場合や、他の人が読んだら疑問に思いそうな部分には、`// TODO`や`// FIXME`などのコメントを添える

参考：[コードのコメントには何を書くのか - Qiita](https://qiita.com/ndxbn/items/8aa0c2a3c7ef1f044ffb)
参考：[t_wadaさんのツイート](https://twitter.com/t_wada/status/904916106153828352)

#### プログラミングのお作用

- 同じ処理は共通化する
- マジックナンバーを使わない
- 値をハードコートしない

参考：[リーダブルコード](https://www.amazon.co.jp/dp/4873115655)

#### レビュー依頼前のチェック

- ローカル環境でlintエラーが無いことを確認してレビューを依頼する
- GitLabのマージリクエスト、GitHubのプルリクエストなどのリモート環境のCIでlintエラー・テストエラー・ビルドエラーが無いことを確認してレビューを依頼する
- ブラウザで動作確認中、開発者ツールのコンソールでエラーが無いこと確認する、エラー残すなら残す理由を説明可能にしてからレビューを依頼する
