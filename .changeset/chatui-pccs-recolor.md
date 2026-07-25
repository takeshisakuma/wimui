---
"wimui": patch
---

`ChatUI` の配色を刷新（ライトモード）

PCCS の淡いトーンで配色し直した。背景を淡い水色（PCCS p18）、受信吹き出しを白、送信吹き出しを淡緑（PCCS lt11）に変更。あわせて、背景が淡青になったことで本文背景の上に載る `.timestamp` が text-tertiary では AA を満たさなくなるため text-secondary に一段濃くした（sender/timestamp とも背景に対して十分なコントラストを確保）。吹き出し内の文字は従来どおり text-primary で高コントラスト。ダークモードは据え置き。
