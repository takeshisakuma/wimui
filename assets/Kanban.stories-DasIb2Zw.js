import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-DqYBP9z6.js";import{c as j}from"./index-DTc8ljRI.js";import{A as w}from"./i18nConstants-BpHxieg5.js";import{u as M}from"./useTranslation-BBRUnBtc.js";const S=s.createContext(null),D=()=>{const c=s.useContext(S);if(!c)throw new Error("Kanban components must be used within a KanbanBoard");return c},P=s.createContext(null),L=({children:c,className:a,onCardMove:o,forceMobileUI:d=!1,...C})=>{const[b,n]=s.useState(null),[l,u]=s.useState(null),[i,t]=s.useState([]),g=s.useCallback((p,f)=>{n(p),u(f)},[]),v=s.useCallback((p,f)=>{t(_=>_.some(B=>B.id===p)?_:[..._,{id:p,title:f}])},[]),h=s.useCallback(p=>{t(f=>f.filter(_=>_.id!==p))},[]),k=s.useMemo(()=>({draggingCardId:b,draggingFromColumnId:l,setDraggingCard:g,onCardMove:o,columns:i,registerColumn:v,unregisterColumn:h,forceMobileUI:d}),[b,l,g,o,i,v,h,d]);return r.jsx(S.Provider,{value:k,children:r.jsx("div",{className:j("wim-kanban",d&&"wim-kanban--touch",a),role:"region",...C,children:c})})},N=({id:c,title:a,cardCount:o,children:d,className:C,...b})=>{const{draggingCardId:n,draggingFromColumnId:l,setDraggingCard:u,onCardMove:i,registerColumn:t,unregisterColumn:g}=D(),[v,h]=s.useState(!1);s.useEffect(()=>(t(c,a),()=>g(c)),[c,t,g]);const k=_=>{_.preventDefault(),h(!0)},p=_=>{_.currentTarget.contains(_.relatedTarget)||h(!1)},f=_=>{_.preventDefault(),h(!1),n&&l&&l!==c&&i?.(n,l,c),u(null,null)};return r.jsx(P.Provider,{value:{columnId:c},children:r.jsxs("div",{className:j("wim-kanban__column",v&&"wim-kanban__column--drag-over",C),onDragOver:k,onDragLeave:p,onDrop:f,"aria-label":typeof a=="string"?a:void 0,...b,children:[r.jsxs("div",{className:"wim-kanban__column-header",children:[r.jsx("span",{className:"wim-kanban__column-title",children:a}),o!==void 0&&r.jsx("span",{className:"wim-kanban__column-count","aria-label":`${o} cards`,children:o})]}),r.jsx("div",{className:"wim-kanban__column-body",children:d})]})})},E=({id:c,disabled:a=!1,children:o,className:d,...C})=>{const{draggingCardId:b,setDraggingCard:n,onCardMove:l,columns:u}=D(),t=s.useContext(P)?.columnId??null,g=b===c,[v,h]=s.useState(!1),k=s.useRef(null),p=u.filter(m=>m.id!==t);s.useEffect(()=>{if(!v)return;const m=I=>{k.current&&!k.current.contains(I.target)&&h(!1)};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[v]);const f=m=>{m.dataTransfer&&(m.dataTransfer.effectAllowed="move"),n(c,t)},_=()=>{n(null,null)},B=m=>{t&&l?.(c,t,m),h(!1)};return r.jsxs("div",{className:j("wim-kanban__card",g&&"wim-kanban__card--dragging",a&&"wim-kanban__card--disabled",d),draggable:!a,onDragStart:a?void 0:f,onDragEnd:_,role:"listitem",...C,children:[r.jsx("div",{className:"wim-kanban__card-content",children:o}),!a&&p.length>0&&r.jsxs("div",{className:"wim-kanban__card-move",ref:k,children:[r.jsx("button",{type:"button",className:"wim-kanban__card-move-btn",onClick:m=>{m.stopPropagation(),h(I=>!I)},"aria-label":"Move card","aria-expanded":v,"aria-haspopup":"listbox",children:"⋯"}),v&&r.jsx("div",{className:"wim-kanban__card-move-menu",role:"listbox","aria-label":"Move to column",children:p.map(m=>r.jsx("button",{type:"button",className:"wim-kanban__card-move-option",role:"option","aria-selected":!1,onClick:()=>B(m.id),children:m.title},m.id))})]})]})},e=L;e.Column=N;e.Card=E;N.__docgenInfo={description:"",methods:[],displayName:"KanbanColumn",props:{id:{required:!0,tsType:{name:"string"},description:"列を識別する一意のID。カード移動時に使用される。"},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"列のヘッダーに表示するタイトル。"},cardCount:{required:!1,tsType:{name:"number"},description:"ヘッダーに表示するカード枚数バッジ。"}}};E.__docgenInfo={description:"",methods:[],displayName:"KanbanCard",props:{id:{required:!0,tsType:{name:"string"},description:"カードを識別する一意のID。"},disabled:{required:!1,tsType:{name:"boolean"},description:"trueの場合、ドラッグ・移動操作が不可になる。",defaultValue:{value:"false",computed:!1}}}};L.__docgenInfo={description:"",methods:[],displayName:"KanbanBoard",props:{onCardMove:{required:!1,tsType:{name:"signature",type:"function",raw:`(\r
  cardId: string,\r
  fromColumnId: string,\r
  toColumnId: string,\r
) => void`,signature:{arguments:[{type:{name:"string"},name:"cardId"},{type:{name:"string"},name:"fromColumnId"},{type:{name:"string"},name:"toColumnId"}],return:{name:"void"}}},description:"カードが別の列にドロップ／移動された際に呼び出されるコールバック。"},forceMobileUI:{required:!1,tsType:{name:"boolean"},description:`タッチデバイス向けの移動ボタンUIを強制表示する。\r
Storybookでのモバイルプレビューや開発時の確認に使用する。`,defaultValue:{value:"false",computed:!1}}}};const T={title:"Components/Data Structures/Kanban",component:e},y={render:function(){const{t:a}=M(w),o={"card-1":a("story_kanban_card_design"),"card-2":a("story_kanban_card_research"),"card-3":a("story_kanban_card_develop"),"card-4":a("story_kanban_card_review"),"card-5":a("story_kanban_card_deploy"),"card-6":a("story_kanban_card_done1")},[d,C]=s.useState({todo:["card-1","card-2"],inProgress:["card-3"],review:["card-4"],done:["card-5","card-6"]}),b=(n,l,u)=>{C(i=>{const t={...i};return t[l]=i[l].filter(g=>g!==n),t[u]=[...i[u],n],t})};return r.jsxs(e,{onCardMove:b,children:[r.jsx(e.Column,{id:"todo",title:a("story_kanban_col_todo"),cardCount:d.todo.length,children:d.todo.map(n=>r.jsx(e.Card,{id:n,children:o[n]},n))}),r.jsx(e.Column,{id:"inProgress",title:a("story_kanban_col_in_progress"),cardCount:d.inProgress.length,children:d.inProgress.map(n=>r.jsx(e.Card,{id:n,children:o[n]},n))}),r.jsx(e.Column,{id:"review",title:a("story_kanban_col_review"),cardCount:d.review.length,children:d.review.map(n=>r.jsx(e.Card,{id:n,children:o[n]},n))}),r.jsx(e.Column,{id:"done",title:a("story_kanban_col_done"),cardCount:d.done.length,children:d.done.map(n=>r.jsx(e.Card,{id:n,children:o[n]},n))})]})}},x={render:function(){const{t:a}=M(w),[o,d]=s.useState({todo:["card-1","card-2"],done:["card-3"]}),C=(b,n,l)=>{d(u=>{const i={...u};return i[n]=u[n].filter(t=>t!==b),i[l]=[...u[l],b],i})};return r.jsxs(e,{onCardMove:C,children:[r.jsxs(e.Column,{id:"todo",title:a("story_kanban_col_todo"),cardCount:o.todo.length,children:[r.jsx(e.Card,{id:"card-1",children:a("story_kanban_card_design")}),r.jsx(e.Card,{id:"card-2",disabled:!0,children:a("story_kanban_card_locked")})]}),r.jsx(e.Column,{id:"done",title:a("story_kanban_col_done"),cardCount:o.done.length,children:r.jsx(e.Card,{id:"card-3",children:a("story_kanban_card_done1")})})]})}},K={render:function(){const{t:a}=M(w),[o,d]=s.useState({todo:["card-1","card-2"],inProgress:["card-3"],done:["card-4"]}),C={"card-1":a("story_kanban_card_design"),"card-2":a("story_kanban_card_research"),"card-3":a("story_kanban_card_develop"),"card-4":a("story_kanban_card_done1")},b=(n,l,u)=>{d(i=>{const t={...i};return t[l]=i[l].filter(g=>g!==n),t[u]=[...i[u],n],t})};return r.jsxs(e,{onCardMove:b,forceMobileUI:!0,children:[r.jsx(e.Column,{id:"todo",title:a("story_kanban_col_todo"),cardCount:o.todo.length,children:o.todo.map(n=>r.jsx(e.Card,{id:n,children:C[n]},n))}),r.jsx(e.Column,{id:"inProgress",title:a("story_kanban_col_in_progress"),cardCount:o.inProgress.length,children:o.inProgress.map(n=>r.jsx(e.Card,{id:n,children:C[n]},n))}),r.jsx(e.Column,{id:"done",title:a("story_kanban_col_done"),cardCount:o.done.length,children:o.done.map(n=>r.jsx(e.Card,{id:n,children:C[n]},n))})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const cardLabels: Record<string, string> = {
      "card-1": t("story_kanban_card_design"),
      "card-2": t("story_kanban_card_research"),
      "card-3": t("story_kanban_card_develop"),
      "card-4": t("story_kanban_card_review"),
      "card-5": t("story_kanban_card_deploy"),
      "card-6": t("story_kanban_card_done1")
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
    return <KanbanBoard onCardMove={handleCardMove}>\r
        <KanbanBoard.Column id="todo" title={t("story_kanban_col_todo")} cardCount={columns.todo.length}>\r
          {columns.todo.map(id => <KanbanBoard.Card key={id} id={id}>\r
              {cardLabels[id]}\r
            </KanbanBoard.Card>)}\r
        </KanbanBoard.Column>\r
        <KanbanBoard.Column id="inProgress" title={t("story_kanban_col_in_progress")} cardCount={columns.inProgress.length}>\r
          {columns.inProgress.map(id => <KanbanBoard.Card key={id} id={id}>\r
              {cardLabels[id]}\r
            </KanbanBoard.Card>)}\r
        </KanbanBoard.Column>\r
        <KanbanBoard.Column id="review" title={t("story_kanban_col_review")} cardCount={columns.review.length}>\r
          {columns.review.map(id => <KanbanBoard.Card key={id} id={id}>\r
              {cardLabels[id]}\r
            </KanbanBoard.Card>)}\r
        </KanbanBoard.Column>\r
        <KanbanBoard.Column id="done" title={t("story_kanban_col_done")} cardCount={columns.done.length}>\r
          {columns.done.map(id => <KanbanBoard.Card key={id} id={id}>\r
              {cardLabels[id]}\r
            </KanbanBoard.Card>)}\r
        </KanbanBoard.Column>\r
      </KanbanBoard>;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    return <KanbanBoard onCardMove={handleCardMove}>\r
        <KanbanBoard.Column id="todo" title={t("story_kanban_col_todo")} cardCount={columns.todo.length}>\r
          <KanbanBoard.Card id="card-1">\r
            {t("story_kanban_card_design")}\r
          </KanbanBoard.Card>\r
          <KanbanBoard.Card id="card-2" disabled>\r
            {t("story_kanban_card_locked")}\r
          </KanbanBoard.Card>\r
        </KanbanBoard.Column>\r
        <KanbanBoard.Column id="done" title={t("story_kanban_col_done")} cardCount={columns.done.length}>\r
          <KanbanBoard.Card id="card-3">\r
            {t("story_kanban_card_done1")}\r
          </KanbanBoard.Card>\r
        </KanbanBoard.Column>\r
      </KanbanBoard>;
  }
}`,...x.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
      "card-1": t("story_kanban_card_design"),
      "card-2": t("story_kanban_card_research"),
      "card-3": t("story_kanban_card_develop"),
      "card-4": t("story_kanban_card_done1")
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
    return <KanbanBoard onCardMove={handleCardMove} forceMobileUI>\r
        <KanbanBoard.Column id="todo" title={t("story_kanban_col_todo")} cardCount={columns.todo.length}>\r
          {columns.todo.map(id => <KanbanBoard.Card key={id} id={id}>\r
              {cardLabels[id]}\r
            </KanbanBoard.Card>)}\r
        </KanbanBoard.Column>\r
        <KanbanBoard.Column id="inProgress" title={t("story_kanban_col_in_progress")} cardCount={columns.inProgress.length}>\r
          {columns.inProgress.map(id => <KanbanBoard.Card key={id} id={id}>\r
              {cardLabels[id]}\r
            </KanbanBoard.Card>)}\r
        </KanbanBoard.Column>\r
        <KanbanBoard.Column id="done" title={t("story_kanban_col_done")} cardCount={columns.done.length}>\r
          {columns.done.map(id => <KanbanBoard.Card key={id} id={id}>\r
              {cardLabels[id]}\r
            </KanbanBoard.Card>)}\r
        </KanbanBoard.Column>\r
      </KanbanBoard>;
  }
}`,...K.parameters?.docs?.source}}};const R=["Default","WithDisabledCard","MobileUI"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:y,MobileUI:K,WithDisabledCard:x,__namedExportsOrder:R,default:T},Symbol.toStringTag,{value:"Module"}));export{y as D,V as K,x as W};
