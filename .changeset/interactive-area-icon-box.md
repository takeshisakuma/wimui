---
"wimui": patch
---

InteractiveArea（と、それを使う Dropzone / Result）のアイコンの箱が、CSS の読み込み順によって縦に伸びることがあったのを直しました。アイコンの子要素の display が Icon 側の規則と同じ詳細度で競合していたため、バンドラーのチャンク順が変わると 25px ほど高くなっていました。
