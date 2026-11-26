"use client";
import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./VisuallyHidden-BjSR7txC.js";var i,a;function o(){return(o=e((()=>{i=`_root_1b673_2`,a={root:i}})))()}var s,c;function l(){return(l=e((()=>{n(),o(),s=t(),c=({children:e})=>typeof e!=`string`&&typeof e!=`number`?(0,s.jsx)(`span`,{className:a.root,children:e}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`span`,{"aria-hidden":`true`,className:a.root,children:e}),(0,s.jsx)(r,{children:e})]}),c.__docgenInfo={description:`見た目だけ大文字にした文字。支援技術には元の大小のまま渡す。

\`text-transform: uppercase\` は見た目の指定だが、Chrome は大文字に変えたあとの文字を名前として
支援技術に渡す（2026-10-31 に実測: Select のグループ見出し「Fruits」が「FRUITS」）。読み上げ
ソフトによっては、全部大文字の語を略語とみなして 1 文字ずつ読む。大文字の文字は \`aria-hidden\` に
し、元の文字を隣の \`VisuallyHidden\` で読ませる。

大文字は、この部品の中の文字だけに当てる。親に \`text-transform\` を付けると、\`VisuallyHidden\` の
文字まで大文字になって、元の大小が失われる。

文字列でない中身（要素）は 2 回描かない（id の重複や、操作要素が 2 つになるため）。その場合は
大文字の見た目だけを当て、支援技術にも大文字のまま渡る（以前と同じ）。`,methods:[],displayName:`VisualUppercase`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})))()}export{l as n,c as t};