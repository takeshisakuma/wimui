"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Stack-D0pTsuU-.js";import{n as d,t as f}from"./Card-BX8yw3HV.js";import{n as p,t as m}from"./Button-DrO46Brn.js";import{n as h,t as g}from"./Text-8oARqUeB.js";import{a as _,i as v,l as y,n as b,o as x,r as S,s as C}from"./Dialog-CCxekzaR.js";import{r as w,t as T}from"./List-Dgl_OPk4.js";import{i as E,n as D,r as O,t as k}from"./SwipeAction-BbwjnkXo.js";var A=n({Default:()=>F,ExclusiveList:()=>R,FullSwipe:()=>L,MultipleActions:()=>I,__namedExportsOrder:()=>z,default:()=>N}),j,M,N,P,F,I,L,R,z;function B(){return(B=t((()=>{j=e(r(),1),a(),o(),D(),E(),w(),d(),h(),l(),y(),p(),M=c(),N={title:`Components/Utilities/SwipeAction`,component:k},P=({title:e,subtitle:t})=>(0,M.jsx)(f,{padding:`md`,style:{borderRadius:0,border:`none`,borderBottom:`1px solid var(--wim-color-border)`},children:(0,M.jsxs)(u,{gap:`xs`,children:[(0,M.jsx)(g,{weight:`bold`,children:e}),(0,M.jsx)(g,{size:`sm`,color:`text-tertiary`,children:t})]})}),F={render:function(){let{t:e}=i(s),[t,n]=(0,j.useState)(!1),[r,a]=(0,j.useState)(``),o=(0,j.useRef)(null),c=e=>{a(e),n(!0)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(k,{ref:o,closeOnAction:!1,leftActions:[{icon:`CheckIcon`,label:e(`common.done`),intent:`success`,onClick:()=>c(`Done`)}],rightActions:[{icon:`EditIcon`,label:e(`action.edit`),intent:`primary`,onClick:()=>c(`Edit`)},{icon:`TrashIcon`,label:e(`action.delete`),intent:`danger`,onClick:()=>c(`Delete`)}],children:(0,M.jsx)(P,{title:e(`story.swipeaction_swipe_me`),subtitle:e(`story.swipeaction_subtitle`)})}),(0,M.jsx)(b,{open:t,onOpenChange:n,children:(0,M.jsxs)(S,{children:[(0,M.jsxs)(x,{children:[(0,M.jsx)(C,{children:e(`story.swipe_confirm_title`)}),(0,M.jsx)(v,{children:e(`story.swipe_confirm_desc`,{action:r})})]}),(0,M.jsx)(_,{children:(0,M.jsxs)(u,{direction:`row`,gap:`sm`,justify:`end`,style:{width:`100%`},children:[(0,M.jsx)(m,{variant:`ghost`,onClick:()=>n(!1),children:e(`action.close`)}),(0,M.jsx)(m,{variant:`solid`,intent:`default`,onClick:()=>{o.current?.close(),n(!1)},children:`OK`})]})})]})})]})}},I={render:function(){let{t:e}=i(s),[t,n]=(0,j.useState)(!1),[r,a]=(0,j.useState)(``),o=(0,j.useRef)(null),c=e=>{a(e),n(!0)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(k,{ref:o,closeOnAction:!1,leftActions:[{icon:`BellIcon`,label:`Alert`,intent:`warning`,onClick:()=>c(`Alert`)},{icon:`EmailIcon`,label:`Archive`,intent:`neutral`,onClick:()=>c(`Archive`)}],rightActions:[{icon:`TrashIcon`,label:e(`action.delete`),intent:`danger`,onClick:()=>c(`Delete`)}],children:(0,M.jsx)(P,{title:e(`story.swipeaction_multiple`),subtitle:e(`story.swipe_subtitle_both`)})}),(0,M.jsx)(b,{open:t,onOpenChange:n,children:(0,M.jsxs)(S,{children:[(0,M.jsxs)(x,{children:[(0,M.jsx)(C,{children:e(`story.swipe_exec_title`)}),(0,M.jsx)(v,{children:e(`story.swipe_exec_desc`,{action:r})})]}),(0,M.jsx)(_,{children:(0,M.jsxs)(u,{direction:`row`,gap:`sm`,justify:`end`,style:{width:`100%`},children:[(0,M.jsx)(m,{variant:`ghost`,onClick:()=>n(!1),children:e(`action.cancel`)}),(0,M.jsx)(m,{variant:`solid`,intent:`default`,onClick:()=>{o.current?.close(),n(!1)},children:e(`action.confirm`)})]})})]})})]})}},L={render:function(){let{t:e}=i(s),t=[1,2,3,4].map(t=>({id:t,subject:e(`story.swipe_full_msg_${t}`)})),[n,r]=(0,j.useState)(t),[a,o]=(0,j.useState)([]),[c,l]=(0,j.useState)(null),d=(e,t)=>{let i=n.findIndex(e=>e.id===t);i<0||(l({kind:e,item:n[i],index:i}),r(n.filter(e=>e.id!==t)))};return(0,M.jsxs)(u,{gap:`md`,children:[(0,M.jsx)(O,{children:(0,M.jsx)(T,{children:n.map(t=>(0,M.jsx)(k,{as:`li`,fullSwipe:`both`,leftActions:[{icon:`EmailIcon`,label:e(`story.swipe_full_archive`),intent:`success`,onClick:()=>d(`archived`,t.id)}],rightActions:[{icon:`StarIcon`,label:e(`story.swipe_full_star`),intent:`warning`,onClick:()=>o(e=>e.includes(t.id)?e.filter(e=>e!==t.id):[...e,t.id])},{icon:`TrashIcon`,label:e(`action.delete`),intent:`danger`,onClick:()=>d(`deleted`,t.id)}],children:(0,M.jsx)(P,{title:t.subject,subtitle:e(a.includes(t.id)?`story.swipe_full_starred`:`story.swipe_full_subtitle`)})},t.id))})}),(0,M.jsxs)(u,{direction:`row`,gap:`sm`,align:`center`,"aria-live":`polite`,children:[c&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g,{size:`sm`,children:e(c.kind===`archived`?`story.swipe_full_archived`:`story.swipe_full_deleted`,{subject:c.item.subject})}),(0,M.jsx)(m,{size:`sm`,variant:`ghost`,onClick:()=>{if(!c)return;let e=[...n];e.splice(c.index,0,c.item),r(e),l(null)},children:e(`story.swipe_full_undo`)})]}),!c&&n.length===0&&(0,M.jsx)(g,{size:`sm`,children:e(`story.swipe_full_empty`)})]})]})}},R={render:function(){let{t:e}=i(s),[t,n]=(0,j.useState)(!1),[r,a]=(0,j.useState)(null),o=(0,j.useRef)({}),c=(e,t)=>{a({id:e,action:t}),n(!0)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(O,{exclusive:!0,children:(0,M.jsx)(T,{children:[1,2,3,4,5].map(t=>(0,M.jsx)(k,{as:`li`,ref:e=>{o.current[t]=e},closeOnAction:!1,leftActions:[{icon:`CheckIcon`,label:`Start`,onClick:()=>c(t,`In Progress`),intent:`success`}],rightActions:[{icon:`BellIcon`,label:`Hold`,onClick:()=>c(t,`On Hold`),intent:`warning`},{icon:`TrashIcon`,label:`Cancel`,onClick:()=>c(t,`Cancelled`),intent:`danger`}],children:(0,M.jsx)(P,{title:`Task ${t}`,subtitle:e(`story.swipe_subtitle_exclusive`)})},t))})}),(0,M.jsx)(b,{open:t,onOpenChange:n,children:(0,M.jsxs)(S,{children:[(0,M.jsxs)(x,{children:[(0,M.jsx)(C,{children:e(`story.swipe_update_title`)}),(0,M.jsx)(v,{children:e(`story.swipe_update_desc`,{id:r?.id,action:r?.action})})]}),(0,M.jsx)(_,{children:(0,M.jsxs)(u,{direction:`row`,gap:`sm`,justify:`end`,style:{width:`100%`},children:[(0,M.jsx)(m,{variant:`ghost`,onClick:()=>n(!1),children:e(`action.cancel`)}),(0,M.jsx)(m,{variant:`solid`,intent:r?.action===`Cancelled`?`danger`:`default`,onClick:()=>{r&&(console.log(`Updated Task ${r.id} to ${r.action}`),o.current[r.id]?.close()),n(!1)},children:e(`action.confirm`)})]})})]})})]})}},z=[`Default`,`MultipleActions`,`FullSwipe`,`ExclusiveList`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
    const initial = [1, 2, 3, 4].map(i => ({
      id: i,
      subject: t(\`story.swipe_full_msg_\${i}\`)
    }));
    const [messages, setMessages] = useState(initial);
    const [starred, setStarred] = useState<number[]>([]);
    const [last, setLast] = useState<{
      kind: "archived" | "deleted";
      item: (typeof initial)[number];
      index: number;
    } | null>(null);
    const remove = (kind: "archived" | "deleted", id: number) => {
      const index = messages.findIndex(m => m.id === id);
      if (index < 0) return;
      setLast({
        kind,
        item: messages[index],
        index
      });
      setMessages(messages.filter(m => m.id !== id));
    };
    const undo = () => {
      if (!last) return;
      const next = [...messages];
      next.splice(last.index, 0, last.item);
      setMessages(next);
      setLast(null);
    };
    return <Stack gap="md">
        <SwipeableList>
          <List>
            {messages.map(m => <SwipeAction key={m.id} as="li" fullSwipe="both" leftActions={[{
            icon: "EmailIcon",
            label: t("story.swipe_full_archive"),
            intent: "success",
            onClick: () => remove("archived", m.id)
          }]} rightActions={[{
            icon: "StarIcon",
            label: t("story.swipe_full_star"),
            intent: "warning",
            onClick: () => setStarred(s => s.includes(m.id) ? s.filter(x => x !== m.id) : [...s, m.id])
          }, {
            icon: "TrashIcon",
            label: t("action.delete"),
            intent: "danger",
            onClick: () => remove("deleted", m.id)
          }]}>
                <ListItem title={m.subject} subtitle={t(starred.includes(m.id) ? "story.swipe_full_starred" : "story.swipe_full_subtitle")} />
              </SwipeAction>)}
          </List>
        </SwipeableList>

        <Stack direction="row" gap="sm" align="center" aria-live="polite">
          {last && <>
              <Text size="sm">
                {t(last.kind === "archived" ? "story.swipe_full_archived" : "story.swipe_full_deleted", {
              subject: last.item.subject
            })}
              </Text>
              <Button size="sm" variant="ghost" onClick={undo}>
                {t("story.swipe_full_undo")}
              </Button>
            </>}
          {!last && messages.length === 0 && <Text size="sm">{t("story.swipe_full_empty")}</Text>}
        </Stack>
      </Stack>;
  }
}`,...L.parameters?.docs?.source},description:{story:"引き切ると外側の端の操作（左は `leftActions[0]`、右は `rightActions` の最後）が\nボタンを押さずに走る。消した行は「元に戻す」で戻せる ── 勢いで消えても取り返せる形にしておく。",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}}})))()}export{B as a,A as i,R as n,L as r,F as t};