# Aqua Tuning Academy — 受講者ポータル prototype

Fincsの「講座ページ + トーク + コンテンツ + 概要」構成を参考に、Aqua Tuning Academyのブランドカラーで再設計した静的プロトタイプです。

## 起動

`index.html` をブラウザで開くか、フォルダ内で簡易サーバーを起動します。

```bash
cd /Users/ume/Desktop/aquatuning-academy-portal
python3 -m http.server 4173
```

ブラウザで http://localhost:4173 を開いてください。

## 入っている機能

- トーク / コンテンツ / 概要のタブ切り替え
- トーク投稿の追加
- いいねリアクション
- レッスン一覧と進捗表示
- モバイル用サイドメニュー
- URLの `?tab=talk` / `?tab=contents` / `?tab=overview` 連動
- 投稿とレッスン完了状態のブラウザ内保存
- 画像・検索・通知など、後続API接続用の操作フィードバック

本番化する場合は、認証、講座/レッスンDB、動画ストレージ、投稿・コメント・通知API、決済/受講権限管理を接続します。

レッスンカードはダブルクリックで完了状態をテストできます。現在の投稿・進捗保存は同じブラウザ内だけで有効です。
