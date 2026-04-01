import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as k,A as c}from"./iframe-C6uXs91S.js";import{T as a}from"./Table-D1GdLTnt.js";import{B as W}from"./Badge-thJVyXso.js";import{C as I}from"./Checkbox-BPBWBe0K.js";import{I as E}from"./IconButton-B_eUtw1o.js";import{u as b}from"./useTranslation-C0kP2ZiX.js";const N={title:"Components/Data Structures/Table",component:a,tags:[],argTypes:{striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},fullWidth:{control:"boolean"},stickyHeader:{control:"boolean"},scrollbar:{control:"select",options:["default","subtle","hidden"]},height:{control:"text"},maxHeight:{control:"text"}}},D=()=>{const{t:n}=b(c);return[{id:1,name:"John Doe",email:"john@example.com",status:n("story.table_active"),role:n("story.table_admin")},{id:2,name:"Jane Smith",email:"jane@example.com",status:n("story.table_inactive"),role:n("story.table_user")},{id:3,name:"Bob Johnson",email:"bob@example.com",status:n("story.table_active"),role:n("story.table_editor")},{id:4,name:"Alice Brown",email:"alice@example.com",status:n("story.table_pending"),role:n("story.table_user")}]},B=()=>{const{t:n}=b(c);return Array.from({length:30}).map((o,l)=>({id:l+1,name:`${n("story.table_user")} ${l+1}`,email:`user${l+1}@example.com`,role:l%3===0?n("story.table_admin"):n("story.table_member"),status:l%2===0?n("story.table_active"):n("story.table_inactive")}))},i={render:function(o){const{t:l}=b(c),s=D();return e.jsxs(a,{...o,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story.table_name")}),e.jsx(a.Head,{children:l("story.table_email")}),e.jsx(a.Head,{children:l("story.table_role")}),e.jsx(a.Head,{children:l("story.table_status")})]})}),e.jsx(a.Body,{children:s.map(t=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story.table_name"),children:t.name}),e.jsx(a.Cell,{label:l("story.table_email"),children:t.email}),e.jsx(a.Cell,{label:l("story.table_role"),children:t.role}),e.jsx(a.Cell,{label:l("story.table_status"),children:e.jsx(W,{content:t.status,size:"sm",color:t.status===l("story.table_active")?"primary":"neutral"})})]},t.id))})]})}},T={...i,args:{striped:!0}},h={...i,args:{bordered:!0}},p={...i,args:{hoverable:!0}},_={...i,args:{fullWidth:!0}},x={render:function(o){const{t:l}=b(c),s=D();return e.jsxs(a,{...o,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story.table_name")}),e.jsx(a.Head,{children:l("story.table_email")}),e.jsx(a.Head,{style:{width:"1%",whiteSpace:"nowrap"},children:l("story.table_actions")})]})}),e.jsx(a.Body,{children:s.slice(0,2).map(t=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story.table_name"),children:t.name}),e.jsx(a.Cell,{label:l("story.table_email"),children:t.email}),e.jsx(a.Cell,{label:l("story.table_actions"),children:e.jsxs("div",{style:{display:"flex",gap:"4px",justifyContent:"flex-start"},children:[e.jsx(E,{iconName:"EditIcon","aria-label":l("story.dropdown_edit"),size:"sm",variant:"ghost"}),e.jsx(E,{iconName:"TrashIcon","aria-label":l("story.dropdown_delete"),size:"sm",variant:"ghost",intent:"destructive"})]})})]},t.id))})]})}},C={render:function(o){const{t:l}=b(c),s=B(),[t,u]=k.useState({key:"id",direction:"asc"}),[w,f]=k.useState(s),y=d=>{let r="asc";if(t.key===d&&(t.direction==="asc"?r="desc":t.direction==="desc"&&(r="none")),u({key:d,direction:r}),r==="none")f(s);else{const R=[...s].sort((L,M)=>{const A=L[d],v=M[d];return String(A)<String(v)?r==="asc"?-1:1:String(A)>String(v)?r==="asc"?1:-1:0});f(R)}};return e.jsxs(a,{...o,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{sortable:!0,sortDirection:t.key==="id"?t.direction:"none",onSort:()=>y("id"),children:l("story.table_id")}),e.jsx(a.Head,{sortable:!0,sortDirection:t.key==="name"?t.direction:"none",onSort:()=>y("name"),children:l("story.table_name")}),e.jsx(a.Head,{sortable:!0,sortDirection:t.key==="email"?t.direction:"none",onSort:()=>y("email"),children:l("story.table_email")}),e.jsx(a.Head,{children:l("story.table_role")})]})}),e.jsx(a.Body,{children:w.slice(0,10).map(d=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story.table_id"),children:d.id}),e.jsx(a.Cell,{label:l("story.table_name"),children:d.name}),e.jsx(a.Cell,{label:l("story.table_email"),children:d.email}),e.jsx(a.Cell,{label:l("story.table_role"),children:d.role})]},d.id))})]})}},H={render:function(o){const{t:l}=b(c),s=B(),[t,u]=k.useState([]),w=t.length===5,f=t.length>0&&t.length<5,y=()=>{u(w?[]:[1,2,3,4,5])},d=r=>{t.includes(r)?u(t.filter(R=>R!==r)):u([...t,r])};return e.jsxs(a,{...o,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{selection:!0,children:e.jsx(I,{checked:w,indeterminate:f,onChange:y})}),e.jsx(a.Head,{children:l("story.table_id")}),e.jsx(a.Head,{children:l("story.table_name")}),e.jsx(a.Head,{children:l("story.table_email")})]})}),e.jsx(a.Body,{children:s.slice(0,5).map(r=>e.jsxs(a.Row,{selected:t.includes(r.id),children:[e.jsx(a.Cell,{selection:!0,children:e.jsx(I,{checked:t.includes(r.id),onChange:()=>d(r.id)})}),e.jsx(a.Cell,{label:l("story.table_id"),children:r.id}),e.jsx(a.Cell,{label:l("story.table_name"),children:r.name}),e.jsx(a.Cell,{label:l("story.table_email"),children:r.email})]},r.id))})]})}},m={render:function(o){const{t:l}=b(c),s=B();return e.jsxs(a,{...o,stickyHeader:!0,fullWidth:!0,maxHeight:"300px",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story.table_id")}),e.jsx(a.Head,{children:l("story.table_name")}),e.jsx(a.Head,{children:l("story.table_email")}),e.jsx(a.Head,{children:l("story.table_role")})]})}),e.jsx(a.Body,{children:s.map(t=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story.table_id"),children:t.id}),e.jsx(a.Cell,{label:l("story.table_name"),children:t.name}),e.jsx(a.Cell,{label:l("story.table_email"),children:t.email}),e.jsx(a.Cell,{label:l("story.table_role"),children:t.role})]},t.id))})]})}},g={...m,args:{scrollbar:"subtle"}},j={...m,args:{scrollbar:"hidden"}},S={render:function(o){const{t:l}=b(c),s=D();return e.jsxs(a,{...o,mobileCard:!0,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story.table_id")}),e.jsx(a.Head,{children:l("story.table_name")}),e.jsx(a.Head,{children:l("story.table_email")}),e.jsx(a.Head,{children:l("story.table_role")}),e.jsx(a.Head,{children:l("story.table_status")})]})}),e.jsx(a.Body,{children:s.map(t=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story.table_id"),children:t.id}),e.jsx(a.Cell,{label:l("story.table_name"),children:t.name}),e.jsx(a.Cell,{label:l("story.table_email"),children:t.email}),e.jsx(a.Cell,{label:l("story.table_role"),children:t.role}),e.jsx(a.Cell,{label:l("story.table_status"),children:e.jsx(W,{content:t.status,size:"sm",color:t.status===l("story.table_active")?"primary":"neutral"})})]},t.id))})]})},parameters:{viewport:{defaultViewport:"mobile1"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const sampleData = useSampleData();
    return <Table {...args}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
            <Table.Head>{t("story.table_status")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.map(row => <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
              <Table.Cell label={t("story.table_status")}>
                <Badge content={row.status} size="sm" color={row.status === t("story.table_active") ? "primary" : "neutral"} />
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...i.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    striped: true
  }
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    bordered: true
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    hoverable: true
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    fullWidth: true
  }
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const sampleData = useSampleData();
    return <Table {...args} fullWidth={true}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head style={{
            width: "1%",
            whiteSpace: "nowrap"
          }}>
              {t("story.table_actions")}
            </Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.slice(0, 2).map(row => <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_actions")}>
                <div style={{
              display: "flex",
              gap: "4px",
              justifyContent: "flex-start"
            }}>
                  <IconButton iconName="EditIcon" aria-label={t("story.dropdown_edit")} size="sm" variant="ghost" />
                  <IconButton iconName="TrashIcon" aria-label={t("story.dropdown_delete")} size="sm" variant="ghost" intent="destructive" />
                </div>
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const manyRows = useManyRows();
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({
      key: "id",
      direction: "asc"
    });
    const [data, setData] = React.useState(manyRows);
    const handleSort = (key: string) => {
      let direction: "asc" | "desc" | "none" = "asc";
      if (sortConfig.key === key) {
        if (sortConfig.direction === "asc") direction = "desc";else if (sortConfig.direction === "desc") direction = "none";
      }
      setSortConfig({
        key,
        direction
      });
      if (direction === "none") {
        setData(manyRows);
      } else {
        const sortedData = [...manyRows].sort((a, b) => {
          const aValue = (a as unknown as Record<string, unknown>)[key];
          const bValue = (b as unknown as Record<string, unknown>)[key];
          if (String(aValue) < String(bValue)) return direction === "asc" ? -1 : 1;
          if (String(aValue) > String(bValue)) return direction === "asc" ? 1 : -1;
          return 0;
        });
        setData(sortedData);
      }
    };
    return <Table {...args} fullWidth>
        <Table.Header>
          <Table.Row>
            <Table.Head sortable sortDirection={sortConfig.key === "id" ? sortConfig.direction : "none"} onSort={() => handleSort("id")}>
              {t("story.table_id")}
            </Table.Head>
            <Table.Head sortable sortDirection={sortConfig.key === "name" ? sortConfig.direction : "none"} onSort={() => handleSort("name")}>
              {t("story.table_name")}
            </Table.Head>
            <Table.Head sortable sortDirection={sortConfig.key === "email" ? sortConfig.direction : "none"} onSort={() => handleSort("email")}>
              {t("story.table_email")}
            </Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.slice(0, 10).map(row => <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...C.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const manyRows = useManyRows();
    const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
    const allSelected = selectedIds.length === 5;
    const indeterminate = selectedIds.length > 0 && selectedIds.length < 5;
    const toggleAll = () => {
      if (allSelected) {
        setSelectedIds([]);
      } else {
        setSelectedIds([1, 2, 3, 4, 5]);
      }
    };
    const toggleRow = (id: number) => {
      if (selectedIds.includes(id)) {
        setSelectedIds(selectedIds.filter(sid => sid !== id));
      } else {
        setSelectedIds([...selectedIds, id]);
      }
    };
    return <Table {...args} fullWidth>
        <Table.Header>
          <Table.Row>
            <Table.Head selection>
              <Checkbox checked={allSelected} indeterminate={indeterminate} onChange={toggleAll} />
            </Table.Head>
            <Table.Head>{t("story.table_id")}</Table.Head>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {manyRows.slice(0, 5).map(row => <Table.Row key={row.id} selected={selectedIds.includes(row.id)}>
              <Table.Cell selection>
                <Checkbox checked={selectedIds.includes(row.id)} onChange={() => toggleRow(row.id)} />
              </Table.Cell>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...H.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const manyRows = useManyRows();
    return <Table {...args} stickyHeader={true} fullWidth={true} maxHeight="300px">
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_id")}</Table.Head>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {manyRows.map(row => <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...StickyHeader,
  args: {
    scrollbar: "subtle"
  }
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...StickyHeader,
  args: {
    scrollbar: "hidden"
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const sampleData = useSampleData();
    return <Table {...args} mobileCard={true} fullWidth={true}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_id")}</Table.Head>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
            <Table.Head>{t("story.table_status")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.map(row => <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
              <Table.Cell label={t("story.table_status")}>
                <Badge content={row.status} size="sm" color={row.status === t("story.table_active") ? "primary" : "neutral"} />
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...S.parameters?.docs?.source}}};const V=["Default","Striped","Bordered","Hoverable","FullWidth","WithActions","Sortable","RowSelection","StickyHeader","SubtleScrollbar","HiddenScrollbar","MobileCard"],G=Object.freeze(Object.defineProperty({__proto__:null,Bordered:h,Default:i,FullWidth:_,HiddenScrollbar:j,Hoverable:p,MobileCard:S,RowSelection:H,Sortable:C,StickyHeader:m,Striped:T,SubtleScrollbar:g,WithActions:x,__namedExportsOrder:V,default:N},Symbol.toStringTag,{value:"Module"}));export{h as B,_ as F,p as H,H as R,T as S,G as T,x as W,m as a,g as b,C as c};
