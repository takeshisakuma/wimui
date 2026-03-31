import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as t,A as M}from"./iframe-C9jI6wk5.js";import{c as D}from"./index-BdaCrWBW.js";import{u as S}from"./useTranslation-f2Ze7WA6.js";const P=t.createContext(null),L=()=>{const c=t.useContext(P);if(!c)throw new Error("Kanban components must be used within a KanbanBoard");return c},N=t.createContext(null),T=({children:c,className:a,onCardMove:o,forceMobileUI:s=!1,...g})=>{const[_,n]=t.useState(null),[m,C]=t.useState(null),[l,i]=t.useState([]),u=t.useRef(null),y=t.useCallback(f=>{u.current&&(u.current.textContent="",setTimeout(()=>{u.current&&(u.current.textContent=f)},50))},[]),k=t.useCallback((f,v)=>{n(f),C(v)},[]),p=t.useCallback((f,v)=>{i(b=>b.some(j=>j.id===f)?b:[...b,{id:f,title:v}])},[]),h=t.useCallback(f=>{i(v=>v.filter(b=>b.id!==f))},[]),x=t.useMemo(()=>({draggingCardId:_,draggingFromColumnId:m,setDraggingCard:k,onCardMove:o,columns:l,registerColumn:p,unregisterColumn:h,forceMobileUI:s,announce:y}),[_,m,k,o,l,p,h,s,y]);return e.jsx(P.Provider,{value:x,children:e.jsxs("div",{className:D("wim-kanban",s&&"wim-kanban--touch",a),role:"region",...g,children:[e.jsx("div",{ref:u,"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}}),c]})})},E=({id:c,title:a,cardCount:o,children:s,className:g,..._})=>{const{draggingCardId:n,draggingFromColumnId:m,setDraggingCard:C,onCardMove:l,registerColumn:i,unregisterColumn:u,announce:y}=L(),[k,p]=t.useState(!1);t.useEffect(()=>(i(c,a),()=>u(c)),[c,i,u]);const h=b=>{b.preventDefault(),p(!0)},x=b=>{b.currentTarget.contains(b.relatedTarget)||p(!1)},f=b=>{b.preventDefault(),p(!1),n&&m&&m!==c&&(l?.(n,m,c),y(`Card moved to ${typeof a=="string"?a:c}`)),C(null,null)},v=!!n;return e.jsx(N.Provider,{value:{columnId:c,columnTitle:a},children:e.jsxs("div",{className:D("wim-kanban__column",k&&"wim-kanban__column--drag-over",g),onDragOver:h,onDragLeave:x,onDrop:f,"aria-label":typeof a=="string"?a:void 0,"aria-dropeffect":v?"move":void 0,..._,children:[e.jsxs("div",{className:"wim-kanban__column-header",children:[e.jsx("span",{className:"wim-kanban__column-title",children:a}),o!==void 0&&e.jsx("span",{className:"wim-kanban__column-count","aria-label":`${o} cards`,children:o})]}),e.jsx("div",{className:"wim-kanban__column-body",children:s})]})})},R=({id:c,disabled:a=!1,children:o,className:s,...g})=>{const{draggingCardId:_,setDraggingCard:n,onCardMove:m,columns:C,announce:l}=L(),i=t.useContext(N),u=i?.columnId??null,y=i?.columnTitle??null,k=_===c,[p,h]=t.useState(!1),x=t.useRef(null),f=t.useRef(null),v=C.filter(d=>d.id!==u);t.useEffect(()=>{if(!p)return;const d=K=>{x.current&&!x.current.contains(K.target)&&h(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[p]),t.useEffect(()=>{p||f.current?.focus()},[p]);const b=d=>{d.dataTransfer&&(d.dataTransfer.effectAllowed="move"),n(c,u)},j=()=>{n(null,null)},A=(d,K)=>{u&&(m?.(c,u,d),l(`Card moved from ${typeof y=="string"?y:u} to ${typeof K=="string"?K:d}`)),h(!1)},O=d=>{d.key==="Escape"&&h(!1)};return e.jsxs("div",{className:D("wim-kanban__card",k&&"wim-kanban__card--dragging",a&&"wim-kanban__card--disabled",s),draggable:!a,onDragStart:a?void 0:b,onDragEnd:j,role:"listitem","aria-grabbed":a?void 0:k,...g,children:[e.jsx("div",{className:"wim-kanban__card-content",children:o}),!a&&v.length>0&&e.jsxs("div",{className:"wim-kanban__card-move",ref:x,children:[e.jsx("button",{ref:f,type:"button",className:"wim-kanban__card-move-btn",onClick:d=>{d.stopPropagation(),h(K=>!K)},onKeyDown:d=>{d.key==="Escape"&&h(!1)},"aria-label":"Move card","aria-expanded":p,"aria-haspopup":"listbox",children:"⋯"}),p&&e.jsx("div",{className:"wim-kanban__card-move-menu",role:"listbox","aria-label":"Move to column",tabIndex:-1,onKeyDown:O,children:v.map(d=>e.jsx("button",{type:"button",className:"wim-kanban__card-move-option",role:"option","aria-selected":!1,onClick:()=>A(d.id,d.title),children:d.title},d.id))})]})]})},r=T;r.Column=E;r.Card=R;E.__docgenInfo={description:"",methods:[],displayName:"KanbanColumn",props:{id:{required:!0,tsType:{name:"string"},description:"列を識別する一意のID。カード移動時に使用される。"},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"列のヘッダーに表示するタイトル。"},cardCount:{required:!1,tsType:{name:"number"},description:"ヘッダーに表示するカード枚数バッジ。"}}};R.__docgenInfo={description:"",methods:[],displayName:"KanbanCard",props:{id:{required:!0,tsType:{name:"string"},description:"カードを識別する一意のID。"},disabled:{required:!1,tsType:{name:"boolean"},description:"trueの場合、ドラッグ・移動操作が不可になる。",defaultValue:{value:"false",computed:!1}}}};T.__docgenInfo={description:"",methods:[],displayName:"KanbanBoard",props:{onCardMove:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  cardId: string,
  fromColumnId: string,
  toColumnId: string,
) => void`,signature:{arguments:[{type:{name:"string"},name:"cardId"},{type:{name:"string"},name:"fromColumnId"},{type:{name:"string"},name:"toColumnId"}],return:{name:"void"}}},description:"カードが別の列にドロップ／移動された際に呼び出されるコールバック。"},forceMobileUI:{required:!1,tsType:{name:"boolean"},description:`タッチデバイス向けの移動ボタンUIを強制表示する。
Storybookでのモバイルプレビューや開発時の確認に使用する。`,defaultValue:{value:"false",computed:!1}}}};const q={title:"Components/Data Structures/Kanban",component:r},B={render:function(){const{t:a}=S(M),o={"card-1":a("story.kanban_card_design"),"card-2":a("story.kanban_card_research"),"card-3":a("story.kanban_card_develop"),"card-4":a("story.kanban_card_review"),"card-5":a("story.kanban_card_deploy"),"card-6":a("story.kanban_card_done1")},[s,g]=t.useState({todo:["card-1","card-2"],inProgress:["card-3"],review:["card-4"],done:["card-5","card-6"]}),_=(n,m,C)=>{g(l=>{const i={...l};return i[m]=l[m].filter(u=>u!==n),i[C]=[...l[C],n],i})};return e.jsxs(r,{onCardMove:_,children:[e.jsx(r.Column,{id:"todo",title:a("story.kanban_col_todo"),cardCount:s.todo.length,children:s.todo.map(n=>e.jsx(r.Card,{id:n,children:o[n]},n))}),e.jsx(r.Column,{id:"inProgress",title:a("story.kanban_col_in_progress"),cardCount:s.inProgress.length,children:s.inProgress.map(n=>e.jsx(r.Card,{id:n,children:o[n]},n))}),e.jsx(r.Column,{id:"review",title:a("story.kanban_col_review"),cardCount:s.review.length,children:s.review.map(n=>e.jsx(r.Card,{id:n,children:o[n]},n))}),e.jsx(r.Column,{id:"done",title:a("story.kanban_col_done"),cardCount:s.done.length,children:s.done.map(n=>e.jsx(r.Card,{id:n,children:o[n]},n))})]})}},w={render:function(){const{t:a}=S(M),[o,s]=t.useState({todo:["card-1","card-2"],done:["card-3"]}),g=(_,n,m)=>{s(C=>{const l={...C};return l[n]=C[n].filter(i=>i!==_),l[m]=[...C[m],_],l})};return e.jsxs(r,{onCardMove:g,children:[e.jsxs(r.Column,{id:"todo",title:a("story.kanban_col_todo"),cardCount:o.todo.length,children:[e.jsx(r.Card,{id:"card-1",children:a("story.kanban_card_design")}),e.jsx(r.Card,{id:"card-2",disabled:!0,children:a("story.kanban_card_locked")})]}),e.jsx(r.Column,{id:"done",title:a("story.kanban_col_done"),cardCount:o.done.length,children:e.jsx(r.Card,{id:"card-3",children:a("story.kanban_card_done1")})})]})}},I={render:function(){const{t:a}=S(M),[o,s]=t.useState({todo:["card-1","card-2"],inProgress:["card-3"],done:["card-4"]}),g={"card-1":a("story.kanban_card_design"),"card-2":a("story.kanban_card_research"),"card-3":a("story.kanban_card_develop"),"card-4":a("story.kanban_card_done1")},_=(n,m,C)=>{s(l=>{const i={...l};return i[m]=l[m].filter(u=>u!==n),i[C]=[...l[C],n],i})};return e.jsxs(r,{onCardMove:_,forceMobileUI:!0,children:[e.jsx(r.Column,{id:"todo",title:a("story.kanban_col_todo"),cardCount:o.todo.length,children:o.todo.map(n=>e.jsx(r.Card,{id:n,children:g[n]},n))}),e.jsx(r.Column,{id:"inProgress",title:a("story.kanban_col_in_progress"),cardCount:o.inProgress.length,children:o.inProgress.map(n=>e.jsx(r.Card,{id:n,children:g[n]},n))}),e.jsx(r.Column,{id:"done",title:a("story.kanban_col_done"),cardCount:o.done.length,children:o.done.map(n=>e.jsx(r.Card,{id:n,children:g[n]},n))})]})}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
          <KanbanBoard.Card id="card-1">
            {t("story.kanban_card_design")}
          </KanbanBoard.Card>
          <KanbanBoard.Card id="card-2" disabled>
            {t("story.kanban_card_locked")}
          </KanbanBoard.Card>
        </KanbanBoard.Column>
        <KanbanBoard.Column id="done" title={t("story.kanban_col_done")} cardCount={columns.done.length}>
          <KanbanBoard.Card id="card-3">
            {t("story.kanban_card_done1")}
          </KanbanBoard.Card>
        </KanbanBoard.Column>
      </KanbanBoard>;
  }
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const U=["Default","WithDisabledCard","MobileUI"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:B,MobileUI:I,WithDisabledCard:w,__namedExportsOrder:U,default:q},Symbol.toStringTag,{value:"Module"}));export{B as D,H as K,w as W};
