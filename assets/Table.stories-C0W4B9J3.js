import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as k}from"./iframe-e7GXbi08.js";import{T as a}from"./Table-DEXTOjWj.js";import{B as W}from"./Badge-jXhvS_x9.js";import{C as v}from"./Checkbox-CUq1Aidp.js";import{I as E}from"./IconButton-DV6FLVPG.js";import{A as c}from"./i18nConstants-BpHxieg5.js";import{u as b}from"./useTranslation-DW6bJnO1.js";const N={title:"Components/Data Structures/Table",component:a,tags:[],argTypes:{striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},fullWidth:{control:"boolean"},stickyHeader:{control:"boolean"},scrollbar:{control:"select",options:["default","subtle","hidden"]},height:{control:"text"},maxHeight:{control:"text"}}},D=()=>{const{t}=b(c);return[{id:1,name:"John Doe",email:"john@example.com",status:t("story_table_active"),role:t("story_table_admin")},{id:2,name:"Jane Smith",email:"jane@example.com",status:t("story_table_inactive"),role:t("story_table_user")},{id:3,name:"Bob Johnson",email:"bob@example.com",status:t("story_table_active"),role:t("story_table_editor")},{id:4,name:"Alice Brown",email:"alice@example.com",status:t("story_table_pending"),role:t("story_table_user")}]},B=()=>{const{t}=b(c);return Array.from({length:30}).map((o,l)=>({id:l+1,name:`${t("story_table_user")} ${l+1}`,email:`user${l+1}@example.com`,role:l%3===0?t("story_table_admin"):t("story_table_member"),status:l%2===0?t("story_table_active"):t("story_table_inactive")}))},i={render:function(o){const{t:l}=b(c),s=D();return e.jsxs(a,{...o,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")}),e.jsx(a.Head,{children:l("story_table_status")})]})}),e.jsx(a.Body,{children:s.map(r=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_name"),children:r.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:r.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:r.role}),e.jsx(a.Cell,{label:l("story_table_status"),children:e.jsx(W,{content:r.status,size:"small",color:r.status===l("story_table_active")?"primary":"neutral"})})]},r.id))})]})}},y={...i,args:{striped:!0}},T={...i,args:{bordered:!0}},h={...i,args:{hoverable:!0}},p={...i,args:{fullWidth:!0}},x={render:function(o){const{t:l}=b(c),s=D();return e.jsxs(a,{...o,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{style:{width:"1%",whiteSpace:"nowrap"},children:l("story_table_actions")})]})}),e.jsx(a.Body,{children:s.slice(0,2).map(r=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_name"),children:r.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:r.email}),e.jsx(a.Cell,{label:l("story_table_actions"),children:e.jsxs("div",{style:{display:"flex",gap:"4px",justifyContent:"flex-start"},children:[e.jsx(E,{iconName:"EditIcon","aria-label":l("story_dropdown_edit"),size:"small",priority:"tertiary"}),e.jsx(E,{iconName:"TrashIcon","aria-label":l("story_dropdown_delete"),size:"small",priority:"tertiary",role:"destructive"})]})})]},r.id))})]})}},C={render:function(o){const{t:l}=b(c),s=B(),[r,_]=k.useState({key:"id",direction:"asc"}),[w,f]=k.useState(s),u=d=>{let n="asc";if(r.key===d&&(r.direction==="asc"?n="desc":r.direction==="desc"&&(n="none")),_({key:d,direction:n}),n==="none")f(s);else{const R=[...s].sort((L,M)=>{const A=L[d],I=M[d];return String(A)<String(I)?n==="asc"?-1:1:String(A)>String(I)?n==="asc"?1:-1:0});f(R)}};return e.jsxs(a,{...o,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="id"?r.direction:"none",onSort:()=>u("id"),children:l("story_table_id")}),e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="name"?r.direction:"none",onSort:()=>u("name"),children:l("story_table_name")}),e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="email"?r.direction:"none",onSort:()=>u("email"),children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")})]})}),e.jsx(a.Body,{children:w.slice(0,10).map(d=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_id"),children:d.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:d.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:d.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:d.role})]},d.id))})]})}},H={render:function(o){const{t:l}=b(c),s=B(),[r,_]=k.useState([]),w=r.length===5,f=r.length>0&&r.length<5,u=()=>{_(w?[]:[1,2,3,4,5])},d=n=>{r.includes(n)?_(r.filter(R=>R!==n)):_([...r,n])};return e.jsxs(a,{...o,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{selection:!0,children:e.jsx(v,{checked:w,indeterminate:f,onChange:u})}),e.jsx(a.Head,{children:l("story_table_id")}),e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")})]})}),e.jsx(a.Body,{children:s.slice(0,5).map(n=>e.jsxs(a.Row,{selected:r.includes(n.id),children:[e.jsx(a.Cell,{selection:!0,children:e.jsx(v,{checked:r.includes(n.id),onChange:()=>d(n.id)})}),e.jsx(a.Cell,{label:l("story_table_id"),children:n.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:n.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:n.email})]},n.id))})]})}},m={render:function(o){const{t:l}=b(c),s=B();return e.jsxs(a,{...o,stickyHeader:!0,fullWidth:!0,maxHeight:"300px",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_id")}),e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")})]})}),e.jsx(a.Body,{children:s.map(r=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_id"),children:r.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:r.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:r.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:r.role})]},r.id))})]})}},g={...m,args:{scrollbar:"subtle"}},j={...m,args:{scrollbar:"hidden"}},S={render:function(o){const{t:l}=b(c),s=D();return e.jsxs(a,{...o,mobileCard:!0,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_id")}),e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")}),e.jsx(a.Head,{children:l("story_table_status")})]})}),e.jsx(a.Body,{children:s.map(r=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_id"),children:r.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:r.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:r.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:r.role}),e.jsx(a.Cell,{label:l("story_table_status"),children:e.jsx(W,{content:r.status,size:"small",color:r.status===l("story_table_active")?"primary":"neutral"})})]},r.id))})]})},parameters:{viewport:{defaultViewport:"mobile1"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const sampleData = useSampleData();
    return <Table {...args}>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head>{t("story_table_name")}</Table.Head>\r
            <Table.Head>{t("story_table_email")}</Table.Head>\r
            <Table.Head>{t("story_table_role")}</Table.Head>\r
            <Table.Head>{t("story_table_status")}</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          {sampleData.map(row => <Table.Row key={row.id}>\r
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>\r
              <Table.Cell label={t("story_table_email")}>\r
                {row.email}\r
              </Table.Cell>\r
              <Table.Cell label={t("story_table_role")}>{row.role}</Table.Cell>\r
              <Table.Cell label={t("story_table_status")}>\r
                <Badge content={row.status} size="small" color={row.status === t("story_table_active") ? "primary" : "neutral"} />\r
              </Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
      </Table>;
  }
}`,...i.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    striped: true
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    bordered: true
  }
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    hoverable: true
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    fullWidth: true
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const sampleData = useSampleData();
    return <Table {...args} fullWidth={true}>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head>{t("story_table_name")}</Table.Head>\r
            <Table.Head>{t("story_table_email")}</Table.Head>\r
            <Table.Head style={{
            width: "1%",
            whiteSpace: "nowrap"
          }}>\r
              {t("story_table_actions")}\r
            </Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          {sampleData.slice(0, 2).map(row => <Table.Row key={row.id}>\r
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>\r
              <Table.Cell label={t("story_table_email")}>\r
                {row.email}\r
              </Table.Cell>\r
              <Table.Cell label={t("story_table_actions")}>\r
                <div style={{
              display: "flex",
              gap: "4px",
              justifyContent: "flex-start"
            }}>\r
                  <IconButton iconName="EditIcon" aria-label={t("story_dropdown_edit")} size="small" priority="tertiary" />\r
                  <IconButton iconName="TrashIcon" aria-label={t("story_dropdown_delete")} size="small" priority="tertiary"
              // eslint-disable-next-line jsx-a11y/aria-role
              role="destructive" />\r
                </div>\r
              </Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
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
    return <Table {...args} fullWidth>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head sortable sortDirection={sortConfig.key === "id" ? sortConfig.direction : "none"} onSort={() => handleSort("id")}>\r
              {t("story_table_id")}\r
            </Table.Head>\r
            <Table.Head sortable sortDirection={sortConfig.key === "name" ? sortConfig.direction : "none"} onSort={() => handleSort("name")}>\r
              {t("story_table_name")}\r
            </Table.Head>\r
            <Table.Head sortable sortDirection={sortConfig.key === "email" ? sortConfig.direction : "none"} onSort={() => handleSort("email")}>\r
              {t("story_table_email")}\r
            </Table.Head>\r
            <Table.Head>{t("story_table_role")}</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          {data.slice(0, 10).map(row => <Table.Row key={row.id}>\r
              <Table.Cell label={t("story_table_id")}>{row.id}</Table.Cell>\r
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>\r
              <Table.Cell label={t("story_table_email")}>\r
                {row.email}\r
              </Table.Cell>\r
              <Table.Cell label={t("story_table_role")}>{row.role}</Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
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
    return <Table {...args} fullWidth>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head selection>\r
              <Checkbox checked={allSelected} indeterminate={indeterminate} onChange={toggleAll} />\r
            </Table.Head>\r
            <Table.Head>{t("story_table_id")}</Table.Head>\r
            <Table.Head>{t("story_table_name")}</Table.Head>\r
            <Table.Head>{t("story_table_email")}</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          {manyRows.slice(0, 5).map(row => <Table.Row key={row.id} selected={selectedIds.includes(row.id)}>\r
              <Table.Cell selection>\r
                <Checkbox checked={selectedIds.includes(row.id)} onChange={() => toggleRow(row.id)} />\r
              </Table.Cell>\r
              <Table.Cell label={t("story_table_id")}>{row.id}</Table.Cell>\r
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>\r
              <Table.Cell label={t("story_table_email")}>\r
                {row.email}\r
              </Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
      </Table>;
  }
}`,...H.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const manyRows = useManyRows();
    return <Table {...args} stickyHeader={true} fullWidth={true} maxHeight="300px">\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head>{t("story_table_id")}</Table.Head>\r
            <Table.Head>{t("story_table_name")}</Table.Head>\r
            <Table.Head>{t("story_table_email")}</Table.Head>\r
            <Table.Head>{t("story_table_role")}</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          {manyRows.map(row => <Table.Row key={row.id}>\r
              <Table.Cell label={t("story_table_id")}>{row.id}</Table.Cell>\r
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>\r
              <Table.Cell label={t("story_table_email")}>\r
                {row.email}\r
              </Table.Cell>\r
              <Table.Cell label={t("story_table_role")}>{row.role}</Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
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
    return <Table {...args} mobileCard={true} fullWidth={true}>\r
        <Table.Header>\r
          <Table.Row>\r
            <Table.Head>{t("story_table_id")}</Table.Head>\r
            <Table.Head>{t("story_table_name")}</Table.Head>\r
            <Table.Head>{t("story_table_email")}</Table.Head>\r
            <Table.Head>{t("story_table_role")}</Table.Head>\r
            <Table.Head>{t("story_table_status")}</Table.Head>\r
          </Table.Row>\r
        </Table.Header>\r
        <Table.Body>\r
          {sampleData.map(row => <Table.Row key={row.id}>\r
              <Table.Cell label={t("story_table_id")}>{row.id}</Table.Cell>\r
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>\r
              <Table.Cell label={t("story_table_email")}>\r
                {row.email}\r
              </Table.Cell>\r
              <Table.Cell label={t("story_table_role")}>{row.role}</Table.Cell>\r
              <Table.Cell label={t("story_table_status")}>\r
                <Badge content={row.status} size="small" color={row.status === t("story_table_active") ? "primary" : "neutral"} />\r
              </Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
      </Table>;
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...S.parameters?.docs?.source}}};const V=["Default","Striped","Bordered","Hoverable","FullWidth","WithActions","Sortable","RowSelection","StickyHeader","SubtleScrollbar","HiddenScrollbar","MobileCard"],K=Object.freeze(Object.defineProperty({__proto__:null,Bordered:T,Default:i,FullWidth:p,HiddenScrollbar:j,Hoverable:h,MobileCard:S,RowSelection:H,Sortable:C,StickyHeader:m,Striped:y,SubtleScrollbar:g,WithActions:x,__namedExportsOrder:V,default:N},Symbol.toStringTag,{value:"Module"}));export{T as B,p as F,h as H,H as R,y as S,K as T,x as W,m as a,g as b,C as c};
