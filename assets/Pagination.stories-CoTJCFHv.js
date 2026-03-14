import{j as s}from"./jsx-runtime-u17CrQMm.js";import{P as o}from"./Pagination-42Vx65e1.js";import{r as u}from"./iframe-DC3HBgeO.js";const p={title:"Components/Navigation Elements/Pagination",component:o,parameters:{layout:"centered"},tags:[],argTypes:{total:{control:"number"},pageSize:{control:"number"},current:{control:"number"},siblingCount:{control:"number"},hideOnSinglePage:{control:"boolean"}}},r={render:e=>s.jsx(o,{...e}),args:{total:50,current:1,pageSize:10}},n={render:e=>s.jsx(o,{...e}),args:{total:1e3,current:5,pageSize:10}},a={render:e=>s.jsx(o,{...e}),args:{total:1e3,current:10,pageSize:10,siblingCount:2}},t={render:e=>{const[g,c]=u.useState(1);return s.jsx(o,{...e,current:g,onChange:i=>c(i)})},args:{total:100,pageSize:10}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Pagination {...args} />;
  },
  args: {
    total: 50,
    current: 1,
    pageSize: 10
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Pagination {...args} />;
  },
  args: {
    total: 1000,
    current: 5,
    pageSize: 10
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Pagination {...args} />;
  },
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
}`,...t.parameters?.docs?.source}}};const l=["Default","ManyPages","LargeSiblingCount","Interactive"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Interactive:t,LargeSiblingCount:a,ManyPages:n,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{r as D,t as I,a as L,n as M,P};
