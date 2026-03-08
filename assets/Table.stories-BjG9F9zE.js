import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as S}from"./iframe-B7UVZHXg.js";import{T as a}from"./Table-q6jf_IRK.js";import{B as V}from"./Badge-DgTPN1nG.js";import{C as v}from"./Checkbox-BwTnvXUo.js";import{I as W}from"./IconButton-B_ShMjZG.js";import{u as c}from"./useTranslation-CQiqGYf8.js";const M={title:"Components/Data Structures/Table",component:a,tags:[],argTypes:{striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},fullWidth:{control:"boolean"},stickyHeader:{control:"boolean"},scrollbar:{control:"select",options:["default","subtle","hidden"]},height:{control:"text"},maxHeight:{control:"text"}}},D=()=>{const{t}=c(["docs","common","components"]);return[{id:1,name:"John Doe",email:"john@example.com",status:t("story_table_active"),role:t("story_table_admin")},{id:2,name:"Jane Smith",email:"jane@example.com",status:t("story_table_inactive"),role:t("story_table_user")},{id:3,name:"Bob Johnson",email:"bob@example.com",status:t("story_table_active"),role:t("story_table_editor")},{id:4,name:"Alice Brown",email:"alice@example.com",status:t("story_table_pending"),role:t("story_table_user")}]},k=()=>{const{t}=c(["docs","common","components"]);return Array.from({length:30}).map((s,l)=>({id:l+1,name:`${t("story_table_user")} ${l+1}`,email:`user${l+1}@example.com`,role:l%3===0?t("story_table_admin"):t("story_table_member"),status:l%2===0?t("story_table_active"):t("story_table_inactive")}))},i={render:function(s){const{t:l}=c(["docs","common","components"]),o=D();return e.jsxs(a,{...s,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")}),e.jsx(a.Head,{children:l("story_table_status")})]})}),e.jsx(a.Body,{children:o.map(r=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_name"),children:r.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:r.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:r.role}),e.jsx(a.Cell,{label:l("story_table_status"),children:e.jsx(V,{content:r.status,size:"small",color:r.status===l("story_table_active")?"primary":"neutral"})})]},r.id))})]})}},u={...i,args:{striped:!0}},y={...i,args:{bordered:!0}},T={...i,args:{hoverable:!0}},p={...i,args:{fullWidth:!0}},h={render:function(s){const{t:l}=c(["docs","common","components"]),o=D();return e.jsxs(a,{...s,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{style:{width:"1%",whiteSpace:"nowrap"},children:l("story_table_actions")})]})}),e.jsx(a.Body,{children:o.slice(0,2).map(r=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_name"),children:r.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:r.email}),e.jsx(a.Cell,{label:l("story_table_actions"),children:e.jsxs("div",{style:{display:"flex",gap:"4px",justifyContent:"flex-start"},children:[e.jsx(W,{iconName:"EditIcon","aria-label":l("story_dropdown_edit"),size:"small",priority:"tertiary"}),e.jsx(W,{iconName:"TrashIcon","aria-label":l("story_dropdown_delete"),size:"small",priority:"tertiary",role:"destructive"})]})})]},r.id))})]})}},x={render:function(s){const{t:l}=c(["docs","common","components"]),o=k(),[r,m]=S.useState({key:"id",direction:"asc"}),[f,w]=S.useState(o),_=d=>{let n="asc";if(r.key===d&&(r.direction==="asc"?n="desc":r.direction==="desc"&&(n="none")),m({key:d,direction:n}),n==="none")w(o);else{const R=[...o].sort((z,A)=>{const B=z[d],I=A[d];return B<I?n==="asc"?-1:1:B>I?n==="asc"?1:-1:0});w(R)}};return e.jsxs(a,{...s,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="id"?r.direction:"none",onSort:()=>_("id"),children:l("story_table_id")}),e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="name"?r.direction:"none",onSort:()=>_("name"),children:l("story_table_name")}),e.jsx(a.Head,{sortable:!0,sortDirection:r.key==="email"?r.direction:"none",onSort:()=>_("email"),children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")})]})}),e.jsx(a.Body,{children:f.slice(0,10).map(d=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_id"),children:d.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:d.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:d.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:d.role})]},d.id))})]})}},H={render:function(s){const{t:l}=c(["docs","common","components"]),o=k(),[r,m]=S.useState([]),f=r.length===5,w=r.length>0&&r.length<5,_=()=>{m(f?[]:[1,2,3,4,5])},d=n=>{r.includes(n)?m(r.filter(R=>R!==n)):m([...r,n])};return e.jsxs(a,{...s,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{selection:!0,children:e.jsx(v,{checked:f,indeterminate:w,onChange:_})}),e.jsx(a.Head,{children:l("story_table_id")}),e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")})]})}),e.jsx(a.Body,{children:o.slice(0,5).map(n=>e.jsxs(a.Row,{selected:r.includes(n.id),children:[e.jsx(a.Cell,{selection:!0,children:e.jsx(v,{checked:r.includes(n.id),onChange:()=>d(n.id)})}),e.jsx(a.Cell,{label:l("story_table_id"),children:n.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:n.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:n.email})]},n.id))})]})}},b={render:function(s){const{t:l}=c(["docs","common","components"]),o=k();return e.jsxs(a,{...s,stickyHeader:!0,fullWidth:!0,maxHeight:"300px",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_id")}),e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")})]})}),e.jsx(a.Body,{children:o.map(r=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_id"),children:r.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:r.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:r.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:r.role})]},r.id))})]})}},C={...b,args:{scrollbar:"subtle"}},j={...b,args:{scrollbar:"hidden"}},g={render:function(s){const{t:l}=c(["docs","common","components"]),o=D();return e.jsxs(a,{...s,mobileCard:!0,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_id")}),e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")}),e.jsx(a.Head,{children:l("story_table_status")})]})}),e.jsx(a.Body,{children:o.map(r=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_id"),children:r.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:r.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:r.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:r.role}),e.jsx(a.Cell,{label:l("story_table_status"),children:e.jsx(V,{content:r.status,size:"small",color:r.status===l("story_table_active")?"primary":"neutral"})})]},r.id))})]})},parameters:{viewport:{defaultViewport:"mobile1"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    striped: true
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    bordered: true
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    hoverable: true
  }
}`,...T.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    fullWidth: true
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
                  <IconButton iconName="TrashIcon" aria-label={t("story_dropdown_delete")} size="small" priority="tertiary" role="destructive" />\r
                </div>\r
              </Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
      </Table>;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
          const aValue = (a as any)[key];
          const bValue = (b as any)[key];
          if (aValue < bValue) return direction === "asc" ? -1 : 1;
          if (aValue > bValue) return direction === "asc" ? 1 : -1;
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
}`,...x.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...H.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...StickyHeader,
  args: {
    scrollbar: "subtle"
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...StickyHeader,
  args: {
    scrollbar: "hidden"
  }
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...g.parameters?.docs?.source}}};const E=["Default","Striped","Bordered","Hoverable","FullWidth","WithActions","Sortable","RowSelection","StickyHeader","SubtleScrollbar","HiddenScrollbar","MobileCard"],G=Object.freeze(Object.defineProperty({__proto__:null,Bordered:y,Default:i,FullWidth:p,HiddenScrollbar:j,Hoverable:T,MobileCard:g,RowSelection:H,Sortable:x,StickyHeader:b,Striped:u,SubtleScrollbar:C,WithActions:h,__namedExportsOrder:E,default:M},Symbol.toStringTag,{value:"Module"}));export{y as B,p as F,T as H,H as R,u as S,G as T,h as W,b as a,C as b,x as c};
