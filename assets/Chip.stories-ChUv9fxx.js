"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{Ir as l,It as u,t as d}from"./src-CV0le6yM.js";import{t as f}from"./Icon-DKSRBrcV.js";import{t as p}from"./Button-vRcm9ObM.js";import{a as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./Dialog-DWvm-Ogx.js";var x=e({Clickable:()=>E,Default:()=>T,Deletable:()=>D,Selected:()=>A,Variants:()=>j,WithAvatar:()=>O,WithIcon:()=>k,__namedExportsOrder:()=>M,default:()=>w}),S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{S=n(r(),1),s(),a(),d(),C=o(),w={title:`Components/Selection Controls/Chip`,component:l,tags:[],argTypes:{disabled:{control:`boolean`},intent:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`,`neutral`]},variant:{control:`select`,options:[`solid`,`outline`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]},onClick:{control:!1},onDelete:{control:!1}},parameters:{docs:{description:{component:`Selection Controls/Chip Component`}}}},T={render:function(e){let{t}=i(c);return(0,C.jsx)(l,{...e,children:t(`docs_stories_display:story.chip_default`)})}},E={render:function(e){let{t}=i(c);return(0,C.jsx)(l,{...e,onClick:e=>console.log(`Chip clicked`,e),children:t(`docs_stories_display:story.chip_clickable`)})}},D={render:function(e){let{t}=i(c),[n,r]=(0,S.useState)(!1);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l,{...e,onDelete:()=>r(!0),children:t(`docs_stories_display:story.chip_deletable`)}),(0,C.jsx)(g,{open:n,onOpenChange:r,children:(0,C.jsxs)(v,{children:[(0,C.jsxs)(_,{children:[(0,C.jsx)(y,{children:t(`docs_stories_display:story.dialog_confirm_title`)}),(0,C.jsx)(h,{children:t(`docs_stories_display:story.dialog_confirm_desc`)})]}),(0,C.jsxs)(m,{style:{flexDirection:`row`,justifyContent:`flex-end`,gap:`8px`},children:[(0,C.jsx)(b,{asChild:!0,children:(0,C.jsx)(p,{variant:`outline`,children:t(`docs_stories_display:story.dialog_cancel`)})}),(0,C.jsx)(p,{variant:`solid`,intent:`danger`,onClick:()=>r(!1),children:t(`docs_stories_display:story.dialog_confirm`)})]})]})})]})}},O={render:function(e){let{t}=i(c);return(0,C.jsx)(l,{...e,avatar:(0,C.jsx)(u,{initials:`HI`,size:`sm`}),children:t(`story.chip_sample_name`)})}},k={render:function(e){let{t}=i(c);return(0,C.jsx)(l,{...e,icon:(0,C.jsx)(f,{name:`CircleIcon`,size:`sm`}),children:t(`docs_stories_inputs:story.select_opt4`)})}},A={render:function(e){let{t}=i(c);return(0,C.jsx)(l,{...e,selected:!0,onClick:()=>{},children:t(`docs_stories_display:story.chip_selected`)})}},j={render:function(e){let{t}=i(c);return(0,C.jsxs)(`div`,{style:{display:`flex`,gap:`10px`},children:[(0,C.jsx)(l,{...e,variant:`solid`,onClick:()=>{},children:t(`docs_stories_display:story.chip_solid`)}),(0,C.jsx)(l,{...e,variant:`outline`,onClick:()=>{},children:t(`docs_stories_display:story.chip_outline`)}),(0,C.jsx)(l,{...e,variant:`subtle`,onClick:()=>{},children:t(`docs_stories_display:story.chip_subtle`)}),(0,C.jsx)(l,{...e,variant:`outline`,selected:!0,onClick:()=>{},children:t(`docs_stories_display:story.chip_selected_label`)})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args}>{t("docs_stories_display:story.chip_default")}</Chip>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} onClick={(e: React.MouseEvent) => console.log("Chip clicked", e)}>
        {t("docs_stories_display:story.chip_clickable")}
      </Chip>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} avatar={<Avatar initials="HI" size="sm" />}>{t("story.chip_sample_name")}</Chip>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} icon={<Icon name="CircleIcon" size="sm" />}>
        {t("docs_stories_inputs:story.select_opt4")}
      </Chip>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} selected={true} onClick={() => {}}>{t("docs_stories_display:story.chip_selected")}</Chip>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Clickable`,`Deletable`,`WithAvatar`,`WithIcon`,`Selected`,`Variants`]}));N();export{E as Clickable,T as Default,D as Deletable,A as Selected,j as Variants,O as WithAvatar,k as WithIcon,M as __namedExportsOrder,w as default,N as n,x as t};