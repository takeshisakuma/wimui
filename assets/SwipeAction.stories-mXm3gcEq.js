"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{n as l,t as u}from"./Stack-z584y6QE.js";import{n as d,t as f}from"./Card-BT1d9WN9.js";import{n as p,t as m}from"./Button-vRcm9ObM.js";import{n as h,t as g}from"./Text-CLDfz7UT.js";import{a as _,i as v,l as y,n as b,o as x,r as S,s as C}from"./Dialog-DWvm-Ogx.js";import{r as w,t as T}from"./List-h25x1z7b.js";import{i as E,n as D,r as O,t as k}from"./SwipeAction-UTT0a2v5.js";var A=e({Default:()=>F,ExclusiveList:()=>L,MultipleActions:()=>I,__namedExportsOrder:()=>R,default:()=>N}),j,M,N,P,F,I,L,R,z=t((()=>{j=n(r(),1),s(),a(),D(),E(),w(),d(),h(),l(),y(),p(),M=o(),N={title:`Components/Utilities/SwipeAction`,component:k},P=({title:e,subtitle:t})=>(0,M.jsx)(f,{padding:`md`,style:{borderRadius:0,border:`none`,borderBottom:`1px solid var(--wim-color-border)`},children:(0,M.jsxs)(u,{gap:`xs`,children:[(0,M.jsx)(g,{weight:`bold`,children:e}),(0,M.jsx)(g,{size:`sm`,color:`text-tertiary`,children:t})]})}),F={render:function(){let{t:e}=i(c),[t,n]=(0,j.useState)(!1),[r,a]=(0,j.useState)(``),o=(0,j.useRef)(null),s=e=>{a(e),n(!0)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(k,{ref:o,closeOnAction:!1,leftActions:[{icon:`CheckIcon`,label:e(`common.done`),intent:`success`,onClick:()=>s(`Done`)}],rightActions:[{icon:`EditIcon`,label:e(`action.edit`),intent:`primary`,onClick:()=>s(`Edit`)},{icon:`TrashIcon`,label:e(`action.delete`),intent:`danger`,onClick:()=>s(`Delete`)}],children:(0,M.jsx)(P,{title:e(`story.swipeaction_swipe_me`),subtitle:e(`story.swipeaction_subtitle`)})}),(0,M.jsx)(b,{open:t,onOpenChange:n,children:(0,M.jsxs)(S,{children:[(0,M.jsxs)(x,{children:[(0,M.jsx)(C,{children:e(`story.swipe_confirm_title`)}),(0,M.jsx)(v,{children:e(`story.swipe_confirm_desc`,{action:r})})]}),(0,M.jsx)(_,{children:(0,M.jsxs)(u,{direction:`row`,gap:`sm`,justify:`end`,style:{width:`100%`},children:[(0,M.jsx)(m,{variant:`ghost`,onClick:()=>n(!1),children:e(`action.close`)}),(0,M.jsx)(m,{variant:`solid`,intent:`default`,onClick:()=>{o.current?.close(),n(!1)},children:`OK`})]})})]})})]})}},I={render:function(){let{t:e}=i(c),[t,n]=(0,j.useState)(!1),[r,a]=(0,j.useState)(``),o=(0,j.useRef)(null),s=e=>{a(e),n(!0)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(k,{ref:o,closeOnAction:!1,leftActions:[{icon:`BellIcon`,label:`Alert`,intent:`warning`,onClick:()=>s(`Alert`)},{icon:`EmailIcon`,label:`Archive`,intent:`neutral`,onClick:()=>s(`Archive`)}],rightActions:[{icon:`TrashIcon`,label:e(`action.delete`),intent:`danger`,onClick:()=>s(`Delete`)}],children:(0,M.jsx)(P,{title:e(`story.swipeaction_multiple`),subtitle:e(`story.swipe_subtitle_both`)})}),(0,M.jsx)(b,{open:t,onOpenChange:n,children:(0,M.jsxs)(S,{children:[(0,M.jsxs)(x,{children:[(0,M.jsx)(C,{children:e(`story.swipe_exec_title`)}),(0,M.jsx)(v,{children:e(`story.swipe_exec_desc`,{action:r})})]}),(0,M.jsx)(_,{children:(0,M.jsxs)(u,{direction:`row`,gap:`sm`,justify:`end`,style:{width:`100%`},children:[(0,M.jsx)(m,{variant:`ghost`,onClick:()=>n(!1),children:e(`action.cancel`)}),(0,M.jsx)(m,{variant:`solid`,intent:`default`,onClick:()=>{o.current?.close(),n(!1)},children:e(`action.confirm`)})]})})]})})]})}},L={render:function(){let{t:e}=i(c),[t,n]=(0,j.useState)(!1),[r,a]=(0,j.useState)(null),o=(0,j.useRef)({}),s=(e,t)=>{a({id:e,action:t}),n(!0)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(O,{exclusive:!0,children:(0,M.jsx)(T,{children:[1,2,3,4,5].map(t=>(0,M.jsx)(k,{as:`li`,ref:e=>{o.current[t]=e},closeOnAction:!1,leftActions:[{icon:`CheckIcon`,label:`Start`,onClick:()=>s(t,`In Progress`),intent:`success`}],rightActions:[{icon:`BellIcon`,label:`Hold`,onClick:()=>s(t,`On Hold`),intent:`warning`},{icon:`TrashIcon`,label:`Cancel`,onClick:()=>s(t,`Cancelled`),intent:`danger`}],children:(0,M.jsx)(P,{title:`Task ${t}`,subtitle:e(`story.swipe_subtitle_exclusive`)})},t))})}),(0,M.jsx)(b,{open:t,onOpenChange:n,children:(0,M.jsxs)(S,{children:[(0,M.jsxs)(x,{children:[(0,M.jsx)(C,{children:e(`story.swipe_update_title`)}),(0,M.jsx)(v,{children:e(`story.swipe_update_desc`,{id:r?.id,action:r?.action})})]}),(0,M.jsx)(_,{children:(0,M.jsxs)(u,{direction:`row`,gap:`sm`,justify:`end`,style:{width:`100%`},children:[(0,M.jsx)(m,{variant:`ghost`,onClick:()=>n(!1),children:e(`action.cancel`)}),(0,M.jsx)(m,{variant:`solid`,intent:r?.action===`Cancelled`?`danger`:`default`,onClick:()=>{r&&(console.log(`Updated Task ${r.id} to ${r.action}`),o.current[r.id]?.close()),n(!1)},children:e(`action.confirm`)})]})})]})})]})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState<string>("");
    const swipeActionRef = useRef<SwipeActionRef>(null);
    const handleAction = (label: string) => {
      setSelectedAction(label);
      setDialogOpen(true);
    };
    return <>
        <SwipeAction ref={swipeActionRef} closeOnAction={false} leftActions={[{
        icon: "CheckIcon",
        label: t("common.done"),
        intent: "success",
        onClick: () => handleAction("Done")
      }]} rightActions={[{
        icon: "EditIcon",
        label: t("action.edit"),
        intent: "primary",
        onClick: () => handleAction("Edit")
      }, {
        icon: "TrashIcon",
        label: t("action.delete"),
        intent: "danger",
        onClick: () => handleAction("Delete")
      }]}>
          <ListItem title={t("story.swipeaction_swipe_me")} subtitle={t("story.swipeaction_subtitle")} />
        </SwipeAction>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("story.swipe_confirm_title")}</DialogTitle>
              <DialogDescription>
                {t("story.swipe_confirm_desc", {
                action: selectedAction
              })}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Stack direction="row" gap="sm" justify="end" style={{
              width: "100%"
            }}>
                <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                  {t("action.close")}
                </Button>
                <Button variant="solid" intent="default" onClick={() => {
                swipeActionRef.current?.close();
                setDialogOpen(false);
              }}>
                  OK
                </Button>
              </Stack>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState<string>("");
    const swipeActionRef = useRef<SwipeActionRef>(null);
    const handleAction = (label: string) => {
      setSelectedAction(label);
      setDialogOpen(true);
    };
    return <>
        <SwipeAction ref={swipeActionRef} closeOnAction={false} leftActions={[{
        icon: "BellIcon",
        label: "Alert",
        intent: "warning",
        onClick: () => handleAction("Alert")
      }, {
        icon: "EmailIcon",
        label: "Archive",
        intent: "neutral",
        onClick: () => handleAction("Archive")
      }]} rightActions={[{
        icon: "TrashIcon",
        label: t("action.delete"),
        intent: "danger",
        onClick: () => handleAction("Delete")
      }]}>
          <ListItem title={t("story.swipeaction_multiple")} subtitle={t("story.swipe_subtitle_both")} />
        </SwipeAction>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("story.swipe_exec_title")}</DialogTitle>
              <DialogDescription>
                {t("story.swipe_exec_desc", {
                action: selectedAction
              })}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Stack direction="row" gap="sm" justify="end" style={{
              width: "100%"
            }}>
                <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                  {t("action.cancel")}
                </Button>
                <Button variant="solid" intent="default" onClick={() => {
                swipeActionRef.current?.close();
                setDialogOpen(false);
              }}>
                  {t("action.confirm")}
                </Button>
              </Stack>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{
      id: number;
      action: string;
    } | null>(null);
    const swipeActionRefs = useRef<Record<number, SwipeActionRef | null>>({});
    const handleAction = (id: number, action: string) => {
      setSelectedItem({
        id,
        action
      });
      setDialogOpen(true);
    };
    const confirmAction = () => {
      if (selectedItem) {
        console.log(\`Updated Task \${selectedItem.id} to \${selectedItem.action}\`);
        swipeActionRefs.current[selectedItem.id]?.close();
      }
      setDialogOpen(false);
    };
    return <>
        <SwipeableList exclusive>
          <List>
            {[1, 2, 3, 4, 5].map(i => <SwipeAction key={i} as="li" ref={el => {
            swipeActionRefs.current[i] = el;
          }} closeOnAction={false} leftActions={[{
            icon: "CheckIcon",
            label: "Start",
            onClick: () => handleAction(i, "In Progress"),
            intent: "success"
          }]} rightActions={[{
            icon: "BellIcon",
            label: "Hold",
            onClick: () => handleAction(i, "On Hold"),
            intent: "warning"
          }, {
            icon: "TrashIcon",
            label: "Cancel",
            onClick: () => handleAction(i, "Cancelled"),
            intent: "danger"
          }]}>
                <ListItem title={\`Task \${i}\`} subtitle={t("story.swipe_subtitle_exclusive")} />
              </SwipeAction>)}
          </List>
        </SwipeableList>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("story.swipe_update_title")}</DialogTitle>
              <DialogDescription>
                {t("story.swipe_update_desc", {
                id: selectedItem?.id,
                action: selectedItem?.action
              })}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Stack direction="row" gap="sm" justify="end" style={{
              width: "100%"
            }}>
                <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                  {t("action.cancel")}
                </Button>
                <Button variant="solid" intent={selectedItem?.action === "Cancelled" ? "danger" : "default"} onClick={confirmAction}>
                  {t("action.confirm")}
                </Button>
              </Stack>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>;
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`MultipleActions`,`ExclusiveList`]}));z();export{F as Default,L as ExclusiveList,I as MultipleActions,R as __namedExportsOrder,N as default,z as n,A as t};