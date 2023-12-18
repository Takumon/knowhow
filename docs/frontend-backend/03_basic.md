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

:::info

レビュー観点はボリュームが大きいので[別ページ](./04_what-to-review.md)に切り出しています

:::

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

- 要求スキル：
  - `git help`で説明が表示されるコマンドのうち以下についてのCLIでの操作
    ```
    clone
    init
    add
    restore
    rm
    diff
    log
    status
    branch
    commit
    merge
    rebase
    reset
    tag
    fetch
    pull
    push
    // 以下対象外
    // mv
    // sparse-checkout
    // # bisect
    // # grep
    // # show
    // # switch
    ```
  - VSCodeでのGUI操作
  - `.gitignore`の理解
- インプット：
  - [Gitリファレンス](https://git-scm.com/docs)
  - [VSCodeでよく使うGit,Gitコマンド,Github](https://zenn.dev/shimomura/articles/vs-code-git-github)
  - [.gitignoreについて | Gitリファレンス](https://git-scm.com/docs/gitignore)
- アウトプット：
  - `git help`を実行し説明内容を確認
    - ※CLIのコマンドで分からない時はhelpするのを覚える
  - `git add -h`を実行し
    - ※CLIのコマンドで分からない時はhelpするのを覚える
  - [Git リファレンス](https://git-scm.com/docs)のうち、要求スキル記載のコマンドのリファレンスを読む
    - ※日本語コンテンツに頼らず、英語で情報収集するクセをつける
    - ※２次ソースに頼らず、１次ソース（公式リフェレンス）を見るクセをつける
  - [Git リファレンス](https://git-scm.com/docs)記載のコマンドを実際に自分の環境で試す
    - ※書面での理解に加え、実際に自分で試すクセをつける
  - [VSCodeでよく使うGit,Gitコマンド,Github](https://zenn.dev/shimomura/articles/vs-code-git-github)を読む
  - [VSCodeでよく使うGit,Gitコマンド,Github](https://zenn.dev/shimomura/articles/vs-code-git-github)の操作を実際に試す
    - ※書面での理解に加え、実際に自分で試すクセをつける
  - [.gitignoreについて | Gitリファレンス](https://git-scm.com/docs/gitignore)読む
  - `.gitignore`を実際に作ってみて、`.gitignore`の効果を確認する
  - デモ、口頭説明

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

### IDE：VSCode

- 要求スキル
  - 基本的なショートカット使いこなし
- インプット：[【Windows版】VS Code キーボードショートカット一覧 （オススメ付き） | Qiita](https://qiita.com/TakahiRoyte/items/cdab6fca64da386a690b)
- アプトプット
  - インプットに記載しているショートカットを使う
  - 以降のセクションにて日頃からショートカットを使う
- 補足
  - 特にコンポーネント間の行き来は`F12`、`ctrl + F12`、`ctrl + shift + F12`、`Atl + ←`,`Atl + →`を使ってできるようにしてください

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
