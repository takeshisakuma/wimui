import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BBZEH7U7.js";import{M as i,T as h,D as x,P as c,a as j,C as e,S as l}from"./index-CPJf9xVo.js";import{S as o,V as a,L as p,E as m,C as f,I as g}from"./Stepper.stories-BEhlk7Wt.js";import{T as u}from"./T-BRuc4u6L.js";import"./iframe-8YyUgjUD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTZzMpSu.js";import"./index-BByLr51g.js";import"./index-Dnx-ZVgZ.js";import"./index-B3oGAfiZ.js";import"./index-BJM3YyK_.js";import"./index-VIhmU7OM.js";import"./Icon-CV6VIRmA.js";import"./useTranslation-DUbNruhq.js";function t(n){const r={p:"p",...d(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(i,{of:o}),`
`,s.jsx(h,{}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(u,{k:"doc_stepper_title"})}),`
`,s.jsx(x,{}),`
`,s.jsx(c,{}),`
`,s.jsx("h2",{children:"Props"}),`
`,s.jsx(j,{}),`
`,s.jsx("h2",{children:"使い分けガイド"}),`
`,s.jsx("h3",{children:"役割とメリット"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"項目"}),s.jsx("th",{children:"説明"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"不安の解消"})}),s.jsx("td",{children:"「あとどれくらいで完了するのか」を可視化し、ユーザーの心理的負担を軽減します。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"タスクの分割"})}),s.jsx("td",{children:"複雑なフォーム入力を管理しやすい単位に分割し、集中力を維持したまま完了率を高めます。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"進行のフィードバック"})}),s.jsx("td",{children:"完了・現在・未完了の状態を明確に示し、着実に進んでいることを実感させます。"})]})]})]}),`
`,s.jsx("h3",{children:"利用基準"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"判断材料"}),s.jsx("th",{children:"推奨されるケース"}),s.jsx("th",{children:"避けるべきケース"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"ステップ数"})}),s.jsx("td",{children:"4ステップ以上（会員登録、決済、詳細アンケート等）"}),s.jsx("td",{children:"3ステップ以下の単純なフロー（入力→確認→完了）"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"必要性"})}),s.jsx("td",{children:"順序が決まった複雑な手続きが必要な場合"}),s.jsx("td",{children:"直感的に理解できる基本的な操作（投稿、アップロード等）"})]})]})]}),`
`,s.jsx("h2",{children:"設計上のベストプラクティス"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"分類"}),s.jsx("th",{children:"タイプ"}),s.jsx("th",{children:"特徴・用途"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{rowspan:"2",children:s.jsx("strong",{children:"レイアウト"})}),s.jsx("td",{children:"水平型 (Horizontal)"}),s.jsx("td",{children:"デスクトップ等の横幅がある画面に適し、左から右への自然な視線移動に沿います。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"垂直型 (Vertical)"}),s.jsx("td",{children:"モバイル環境やステップ数が多い場合に最適。詳細情報を展開しやすくなります。"})]}),s.jsxs("tr",{children:[s.jsx("td",{rowspan:"2",children:s.jsx("strong",{children:"進行方式"})}),s.jsx("td",{children:"リニア（順序固定）"}),s.jsx("td",{children:"前のステップ完了が必須のプロセス（決済など）で、データの整合性を担保します。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"ノンリニア（順序自由）"}),s.jsx("td",{children:"任意の順序で編集可能なプロセス（設定、プロフィール等）に適しています。"})]}),s.jsxs("tr",{children:[s.jsx("td",{rowspan:"2",children:s.jsx("strong",{children:"視覚表現"})}),s.jsx("td",{children:"区切り型"}),s.jsx("td",{children:"ステップ数が少ない場合（3~4個）。各工程の独立性を強調します。"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"一体型（連続）"}),s.jsx("td",{children:"ステップ数が多い場合（5個〜）。一連の流れとして認識させ、負担を抑えます。"})]})]})]}),`
`,s.jsx("h2",{children:"バリエーション"}),`
`,s.jsxs(r.p,{children:[s.jsx("h3",{children:"垂直レイアウト"}),`\r
スペースが限られている場合や、ステップ数が多い場合に適しています。`]}),`
`,s.jsx(e,{of:a}),`
`,s.jsxs(r.p,{children:[s.jsx("h3",{children:"ラベルの垂直配置"}),`\r
水平レイアウトで各ステップを中央揃えにしたい場合に適しています。`]}),`
`,s.jsx(e,{of:p}),`
`,s.jsxs(r.p,{children:[s.jsx("h3",{children:"エラー状態"}),`\r
特定のステップでエラーが発生したことを示します。`]}),`
`,s.jsx(e,{of:m}),`
`,s.jsxs(r.p,{children:[s.jsx("h3",{children:"カスタムアイコン"}),`\r
標準の数字の代わりに、独自のアイコンを表示できます。`]}),`
`,s.jsx(e,{of:f}),`
`,s.jsxs(r.p,{children:[s.jsx("h3",{children:"インタラクティブな例"}),`\r
実際にステップを進めたり戻したりできる例です。`]}),`
`,s.jsx(e,{of:g}),`
`,s.jsx(l,{})]})}function v(n={}){const{wrapper:r}={...d(),...n.components};return r?s.jsx(r,{...n,children:s.jsx(t,{...n})}):t(n)}export{v as default};
