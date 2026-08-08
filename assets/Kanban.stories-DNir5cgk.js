"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{ct as l,t as u}from"./src-BE5jBQ9L.js";var d=e({Default:()=>h,MobileUI:()=>_,WithDisabledCard:()=>g,__namedExportsOrder:()=>v,default:()=>m}),f,p,m,h,g,_,v,y=t((()=>{f=n(r(),1),s(),a(),u(),p=o(),m={title:`Components/Data Structures/Kanban`,component:l},h={render:function(){let{t:e}=i(c),t={"card-1":e(`story.kanban_card_design`),"card-2":e(`story.kanban_card_research`),"card-3":e(`story.kanban_card_develop`),"card-4":e(`story.kanban_card_review`),"card-5":e(`story.kanban_card_deploy`),"card-6":e(`story.kanban_card_done1`)},[n,r]=(0,f.useState)({todo:[`card-1`,`card-2`],inProgress:[`card-3`],review:[`card-4`],done:[`card-5`,`card-6`]});return(0,p.jsxs)(l,{onCardMove:(e,t,n)=>{r(r=>{let i={...r};return i[t]=r[t].filter(t=>t!==e),i[n]=[...r[n],e],i})},children:[(0,p.jsx)(l.Column,{id:`todo`,title:e(`story.kanban_col_todo`),cardCount:n.todo.length,children:n.todo.map(e=>(0,p.jsx)(l.Card,{id:e,children:t[e]},e))}),(0,p.jsx)(l.Column,{id:`inProgress`,title:e(`story.kanban_col_in_progress`),cardCount:n.inProgress.length,children:n.inProgress.map(e=>(0,p.jsx)(l.Card,{id:e,children:t[e]},e))}),(0,p.jsx)(l.Column,{id:`review`,title:e(`story.kanban_col_review`),cardCount:n.review.length,children:n.review.map(e=>(0,p.jsx)(l.Card,{id:e,children:t[e]},e))}),(0,p.jsx)(l.Column,{id:`done`,title:e(`story.kanban_col_done`),cardCount:n.done.length,children:n.done.map(e=>(0,p.jsx)(l.Card,{id:e,children:t[e]},e))})]})}},g={render:function(){let{t:e}=i(c),t={"card-1":e(`story.kanban_card_design`),"card-2":e(`story.kanban_card_locked`),"card-3":e(`story.kanban_card_done1`)},[n,r]=(0,f.useState)({todo:[`card-1`,`card-2`],done:[`card-3`]});return(0,p.jsxs)(l,{onCardMove:(e,t,n)=>{r(r=>{let i={...r};return i[t]=r[t].filter(t=>t!==e),i[n]=[...r[n],e],i})},children:[(0,p.jsx)(l.Column,{id:`todo`,title:e(`story.kanban_col_todo`),cardCount:n.todo.length,children:n.todo.map(e=>(0,p.jsx)(l.Card,{id:e,disabled:e===`card-2`,children:t[e]},e))}),(0,p.jsx)(l.Column,{id:`done`,title:e(`story.kanban_col_done`),cardCount:n.done.length,children:n.done.map(e=>(0,p.jsx)(l.Card,{id:e,disabled:e===`card-2`,children:t[e]},e))})]})}},_={render:function(){let{t:e}=i(c),[t,n]=(0,f.useState)({todo:[`card-1`,`card-2`],inProgress:[`card-3`],done:[`card-4`]}),r={"card-1":e(`story.kanban_card_design`),"card-2":e(`story.kanban_card_research`),"card-3":e(`story.kanban_card_develop`),"card-4":e(`story.kanban_card_done1`)};return(0,p.jsxs)(l,{onCardMove:(e,t,r)=>{n(n=>{let i={...n};return i[t]=n[t].filter(t=>t!==e),i[r]=[...n[r],e],i})},forceMobileUI:!0,children:[(0,p.jsx)(l.Column,{id:`todo`,title:e(`story.kanban_col_todo`),cardCount:t.todo.length,children:t.todo.map(e=>(0,p.jsx)(l.Card,{id:e,children:r[e]},e))}),(0,p.jsx)(l.Column,{id:`inProgress`,title:e(`story.kanban_col_in_progress`),cardCount:t.inProgress.length,children:t.inProgress.map(e=>(0,p.jsx)(l.Card,{id:e,children:r[e]},e))}),(0,p.jsx)(l.Column,{id:`done`,title:e(`story.kanban_col_done`),cardCount:t.done.length,children:t.done.map(e=>(0,p.jsx)(l.Card,{id:e,children:r[e]},e))})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const cardLabels: Record<string, string> = {
      "card-1": t("story.kanban_card_design"),
      "card-2": t("story.kanban_card_research"),
      "card-3": t("story.kanban_card_develop"),
      "card-4": t("story.kanban_card_review"),
      "card-5": t("story.kanban_card_deploy"),
      "card-6": t("story.kanban_card_done1")
    };
    const [columns, setColumns] = useState<Columns>({
      todo: ["card-1", "card-2"],
      inProgress: ["card-3"],
      review: ["card-4"],
      done: ["card-5", "card-6"]
    });
    const handleCardMove = (cardId: string, fromColumnId: string, toColumnId: string) => {
      setColumns(prev => {
        const next = {
          ...prev
        };
        next[fromColumnId] = prev[fromColumnId].filter(id => id !== cardId);
        next[toColumnId] = [...prev[toColumnId], cardId];
        return next;
      });
    };
    return <KanbanBoard onCardMove={handleCardMove}>
        <KanbanBoard.Column id="todo" title={t("story.kanban_col_todo")} cardCount={columns.todo.length}>
          {columns.todo.map(id => <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>)}
        </KanbanBoard.Column>
        <KanbanBoard.Column id="inProgress" title={t("story.kanban_col_in_progress")} cardCount={columns.inProgress.length}>
          {columns.inProgress.map(id => <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>)}
        </KanbanBoard.Column>
        <KanbanBoard.Column id="review" title={t("story.kanban_col_review")} cardCount={columns.review.length}>
          {columns.review.map(id => <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>)}
        </KanbanBoard.Column>
        <KanbanBoard.Column id="done" title={t("story.kanban_col_done")} cardCount={columns.done.length}>
          {columns.done.map(id => <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>)}
        </KanbanBoard.Column>
      </KanbanBoard>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const cardLabels: Record<string, string> = {
      "card-1": t("story.kanban_card_design"),
      "card-2": t("story.kanban_card_locked"),
      "card-3": t("story.kanban_card_done1")
    };
    const [columns, setColumns] = useState<Columns>({
      todo: ["card-1", "card-2"],
      done: ["card-3"]
    });
    const handleCardMove = (cardId: string, fromColumnId: string, toColumnId: string) => {
      setColumns(prev => {
        const next = {
          ...prev
        };
        next[fromColumnId] = prev[fromColumnId].filter(id => id !== cardId);
        next[toColumnId] = [...prev[toColumnId], cardId];
        return next;
      });
    };
    return <KanbanBoard onCardMove={handleCardMove}>
        <KanbanBoard.Column id="todo" title={t("story.kanban_col_todo")} cardCount={columns.todo.length}>
          {columns.todo.map(id => <KanbanBoard.Card key={id} id={id} disabled={id === "card-2"}>
              {cardLabels[id]}
            </KanbanBoard.Card>)}
        </KanbanBoard.Column>
        <KanbanBoard.Column id="done" title={t("story.kanban_col_done")} cardCount={columns.done.length}>
          {columns.done.map(id => <KanbanBoard.Card key={id} id={id} disabled={id === "card-2"}>
              {cardLabels[id]}
            </KanbanBoard.Card>)}
        </KanbanBoard.Column>
      </KanbanBoard>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [columns, setColumns] = useState<Columns>({
      todo: ["card-1", "card-2"],
      inProgress: ["card-3"],
      done: ["card-4"]
    });
    const cardLabels: Record<string, string> = {
      "card-1": t("story.kanban_card_design"),
      "card-2": t("story.kanban_card_research"),
      "card-3": t("story.kanban_card_develop"),
      "card-4": t("story.kanban_card_done1")
    };
    const handleCardMove = (cardId: string, fromColumnId: string, toColumnId: string) => {
      setColumns(prev => {
        const next = {
          ...prev
        };
        next[fromColumnId] = prev[fromColumnId].filter(id => id !== cardId);
        next[toColumnId] = [...prev[toColumnId], cardId];
        return next;
      });
    };
    return <KanbanBoard onCardMove={handleCardMove} forceMobileUI>
        <KanbanBoard.Column id="todo" title={t("story.kanban_col_todo")} cardCount={columns.todo.length}>
          {columns.todo.map(id => <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>)}
        </KanbanBoard.Column>
        <KanbanBoard.Column id="inProgress" title={t("story.kanban_col_in_progress")} cardCount={columns.inProgress.length}>
          {columns.inProgress.map(id => <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>)}
        </KanbanBoard.Column>
        <KanbanBoard.Column id="done" title={t("story.kanban_col_done")} cardCount={columns.done.length}>
          {columns.done.map(id => <KanbanBoard.Card key={id} id={id}>
              {cardLabels[id]}
            </KanbanBoard.Card>)}
        </KanbanBoard.Column>
      </KanbanBoard>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithDisabledCard`,`MobileUI`]}));y();export{h as Default,_ as MobileUI,g as WithDisabledCard,v as __namedExportsOrder,m as default,y as n,d as t};