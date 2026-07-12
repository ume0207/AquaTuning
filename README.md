# Aqua Tuning

Aqua Tuning向けの、トーク・コンテンツ・講座紹介をまとめたモバイルファーストのコミュニティUIです。

## UI構成

- 上部の3タブは `トーク / コンテンツ / 講座の紹介` で固定
- トークは、デスクトップで「部屋一覧 + チャット」、スマートフォンで「一覧 → 詳細」表示
- コンテンツは、セクション目次と横長の教材行で構成
- 講座紹介は、長文本文と情報欄の2カラム構成
- Aqua Tuningの淡いアクア、ラベンダー、ローズを使った女性向け配色
- 検索、ルーム切替、メッセージ投稿、リアクション、セクション切替に対応
- 支給ロゴをヘッダーのAqua Tuningタイトル左へ配置
- クリアブルー、ミントブルー、アンダーウォーターの3テーマを切替可能
- `designs.html` にプレゼン用の3案比較ページを用意

## ローカル確認

```bash
python3 -m http.server 4173
```

`http://localhost:4173/` を開いて確認できます。

## デプロイ

Cloudflare Pagesプロジェクト名は `aquatuning` です。

```bash
wrangler pages deploy . --project-name aquatuning --branch main
```

本番URL: https://aquatuning.pages.dev/

### プレゼン用URL

- 3案比較: https://aquatuning.pages.dev/designs.html
- クリアブルー: https://aquatuning.pages.dev/?theme=blue&tab=talk
- ミントブルー: https://aquatuning.pages.dev/?theme=mint&tab=talk
- アンダーウォーター: https://aquatuning.pages.dev/?theme=underwater&tab=talk
