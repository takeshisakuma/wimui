"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{cr as i}from"./iframe-F5Up1IQq.js";import{Gt as a,t as o}from"./src-Ssuy8lr7.js";var s=e({Default:()=>d,FullFeatures:()=>g,Interactive:()=>h,LargeSiblingCount:()=>m,ManyPages:()=>p,WidePages:()=>f,__namedExportsOrder:()=>_,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v=t((()=>{c=n(r(),1),o(),l=i(),u={title:`Components/Navigation Elements/Pagination`,component:a,parameters:{layout:`padded`},tags:[],argTypes:{total:{control:`number`},pageSize:{control:`number`},current:{control:`number`},siblingCount:{control:`number`},hideOnSinglePage:{control:`boolean`}}},d={render:e=>(0,l.jsx)(a,{...e}),args:{total:50,current:1,pageSize:10}},f={render:e=>(0,l.jsx)(a,{...e}),args:{total:47,current:3,pageSize:8}},p={render:e=>(0,l.jsx)(a,{...e}),args:{total:1e3,current:5,pageSize:10}},m={render:e=>(0,l.jsx)(a,{...e}),args:{total:1e3,current:10,pageSize:10,siblingCount:2}},h={render:e=>{let[t,n]=(0,c.useState)(1);return(0,l.jsx)(a,{...e,current:t,onChange:e=>n(e)})},args:{total:100,pageSize:10}},g={render:e=>{let[t,n]=(0,c.useState)(1),[r,i]=(0,c.useState)(10);return(0,l.jsx)(a,{...e,current:t,pageSize:r,onChange:e=>n(e),onPageSizeChange:e=>i(e)})},args:{total:100,showSizeChanger:!0,showQuickJumper:!0,showTotal:e=>`Total ${e} items`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    total: 47,
    current: 3,
    pageSize: 8
  }
}`,...f.parameters?.docs?.source},description:{story:`Wide: page numbers, not the mobile "1 / 2" (T188).`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Pagination {...args} />;
  },
  args: {
    total: 1000,
    current: 5,
    pageSize: 10
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Pagination {...args} />;
  },
  args: {
    total: 1000,
    current: 10,
    pageSize: 10,
    siblingCount: 2
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(1);
    return <Pagination {...args} current={currentPage} onChange={page => setCurrentPage(page)} />;
  },
  args: {
    total: 100,
    pageSize: 10
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WidePages`,`ManyPages`,`LargeSiblingCount`,`Interactive`,`FullFeatures`]}));v();export{d as Default,g as FullFeatures,h as Interactive,m as LargeSiblingCount,p as ManyPages,f as WidePages,_ as __namedExportsOrder,u as default,v as n,s as t};