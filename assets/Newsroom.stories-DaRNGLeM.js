"use client";
import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{n as r,t as i}from"./useTranslation-CpMdOj2B.js";import{n as a,t as o}from"./i18nConstants-YD8z3mm4.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./AppShell-Buae-tTa.js";import{n as u,t as d}from"./Box-B1y3gmHG.js";import{n as ee,t as f}from"./Group-tKRHS_M5.js";import{n as p,t as m}from"./Header-CjD3gpyM.js";import{n as h,t as g}from"./HamburgerMenu-CEzwlF_7.js";import{a as _,c as te,i as ne,o as re,r as ie,s as ae,t as oe,u as se}from"./Drawer-Cq685Dcl.js";import{n as v,t as y}from"./Stack-SbfzwNKR.js";import{n as ce,t as b}from"./Sidebar-CNHqL0rC.js";import{n as le,t as ue}from"./Icon-DVOd_3B-.js";import{n as de,t as x}from"./Button-BoupO2IM.js";import{n as fe,t as S}from"./Title-DbsxqXW4.js";import{n as C,t as w}from"./Badge-CU-eGZFm.js";import{n as T,t as E}from"./Text-D9yqbrao.js";import{n as D,t as O}from"./VirtualList-CqeBrLQa.js";import{n as k,t as A}from"./Transfer-DBjXFrLD.js";import{n as j,t as M}from"./TreeView-CxVnEPZi.js";import{l as N,n as P}from"./Dialog-MLzHYwEX.js";import{n as F,t as I}from"./Tag-AZ_R5aWQ.js";import{r as L,t as pe}from"./Kanban-sYHVZYke.js";import{n as R,t as z}from"./SortableList-B-okdQUZ.js";var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{B=e(n(),1),i(),a(),c(),C(),u(),de(),N(),se(),ee(),h(),p(),le(),L(),ce(),R(),v(),F(),T(),fe(),k(),j(),D(),V=s(),H={title:`Patterns/Newsroom`,parameters:{layout:`fullscreen`,docs:{description:{component:"7 枚目の合成画面（T32 / T95 の候補 B）。**狙いは「一覧と編集」の層**で、\nドラッグ（`Kanban` / `SortableList`）・階層（`TreeView`）・割り当て（`Transfer`）・\n仮想化（`VirtualList`）を、無理なく同居する題材に載せる。\n\n**主役は 1 つ ── 進行ボード。** サイドバーの階層もツールバーもクロームなので声量を下げ、\nprimary の面は「入稿」ボタン 1 つだけに置く（DESIGN.md の必須ルール 1 / 6 / 12）。\n\n**7 コンポーネント全部は載せない。** 候補 B には `TransferList` と `SwipeableList` も\n含まれるが、前者は `Transfer` の内側、後者はモバイル固有の操作で、この画面に\n積むと「全部のスロットを埋める」ことになる（禁止パターン）。数は内容から決める。"}}}},U=e=>`docs_stories_recipes:newsroom.${e}`,W=()=>{let{t:e}=r(o);return(0,B.useMemo)(()=>({reporting:[{id:`a-8841`,headline:e(U(`h_ferry`)),reporter:`宮下 玲奈`,due:e(U(`due_1900`))},{id:`a-8836`,headline:e(U(`h_budget`)),due:e(U(`due_tomorrow`))}],writing:[{id:`a-8829`,headline:e(U(`h_election`)),reporter:`Amara Osei`,due:e(U(`due_2130`)),words:1840},{id:`a-8812`,headline:e(U(`h_longform`)),reporter:`河合 拓真`,due:e(U(`due_friday`)),words:4210},{id:`a-8805`,headline:e(U(`h_weather`)),reporter:`Petra Novák`,due:e(U(`due_1700`)),overdue:!0}],desk:[{id:`a-8798`,headline:e(U(`h_transit`)),reporter:`宮下 玲奈`,due:e(U(`due_2000`)),words:920}],done:[{id:`a-8771`,headline:e(U(`h_obituary`)),reporter:`Luis Ferreira`,due:e(U(`due_done`)),words:610},{id:`a-8764`,headline:e(U(`h_market`)),reporter:`河合 拓真`,due:e(U(`due_done`)),words:1130},{id:`a-8752`,headline:e(U(`h_sports`)),reporter:`Amara Osei`,due:e(U(`due_done`)),words:780}]}),[e])},G=({article:e})=>{let{t}=r(o);return(0,V.jsxs)(y,{gap:`2xs`,children:[(0,V.jsx)(E,{size:`sm`,children:e.headline}),(0,V.jsxs)(f,{gap:`xs`,align:`center`,children:[(0,V.jsx)(E,{size:`xs`,color:e.reporter?`secondary`:`tertiary`,children:e.reporter??t(U(`unassigned`))}),e.overdue?(0,V.jsxs)(I,{intent:`danger`,variant:`subtle`,size:`sm`,children:[(0,V.jsx)(ue,{name:`ClockIcon`,size:`sm`}),e.due]}):(0,V.jsx)(E,{size:`xs`,color:`text-tertiary`,children:e.due}),e.words?(0,V.jsx)(E,{size:`xs`,color:`text-tertiary`,children:t(U(`words`),{count:e.words})}):null]})]})},K=()=>{let{t:e}=r(o);return(0,V.jsxs)(M,{defaultExpandedValues:[`news`,`news-local`],"aria-label":e(U(`tree_label`)),children:[(0,V.jsxs)(M.Item,{value:`news`,label:e(U(`sec_news`)),children:[(0,V.jsxs)(M.Item,{value:`news-local`,label:e(U(`sec_local`)),children:[(0,V.jsx)(M.Item,{value:`news-local-city`,label:e(U(`sec_city`))}),(0,V.jsx)(M.Item,{value:`news-local-transit`,label:e(U(`sec_transit`))})]}),(0,V.jsx)(M.Item,{value:`news-politics`,label:e(U(`sec_politics`))})]}),(0,V.jsx)(M.Item,{value:`biz`,label:e(U(`sec_business`)),children:(0,V.jsx)(M.Item,{value:`biz-markets`,label:e(U(`sec_markets`))})}),(0,V.jsx)(M.Item,{value:`sports`,label:e(U(`sec_sports`))}),(0,V.jsx)(M.Item,{value:`obit`,label:e(U(`sec_obituaries`))})]})},q=()=>{let{t:e}=r(o),t=W(),n=[{id:`reporting`,title:e(U(`col_reporting`)),items:t.reporting},{id:`writing`,title:e(U(`col_writing`)),items:t.writing},{id:`desk`,title:e(U(`col_desk`)),items:t.desk},{id:`done`,title:e(U(`col_done`)),items:t.done}].map(e=>({id:e.id,title:e.title,items:e.items.map(e=>({id:e.id,content:(0,V.jsx)(G,{article:e})}))}));return(0,V.jsx)(pe,{columns:n})},J={render:()=>{let{t:e}=r(o),[t,n]=(0,B.useState)(!1);return(0,V.jsxs)(l,{children:[(0,V.jsx)(l.Header,{children:(0,V.jsxs)(m,{children:[(0,V.jsx)(m.Section,{children:(0,V.jsxs)(f,{gap:`sm`,align:`center`,wrap:`nowrap`,children:[(0,V.jsx)(g,{size:`sm`,visibleBelow:`md`,open:t,onOpenChange:n}),(0,V.jsx)(S,{tag:`h1`,size:`md`,children:e(U(`title`))})]})}),(0,V.jsx)(m.Section,{align:`end`,children:(0,V.jsxs)(f,{gap:`sm`,align:`center`,children:[(0,V.jsx)(E,{size:`sm`,color:`secondary`,children:e(U(`deadline`))}),(0,V.jsx)(x,{intent:`default`,variant:`solid`,size:`sm`,children:e(U(`file_copy`))})]})})]})}),(0,V.jsxs)(l.Body,{children:[(0,V.jsx)(l.Sidebar,{children:(0,V.jsxs)(b,{mobileOpen:t,onOverlayClick:()=>n(!1),children:[(0,V.jsx)(b.Header,{children:(0,V.jsx)(E,{size:`xs`,color:`text-tertiary`,children:e(U(`sections`))})}),(0,V.jsx)(b.Content,{children:(0,V.jsx)(K,{})})]})}),(0,V.jsx)(l.Main,{children:(0,V.jsx)(q,{})})]})]})}},Y={render:()=>{let{t:e}=r(o),[t,n]=(0,B.useState)([`d-ikeda`,`d-santos`]),i=[{key:`d-ikeda`,title:`池田 さやか`,description:e(U(`desk_city`))},{key:`d-santos`,title:`Rafael Santos`,description:e(U(`desk_politics`))},{key:`d-tanabe`,title:`田辺 一志`,description:e(U(`desk_markets`))},{key:`d-oyelaran`,title:`Bisi Oyelaran`,description:e(U(`desk_sports`))},{key:`d-mori`,title:`森 千夏`,description:e(U(`desk_night`)),disabled:!0}];return(0,V.jsx)(d,{p:`lg`,children:(0,V.jsx)(P,{open:!0,onOpenChange:()=>void 0,children:(0,V.jsxs)(P.Content,{children:[(0,V.jsxs)(P.Header,{children:[(0,V.jsx)(P.Title,{children:e(U(`assign_title`))}),(0,V.jsx)(P.Description,{children:e(U(`assign_desc`))})]}),(0,V.jsx)(A,{dataSource:i,targetKeys:t,onChange:n}),(0,V.jsxs)(P.Footer,{children:[(0,V.jsx)(x,{variant:`ghost`,children:e(U(`cancel`))}),(0,V.jsx)(x,{variant:`solid`,children:e(U(`assign_save`))})]})]})})})}},X={render:()=>{let{t:e}=r(o),[t,n]=(0,B.useState)([{id:`a-8829`,label:e(U(`h_election`)),slot:e(U(`slot_lead`))},{id:`a-8798`,label:e(U(`h_transit`)),slot:e(U(`slot_second`))},{id:`a-8812`,label:e(U(`h_longform`)),slot:e(U(`slot_feature`))},{id:`a-8764`,label:e(U(`h_market`)),slot:e(U(`slot_below`))}]);return(0,V.jsx)(d,{p:`lg`,children:(0,V.jsx)(ie,{open:!0,onOpenChange:()=>void 0,children:(0,V.jsxs)(ne,{children:[(0,V.jsxs)(ae,{children:[(0,V.jsx)(te,{children:e(U(`front_title`))}),(0,V.jsx)(_,{children:e(U(`front_desc`))})]}),(0,V.jsx)(oe,{children:(0,V.jsx)(z,{onSortEnd:(e,t)=>n(n=>{let r=[...n],[i]=r.splice(e,1);return r.splice(t,0,i),r}),children:t.map((e,t)=>(0,V.jsxs)(z.Item,{index:t,children:[(0,V.jsx)(z.DragHandle,{}),(0,V.jsxs)(y,{gap:`2xs`,children:[(0,V.jsx)(E,{size:`sm`,children:e.label}),(0,V.jsx)(E,{size:`xs`,color:`text-tertiary`,children:e.slot})]})]},e.id))})}),(0,V.jsxs)(re,{children:[(0,V.jsx)(x,{variant:`ghost`,children:e(U(`cancel`))}),(0,V.jsx)(x,{variant:`solid`,children:e(U(`front_lock`))})]})]})})})}},Z={render:()=>{let{t:e}=r(o),t=[`宮下 玲奈`,`Amara Osei`,`池田 さやか`,`河合 拓真`,`Rafael Santos`],n=[e(U(`log_edit`)),e(U(`log_move`)),e(U(`log_assign`)),e(U(`log_kill`))],i=[3,11,2,27,5,8,1,19],a=0,s=Array.from({length:420},(r,o)=>(a+=i[o%i.length],{id:`r-${9412-o}`,actor:t[o*3%t.length],action:n[o*5%n.length],ago:e(U(`minutes_ago`),{count:a})}));return(0,V.jsx)(d,{p:`lg`,children:(0,V.jsxs)(y,{gap:`sm`,children:[(0,V.jsx)(S,{tag:`h2`,size:`sm`,children:e(U(`log_title`))}),(0,V.jsx)(O,{items:s,height:320,itemHeight:44,"aria-label":e(U(`log_title`)),renderItem:e=>(0,V.jsxs)(f,{justify:`between`,align:`center`,wrap:`nowrap`,children:[(0,V.jsxs)(f,{gap:`sm`,align:`center`,wrap:`nowrap`,style:{minWidth:0},children:[(0,V.jsx)(E,{size:`sm`,truncate:!0,children:e.actor}),(0,V.jsx)(E,{size:`sm`,color:`secondary`,truncate:!0,children:e.action}),(0,V.jsx)(w,{intent:`neutral`,variant:`subtle`,size:`sm`,children:e.id})]}),(0,V.jsx)(E,{size:`xs`,color:`text-tertiary`,nowrap:!0,children:e.ago})]})})]})})}},Q=[`Default`,`AssignDesk`,`FrontPageOrder`,`RevisionLog`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    // 狭い幅（md 未満）では横の帯が画面の外へ退くので、ヘッダーに開く引き金を置く。
    // 以前は無く、狭い幅ではセクションの絞り込みに届く手段が無かった（Sidebar の responsive の文書どおり）
    const [sectionsOpen, setSectionsOpen] = useState(false);
    return <AppShell>
        <AppShell.Header>
          {/* 左右に振るのは \`Header.Section\` の役目（T129）。\`Group justify="between"\`
              で包むと、グループ自体が内容幅に縮んで両端揃えが黙って効かない
              ── ここは見出しが長いので**たまたま**そう見えていただけ。 */}
          <Header>
            <Header.Section>
              <Group gap="sm" align="center" wrap="nowrap">
                <HamburgerMenu size="sm" visibleBelow="md" open={sectionsOpen} onOpenChange={setSectionsOpen} />
                <Title tag="h1" size="md">
                  {t(ns("title"))}
                </Title>
              </Group>
            </Header.Section>
            <Header.Section align="end">
              <Group gap="sm" align="center">
                <Text size="sm" color="secondary">
                  {t(ns("deadline"))}
                </Text>
                <Button intent="default" variant="solid" size="sm">
                  {t(ns("file_copy"))}
                </Button>
              </Group>
            </Header.Section>
          </Header>
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Sidebar>
            <Sidebar mobileOpen={sectionsOpen} onOverlayClick={() => setSectionsOpen(false)}>
              {/* 中身は Sidebar.Content に入れる（既存のストーリーと同じ）。
                  直に置くと縦の余白が無く、上端の境界に貼り付く。
                  横の余白は TreeView の項目側が持つ（SidebarItem と同じ作法で、
                  ホバーの帯が端まで伸びるように容器側は横を空けない）。 */}
              <Sidebar.Header>
                <Text size="xs" color="text-tertiary">
                  {t(ns("sections"))}
                </Text>
              </Sidebar.Header>
              <Sidebar.Content>
                <SectionTree />
              </Sidebar.Content>
            </Sidebar>
          </AppShell.Sidebar>
          <AppShell.Main>
            <Board />
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [targetKeys, setTargetKeys] = useState<string[]>(["d-ikeda", "d-santos"]);
    const dataSource = [{
      key: "d-ikeda",
      title: "池田 さやか",
      description: t(ns("desk_city"))
    }, {
      key: "d-santos",
      title: "Rafael Santos",
      description: t(ns("desk_politics"))
    }, {
      key: "d-tanabe",
      title: "田辺 一志",
      description: t(ns("desk_markets"))
    }, {
      key: "d-oyelaran",
      title: "Bisi Oyelaran",
      description: t(ns("desk_sports"))
    }, {
      key: "d-mori",
      title: "森 千夏",
      description: t(ns("desk_night")),
      disabled: true
    }];
    return <Box p="lg">
        <Dialog open onOpenChange={() => undefined}>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{t(ns("assign_title"))}</Dialog.Title>
              <Dialog.Description>{t(ns("assign_desc"))}</Dialog.Description>
            </Dialog.Header>
            <Transfer dataSource={dataSource} targetKeys={targetKeys} onChange={setTargetKeys} />
            <Dialog.Footer>
              <Button variant="ghost">{t(ns("cancel"))}</Button>
              <Button variant="solid">{t(ns("assign_save"))}</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </Box>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"校閲の割り当て。`Transfer` は「候補から選ぶ」形が本来の用途なので、\nボードから離してダイアログに置く（画面の主役を割らない）。",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [order, setOrder] = useState([{
      id: "a-8829",
      label: t(ns("h_election")),
      slot: t(ns("slot_lead"))
    }, {
      id: "a-8798",
      label: t(ns("h_transit")),
      slot: t(ns("slot_second"))
    }, {
      id: "a-8812",
      label: t(ns("h_longform")),
      slot: t(ns("slot_feature"))
    }, {
      id: "a-8764",
      label: t(ns("h_market")),
      slot: t(ns("slot_below"))
    }]);
    return <Box p="lg">
        <Drawer open onOpenChange={() => undefined}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{t(ns("front_title"))}</DrawerTitle>
              <DrawerDescription>{t(ns("front_desc"))}</DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <SortableList onSortEnd={(from, to) => setOrder(prev => {
              const next = [...prev];
              const [moved] = next.splice(from, 1);
              next.splice(to, 0, moved);
              return next;
            })}>
                {order.map((item, index) => <SortableList.Item key={item.id} index={index}>
                    {/* ハンドルは項目の先頭に置く（SortableList 自身のストーリーと同じ）。
                        末尾に置くと掴む場所が行ごとに右端へ散り、テキストが右へ寄って見える。 */}
                    <SortableList.DragHandle />
                    <Stack gap="2xs">
                      <Text size="sm">{item.label}</Text>
                      <Text size="xs" color="text-tertiary">
                        {item.slot}
                      </Text>
                    </Stack>
                  </SortableList.Item>)}
              </SortableList>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="ghost">{t(ns("cancel"))}</Button>
              <Button variant="solid">{t(ns("front_lock"))}</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>;
  }
}`,...X.parameters?.docs?.source},description:{story:"1 面の組み。順序そのものが情報なので `SortableList` を使う。\n**Drawer に置くのは、ボードと同時に主役を張らせないため。**",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const actors = ["宮下 玲奈", "Amara Osei", "池田 さやか", "河合 拓真", "Rafael Santos"];
    const actions = [t(ns("log_edit")), t(ns("log_move")), t(ns("log_assign")), t(ns("log_kill"))];
    const gaps = [3, 11, 2, 27, 5, 8, 1, 19];
    let minutes = 0;
    const entries = Array.from({
      length: 420
    }, (_, i) => {
      minutes += gaps[i % gaps.length];
      return {
        id: \`r-\${9412 - i}\`,
        actor: actors[i * 3 % actors.length],
        action: actions[i * 5 % actions.length],
        ago: t(ns("minutes_ago"), {
          count: minutes
        })
      };
    });
    return <Box p="lg">
        <Stack gap="sm">
          <Title tag="h2" size="sm">
            {t(ns("log_title"))}
          </Title>
          <VirtualList items={entries} height={320} itemHeight={44} aria-label={t(ns("log_title"))} renderItem={entry => <Group justify="between" align="center" wrap="nowrap">
                {/* 行は固定高さなので、狭いときは折り返さずに切り詰める。
                    320px では担当名と操作が入りきらず、以前は次の行に重なっていた。 */}
                <Group gap="sm" align="center" wrap="nowrap" style={{
            minWidth: 0
          }}>
                  <Text size="sm" truncate>
                    {entry.actor}
                  </Text>
                  <Text size="sm" color="secondary" truncate>
                    {entry.action}
                  </Text>
                  <Badge intent="neutral" variant="subtle" size="sm">
                    {entry.id}
                  </Badge>
                </Group>
                <Text size="xs" color="text-tertiary" nowrap>
                  {entry.ago}
                </Text>
              </Group>} />
        </Stack>
      </Box>;
  }
}`,...Z.parameters?.docs?.source},description:{story:"版の履歴。件数が多いので `VirtualList`。**等間隔の時刻にしない**\n（DESIGN.md「数値・日付を内部整合させ、規則性を消す」）。",...Z.parameters?.docs?.description}}}})))()}$();export{Y as AssignDesk,J as Default,X as FrontPageOrder,Z as RevisionLog,Q as __namedExportsOrder,H as default};