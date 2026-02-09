import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-Rz6pNceq.js";import{P as i}from"./index-Dnf1k34B.js";import{I as w}from"./Icon-GFlJee33.js";const s="...",d=({total:f,pageSize:h=10,current:e=1,onChange:b,siblingCount:o=1,className:I,hideOnSinglePage:z=!1})=>{const n=Math.ceil(f/h),T=v.useMemo(()=>{if(o+5>=n)return Array.from({length:n},(r,m)=>m+1);const l=Math.max(e-o,1),j=Math.min(e+o,n),y=l>2,S=j<n-2,C=1,N=n;if(!y&&S){let r=3+2*o;return[...Array.from({length:r},(P,x)=>x+1),s,n]}if(y&&!S){let r=3+2*o,m=Array.from({length:r},(P,x)=>n-r+x+1);return[C,s,...m]}if(y&&S){let r=Array.from({length:j-l+1},(m,P)=>l+P);return[C,s,...r,s,N]}return[]},[n,o,e]);if(z&&n<=1)return null;const _=a=>{a<1||a>n||a===e||b?.(a)};return t.jsx("nav",{className:["wim-pagination",I].filter(Boolean).join(" "),"aria-label":"Pagination Navigation",children:t.jsxs("ul",{className:"wim-pagination",children:[t.jsx("li",{className:["wim-pagination__item",e===1?"wim-pagination__item--disabled":""].filter(Boolean).join(" "),children:t.jsx("button",{className:"wim-pagination__button",onClick:()=>_(e-1),disabled:e===1,"aria-label":"Go to previous page",children:t.jsx(w,{name:"ChevronLeftIcon",size:"small"})})}),T.map((a,l)=>a===s?t.jsx("li",{className:"wim-pagination__item wim-pagination__item--ellipsis","aria-hidden":"true",children:s},`ellipsis-${l}`):t.jsx("li",{className:["wim-pagination__item",a===e?"wim-pagination__item--active":""].filter(Boolean).join(" "),children:t.jsx("button",{className:"wim-pagination__button",onClick:()=>_(a),"aria-label":`Go to page ${a}`,"aria-current":a===e?"page":void 0,children:a})},a)),t.jsx("li",{className:["wim-pagination__item",e===n?"wim-pagination__item--disabled":""].filter(Boolean).join(" "),children:t.jsx("button",{className:"wim-pagination__button",onClick:()=>_(e+1),disabled:e===n,"aria-label":"Go to next page",children:t.jsx(w,{name:"ChevronRightIcon",size:"small"})})})]})})};d.propTypes={total:i.number.isRequired,pageSize:i.number,current:i.number,onChange:i.func,siblingCount:i.number,className:i.string,hideOnSinglePage:i.bool};d.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{total:{required:!0,tsType:{name:"number"},description:"Total number of items",type:{name:"number"}},pageSize:{required:!1,tsType:{name:"number"},description:"Number of items per page",defaultValue:{value:"10",computed:!1},type:{name:"number"}},current:{required:!1,tsType:{name:"number"},description:"Current page number (1-indexed)",defaultValue:{value:"1",computed:!1},type:{name:"number"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback function when page changes",type:{name:"func"}},siblingCount:{required:!1,tsType:{name:"number"},description:"Number of sibling pages to show around the current page",defaultValue:{value:"1",computed:!1},type:{name:"number"}},className:{required:!1,tsType:{name:"string"},description:"Additional class names",type:{name:"string"}},simple:{required:!1,tsType:{name:"boolean"},description:"Whether to show a simplified version"},hideOnSinglePage:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the pagination if there is only one page",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const q={title:"Component/Navigation/Pagination",component:d,parameters:{layout:"centered"},tags:[],argTypes:{total:{control:"number"},pageSize:{control:"number"},current:{control:"number"},siblingCount:{control:"number"},hideOnSinglePage:{control:"boolean"}}},u={args:{total:50,current:1,pageSize:10}},c={args:{total:1e3,current:5,pageSize:10}},g={args:{total:1e3,current:10,pageSize:10,siblingCount:2}},p={render:f=>{const[h,e]=v.useState(1);return t.jsx(d,{...f,current:h,onChange:b=>e(b)})},args:{total:100,pageSize:10}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    total: 50,
    current: 1,
    pageSize: 10
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    total: 1000,
    current: 5,
    pageSize: 10
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    total: 1000,
    current: 10,
    pageSize: 10,
    siblingCount: 2
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(1);
    return <Pagination {...args} current={currentPage} onChange={page => setCurrentPage(page)} />;
  },
  args: {
    total: 100,
    pageSize: 10
  }
}`,...p.parameters?.docs?.source}}};const R=["Default","ManyPages","LargeSiblingCount","Interactive"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Interactive:p,LargeSiblingCount:g,ManyPages:c,__namedExportsOrder:R,default:q},Symbol.toStringTag,{value:"Module"}));export{u as D,p as I,g as L,c as M,D as P};
