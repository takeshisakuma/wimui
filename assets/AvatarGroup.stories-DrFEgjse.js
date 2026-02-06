import{j as r}from"./jsx-runtime-u17CrQMm.js";import{R as v}from"./iframe-D_RwR2Sh.js";import{P as o}from"./index-Dc1hlKoI.js";import{A as i}from"./Avatar-Bqho74D0.js";const s=({children:e,max:a,size:t,total:x,className:h=""})=>{const d=v.Children.toArray(e),A=x||d.length,g=a?d.slice(0,a):d,f=A-g.length,j=["wim-avatar-group",h].filter(Boolean).join(" ");return r.jsxs("div",{className:j,children:[g.map((u,G)=>{if(v.isValidElement(u)&&u.type===i){const y=u;return v.cloneElement(y,{size:t||y.props.size,key:G})}return u}),f>0&&r.jsxs("span",{className:`wim-avatar-group__excess wim-avatar-group__excess--${t||"md"}`,children:["+",f]})]})};s.propTypes={children:o.node.isRequired,max:o.number,size:o.oneOf(["sm","md","lg"]),total:o.number,className:o.string};s.__docgenInfo={description:"複数のアバターを束ねて表示するためのコンポーネント。",methods:[],displayName:"AvatarGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Avatarコンポーネントのリスト",type:{name:"node"}},max:{required:!1,tsType:{name:"number"},description:"表示する最大のアバター数",type:{name:"number"}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"すべてのアバターに適用するサイズ（Avatar側の指定を上書き）",type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]}},total:{required:!1,tsType:{name:"number"},description:"アバターの総数（実際の要素数より多い場合に指定）",type:{name:"number"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const b={title:"Component/Data Display/AvatarGroup",component:s,parameters:{layout:"centered"}},n=[{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80",initials:"JD"},{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80",initials:"SA"},{src:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&h=80",initials:"ML"},{src:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&h=80",initials:"BW"}],l={render:e=>r.jsx(s,{...e,children:n.map((a,t)=>r.jsx(i,{src:a.src,initials:a.initials},t))})},p={args:{max:3},render:e=>r.jsx(s,{...e,children:n.map((a,t)=>r.jsx(i,{src:a.src,initials:a.initials},t))})},c={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsx(s,{size:"sm",children:n.map((e,a)=>r.jsx(i,{initials:e.initials,color:"primary"},a))}),r.jsx(s,{size:"md",children:n.map((e,a)=>r.jsx(i,{initials:e.initials,color:"secondary"},a))}),r.jsx(s,{size:"lg",children:n.map((e,a)=>r.jsx(i,{initials:e.initials,color:"neutral"},a))})]})},m={args:{max:2,total:10},render:e=>r.jsx(s,{...e,children:n.slice(0,2).map((a,t)=>r.jsx(i,{src:a.src,initials:a.initials},t))})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>\r
            <AvatarGroup size="sm">\r
                {users.map((u, i) => <Avatar key={i} initials={u.initials} color="primary" />)}\r
            </AvatarGroup>\r
            <AvatarGroup size="md">\r
                {users.map((u, i) => <Avatar key={i} initials={u.initials} color="secondary" />)}\r
            </AvatarGroup>\r
            <AvatarGroup size="lg">\r
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
