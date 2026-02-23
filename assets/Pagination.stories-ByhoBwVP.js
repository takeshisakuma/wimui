import{j as i}from"./jsx-runtime-u17CrQMm.js";import{P as n}from"./Pagination-CnjnWVAO.js";import{r as u}from"./iframe-hgUaHlXL.js";const p={title:"Component/Navigation Elements/Pagination",component:n,parameters:{layout:"centered"},tags:[],argTypes:{total:{control:"number"},pageSize:{control:"number"},current:{control:"number"},siblingCount:{control:"number"},hideOnSinglePage:{control:"boolean"}}},e={args:{total:50,current:1,pageSize:10}},r={args:{total:1e3,current:5,pageSize:10}},a={args:{total:1e3,current:10,pageSize:10,siblingCount:2}},t={render:o=>{const[s,c]=u.useState(1);return i.jsx(n,{...o,current:s,onChange:g=>c(g)})},args:{total:100,pageSize:10}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    total: 50,
    current: 1,
    pageSize: 10
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    total: 1000,
    current: 5,
    pageSize: 10
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    total: 1000,
    current: 10,
    pageSize: 10,
    siblingCount: 2
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(1);
    return <Pagination {...args} current={currentPage} onChange={page => setCurrentPage(page)} />;
  },
  args: {
    total: 100,
    pageSize: 10
  }
}`,...t.parameters?.docs?.source}}};const l=["Default","ManyPages","LargeSiblingCount","Interactive"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Interactive:t,LargeSiblingCount:a,ManyPages:r,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{e as D,t as I,a as L,r as M,P};
