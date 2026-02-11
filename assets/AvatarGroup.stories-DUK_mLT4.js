import{j as r}from"./jsx-runtime-u17CrQMm.js";import{R as v}from"./iframe-pOyiLBDM.js";import{P as o}from"./index-CNFaK4Wu.js";import{A as i}from"./Avatar-DD5VPLN6.js";const t=({children:s,max:a,size:e,total:x,className:h=""})=>{const d=v.Children.toArray(s),A=x||d.length,g=a?d.slice(0,a):d,f=A-g.length,j=["wim-avatar-group",h].filter(Boolean).join(" ");return r.jsxs("div",{className:j,children:[g.map((u,G)=>{if(v.isValidElement(u)&&u.type===i){const y=u;return v.cloneElement(y,{size:e||y.props.size,key:G})}return u}),f>0&&r.jsxs("span",{className:`wim-avatar-group__excess wim-avatar-group__excess--${e||"md"}`,children:["+",f]})]})};t.propTypes={children:o.node.isRequired,max:o.number,size:o.oneOf(["sm","md","lg"]),total:o.number,className:o.string};t.__docgenInfo={description:"複数のアバターを束ねて表示するためのコンポーネント。",methods:[],displayName:"AvatarGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Avatarコンポーネントのリスト",type:{name:"node"}},max:{required:!1,tsType:{name:"number"},description:"表示する最大のアバター数",type:{name:"number"}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"すべてのアバターに適用するサイズ（Avatar側の指定を上書き）",type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]}},total:{required:!1,tsType:{name:"number"},description:"アバターの総数（実際の要素数より多い場合に指定）",type:{name:"number"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const b={title:"Component/Data Display/AvatarGroup",component:t,parameters:{layout:"centered"}},n=[{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80",initials:"JD"},{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80",initials:"SA"},{src:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&h=80",initials:"ML"},{src:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&h=80",initials:"BW"}],l={render:s=>r.jsx(t,{...s,children:n.map((a,e)=>r.jsx(i,{src:a.src,initials:a.initials},e))})},p={args:{max:3},render:s=>r.jsx(t,{...s,children:n.map((a,e)=>r.jsx(i,{src:a.src,initials:a.initials},e))})},c={render:s=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsx(t,{...s,size:"sm",children:n.map((a,e)=>r.jsx(i,{initials:a.initials,color:"primary"},e))}),r.jsx(t,{...s,size:"md",children:n.map((a,e)=>r.jsx(i,{initials:a.initials,color:"secondary"},e))}),r.jsx(t,{...s,size:"lg",children:n.map((a,e)=>r.jsx(i,{initials:a.initials,color:"neutral"},e))})]})},m={args:{max:2,total:10},render:s=>r.jsx(t,{...s,children:n.slice(0,2).map((a,e)=>r.jsx(i,{src:a.src,initials:a.initials},e))})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>\r
            {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
        </AvatarGroup>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    max: 3
  },
  render: args => <AvatarGroup {...args}>\r
            {users.map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
        </AvatarGroup>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>\r
            <AvatarGroup {...args} size="sm">\r
                {users.map((u, i) => <Avatar key={i} initials={u.initials} color="primary" />)}\r
            </AvatarGroup>\r
            <AvatarGroup {...args} size="md">\r
                {users.map((u, i) => <Avatar key={i} initials={u.initials} color="secondary" />)}\r
            </AvatarGroup>\r
            <AvatarGroup {...args} size="lg">\r
                {users.map((u, i) => <Avatar key={i} initials={u.initials} color="neutral" />)}\r
            </AvatarGroup>\r
        </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    max: 2,
    total: 10
  },
  render: args => <AvatarGroup {...args}>\r
            {users.slice(0, 2).map((u, i) => <Avatar key={i} src={u.src} initials={u.initials} />)}\r
        </AvatarGroup>
}`,...m.parameters?.docs?.source}}};const z=["Default","MaxDisplayed","Sizes","TotalCount"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:l,MaxDisplayed:p,Sizes:c,TotalCount:m,__namedExportsOrder:z,default:b},Symbol.toStringTag,{value:"Module"}));export{D as A,p as M,c as S,m as T};
