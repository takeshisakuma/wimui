import{j as n}from"./jsx-runtime-u17CrQMm.js";import{c as s}from"./index-CzgX8IQ6.js";const o=({variant:e="default",className:a,children:t,...l})=>n.jsx("div",{className:s("wim-stats",`wim-stats--${e}`,a),...l,children:t}),r=({className:e,children:a,...t})=>n.jsx("div",{className:s("wim-stats__label",e),...t,children:a}),i=({className:e,children:a,...t})=>n.jsx("div",{className:s("wim-stats__value",e),...t,children:a}),m=({className:e,children:a,...t})=>n.jsx("div",{className:s("wim-stats__description",e),...t,children:a}),p=({direction:e="up",className:a,children:t,...l})=>n.jsxs("div",{className:s("wim-stats__trend",`wim-stats__trend--${e}`,a),...l,children:[n.jsxs("span",{className:"wim-stats__trend-icon",children:[e==="up"&&"↑",e==="down"&&"↓",e==="neutral"&&"→"]}),n.jsx("span",{className:"wim-stats__trend-value",children:t})]});o.Label=r;o.Value=i;o.Description=m;o.Trend=p;o.__docgenInfo={description:"`Stats` は統計情報やメトリクスを表示するためのコンポーネントです。",methods:[{name:"Label",docblock:null,modifiers:["static"],params:[{name:`{\r
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
}`,signature:{properties:[{key:"direction",value:{name:"union",raw:'"up" | "down" | "neutral"',elements:[{name:"literal",value:'"up"'},{name:"literal",value:'"down"'},{name:"literal",value:'"neutral"'}],required:!1}}]}}],alias:"StatsTrendProps"}}],returns:null}],displayName:"Stats",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "outline" | "flat"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"flat"'}]},description:"バリアント",defaultValue:{value:'"default"',computed:!1}}}};r.__docgenInfo={description:"",methods:[],displayName:"StatsLabel"};i.__docgenInfo={description:"",methods:[],displayName:"StatsValue"};m.__docgenInfo={description:"",methods:[],displayName:"StatsDescription"};p.__docgenInfo={description:"",methods:[],displayName:"StatsTrend",props:{direction:{required:!1,tsType:{name:"union",raw:'"up" | "down" | "neutral"',elements:[{name:"literal",value:'"up"'},{name:"literal",value:'"down"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"up"',computed:!1}}}};export{o as S};
