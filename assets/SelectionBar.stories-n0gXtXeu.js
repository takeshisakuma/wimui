"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-DbPgW6Wr.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./Stack-SbfzwNKR.js";import{n as d,t as f}from"./Button-Drq-Mw-h.js";import{n as p,t as m}from"./Badge-CWMYBHho.js";import{n as h,t as g}from"./DataGrid-DksH_G1-.js";import{n as _,t as v}from"./SelectionBar-BakDD5l0.js";import{n as y,t as b}from"./Popconfirm-Dq_0Kvw_.js";var x=n({Default:()=>E,WithDataGrid:()=>k,__namedExportsOrder:()=>A,default:()=>w}),S,C,w,T,E,D,O,k,A;function j(){return(j=t((()=>{S=e(r(),1),a(),_(),h(),p(),d(),y(),l(),o(),C=c(),w={title:`Components/Data Structures/SelectionBar`,component:v,parameters:{layout:`padded`},argTypes:{count:{control:{type:`number`,min:0}}}},T=()=>{let{t:e}=i(s);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(f,{variant:`outline`,size:`sm`,children:e(`story.selectionbar_action_labels`)}),(0,C.jsx)(f,{variant:`outline`,size:`sm`,children:e(`story.selectionbar_action_shipped`)}),(0,C.jsx)(f,{variant:`ghost`,size:`sm`,intent:`danger`,children:e(`story.selectionbar_action_cancel`)})]})},E={args:{count:3},render:e=>{let[t,n]=S.useState(e.count);return S.useEffect(()=>n(e.count),[e.count]),(0,C.jsx)(v,{...e,count:t,onClear:()=>n(0),children:(0,C.jsx)(T,{})})}},D=[{id:`A-20931`,customer:`Mariana Okafor`,items:2,total:`¥8,640`,status:`paid`},{id:`A-20927`,customer:`佐々木 透`,items:1,total:`¥2,180`,status:`packed`},{id:`A-20918`,customer:`Lukas Brandt`,items:7,total:`¥31,905`,status:`paid`},{id:`A-20916`,customer:`Thanh Nguyen`,items:1,total:`¥1,320`,status:`on_hold`},{id:`A-20902`,customer:`Inês Carvalho`,items:3,total:`¥12,470`,status:`paid`}],O={paid:`neutral`,packed:`success`,on_hold:`warning`},k={render:()=>{let{t:e}=i(s),[t,n]=S.useState([`A-20931`,`A-20918`]),[r,a]=S.useState([]),o=D.filter(e=>!r.includes(e.id)),c=[{key:`id`,title:e(`story.selectionbar_col_order`),width:96},{key:`customer`,title:e(`story.selectionbar_col_customer`),width:160},{key:`items`,title:e(`story.selectionbar_col_items`),width:64},{key:`total`,title:e(`story.selectionbar_col_total`),width:96},{key:`status`,title:e(`story.selectionbar_col_status`),width:96,render:t=>{let n=t;return(0,C.jsx)(m,{intent:O[n],variant:`subtle`,children:e(`story.selectionbar_status_${n}`)})}}];return(0,C.jsxs)(u,{gap:`xs`,children:[(0,C.jsxs)(v,{count:t.length,onClear:()=>n([]),children:[(0,C.jsx)(f,{variant:`outline`,size:`sm`,children:e(`story.selectionbar_action_labels`)}),(0,C.jsx)(f,{variant:`outline`,size:`sm`,children:e(`story.selectionbar_action_shipped`)}),(0,C.jsx)(b,{title:e(`story.selectionbar_cancel_confirm`,{count:t.length}),okText:e(`story.selectionbar_action_cancel`),cancelText:e(`story.selectionbar_cancel_keep`),okType:`danger`,onConfirm:()=>{a(e=>[...e,...t]),n([])},children:(0,C.jsx)(f,{variant:`ghost`,size:`sm`,intent:`danger`,children:e(`story.selectionbar_action_cancel`)})})]}),(0,C.jsx)(g,{"aria-label":e(`story.selectionbar_grid_label`),columns:c,data:o,rowKey:`id`,selection:!0,selectedRowKeys:t,onSelectionChange:e=>n(e),bordered:!0,mobileCard:!0})]})}},A=[`Default`,`WithDataGrid`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3
  },
  render: args => {
    const [count, setCount] = React.useState(args.count);
    React.useEffect(() => setCount(args.count), [args.count]);
    return <SelectionBar {...args} count={count} onClear={() => setCount(0)}>
        <OrderActions />
      </SelectionBar>;
  }
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [selected, setSelected] = React.useState<string[]>(["A-20931", "A-20918"]);
    const [cancelled, setCancelled] = React.useState<string[]>([]);
    const rows = ORDERS.filter(order => !cancelled.includes(order.id));
    const columns = [{
      key: "id",
      title: t("story.selectionbar_col_order"),
      width: 96
    }, {
      key: "customer",
      title: t("story.selectionbar_col_customer"),
      width: 160
    }, {
      key: "items",
      title: t("story.selectionbar_col_items"),
      width: 64
    }, {
      key: "total",
      title: t("story.selectionbar_col_total"),
      width: 96
    }, {
      key: "status",
      title: t("story.selectionbar_col_status"),
      width: 96,
      render: (value: unknown) => {
        const status = value as Order["status"];
        return <Badge intent={STATUS_INTENT[status]} variant="subtle">
              {t(\`story.selectionbar_status_\${status}\`)}
            </Badge>;
      }
    }];
    return <Stack gap="xs">
        <SelectionBar count={selected.length} onClear={() => setSelected([])}>
          <Button variant="outline" size="sm">
            {t("story.selectionbar_action_labels")}
          </Button>
          <Button variant="outline" size="sm">
            {t("story.selectionbar_action_shipped")}
          </Button>
          <Popconfirm title={t("story.selectionbar_cancel_confirm", {
          count: selected.length
        })} okText={t("story.selectionbar_action_cancel")} cancelText={t("story.selectionbar_cancel_keep")} okType="danger" onConfirm={() => {
          setCancelled(ids => [...ids, ...selected]);
          setSelected([]);
        }}>
            <Button variant="ghost" size="sm" intent="danger">
              {t("story.selectionbar_action_cancel")}
            </Button>
          </Popconfirm>
        </SelectionBar>
        <DataGrid aria-label={t("story.selectionbar_grid_label")} columns={columns} data={rows as unknown as Record<string, unknown>[]} rowKey="id" selection selectedRowKeys={selected} onSelectionChange={keys => setSelected(keys)} bordered mobileCard />
      </Stack>;
  }
}`,...k.parameters?.docs?.source},description:{story:`表の上に置き、選んだ件数に応じて出る。閉じても status 領域は残り、解除を告知する。`,...k.parameters?.docs?.description}}}})))()}export{j as i,x as n,k as r,E as t};