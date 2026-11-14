"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./useTranslation-CpMdOj2B.js";import{n as i,t as a}from"./i18nConstants-DbPgW6Wr.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./Stack-SbfzwNKR.js";import{n as l,t as u}from"./VisuallyHidden-BjSR7txC.js";import{n as d,t as f}from"./Button-Drq-Mw-h.js";import{n as p,t as m}from"./OverflowList-MxZIIfB4.js";import{n as h,t as g}from"./Text-D9yqbrao.js";import{n as _,t as v}from"./IconButton-DxQRDsKK.js";import{n as y,t as b}from"./Tag-BVRc793o.js";import{n as x,t as S}from"./Link-BdJIoxyi.js";import{a as C,i as w,r as T,t as E}from"./Popover-sEgDD4SW.js";import{n as D,t as O}from"./Span-BBoXaI1L.js";var k=t({CollapseFromStart:()=>L,ContainerWidths:()=>F,Default:()=>P,__namedExportsOrder:()=>R,default:()=>j}),A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{r(),p(),y(),d(),_(),l(),x(),s(),h(),D(),C(),i(),A=o(),j={title:`Components/Layout/OverflowList`,component:m,parameters:{layout:`centered`},argTypes:{asChild:{control:`boolean`},collapseFrom:{control:`radio`,options:[`end`,`start`]},minVisibleItems:{control:`number`},alwaysRenderOverflow:{control:`boolean`},gap:{control:`select`,options:[`2xs`,`xs`,`sm`,`md`,`lg`]}}},M=[`wifi`,`breakfast`,`parking`,`late_checkout`,`pets`,`shuttle`,`kitchen`,`laundry`],N=e=>{let{t}=n(a),r=M.map(e=>t(`story.overflowlist_amenity_${e}`));return(0,A.jsx)(m,{"aria-label":t(`story.overflowlist_amenities`),role:`group`,...e,items:r,renderItem:e=>(0,A.jsx)(b,{intent:`neutral`,variant:`subtle`,size:`sm`,children:e}),renderOverflow:e=>(0,A.jsxs)(E,{placement:`bottom-start`,children:[(0,A.jsx)(w,{asChild:!0,children:(0,A.jsxs)(f,{size:`sm`,variant:`ghost`,children:[`+`,e.length,(0,A.jsxs)(u,{children:[` `,t(`story.overflowlist_more_amenities`)]})]})}),(0,A.jsx)(T,{children:(0,A.jsx)(c,{gap:`xs`,align:`start`,children:e.map(e=>(0,A.jsx)(b,{intent:`neutral`,variant:`subtle`,size:`sm`,children:e},e))})})]})})},P={render:e=>(0,A.jsx)(`div`,{style:{width:`var(--wim-width-md)`},children:(0,A.jsx)(N,{...e})})},F={render:function(){let{t:e}=n(a);return(0,A.jsx)(c,{gap:`xl`,children:[{token:`var(--wim-width-xl)`,label:`640px`},{token:`var(--wim-width-md)`,label:`320px`},{token:`var(--wim-width-sm)`,label:`180px`}].map(({token:t,label:n})=>(0,A.jsxs)(c,{gap:`xs`,children:[(0,A.jsx)(g,{size:`sm`,color:`text-secondary`,children:e(`story.overflowlist_container_width`,{width:n})}),(0,A.jsx)(`div`,{style:{width:`min(${t}, 100vw - 2rem)`},"data-testid":`overflow-list-${n}`,children:(0,A.jsx)(N,{})})]},n))})}},I=[`shared`,`household`,`year`,`tax`,`receipts`],L={render:function(){let{t:e}=n(a),t=I.map(t=>e(`story.overflowlist_folder_${t}`)),r=t.length-1;return(0,A.jsx)(`nav`,{"aria-label":e(`story.overflowlist_path`),style:{width:`var(--wim-width-md)`},children:(0,A.jsx)(m,{collapseFrom:`start`,minVisibleItems:1,gap:`xs`,items:t,renderItem:(e,t)=>(0,A.jsxs)(O,{size:`sm`,color:t===r?`text-primary`:`text-secondary`,children:[t>0&&(0,A.jsx)(`span`,{"aria-hidden":`true`,children:`/ `}),t===r?(0,A.jsx)(`span`,{"aria-current":`page`,children:e}):(0,A.jsx)(S,{href:`#`,size:`sm`,priority:`secondary`,children:e})]}),renderOverflow:t=>(0,A.jsxs)(E,{placement:`bottom-start`,children:[(0,A.jsx)(w,{asChild:!0,children:(0,A.jsx)(v,{iconName:`MoreHorizontalIcon`,size:`sm`,variant:`ghost`,"aria-label":e(`story.overflowlist_hidden_folders`,{count:t.length})})}),(0,A.jsx)(T,{children:(0,A.jsx)(c,{gap:`xs`,children:t.map(e=>(0,A.jsx)(S,{href:`#`,size:`sm`,priority:`secondary`,children:e},e))})})]})})})}},R=[`Default`,`ContainerWidths`,`CollapseFromStart`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "var(--wim-width-md)"
  }}>
      <AmenityList {...args as Partial<React.ComponentProps<typeof OverflowList<string>>>} />
    </div>
}`,...P.parameters?.docs?.source},description:{story:`宿の一覧の 1 行。幅は器（320px）が決め、入らない設備は「+N」から開いて読む`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack gap="xl">
        {[{
        token: "var(--wim-width-xl)",
        label: "640px"
      }, {
        token: "var(--wim-width-md)",
        label: "320px"
      }, {
        token: "var(--wim-width-sm)",
        label: "180px"
      }].map(({
        token,
        label
      }) => <Stack key={label} gap="xs">
            <Text size="sm" color="text-secondary">
              {t("story.overflowlist_container_width", {
            width: label
          })}
            </Text>
            {/* 狭い画面では、器のほうを画面に収める（640px の器が 390px の画面からはみ出した）。
                100% ではなく画面幅で抑える ── 親の Stack は中身で幅が決まるので、100% が循環し、
                部品の望む幅（全項目の幅）で親が広がって、ブロック全体が左へずれた */}
            <div style={{
          width: \`min(\${token}, 100vw - 2rem)\`
        }} data-testid={\`overflow-list-\${label}\`}>
              <AmenityList />
            </div>
          </Stack>)}
      </Stack>;
  }
}`,...F.parameters?.docs?.source},description:{story:`同じ設備の並びを、3 つの幅の器に置く。畳んだ数と「+N」の数は、幅ごとに一致する`,...F.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const folders = FOLDER_KEYS.map(key => t(\`story.overflowlist_folder_\${key}\`));
    const last = folders.length - 1;
    return <nav aria-label={t("story.overflowlist_path")} style={{
      width: "var(--wim-width-md)"
    }}>
        <OverflowList collapseFrom="start" minVisibleItems={1} gap="xs" items={folders} renderItem={(folder, index) => <Span size="sm" color={index === last ? "text-primary" : "text-secondary"}>
              {index > 0 && <span aria-hidden="true">/ </span>}
              {index === last ? <span aria-current="page">{folder}</span> : <Link href="#" size="sm" priority="secondary">
                  {folder}
                </Link>}
            </Span>} renderOverflow={hidden => <Popover placement="bottom-start">
              <PopoverTrigger asChild>
                <IconButton iconName="MoreHorizontalIcon" size="sm" variant="ghost" aria-label={t("story.overflowlist_hidden_folders", {
            count: hidden.length
          })} />
              </PopoverTrigger>
              <PopoverContent>
                <Stack gap="xs">
                  {hidden.map(folder => <Link key={folder} href="#" size="sm" priority="secondary">
                      {folder}
                    </Link>)}
                </Stack>
              </PopoverContent>
            </Popover>} />
      </nav>;
  }
}`,...L.parameters?.docs?.source},description:{story:`先頭から畳む。今いるフォルダ（最後）を残し、上の階層を「…」にまとめる`,...L.parameters?.docs?.description}}}})))()}export{z as a,k as i,F as n,P as r,L as t};