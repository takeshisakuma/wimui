import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as t,A as D}from"./iframe-Cm7axuZH.js";import{c as S}from"./index-DlTOaDQ8.js";import{u as L}from"./useTranslation-NKv2iRzU.js";const P=t.createContext(null),$={cardMovedTo:r=>`Card moved to ${r}`,cardMovedFromTo:(r,a)=>`Card moved from ${r} to ${a}`,cards:r=>`${r} cards`,moveCard:"Move card",moveToColumn:"Move to column"},E=()=>{const r=t.useContext(P);if(!r)throw new Error("Kanban components must be used within a KanbanBoard");return r},N=t.createContext(null),R=({children:r,className:a,onCardMove:d,forceMobileUI:c=!1,labels:g,...f})=>{const[n,u]=t.useState(null),[m,l]=t.useState(null),[i,v]=t.useState([]),b=t.useRef(null),k=t.useMemo(()=>({...$,...g}),[g]),K=t.useCallback(p=>{b.current&&(b.current.textContent="",setTimeout(()=>{b.current&&(b.current.textContent=p)},50))},[]),_=t.useCallback((p,C)=>{u(p),l(C)},[]),y=t.useCallback((p,C)=>{v(h=>h.some(T=>T.id===p)?h:[...h,{id:p,title:C}])},[]),x=t.useCallback(p=>{v(C=>C.filter(h=>h.id!==p))},[]),B=t.useMemo(()=>({draggingCardId:n,draggingFromColumnId:m,setDraggingCard:_,onCardMove:d,columns:i,registerColumn:y,unregisterColumn:x,forceMobileUI:c,announce:K,labels:k}),[n,m,_,d,i,y,x,c,K,k]);return e.jsx(P.Provider,{value:B,children:e.jsxs("div",{className:S("wim-kanban",c&&"wim-kanban--touch",a),role:"region",...f,children:[e.jsx("div",{ref:b,"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}}),r]})})},A=({id:r,title:a,cardCount:d,children:c,className:g,...f})=>{const{draggingCardId:n,draggingFromColumnId:u,setDraggingCard:m,onCardMove:l,registerColumn:i,unregisterColumn:v,announce:b,labels:k}=E(),[K,_]=t.useState(!1);t.useEffect(()=>(i(r,a),()=>v(r)),[r,i,v]);const y=C=>{C.preventDefault(),_(!0)},x=C=>{C.currentTarget.contains(C.relatedTarget)||_(!1)},B=C=>{if(C.preventDefault(),_(!1),n&&u&&u!==r){l?.(n,u,r);const h=typeof a=="string"?a:r;b(k.cardMovedTo(h))}m(null,null)},p=!!n;return e.jsx(N.Provider,{value:{columnId:r,columnTitle:a},children:e.jsxs("div",{className:S("wim-kanban__column",K&&"wim-kanban__column--drag-over",g),onDragOver:y,onDragLeave:x,onDrop:B,"aria-label":typeof a=="string"?a:void 0,"aria-dropeffect":p?"move":void 0,...f,children:[e.jsxs("div",{className:"wim-kanban__column-header",children:[e.jsx("span",{className:"wim-kanban__column-title",children:a}),d!==void 0&&e.jsx("span",{className:"wim-kanban__column-count","aria-label":k.cards(d),children:d})]}),e.jsx("div",{className:"wim-kanban__column-body",children:c})]})})},q=({id:r,disabled:a=!1,children:d,className:c,...g})=>{const{draggingCardId:f,setDraggingCard:n,onCardMove:u,columns:m,announce:l,labels:i}=E(),v=t.useContext(N),b=v?.columnId??null,k=v?.columnTitle??null,K=f===r,[_,y]=t.useState(!1),x=t.useRef(null),B=t.useRef(null),p=m.filter(s=>s.id!==b);t.useEffect(()=>{if(!_)return;const s=w=>{x.current&&!x.current.contains(w.target)&&y(!1)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[_]),t.useEffect(()=>{_||B.current?.focus()},[_]);const C=s=>{s.dataTransfer&&(s.dataTransfer.effectAllowed="move"),n(r,b)},h=()=>{n(null,null)},T=(s,w)=>{if(b){u?.(r,b,s);const O=typeof k=="string"?k:b,U=typeof w=="string"?w:s;l(i.cardMovedFromTo(O,U))}y(!1)},F=s=>{s.key==="Escape"&&y(!1)};return e.jsxs("div",{className:S("wim-kanban__card",K&&"wim-kanban__card--dragging",a&&"wim-kanban__card--disabled",c),draggable:!a,onDragStart:a?void 0:C,onDragEnd:h,role:"listitem","aria-grabbed":a?void 0:K,...g,children:[e.jsx("div",{className:"wim-kanban__card-content",children:d}),!a&&p.length>0&&e.jsxs("div",{className:"wim-kanban__card-move",ref:x,children:[e.jsx("button",{ref:B,type:"button",className:"wim-kanban__card-move-btn",onClick:s=>{s.stopPropagation(),y(w=>!w)},onKeyDown:s=>{s.key==="Escape"&&y(!1)},"aria-label":i.moveCard,"aria-expanded":_,"aria-haspopup":"listbox",children:"⋯"}),_&&e.jsx("div",{className:"wim-kanban__card-move-menu",role:"listbox","aria-label":i.moveToColumn,tabIndex:-1,onKeyDown:F,children:p.map(s=>e.jsx("button",{type:"button",className:"wim-kanban__card-move-option",role:"option","aria-selected":!1,onClick:()=>T(s.id,s.title),children:s.title},s.id))})]})]})},o=R;o.Column=A;o.Card=q;A.__docgenInfo={description:"",methods:[],displayName:"KanbanColumn",props:{id:{required:!0,tsType:{name:"string"},description:"列を識別する一意のID。カード移動時に使用される。"},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"列のヘッダーに表示するタイトル。"},cardCount:{required:!1,tsType:{name:"number"},description:"ヘッダーに表示するカード枚数バッジ。"}}};q.__docgenInfo={description:"",methods:[],displayName:"KanbanCard",props:{id:{required:!0,tsType:{name:"string"},description:"カードを識別する一意のID。"},disabled:{required:!1,tsType:{name:"boolean"},description:"trueの場合、ドラッグ・移動操作が不可になる。",defaultValue:{value:"false",computed:!1}}}};R.__docgenInfo={description:"",methods:[],displayName:"KanbanBoard",props:{onCardMove:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  cardId: string,
  fromColumnId: string,
  toColumnId: string,
) => void`,signature:{arguments:[{type:{name:"string"},name:"cardId"},{type:{name:"string"},name:"fromColumnId"},{type:{name:"string"},name:"toColumnId"}],return:{name:"void"}}},description:"カードが別の列にドロップ／移動された際に呼び出されるコールバック。"},forceMobileUI:{required:!1,tsType:{name:"boolean"},description:`タッチデバイス向けの移動ボタンUIを強制表示する。
Storybookでのモバイルプレビューや開発時の確認に使用する。`,defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  cardMovedTo?: (to: string) => string;
  cardMovedFromTo?: (from: string, to: string) => string;
  cards?: (count: number) => string;
  moveCard?: string;
  moveToColumn?: string;
}`,signature:{properties:[{key:"cardMovedTo",value:{name:"signature",type:"function",raw:"(to: string) => string",signature:{arguments:[{type:{name:"string"},name:"to"}],return:{name:"string"}},required:!1}},{key:"cardMovedFromTo",value:{name:"signature",type:"function",raw:"(from: string, to: string) => string",signature:{arguments:[{type:{name:"string"},name:"from"},{type:{name:"string"},name:"to"}],return:{name:"string"}},required:!1}},{key:"cards",value:{name:"signature",type:"function",raw:"(count: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"string"}},required:!1}},{key:"moveCard",value:{name:"string",required:!1}},{key:"moveToColumn",value:{name:"string",required:!1}}]}},description:"手動翻訳用のラベル。"}}};const V={title:"Components/Data Structures/Kanban",component:o},I={render:function(){const{t:a}=L(D),d={"card-1":a("story.kanban_card_design"),"card-2":a("story.kanban_card_research"),"card-3":a("story.kanban_card_develop"),"card-4":a("story.kanban_card_review"),"card-5":a("story.kanban_card_deploy"),"card-6":a("story.kanban_card_done1")},[c,g]=t.useState({todo:["card-1","card-2"],inProgress:["card-3"],review:["card-4"],done:["card-5","card-6"]}),f=(n,u,m)=>{g(l=>{const i={...l};return i[u]=l[u].filter(v=>v!==n),i[m]=[...l[m],n],i})};return e.jsxs(o,{onCardMove:f,children:[e.jsx(o.Column,{id:"todo",title:a("story.kanban_col_todo"),cardCount:c.todo.length,children:c.todo.map(n=>e.jsx(o.Card,{id:n,children:d[n]},n))}),e.jsx(o.Column,{id:"inProgress",title:a("story.kanban_col_in_progress"),cardCount:c.inProgress.length,children:c.inProgress.map(n=>e.jsx(o.Card,{id:n,children:d[n]},n))}),e.jsx(o.Column,{id:"review",title:a("story.kanban_col_review"),cardCount:c.review.length,children:c.review.map(n=>e.jsx(o.Card,{id:n,children:d[n]},n))}),e.jsx(o.Column,{id:"done",title:a("story.kanban_col_done"),cardCount:c.done.length,children:c.done.map(n=>e.jsx(o.Card,{id:n,children:d[n]},n))})]})}},M={render:function(){const{t:a}=L(D),[d,c]=t.useState({todo:["card-1","card-2"],done:["card-3"]}),g=(f,n,u)=>{c(m=>{const l={...m};return l[n]=m[n].filter(i=>i!==f),l[u]=[...m[u],f],l})};return e.jsxs(o,{onCardMove:g,children:[e.jsxs(o.Column,{id:"todo",title:a("story.kanban_col_todo"),cardCount:d.todo.length,children:[e.jsx(o.Card,{id:"card-1",children:a("story.kanban_card_design")}),e.jsx(o.Card,{id:"card-2",disabled:!0,children:a("story.kanban_card_locked")})]}),e.jsx(o.Column,{id:"done",title:a("story.kanban_col_done"),cardCount:d.done.length,children:e.jsx(o.Card,{id:"card-3",children:a("story.kanban_card_done1")})})]})}},j={render:function(){const{t:a}=L(D),[d,c]=t.useState({todo:["card-1","card-2"],inProgress:["card-3"],done:["card-4"]}),g={"card-1":a("story.kanban_card_design"),"card-2":a("story.kanban_card_research"),"card-3":a("story.kanban_card_develop"),"card-4":a("story.kanban_card_done1")},f=(n,u,m)=>{c(l=>{const i={...l};return i[u]=l[u].filter(v=>v!==n),i[m]=[...l[m],n],i})};return e.jsxs(o,{onCardMove:f,forceMobileUI:!0,children:[e.jsx(o.Column,{id:"todo",title:a("story.kanban_col_todo"),cardCount:d.todo.length,children:d.todo.map(n=>e.jsx(o.Card,{id:n,children:g[n]},n))}),e.jsx(o.Column,{id:"inProgress",title:a("story.kanban_col_in_progress"),cardCount:d.inProgress.length,children:d.inProgress.map(n=>e.jsx(o.Card,{id:n,children:g[n]},n))}),e.jsx(o.Column,{id:"done",title:a("story.kanban_col_done"),cardCount:d.done.length,children:d.done.map(n=>e.jsx(o.Card,{id:n,children:g[n]},n))})]})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const W=["Default","WithDisabledCard","MobileUI"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:I,MobileUI:j,WithDisabledCard:M,__namedExportsOrder:W,default:V},Symbol.toStringTag,{value:"Module"}));export{I as D,Q as K,M as W};
