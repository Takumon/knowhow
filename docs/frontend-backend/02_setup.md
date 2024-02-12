---
sidebar_position: 2
---

# 準備

学習で利用する技術とツールを紹介します。  
以降の学習を進める前に、以下ツールの概要を把握し、インストールしておいてください。

## 主な使用技術

- [TypeScript](https://www.typescriptlang.org/)
  - 言語
- [npm](https://www.npmjs.com/)
  - パッケージ管理(yarnは使わない)
- [React](https://reactjs.org/)
  - フレームワーク
- [React Router](https://reactrouter.com/en/main)
  - Reactのルーティング用ライブラリ
- [Material UI](https://mui.com/)
  - UIコンポーネント
- [React Hook Form](https://react-hook-form.com/)
  - フォームバリデーション用のライブラリ
- [axios](https://github.com/axios/axios)
  - Http通信用ライブラリ
- [openapi-generator](https://github.com/axios/axios)
  - APIコール処理の自動生成ツール
- [Jest](https://github.com/axios/axios)
  - ユニットテストのフレームワーク
- [EsLint](https://playwright.dev/), [Prettier](https://playwright.dev/), [lint-staged](https://github.com/okonet/lint-staged#examples)
  - リント、フォーマットのツール, リントエラーがあるとコミットできないように制限

## ツール ※事前インストール必須

- [VS Code](https://code.visualstudio.com/)
  - IDEです。本体をインストール後に、以下コマンドを実行して拡張機能をインストールしてください。

    ```bash
    code --install-extension "aldijav.golangwithdidi"
    code --install-extension "alefragnani.project-manager"
    code --install-extension "christian-kohler.path-intellisense"
    code --install-extension "DavidAnson.vscode-markdownlint"
    code --install-extension "dbaeumer.vscode-eslint"
    code --install-extension "eamodio.gitlens"
    code --install-extension "EditorConfig.EditorConfig"
    code --install-extension "enkia.tokyo-night"
    code --install-extension "esbenp.prettier-vscode"
    code --install-extension "fabiospampinato.vscode-diff"
    code --install-extension "formulahendry.auto-close-tag"
    code --install-extension "formulahendry.auto-complete-tag"
    code --install-extension "formulahendry.auto-rename-tag"
    code --install-extension "golang.go"
    code --install-extension "hashicorp.terraform"
    code --install-extension "hediet.vscode-drawio"
    code --install-extension "janisdd.vscode-edit-csv"
    code --install-extension "johnpapa.vscode-peacock"
    code --install-extension "mechatroner.rainbow-csv"
    code --install-extension "medo64.render-crlf"
    code --install-extension "MS-CEINTL.vscode-language-pack-ja"
    code --install-extension "planbcoding.vscode-react-refactor"
    code --install-extension "poyonshot.markdowncat"
    code --install-extension "premparihar.gotestexplorer"
    code --install-extension "steditor.line-endings"
    code --install-extension "streetsidesoftware.code-spell-checker"
    code --install-extension "taichi.vscode-textlint"
    code --install-extension "uctakeoff.vscode-counter"
    code --install-extension "vincaslt.highlight-matching-tag"
    code --install-extension "wmaurer.change-case"
    code --install-extension "yzhang.markdown-all-in-one"
    code --install-extension "zxh404.vscode-proto3"
    ```

- [Node.js](https://nodejs.org/)
  - ランタイムとして利用します。
- [Chrome](https://www.google.com/chrome/)
  - WEBアプリケーションを表示するためのブラウザとして利用します。
- React Developer Tools - Chrome Web Store]()
  - ChromeでReactのデバッグを簡単にするためのChrome拡張機能です。
- [git](https://gitforwindows.org/)
  - ソースコードの構成管理用に利用します。
- [Postman](https://www.postman.com/)
  - APIを叩くためのRESTクライアントとして利用します。
- [Mockoon](https://mockoon.com/)
  - REST APIのモックサーバーとして利用します。
