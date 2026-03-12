import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as S}from"./iframe-CxkJglxX.js";import{T as a}from"./Table-CUe1C9Ym.js";import{B as V}from"./Badge-CFo6vcqa.js";import{C as I}from"./Checkbox-npdQ0eKI.js";import{I as W}from"./IconButton-DNDjNUGq.js";import{u as i}from"./useTranslation-0fSK9VPD.js";const M={title:"Components/Data Structures/Table",component:a,tags:[],argTypes:{striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},fullWidth:{control:"boolean"},stickyHeader:{control:"boolean"},scrollbar:{control:"select",options:["default","subtle","hidden"]},height:{control:"text"},maxHeight:{control:"text"}}},v=()=>{const{t:s}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return[{id:1,name:"John Doe",email:"john@example.com",status:s("story_table_active"),role:s("story_table_admin")},{id:2,name:"Jane Smith",email:"jane@example.com",status:s("story_table_inactive"),role:s("story_table_user")},{id:3,name:"Bob Johnson",email:"bob@example.com",status:s("story_table_active"),role:s("story_table_editor")},{id:4,name:"Alice Brown",email:"alice@example.com",status:s("story_table_pending"),role:s("story_table_user")}]},D=()=>{const{t:s}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return Array.from({length:30}).map((n,l)=>({id:l+1,name:`${s("story_table_user")} ${l+1}`,email:`user${l+1}@example.com`,role:l%3===0?s("story_table_admin"):s("story_table_member"),status:l%2===0?s("story_table_active"):s("story_table_inactive")}))},c={render:function(n){const{t:l}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=v();return e.jsxs(a,{...n,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")}),e.jsx(a.Head,{children:l("story_table_status")})]})}),e.jsx(a.Body,{children:o.map(t=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_name"),children:t.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:t.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:t.role}),e.jsx(a.Cell,{label:l("story_table_status"),children:e.jsx(V,{content:t.status,size:"small",color:t.status===l("story_table_active")?"primary":"neutral"})})]},t.id))})]})}},u={...c,args:{striped:!0}},y={...c,args:{bordered:!0}},p={...c,args:{hoverable:!0}},T={...c,args:{fullWidth:!0}},h={render:function(n){const{t:l}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=v();return e.jsxs(a,{...n,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{style:{width:"1%",whiteSpace:"nowrap"},children:l("story_table_actions")})]})}),e.jsx(a.Body,{children:o.slice(0,2).map(t=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_name"),children:t.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:t.email}),e.jsx(a.Cell,{label:l("story_table_actions"),children:e.jsxs("div",{style:{display:"flex",gap:"4px",justifyContent:"flex-start"},children:[e.jsx(W,{iconName:"EditIcon","aria-label":l("story_dropdown_edit"),size:"small",priority:"tertiary"}),e.jsx(W,{iconName:"TrashIcon","aria-label":l("story_dropdown_delete"),size:"small",priority:"tertiary",role:"destructive"})]})})]},t.id))})]})}},g={render:function(n){const{t:l}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=D(),[t,_]=S.useState({key:"id",direction:"asc"}),[f,w]=S.useState(o),m=d=>{let r="asc";if(t.key===d&&(t.direction==="asc"?r="desc":t.direction==="desc"&&(r="none")),_({key:d,direction:r}),r==="none")w(o);else{const R=[...o].sort((z,A)=>{const k=z[d],B=A[d];return k<B?r==="asc"?-1:1:k>B?r==="asc"?1:-1:0});w(R)}};return e.jsxs(a,{...n,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{sortable:!0,sortDirection:t.key==="id"?t.direction:"none",onSort:()=>m("id"),children:l("story_table_id")}),e.jsx(a.Head,{sortable:!0,sortDirection:t.key==="name"?t.direction:"none",onSort:()=>m("name"),children:l("story_table_name")}),e.jsx(a.Head,{sortable:!0,sortDirection:t.key==="email"?t.direction:"none",onSort:()=>m("email"),children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")})]})}),e.jsx(a.Body,{children:f.slice(0,10).map(d=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_id"),children:d.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:d.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:d.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:d.role})]},d.id))})]})}},x={render:function(n){const{t:l}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=D(),[t,_]=S.useState([]),f=t.length===5,w=t.length>0&&t.length<5,m=()=>{_(f?[]:[1,2,3,4,5])},d=r=>{t.includes(r)?_(t.filter(R=>R!==r)):_([...t,r])};return e.jsxs(a,{...n,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{selection:!0,children:e.jsx(I,{checked:f,indeterminate:w,onChange:m})}),e.jsx(a.Head,{children:l("story_table_id")}),e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")})]})}),e.jsx(a.Body,{children:o.slice(0,5).map(r=>e.jsxs(a.Row,{selected:t.includes(r.id),children:[e.jsx(a.Cell,{selection:!0,children:e.jsx(I,{checked:t.includes(r.id),onChange:()=>d(r.id)})}),e.jsx(a.Cell,{label:l("story_table_id"),children:r.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:r.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:r.email})]},r.id))})]})}},b={render:function(n){const{t:l}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=D();return e.jsxs(a,{...n,stickyHeader:!0,fullWidth:!0,maxHeight:"300px",children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_id")}),e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")})]})}),e.jsx(a.Body,{children:o.map(t=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_id"),children:t.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:t.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:t.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:t.role})]},t.id))})]})}},H={...b,args:{scrollbar:"subtle"}},C={...b,args:{scrollbar:"hidden"}},j={render:function(n){const{t:l}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=v();return e.jsxs(a,{...n,mobileCard:!0,fullWidth:!0,children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:l("story_table_id")}),e.jsx(a.Head,{children:l("story_table_name")}),e.jsx(a.Head,{children:l("story_table_email")}),e.jsx(a.Head,{children:l("story_table_role")}),e.jsx(a.Head,{children:l("story_table_status")})]})}),e.jsx(a.Body,{children:o.map(t=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{label:l("story_table_id"),children:t.id}),e.jsx(a.Cell,{label:l("story_table_name"),children:t.name}),e.jsx(a.Cell,{label:l("story_table_email"),children:t.email}),e.jsx(a.Cell,{label:l("story_table_role"),children:t.role}),e.jsx(a.Cell,{label:l("story_table_status"),children:e.jsx(V,{content:t.status,size:"small",color:t.status===l("story_table_active")?"primary":"neutral"})})]},t.id))})]})},parameters:{viewport:{defaultViewport:"mobile1"}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    striped: true
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    bordered: true
  }
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    hoverable: true
  }
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    fullWidth: true
  }
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...b.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  ...StickyHeader,
  args: {
    scrollbar: "subtle"
  }
}`,...H.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...StickyHeader,
  args: {
    scrollbar: "hidden"
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...j.parameters?.docs?.source}}};const E=["Default","Striped","Bordered","Hoverable","FullWidth","WithActions","Sortable","RowSelection","StickyHeader","SubtleScrollbar","HiddenScrollbar","MobileCard"],G=Object.freeze(Object.defineProperty({__proto__:null,Bordered:y,Default:c,FullWidth:T,HiddenScrollbar:C,Hoverable:p,MobileCard:j,RowSelection:x,Sortable:g,StickyHeader:b,Striped:u,SubtleScrollbar:H,WithActions:h,__namedExportsOrder:E,default:M},Symbol.toStringTag,{value:"Module"}));export{y as B,T as F,p as H,x as R,u as S,G as T,h as W,b as a,H as b,g as c};
