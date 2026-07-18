# アセットの出所（Asset provenance）

Storybook / リポジトリで使うサンプル画像の出所・権利・目視確認の記録。

> **公開 npm パッケージ（`files: ["dist"]`）には画像は一切含まれません**（dist に画像なし）。
> したがって `wimui` を install した消費者に画像由来の権利リスクはありません。本書は
> **公開サイト（gh-pages Storybook）とリポジトリ**の衛生に関するものです。

## 同梱サンプル画像

`src/media/` / `public/demo/` / `public/images/` の画像。写真調のものは **生成 AI（Google Gemini / Imagen）** による生成物、プレースホルダは自作。

| ファイル | 内容 | 出所 |
|---|---|---|
| `src/media/vibrant_landscape.png` | 山岳湖の風景 | AI 生成（Gemini/Imagen） |
| `public/images/sample-landscape.png` | アルプス風の湖 | AI 生成（Gemini/Imagen） |
| `public/demo/lightbox_1.png` | 夕焼けの山岳湖 | AI 生成（Gemini/Imagen） |
| `public/demo/lightbox_2.png` | ガラス張りのオフィスビル | AI 生成（Gemini/Imagen） |
| `public/demo/lightbox_3.png` | ハイビスカスの接写 | AI 生成（Gemini/Imagen） |
| `src/media/imagesanple.webp` | 「now making」黒地プレースホルダ | 自作（テキストグラフィック） |
| `src/media/video_poster.webp` | 「now making」黒地プレースホルダ | 自作（テキストグラフィック） |

### 目視確認（2026-07-18）

全 7 枚を目視。**ロゴ・商標・ブランド文字・特定可能な実在人物・著名なランドマークの混入なし**。
写真調画像は汎用的な自然/建築の風景で、遠景の人影は豆粒大で顔の特定不可。山岳・アルプス風の
風景は現実の地形に似るが、自然景観・地理的特徴は著作権の保護対象外。

### 権利メモ

- 写真調画像は **Google Gemini / Imagen** による生成物。Imagen の出力には不可視の電子透かし
  **SynthID** が含まれる（利用の妨げにはならない）。
- Google の生成 AI 規約上、生成物はユーザーが利用可（商用含む）で、prohibited-use policy に従う。
  **最終的な商用可否は、生成に用いたプラン（無料 Gemini / 有料 / API）の規約に従う**。
- 純粋な AI 生成物は法域によっては著作権が発生しない可能性がある（＝独占はできないが、他者の
  権利を侵害するものではない）。
- Claude（Anthropic）は写真調のラスター画像を生成しないため、写真調画像の出所には該当しない。

## 外部ホットリンク画像（ストーリー内）

一部のストーリー（Avatar / AvatarGroup / AspectRatio / HoverCard / Skeleton / LoadingOverlay /
Audit 系）は **Unsplash（`images.unsplash.com`）** と **picsum.photos** を実行時にホットリンクしている。

- **Unsplash License** 下で商用含め無償利用可。ホットリンク自体は許容される（作法としては API 利用が推奨）。
- **リスクは低い**が、リンク切れ耐性・オフライン再現性の観点では、少数を CC0/自作画像に置き換えて
  自前ホストする余地がある（公開ブロッカーではない・低優先）。
