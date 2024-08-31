---
sidebar_position: 8
---

# EVM法

## 参考

- [EVMとは？アーンドバリューマネジメントでプロジェクト管理を効率化｜ITトレンド](https://it-trend.jp/project_management/article/33-0019#:~:text=EVM%E3%81%A8%E3%81%AF%E3%80%81Earned%20Value,%E3%81%A0%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%84%E3%82%8F%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82)
- [アーンド・バリュー・マネジメント(EVM)とは？コスト換算して管理しよう｜プロジェクト管理・工数管理「クラウドログ」](https://www.crowdlog.jp/blog/122473/?network=google_x&placement=&keyword=&device=&utm_term=&utm_campaign=P-MAX&utm_source=adwords&utm_medium=ppc&hsa_acc=7676507805&hsa_cam=21044474143&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwvb-zBhCmARIsAAfUI2tijFEyDHM5M1ZGTrHy389W8EKWWKxLtAKBZ8fyiHHBhpw6bWbyUj4aAjfKEALw_wcB)

## 概要

- EVMはEarned Value Managementの略
- EVMはプロジェクト全体の進捗を予算や出来高、実際にかかったコストなどの金銭価値で分析する手法
- 1967年米国防総省の「ミニットマンミサイル開発計画」の調達規則がルーツ、その後アメリカの国家プロジェクトで利用・改善され、1998年に`ANSI/EIA 748-1998`として規格化
- 日本では2003年にEVM活用のプロジェクト管理ガイドラインが誕生

- `計画（予算）`、`実績（成果をコスト換算したもの）`、`実際に消費したコスト`の３つを比べて`どれくらい進んだか`、`いくらかかったか`を把握する手法
- 現時点の進捗状況や将来の問題を察知するプロジェクト管理の手法の一つ

## 良い点

- コストとスケジュールを加味した進捗管理ができる
  - 「D厳守でCが超過」などの失敗を防げる
  - 遅延・コスト超過などの早期発見を期待できる
- コストとスケジュールの一元管理ができる

## EVMでの計測値

### PV(Planed Value)

- 計画上の出来高
- 特定の時点までに完了すべき作業の予算コスト

### EV(Earned Value)

- 実際の出来高
- 特定の事前で完了している工程の 予算コストの合計値

### AC(Actual Cost)

- 実際に発生したコスト
- EVが予算、ACが実績という違い

### BAC(Budget at Completion)

- 完成時総予算
- 計画時に算出されるプロジェクトに必要な予算合計

## EVMでの算出値

### SV(Schedule Variance)

- 進捗の差異
- EV（現時点で完了した実績作業分の予算コスト）とPV（計画段階の予算コスト）の差分
- SV = EV - PV
- SVがマイナスの場合は遅延

### CV(Cont Variance)

- コストの差異
- AC(実際に発生したコスト)とEV(完了した実作業分の予算)の差分
- CVがマイナスなら予算超過

### SPA(Schedule Performance Index)

- スケジュール効率指数
- EV（完了した作業の予算コスト） / PV（予算コスト）
- 1未満の場合計画より遅れている

### CPI(Cost Performance Index)

- コスト効率指数
- EV（完了した作業の予算コスト） / AC（実際に発生したコスト）
- 1未満の場合コスト超過

### ETC(Estimate To Completion)

- 残作業コスト予測
- 現時点で完了までに残っている作業の予算コスト
- ETC = ( BAC - EV ) / CPI
- 後、費用がいくら必要かを見れる

### EAC(Estimate At Completion)

- 完了時コスト予測
- EAC = AC（実際に発生したコスト）+ ETC（残作業に予測されるコスト）

### VAC(Variance At Completion)

- 完了時コスト差異
- BAC（プロジェクト完成までにｈに必要な当初の総予算額） - EAC（現時点で見積もった最終的な総予算）
- マイナスなら予算超過

🍅
