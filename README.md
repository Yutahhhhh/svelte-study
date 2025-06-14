# Astro + Svelte開発環境

## 前提条件

- Docker Desktop がインストールされていること
- VS Code がインストールされていること  
- Dev Containers 拡張機能がインストールされていること
- Dockerの実行権限が適切に設定されていること

## プロジェクト構成

このプロジェクトは、将来的にbackendディレクトリを追加してモノレポ化することを想定し、frontendディレクトリとして構成されています。

```
svelte-study/
├── .devcontainer/
│   └── devcontainer.json
├── frontend/              # Astro + Svelteプロジェクト
│   ├── src/
│   │   ├── components/
│   │   │   └── Counter.svelte
│   │   └── pages/
│   │       └── index.astro
│   ├── astro.config.mjs
│   ├── svelte.config.js
│   └── package.json
└── README.md
```

## 開発環境の起動

1. VS Codeでこのプロジェクトを開く
2. 「Dev Containers: Reopen in Container」を実行
3. コンテナが起動したら、以下のコマンドで開発サーバーを起動：

```bash
cd frontend
pnpm dev --host
```

4. ブラウザで http://localhost:4321 にアクセス

## 技術スタック

- **Astro**: v5.9.3 - 静的サイトジェネレーター
- **Svelte**: v5.34.1 - リアクティブフレームワーク  
- **TypeScript**: 型安全性の確保
- **Sass**: CSSプリプロセッサ
- **pnpm**: パッケージマネージャー

## 参考資料

- [Astro公式ドキュメント](https://docs.astro.build/ja/)
- [Svelte統合ガイド](https://docs.astro.build/ja/guides/integrations-guide/svelte/)
# svelte-study
