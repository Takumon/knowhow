---
slug: /blog/report-of-web-developer-conference-2024
sidebar_position: 20240601
title: 「Web Developer Conference 2024」参加備忘録
keywords:
  - 勉強会
tags:
  - 勉強会
date: 2024-09-07T00:00:00.000+09:00
draft: true
---

## 概要

- [Connpassイベントページ](https://web-study.connpass.com/event/321711/)

## 参加したセッション

|時間|題名|プロポーザルリンク|発表者|資料|
|-|-|-|-|-|
| 1300-1340 | エンジニア視点で見る、組織で運用されるデザインシステムにするには by Shunya078 | [リンク](https://fortee.jp/web-dev-conf-2024/proposal/4d3298c5-c7c5-45da-8dd2-229669780b95) | [Shunya078](https://twitter.com/_Shunya078)| [Speaker Deck](https://speakerdeck.com/shunya078/enziniashi-dian-dejian-ru-zu-zhi-deyun-yong-sarerudezainsisutemunisuruniha) |
| 1400-1430 | 疎通 2024 by sadnessOjisan | [リンク](https://fortee.jp/web-dev-conf-2024/proposal/34ebf17d-53f0-4581-a2a7-e968201c6779) | [sadnessOjisan](https://twitter.com/sadnessOjisan)| TODO記載 |
| 1600-1640 | モダンフレームワークで損なわれたブラウザバック体験とその改善 by akfm | [リンク](https://fortee.jp/web-dev-conf-2024/proposal/346be901-7ef3-4ea8-a9ae-6566eee41f46) | [akfm](https://twitter.com/akfm_sato)| TODO記載 |
| 1700-1740 | Web エコシステムの人文社会学的解釈 by Jxck | [リンク](https://fortee.jp/web-dev-conf-2024/proposal/ec0a2cde-97d3-4252-b8db-5711ada0f5ed) | [Jxck](https://twitter.com/jxck_)| TODO記載 |

## 文章の判例

メモの章では行頭に以下を付与します。

- (1) `何も付与しない`・・・発表者が喋ったこと、発表スライドに記載している内容
- (2) `→`・・・(1)に対する私の感想
- (3) `※`・・・(1)に対する補足情報
- (3) `？`・・・(1)に対する疑問・質問
- (4) `★`・・・後で調べること

## 1. エンジニア視点で見る、組織で運用されるデザインシステムにするには by Shunya078

### [1. プロポーザル](https://fortee.jp/web-dev-conf-2024/proposal/4d3298c5-c7c5-45da-8dd2-229669780b95)

> 株式会社 enechain ではデザインシステムを運用しています。 当初、スタートアップにおける内製プロダクトの開発効率、事業への価値を最大限引き出すための取り組みとして、有志でデザインシステムの運用を始めました。現在では社内ほぼ全てのプロダクトで使用されています。  
> 本セッションでは、デザインシステム自体の開発体験を向上させ、社内のどのエンジニアからでもコントリビュートできる環境まで育て上げたアプローチを、プロダクトオーナーを務める自分のエンジニア視点から見る、「使われる」デザインシステムにするための具体的な取り組みを話します。  
> 昨今の様々な会社で取り組まれているデザインシステム運用のための施策に関わらず、Web 開発をするにあたって、の観点から紹介します。

### 1. メモ

- ※[なぜ我々はデザインシステムを創るのか？ - enechain Tech Blog](https://techblog.enechain.com/entry/design-system-2023)
- ※[enechain｜Building Energy Markets, Coloring Our Society](https://enechain.co.jp/)

#### 技術スタックとアーキテクチャ構成

- React使用、Next.jsなどは未使用
- 目的：短期単発PJが複数あっても一貫性のあるUI提供する
- デザインシステムはnpmライブラリとして公開、各PJで利用
- ★デザイントークンとは

#### 現在に至るまでの過程

- デザインシステムがうまく運用できた
- ユーザーの声を聴取し課題をピックアップして、取り込むのが重要

- 立上前
  - 社内プロダクトが２つ。見た目が同じ ReactとVueのコンポーネントがあった
  - 全体保守性よりもリリース速度優先していた
- 有志チーム発足
  - 他ＰＪ複数立ち上げを機にReact一択に決めた
  - ※[ちいさくはじめるデザインシステム](https://www.amazon.co.jp/dp/B0BXD2NRHF)
- デザインシステムPJ立ち上げ
  - メンバは全員他PJと兼任という形で立ち上げ
    - 全体思想を各PJに反映するのがうまくいく
    - 各PJから全体思想への課題吸い上げがうまくいく

- 運用のために取り組んでいる
  - 暗黙的なコーディング規約を作らない
    - オンボーディングコスト削減
    - CIでlinterで縛る　linterは全社共通
    - CIさえ通れば作業がある程度非同期でできる
    - ？カスタムルールで縛れないものは　機械的な部分と人の部分の中間みたいなものがありそう
    - linter例
      - 変数名プレっフックス「_」はローカル内に限定
      - propsを別名で受け取る時（名前衝突を避ける時）は「xxxProps」とする
      - デザイントークンで利用不可のモジュールはlintで縛る
    - ワレ窓理論が背景にある
  - コミュニケーション
    - 目安箱
      - ？ GitHubのissueとは違うのか、チームメンバー外から受け付けるため？
        - 全社から意見を収集したく、非エンジニアの方の投稿敷居をさげるためにNotionを使っている
      - 布教活動は大事
  - 株主総会：各プロダクトとデザインシステムの双方向のコミュニケーションを行う
    - 目安箱は探知、株主総会は中長期
- 最近の取り組みとこれから
  - ダークモード対応、テーマを受け取る
  - i18n対応、localeを受け取る
- まとめ
  - デザインシステムをつくることが目的ではない


- デザインシステムは 1X プロダクト に適用している
- 今後規模拡大した時に１つのデザイントークンを全PJに適用するのか
- モバイルが立ち上がろうとしていて、モバイルだとChakra使えないので、別チームでやるかを検討中

## 2. 疎通 2024 by sadnessOjisan

### [2. プロポーザル](https://fortee.jp/web-dev-conf-2024/proposal/34ebf17d-53f0-4581-a2a7-e968201c6779)

> 最近Webサービスを作るとなると、フロントエンドとバックエンドで分業します。開発が進むと疎通というタスクが発生しますが、大体ここで色々なトラブルが起きます。経験上、疎通が１発で成功したことはないです。このトークでは、これまで自分が経験したことを話したいと思います。自分も正解は知らないので、自分がよくやる方法論を話すという感じのトークになります。そのため感想戦会場などで議論をお待ちしております。  
> 
> ・開発をローカル環境で完結させるための工夫（コンテナ、テスト、UIカタログ）  
> ・CORS関連の諸対応、その意味（fetchのinit, preflight, SameOrigin)  
> ・認証認可、特にSameSite Cookieとlocalhost  
> ・CDN（shared cache事業者）の直感に反する動き  
> ・キャリア回線・イントラネットなどの環境起因トラブル  
> ・人間関係

### 2. メモ

#### ローカル

- Swaggerなどローカルモックサーバーだと
  - CORS設定を自分でやる
  - Cookieがつかない
- CORS
  - ローカルの画面から開発環境のAPIにつなぎに行くとCORSエラー
    - ブラウザのSameOriginPolicyに穴あけするのがCORS
    - CORSエアーでもpreflightのリクエストは飛んている
    - サーバーの他奥だけでいいのか？
      - Cookieをつけてfetchする場合、リクエストヘッダーに`credentials:include`をつける必要がある
- CSRF
- Cookie
  - リクエストヘッダーに`credentials:'include'`が必要、レスポンスヘッダーに Access-Controll-が必要 ★
  - クロスサイトなリクエストにクッキーが乗らない
    - デフォルトでSameSite=Lax　→ SateSite=None
      - Secure=true をつける
　- SameSte=noneはいやだ
- /etc/hostsファイルを書き換える
- localhostのhttps化が必要
  - ルート証明書となるオレオレ証明書　発呼
- HSTSはブラウザの仕様
  - .appドメインと.devドメインは強制的にHSTS対応
- cache-control:NO=STORE
  - [Cache 解体新書](https://zenn.dev/jxck/books/cache-anatomia)

- ModHeader
  - https://chromewebstore.google.com/detail/modheader-modify-http-hea/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=ja

- ※[3PCA 21 日目: SameSite Cookie | blog.jxck.io](https://blog.jxck.io/entries/2023-12-21/same-site.html)


## 3. モダンフレームワークで損なわれたブラウザバック体験とその改善 by akfm

### 3. [プロポーザル](https://fortee.jp/web-dev-conf-2024/proposal/346be901-7ef3-4ea8-a9ae-6566eee41f46)

> MPAではbf cacheやブラウザ独自の復元処理によって、ブラウザバック時には可能な限り以前の状態が復元されるように工夫されています。しかし、Reactなどを使った昨今のモダンフレームワークでは画面遷移時のComponentのunmountで状態を破棄してしまうので、ブラウザバックした時にはアコーディオンやformは初期状態に戻ってしまいます。これは「あやまってブラウザバックしてしまったので戻ったらformが空になってた」「ブラウザバックしたらアコーディオンが全部閉じててスクロール位置が変なところにいた」といったユーザーの不満につながります。  
> このSessionでは、この問題に対応するために作ったlocation stateというライブラリについて紹介します。  
> https://github.com/recruit-tech/location-state

### 3. メモ

- ※[Next.jsの考え方](https://zenn.dev/akfm/books/nextjs-basic-principle)
- ※[リッチなWEBアプリケーションのための７つの原則](https://yosuke-furukawa.hatenablog.com/entry/2014/11/14/141415)
- ※[nuqs | Type-safe search params state management for Next.js](https://nuqs.47ng.com/)
- ※[@location-state/conformをリリースした](https://zenn.dev/akfm/articles/location-state-conform) ※AppRouterと相性の良いformライブラリをlocation-state対応させるライブラリ
- ※[Biome、Webのためのツールチェーン](https://biomejs.dev/ja/)　※ESLint Pretiierの代わり

- ブライザバック体験の大切さ
- ReactのuseStateは復元されない
- location-stateというライブラリを使えば簡単に復元を実装できる

- 質問
  - 2023年9月リリース、現状1.2 安定運用しているのか、自社で採用しているプロジェクトはあるか
  - もともと検索条件にURLに状態を含めている場合などにlocation-stateを使う場合は、既存処理をlocation-stateに寄せる感じなのか
  - 社内で仕事で作っていると思うが、作ろうとあった背景はあるのか、チームが発足したのか

#### ブライザバック体験の大切さ

- ブラウザに求めること
  - URL入力
  - ブラウザバック・フォワード
  - ブックマーク
- ブラウザバックの仕様
  - BFCache(Back Forward Cache)
  - DOM復元
  - form復元
  - キャプチャらしきものの表示
  - リロード条件
- ユーザーがブラウザバックに求めること
  - ページの内容
  - スクロール①
  - 操作内容
    - formの入力内容
    - モーダル表示位置
    - etc...
- Soft Navigation
  - Next.jsではMPAの画面性にはHard Navigation、JSフレームワークによる画面遷移はSoft Navigationと読んでいる
  - ページ遷移がJavaScriptで制御される
  - bfcatcheは利用できない
  - ブラウザバック時の動作はフレームワークの仕様に強く依存する
- Soft Navigationでの困りごと
  - ReactのuseStateは復元されない...
  - Global Stateはスコープが広い...
- Soft Navigationの理想
  - 履歴単位で状態が保存
  - 戻る・進むごとに復元
  - リロード時も復元
- ステートのスコープと復元は別
- そんな問題は[location-state](https://github.com/recruit-tech/location-state)で解決
- 拡張ポイント
  - Syncer：遷移処理
  - Store：保存処理
  - 

## 4. Web エコシステムの人文社会学的解釈 by Jxck

### [4. プロポーザル](https://fortee.jp/web-dev-conf-2024/proposal/ec0a2cde-97d3-4252-b8db-5711ada0f5ed)

> なぜ、 俺たちは四半期ごとに別のトレンドの話をしてるんだろうか？  
> なぜ、「技術的にこれが正しいはずだ」と信じて疑わなかったものは、数年後負債になるのだろうか？  
> なぜ、水平思考したいのに、枯れる前に廃れてしまうんだろうか？  
> なぜ、気づいたらまた Node.js を使ってるんだろうか？  
> なぜ、同じようなものを作ってるのに、何度も新しいフレームワークの使い方を学び直さないといけないのだろうか？  
> なぜ、自分が推してたあの技術より、こっちの技術が流行ったんだろうか？  
>
> 技術的に「正しいもの」があり、それが全てを解決すると思うも、その割には「正しさ」が移ろいでいく。  
> CS の博士を取ろうと、学会の論文を漁ろうと、答えがみつからない。むしろ大して研究すらされてない。  
> そもそも俺たちは、「Web 開発」の実態を本当に正しく捉えて、説明できているんだろうか？  
>
> について、普段考えていることを話してみたい。

### 4. メモ

// TODO 記載

## サマリ

半年ぶりの勉強会出席で、WEB界隈の技術動向キャッチアップできて大変楽しめました。



🍅
