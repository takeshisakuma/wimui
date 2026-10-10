"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Icon-TGLZuM2d.js";import{n as d,t as f}from"./Button-DSrkNfg0.js";import{n as p,t as m}from"./Chip-Ce4fGuZT.js";import{a as h,i as g,l as _,n as v,o as y,r as b,s as x,t as S}from"./Dialog-D7wbrqP3.js";import{n as C,t as w}from"./Avatar-BfxkKreA.js";var T=n({Clickable:()=>A,Default:()=>k,Deletable:()=>j,Selected:()=>P,Sizes:()=>I,Variants:()=>F,WithAvatar:()=>M,WithIcon:()=>N,__namedExportsOrder:()=>L,default:()=>O}),E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{E=e(r(),1),a(),o(),C(),p(),l(),_(),d(),D=c(),O={title:`Components/Selection Controls/Chip`,component:m,tags:[],argTypes:{disabled:{control:`boolean`},intent:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`,`neutral`]},variant:{control:`select`,options:[`solid`,`outline`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]},onClick:{control:!1},onDelete:{control:!1}},parameters:{docs:{description:{component:`Selection Controls/Chip Component`}}}},k={render:function(e){let{t}=i(s);return(0,D.jsx)(m,{...e,children:t(`docs_stories_display:story.chip_default`)})}},A={render:function(e){let{t}=i(s);return(0,D.jsx)(m,{...e,onClick:e=>console.log(`Chip clicked`,e),children:t(`docs_stories_display:story.chip_clickable`)})}},j={render:function(e){let{t}=i(s),[n,r]=(0,E.useState)(!1);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(m,{...e,onDelete:()=>r(!0),children:t(`docs_stories_display:story.chip_deletable`)}),(0,D.jsx)(v,{open:n,onOpenChange:r,children:(0,D.jsxs)(b,{children:[(0,D.jsxs)(y,{children:[(0,D.jsx)(x,{children:t(`docs_stories_display:story.dialog_confirm_title`)}),(0,D.jsx)(g,{children:t(`docs_stories_display:story.dialog_confirm_desc`)})]}),(0,D.jsxs)(h,{style:{flexDirection:`row`,justifyContent:`flex-end`,gap:`8px`},children:[(0,D.jsx)(S,{asChild:!0,children:(0,D.jsx)(f,{variant:`outline`,children:t(`docs_stories_display:story.dialog_cancel`)})}),(0,D.jsx)(f,{variant:`solid`,intent:`danger`,onClick:()=>r(!1),children:t(`docs_stories_display:story.dialog_confirm`)})]})]})})]})}},M={render:function(e){let{t}=i(s);return(0,D.jsx)(m,{...e,avatar:(0,D.jsx)(w,{initials:`HI`,size:`sm`}),children:t(`story.chip_sample_name`)})}},N={render:function(e){let{t}=i(s);return(0,D.jsx)(m,{...e,icon:(0,D.jsx)(u,{name:`CircleIcon`,size:`sm`}),children:t(`docs_stories_inputs:story.select_opt4`)})}},P={render:function(e){let{t}=i(s);return(0,D.jsx)(m,{...e,selected:!0,onClick:()=>{},children:t(`docs_stories_display:story.chip_selected`)})}},F={render:function(e){let{t}=i(s);return(0,D.jsxs)(`div`,{style:{display:`flex`,gap:`10px`},children:[(0,D.jsx)(m,{...e,variant:`solid`,onClick:()=>{},children:t(`docs_stories_display:story.chip_solid`)}),(0,D.jsx)(m,{...e,variant:`outline`,onClick:()=>{},children:t(`docs_stories_display:story.chip_outline`)}),(0,D.jsx)(m,{...e,variant:`subtle`,onClick:()=>{},children:t(`docs_stories_display:story.chip_subtle`)}),(0,D.jsx)(m,{...e,variant:`outline`,selected:!0,onClick:()=>{},children:t(`docs_stories_display:story.chip_selected_label`)})]})}},I={render:function(e){let{t}=i(s);return(0,D.jsx)(`div`,{style:{display:`flex`,gap:`var(--wim-spacing-md)`,alignItems:`center`},children:[`sm`,`md`,`lg`].map(n=>(0,D.jsx)(m,{...e,size:n,children:t(`docs_stories_display:story.chip_default`)},n))})}},L=[`Default`,`Clickable`,`Deletable`,`WithAvatar`,`WithIcon`,`Selected`,`Variants`,`Sizes`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args}>{t("docs_stories_display:story.chip_default")}</Chip>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} onClick={(e: React.MouseEvent) => console.log("Chip clicked", e)}>
        {t("docs_stories_display:story.chip_clickable")}
      </Chip>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    return <>
        <Chip {...args} onDelete={() => setOpen(true)}>
          {t("docs_stories_display:story.chip_deletable")}
        </Chip>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("docs_stories_display:story.dialog_confirm_title")}</DialogTitle>
              <DialogDescription>
                {t("docs_stories_display:story.dialog_confirm_desc")}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "8px"
          }}>
              <DialogClose asChild>
                <Button variant="outline">{t("docs_stories_display:story.dialog_cancel")}</Button>
              </DialogClose>
              <Button variant="solid" intent="danger" onClick={() => setOpen(false)}>
                {t("docs_stories_display:story.dialog_confirm")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} avatar={<Avatar initials="HI" size="sm" />}>{t("story.chip_sample_name")}</Chip>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} icon={<Icon name="CircleIcon" size="sm" />}>
        {t("docs_stories_inputs:story.select_opt4")}
      </Chip>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} selected={true} onClick={() => {}}>{t("docs_stories_display:story.chip_selected")}</Chip>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      gap: "10px"
    }}>
        <Chip {...args} variant="solid" onClick={() => {}}>{t("docs_stories_display:story.chip_solid")}</Chip>
        <Chip {...args} variant="outline" onClick={() => {}}>{t("docs_stories_display:story.chip_outline")}</Chip>
        {/* subtle は 3 つの variant のうちここだけ**どのストーリーにも出ていなかった**。
            Badge と Tag は写っているので、subtle を変えたとき Chip だけ VRT が
            何も言わない状態だった。 */}
        <Chip {...args} variant="subtle" onClick={() => {}}>{t("docs_stories_display:story.chip_subtle")}</Chip>
        <Chip {...args} variant="outline" selected onClick={() => {}}>
          {t("docs_stories_display:story.chip_selected_label")}
        </Chip>
      </div>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      gap: "var(--wim-spacing-md)",
      alignItems: "center"
    }}>
        {(["sm", "md", "lg"] as const).map(size => <Chip key={size} {...args} size={size}>{t("docs_stories_display:story.chip_default")}</Chip>)}
      </div>;
  }
}`,...I.parameters?.docs?.source}}}})))()}export{P as a,M as c,j as i,R as l,A as n,I as o,k as r,F as s,T as t};