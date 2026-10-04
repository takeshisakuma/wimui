"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./PivotTable-BLk2xdsi.js";var d=n({Collapsed:()=>T,CollapsedColumns:()=>E,Default:()=>C,NestedColumns:()=>F,StickyHeaders:()=>D,Totals:()=>w,Virtualized:()=>P,__namedExportsOrder:()=>I,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{f=e(r(),1),a(),o(),l(),p=c(),m={title:`Components/Data Structures/PivotTable`,component:u,parameters:{layout:`padded`},argTypes:{columnSubtotals:{control:`boolean`},totalRow:{control:`boolean`},totalColumn:{control:`boolean`}}},h=[`jan`,`feb`,`mar`,`apr`,`may`,`jun`],g={drip:[1284,1192,1347,1301,1226,1158],latte:[932,871,1015,1064,1102,987],coldbrew:[null,null,null,null,418,763],matcha:[214,198,251,307,289,264],croissant:[641,598,702,688,715,654],sandwich:[372,341,389,402,437,395],tart:[58,47,73,96,112,84],gift:[37,12,9,14,41,8]},_={drinks:[null,null,null,846,1193,1408],food:[null,null,null,312,451,527],gift:[null,null,null,63,22,17]},v={drinks:[`drip`,`latte`,`coldbrew`,`matcha`],food:[`croissant`,`sandwich`,`tart`],gift:[`gift`]},y={q1:[`jan`,`feb`,`mar`],q2:[`apr`,`may`,`jun`]},b=e=>{let t=e.filter(e=>e!==null);return t.length?t.reduce((e,t)=>e+t,0):null},x=()=>{let{t:e,i18n:t}=i(s),n=new Intl.DateTimeFormat(t.language,{month:`short`}),r=(e,t=``)=>({key:t+e,label:n.format(new Date(2026,h.indexOf(e),1))}),a=(t,n=``)=>({key:n+t,label:e(`story.pivottable_${t}`),children:y[t].map(e=>r(e,n))}),o=t=>({key:t,label:e(`story.pivottable_${t}`)});return{t:e,month:r,quarter:a,product:o,category:t=>({key:t,label:e(`story.pivottable_${t}`),children:v[t].map(o)}),format:e=>e===null?null:new Intl.NumberFormat(t.language).format(e)}},S=()=>{let{t:e,quarter:t,product:n,category:r,format:i}=x();return{t:e,rows:[r(`drinks`),r(`food`),n(`gift`)],columns:[t(`q1`),t(`q2`)],getValue:(e,t)=>{let n=e===null?Object.values(v).flat():v[e]??[e],r=t===null?h:y[t]??[t];return i(b(n.flatMap(e=>r.map(t=>g[e][h.indexOf(t)]))))}}},C={render:function(e){let{t,rows:n,columns:r,getValue:i}=S();return(0,p.jsx)(u,{...e,rows:n,columns:r,getValue:i,rowAxisLabel:t(`story.pivottable_product`),caption:t(`story.pivottable_caption`)})}},w={render:function(e){let{t,rows:n,columns:r,getValue:i}=S();return(0,p.jsx)(u,{...e,rows:n,columns:r,getValue:i,rowAxisLabel:t(`story.pivottable_product`),caption:t(`story.pivottable_caption`)})},args:{columnSubtotals:!0,totalRow:!0,totalColumn:!0}},T={render:function(e){let{t,rows:n,columns:r,getValue:i}=S();return(0,p.jsx)(u,{...e,rows:n,columns:r,getValue:i,rowAxisLabel:t(`story.pivottable_product`),caption:t(`story.pivottable_caption`),defaultExpandedRowValues:[`food`]})},args:{totalRow:!0}},E={render:function(e){let{t,rows:n,columns:r,getValue:i}=S();return(0,p.jsx)(u,{...e,rows:n,columns:r,getValue:i,rowAxisLabel:t(`story.pivottable_product`),caption:t(`story.pivottable_caption`),defaultExpandedColumnValues:[`q2`]})},args:{totalColumn:!0}},D={render:function(e){let{t,rows:n,columns:r,getValue:i}=S();return(0,p.jsx)(u,{...e,rows:n,columns:r,getValue:i,rowAxisLabel:t(`story.pivottable_product`),caption:t(`story.pivottable_caption`)})},args:{maxHeight:320,stickyHeader:!0,stickyRowHeaders:!0,columnSubtotals:!0,totalColumn:!0}},O=[`Kichijoji`,`Porto Alegre`,`Leith`,`Nakameguro`,`Lapa`,`Kreuzberg`,`Shimokitazawa`,`Belém`,`Hackney`,`Koenji`,`Pinheiros`,`Ancoats`,`Yanaka`,`Ipanema`,`Digbeth`,`Kuramae`],k=61,A=[`drip`,`latte`,`coldbrew`,`matcha`,`croissant`,`sandwich`,`tart`,`gift`],j=[42,33,19,9,22,13,3,1],M=(()=>{let e=20260501,t=()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296);return O.map(()=>{let e=.55+t()*.9;return Array.from({length:k},(n,r)=>{let i=(5+r)%7,a=i===6||i===0?1.3:1;return j.map((n,r)=>r===6&&a===1?0:Math.round(n*e*a*(.75+t()*.5)))})})})(),N=()=>{let{t:e,i18n:t}=i(s);return f.useMemo(()=>{let n=new Intl.DateTimeFormat(t.language,{month:`short`,day:`numeric`,weekday:`short`}),r=new Intl.NumberFormat(t.language),i=O.map((e,t)=>({key:`s${t}`,label:e,children:Array.from({length:k},(e,r)=>({key:`s${t}/d${r}`,label:n.format(new Date(2026,4,1+r))}))})),a=t=>({key:t,label:e(`story.pivottable_${t}`)}),o=[{key:`drinks`,label:e(`story.pivottable_drinks`),children:v.drinks.map(a)},{key:`food`,label:e(`story.pivottable_food`),children:v.food.map(a)},a(`gift`)],s=new Map;return{rows:i,columns:o,getValue:(e,t)=>{let n=`${e}|${t}`;if(s.has(n))return s.get(n);let[i,a]=e===null?[]:e.split(`/`),o=i===void 0?O.map((e,t)=>t):[Number(i.slice(1))],c=a===void 0?Array.from({length:k},(e,t)=>t):[Number(a.slice(1))],l=(t===null?A:v[t]??[t]).map(e=>A.indexOf(e)),u=0;for(let e of o)for(let t of c)for(let n of l)u+=M[e][t][n];let d=u===0&&a!==void 0?null:r.format(u);return s.set(n,d),d}}},[e,t.language])},P={render:function(e){let{t}=i(s),{rows:n,columns:r,getValue:a}=N();return(0,p.jsx)(u,{...e,rows:n,columns:r,getValue:a,rowAxisLabel:t(`story.pivottable_shop_day`),caption:t(`story.pivottable_caption_daily`)})},args:{virtualized:!0,maxHeight:480,stickyHeader:!0,stickyRowHeaders:!0,columnSubtotals:!0,totalColumn:!0,totalRow:!0},argTypes:{virtualized:{control:`boolean`}}},F={render:function(e){let{t,quarter:n,product:r,format:i}=x(),a=[r(`drinks`),r(`food`),r(`gift`)],o=[{key:`station`,label:t(`story.pivottable_shop_station`),children:[n(`q1`,`station/`),n(`q2`,`station/`)]},{key:`riverside`,label:t(`story.pivottable_shop_riverside`),children:[n(`q2`,`riverside/`)]}],s=(e,t,n)=>{let r=h.indexOf(n);return e===`riverside`?_[t][r]:b(v[t].map(e=>g[e][r]))},c=(e,t)=>{if(e===null)return null;let n=t===null?[`station`,`riverside`]:[t.split(`/`)[0]],r=t?.split(`/`)[1],a=r===void 0?h:y[r]??[r];return i(b(n.flatMap(t=>a.map(n=>s(t,e,n)))))};return(0,p.jsx)(u,{...e,rows:a,columns:o,getValue:c,rowAxisLabel:t(`story.pivottable_category`),caption:t(`story.pivottable_caption_shops`)})},args:{totalColumn:!0}},I=[`Default`,`Totals`,`Collapsed`,`CollapsedColumns`,`StickyHeaders`,`Virtualized`,`NestedColumns`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t,
      rows,
      columns,
      getValue
    } = useStationPivot();
    return <PivotTable {...args} rows={rows} columns={columns} getValue={getValue} rowAxisLabel={t("story.pivottable_product")} caption={t("story.pivottable_caption")} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t,
      rows,
      columns,
      getValue
    } = useStationPivot();
    return <PivotTable {...args} rows={rows} columns={columns} getValue={getValue} rowAxisLabel={t("story.pivottable_product")} caption={t("story.pivottable_caption")} />;
  },
  args: {
    columnSubtotals: true,
    totalRow: true,
    totalColumn: true
  }
}`,...w.parameters?.docs?.source},description:{story:"列グループごとの小計と、行・列の総計。`getValue` は小計でグループのキー、総計で `null` を受け取る。",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t,
      rows,
      columns,
      getValue
    } = useStationPivot();
    return <PivotTable {...args} rows={rows} columns={columns} getValue={getValue} rowAxisLabel={t("story.pivottable_product")} caption={t("story.pivottable_caption")} defaultExpandedRowValues={["food"]} />;
  },
  args: {
    totalRow: true
  }
}`,...T.parameters?.docs?.source},description:{story:`最初に開くグループを選ぶ。畳んだグループは自分の行（小計）だけを残す。`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t,
      rows,
      columns,
      getValue
    } = useStationPivot();
    return <PivotTable {...args} rows={rows} columns={columns} getValue={getValue} rowAxisLabel={t("story.pivottable_product")} caption={t("story.pivottable_caption")} defaultExpandedColumnValues={["q2"]} />;
  },
  args: {
    totalColumn: true
  }
}`,...E.parameters?.docs?.source},description:{story:"列のグループも畳める。畳んだグループは、自分の値（`getValue` にグループのキーが渡る）の列を 1 本だけ残す。",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t,
      rows,
      columns,
      getValue
    } = useStationPivot();
    return <PivotTable {...args} rows={rows} columns={columns} getValue={getValue} rowAxisLabel={t("story.pivottable_product")} caption={t("story.pivottable_caption")} />;
  },
  args: {
    maxHeight: 320,
    stickyHeader: true,
    stickyRowHeaders: true,
    columnSubtotals: true,
    totalColumn: true
  }
}`,...D.parameters?.docs?.source},description:{story:`高さを限り、列見出し（全段）と行見出しの列を残したままスクロールする。`,...D.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const {
      rows,
      columns,
      getValue
    } = useDailyPivot();
    return <PivotTable {...args} rows={rows} columns={columns} getValue={getValue} rowAxisLabel={t("story.pivottable_shop_day")} caption={t("story.pivottable_caption_daily")} />;
  },
  args: {
    virtualized: true,
    maxHeight: 480,
    stickyHeader: true,
    stickyRowHeaders: true,
    columnSubtotals: true,
    totalColumn: true,
    totalRow: true
  },
  argTypes: {
    virtualized: {
      control: "boolean"
    }
  }
}`,...P.parameters?.docs?.source},description:{story:"992 行 × 11 列（約 1 万セル）。`virtualized` で見えている行だけを描く。\n高さの制限（`maxHeight`）と組で使う。",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t,
      quarter,
      product,
      format
    } = useAxes();
    const rows = [product("drinks"), product("food"), product("gift")];
    const columns: PivotTableAxisNode[] = [{
      key: "station",
      label: t("story.pivottable_shop_station"),
      children: [quarter("q1", "station/"), quarter("q2", "station/")]
    }, {
      key: "riverside",
      label: t("story.pivottable_shop_riverside"),
      children: [quarter("q2", "riverside/")]
    }];
    const cell = (shop: string, row: string, m: Month) => {
      const index = MONTHS.indexOf(m);
      if (shop === "riverside") return RIVERSIDE[row][index];
      return sum(PRODUCTS[row].map(p => STATION[p][index]));
    };
    const getValue = (rowKey: string | null, columnKey: string | null) => {
      if (rowKey === null) return null;
      const shops = columnKey === null ? ["station", "riverside"] : [columnKey.split("/")[0]];
      const part = columnKey?.split("/")[1];
      const months = part === undefined ? MONTHS : QUARTERS[part] ?? [part as Month];
      return format(sum(shops.flatMap(shop => months.map(m => cell(shop, rowKey, m)))));
    };
    return <PivotTable {...args} rows={rows} columns={columns} getValue={getValue} rowAxisLabel={t("story.pivottable_category")} caption={t("story.pivottable_caption_shops")} />;
  },
  args: {
    totalColumn: true
  }
}`,...F.parameters?.docs?.source},description:{story:`列を 3 段にする（店舗 → 四半期 → 月）。枝ごとに深さも列の数も揃っていなくてよい。`,...F.parameters?.docs?.description}}}})))()}export{d as a,P as c,F as i,L as l,E as n,D as o,C as r,w as s,T as t};