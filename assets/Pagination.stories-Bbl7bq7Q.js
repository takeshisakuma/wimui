"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{cr as i}from"./iframe-DiXuc7DI.js";import{Wt as a,t as o}from"./src-BE5jBQ9L.js";var s=e({Default:()=>d,FullFeatures:()=>h,Interactive:()=>m,LargeSiblingCount:()=>p,ManyPages:()=>f,__namedExportsOrder:()=>g,default:()=>u}),c,l,u,d,f,p,m,h,g,_=t((()=>{c=n(r(),1),o(),l=i(),u={title:`Components/Navigation Elements/Pagination`,component:a,parameters:{layout:`padded`},tags:[],argTypes:{total:{control:`number`},pageSize:{control:`number`},current:{control:`number`},siblingCount:{control:`number`},hideOnSinglePage:{control:`boolean`}}},d={render:e=>(0,l.jsx)(a,{...e}),args:{total:50,current:1,pageSize:10}},f={render:e=>(0,l.jsx)(a,{...e}),args:{total:1e3,current:5,pageSize:10}},p={render:e=>(0,l.jsx)(a,{...e}),args:{total:1e3,current:10,pageSize:10,siblingCount:2}},m={render:e=>{let[t,n]=(0,c.useState)(1);return(0,l.jsx)(a,{...e,current:t,onChange:e=>n(e)})},args:{total:100,pageSize:10}},h={render:e=>{let[t,n]=(0,c.useState)(1),[r,i]=(0,c.useState)(10);return(0,l.jsx)(a,{...e,current:t,pageSize:r,onChange:e=>n(e),onPageSizeChange:e=>i(e)})},args:{total:100,showSizeChanger:!0,showQuickJumper:!0,showTotal:e=>`Total ${e} items`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Pagination {...args} />;
  },
  args: {
    total: 50,
    current: 1,
    pageSize: 10
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Pagination {...args} />;
  },
  args: {
    total: 1000,
    current: 5,
    pageSize: 10
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Pagination {...args} />;
  },
  args: {
    total: 1000,
    current: 10,
    pageSize: 10,
    siblingCount: 2
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(1);
    return <Pagination {...args} current={currentPage} onChange={page => setCurrentPage(page)} />;
  },
  args: {
    total: 100,
    pageSize: 10
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    return <Pagination {...args} current={current} pageSize={pageSize} onChange={page => setCurrent(page)} onPageSizeChange={size => setPageSize(size)} />;
  },
  args: {
    total: 100,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: total => \`Total \${total} items\`
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`ManyPages`,`LargeSiblingCount`,`Interactive`,`FullFeatures`]}));_();export{d as Default,h as FullFeatures,m as Interactive,p as LargeSiblingCount,f as ManyPages,g as __namedExportsOrder,u as default,_ as n,s as t};