import{j as n}from"./jsx-runtime-u17CrQMm.js";import{c as s}from"./index-DG63t_hX.js";import{C as d}from"./Card-DjQ4h2db.js";const o=({variant:e="elevated",className:a,children:t,...r})=>n.jsx(d,{variant:e,className:s("wim-stats",a),padding:"none",...r,children:n.jsx("div",{className:"wim-stats__inner",children:t})}),i=({className:e,children:a,...t})=>n.jsx("div",{className:s("wim-stats__label",e),...t,children:a}),l=({className:e,children:a,...t})=>n.jsx("div",{className:s("wim-stats__value",e),...t,children:a}),m=({className:e,children:a,...t})=>n.jsx("div",{className:s("wim-stats__description",e),...t,children:a}),p=({direction:e="up",className:a,children:t,...r})=>n.jsxs("div",{className:s("wim-stats__trend",`wim-stats__trend--${e}`,a),...r,children:[n.jsxs("span",{className:"wim-stats__trend-icon",children:[e==="up"&&"↑",e==="down"&&"↓",e==="neutral"&&"→"]}),n.jsx("span",{className:"wim-stats__trend-value",children:t})]});o.Label=i;o.Value=l;o.Description=m;o.Trend=p;o.__docgenInfo={description:"`Stats` は統計情報やメトリクスを表示するためのコンポーネントです。",methods:[{name:"Label",docblock:null,modifiers:["static"],params:[{name:`{\r
  className,\r
  children,\r
  ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Value",docblock:null,modifiers:["static"],params:[{name:`{\r
  className,\r
  children,\r
  ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Description",docblock:null,modifiers:["static"],params:[{name:`{\r
  className,\r
  children,\r
  ...props\r
}: React.ComponentPropsWithoutRef<"div">`,optional:!1,type:{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}],alias:"React.ComponentPropsWithoutRef"}}],returns:null},{name:"Trend",docblock:null,modifiers:["static"],params:[{name:`{\r
  direction = "up",\r
  className,\r
  children,\r
  ...props\r
}: StatsTrendProps`,optional:!1,type:{name:"intersection",raw:`React.ComponentPropsWithoutRef<"div"> & {\r
  direction?: "up" | "down" | "neutral";\r
}`,elements:[{name:"ReactComponentPropsWithoutRef",raw:'React.ComponentPropsWithoutRef<"div">',elements:[{name:"literal",value:'"div"'}]},{name:"signature",type:"object",raw:`{\r
  direction?: "up" | "down" | "neutral";\r
}`,signature:{properties:[{key:"direction",value:{name:"union",raw:'"up" | "down" | "neutral"',elements:[{name:"literal",value:'"up"'},{name:"literal",value:'"down"'},{name:"literal",value:'"neutral"'}],required:!1}}]}}],alias:"StatsTrendProps"}}],returns:null}],displayName:"Stats",props:{variant:{defaultValue:{value:'"elevated"',computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"StatsLabel"};l.__docgenInfo={description:"",methods:[],displayName:"StatsValue"};m.__docgenInfo={description:"",methods:[],displayName:"StatsDescription"};p.__docgenInfo={description:"",methods:[],displayName:"StatsTrend",props:{direction:{required:!1,tsType:{name:"union",raw:'"up" | "down" | "neutral"',elements:[{name:"literal",value:'"up"'},{name:"literal",value:'"down"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"up"',computed:!1}}}};export{o as S};
