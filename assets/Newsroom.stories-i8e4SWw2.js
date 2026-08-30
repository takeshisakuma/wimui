"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Ji as c,ji as l,ki as u,mt as d,pi as f,t as p}from"./src-CV0le6yM.js";import{t as m}from"./Box-BVB_9vOB.js";import{a as h,c as g,l as _,o as v,r as y,s as b,u as x}from"./ArtifactsOverlay-68W3l2ie.js";import{t as S}from"./Stack-z584y6QE.js";import{t as C}from"./Transfer-DEAHxwqe.js";import{t as w}from"./Icon-DKSRBrcV.js";import{t as T}from"./Button-vRcm9ObM.js";import{t as E}from"./Badge-A6ygOnY-.js";import{t as D}from"./Text-CLDfz7UT.js";import{n as O}from"./Dialog-DWvm-Ogx.js";import{t as k}from"./VirtualList-D47O7rfG.js";import{r as A}from"./TreeSelect-SYAqTh1a.js";import{r as j}from"./TagInput-ELhz9K8s.js";import{t as M}from"./Title-DgBJgLRP.js";import{t as N}from"./SortableList-DUR0Dlbs.js";var P,F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{P=t(n(),1),o(),i(),p(),F=a(),I={title:`Patterns/Newsroom`,parameters:{layout:`fullscreen`,docs:{description:{component:"7 枚目の合成画面（T32 / T95 の候補 B）。**狙いは「一覧と編集」の層**で、\nドラッグ（`Kanban` / `SortableList`）・階層（`TreeView`）・割り当て（`Transfer`）・\n仮想化（`VirtualList`）を、無理なく同居する題材に載せる。\n\n**主役は 1 つ ── 進行ボード。** サイドバーの階層もツールバーもクロームなので声量を下げ、\nprimary の面は「入稿」ボタン 1 つだけに置く（DESIGN.md の必須ルール 1 / 6 / 12）。\n\n**7 コンポーネント全部は載せない。** 候補 B には `TransferList` と `SwipeableList` も\n含まれるが、前者は `Transfer` の内側、後者はモバイル固有の操作で、この画面に\n積むと「全部のスロットを埋める」ことになる（禁止パターン）。数は内容から決める。"}}}},L=e=>`docs_stories_recipes:newsroom.${e}`,R=()=>{let{t:e}=r(s);return(0,P.useMemo)(()=>({reporting:[{id:`a-8841`,headline:e(L(`h_ferry`)),reporter:`宮下 玲奈`,due:e(L(`due_1900`))},{id:`a-8836`,headline:e(L(`h_budget`)),due:e(L(`due_tomorrow`))}],writing:[{id:`a-8829`,headline:e(L(`h_election`)),reporter:`Amara Osei`,due:e(L(`due_2130`)),words:1840},{id:`a-8812`,headline:e(L(`h_longform`)),reporter:`河合 拓真`,due:e(L(`due_friday`)),words:4210},{id:`a-8805`,headline:e(L(`h_weather`)),reporter:`Petra Novák`,due:e(L(`due_1700`)),overdue:!0}],desk:[{id:`a-8798`,headline:e(L(`h_transit`)),reporter:`宮下 玲奈`,due:e(L(`due_2000`)),words:920}],done:[{id:`a-8771`,headline:e(L(`h_obituary`)),reporter:`Luis Ferreira`,due:e(L(`due_done`)),words:610},{id:`a-8764`,headline:e(L(`h_market`)),reporter:`河合 拓真`,due:e(L(`due_done`)),words:1130},{id:`a-8752`,headline:e(L(`h_sports`)),reporter:`Amara Osei`,due:e(L(`due_done`)),words:780}]}),[e])},z=({article:e})=>{let{t}=r(s);return(0,F.jsxs)(S,{gap:`2xs`,children:[(0,F.jsx)(D,{size:`sm`,children:e.headline}),(0,F.jsxs)(l,{gap:`xs`,align:`center`,children:[(0,F.jsx)(D,{size:`xs`,color:e.reporter?`secondary`:`tertiary`,children:e.reporter??t(L(`unassigned`))}),e.overdue?(0,F.jsxs)(j,{intent:`danger`,variant:`subtle`,size:`sm`,children:[(0,F.jsx)(w,{name:`ClockIcon`,size:`sm`}),e.due]}):(0,F.jsx)(D,{size:`xs`,color:`text-tertiary`,children:e.due}),e.words?(0,F.jsx)(D,{size:`xs`,color:`text-tertiary`,children:t(L(`words`),{count:e.words})}):null]})]})},B=()=>{let{t:e}=r(s);return(0,F.jsxs)(A,{defaultExpandedValues:[`news`,`news-local`],"aria-label":e(L(`tree_label`)),children:[(0,F.jsxs)(A.Item,{value:`news`,label:e(L(`sec_news`)),children:[(0,F.jsxs)(A.Item,{value:`news-local`,label:e(L(`sec_local`)),children:[(0,F.jsx)(A.Item,{value:`news-local-city`,label:e(L(`sec_city`))}),(0,F.jsx)(A.Item,{value:`news-local-transit`,label:e(L(`sec_transit`))})]}),(0,F.jsx)(A.Item,{value:`news-politics`,label:e(L(`sec_politics`))})]}),(0,F.jsx)(A.Item,{value:`biz`,label:e(L(`sec_business`)),children:(0,F.jsx)(A.Item,{value:`biz-markets`,label:e(L(`sec_markets`))})}),(0,F.jsx)(A.Item,{value:`sports`,label:e(L(`sec_sports`))}),(0,F.jsx)(A.Item,{value:`obit`,label:e(L(`sec_obituaries`))})]})},V=()=>{let{t:e}=r(s),t=R();return(0,F.jsx)(d,{columns:[{id:`reporting`,title:e(L(`col_reporting`)),items:t.reporting},{id:`writing`,title:e(L(`col_writing`)),items:t.writing},{id:`desk`,title:e(L(`col_desk`)),items:t.desk},{id:`done`,title:e(L(`col_done`)),items:t.done}].map(e=>({id:e.id,title:e.title,items:e.items.map(e=>({id:e.id,content:(0,F.jsx)(z,{article:e})}))}))})},H={render:()=>{let{t:e}=r(s);return(0,F.jsxs)(c,{children:[(0,F.jsx)(c.Header,{children:(0,F.jsxs)(u,{children:[(0,F.jsx)(u.Section,{children:(0,F.jsx)(M,{tag:`h1`,size:`md`,children:e(L(`title`))})}),(0,F.jsx)(u.Section,{align:`end`,children:(0,F.jsxs)(l,{gap:`sm`,align:`center`,children:[(0,F.jsx)(D,{size:`sm`,color:`secondary`,children:e(L(`deadline`))}),(0,F.jsx)(T,{intent:`default`,variant:`solid`,size:`sm`,children:e(L(`file_copy`))})]})})]})}),(0,F.jsxs)(c.Body,{children:[(0,F.jsx)(c.Sidebar,{children:(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsx)(D,{size:`xs`,color:`text-tertiary`,children:e(L(`sections`))})}),(0,F.jsx)(f.Content,{children:(0,F.jsx)(B,{})})]})}),(0,F.jsx)(c.Main,{children:(0,F.jsx)(V,{})})]})]})}},U={render:()=>{let{t:e}=r(s),[t,n]=(0,P.useState)([`d-ikeda`,`d-santos`]),i=[{key:`d-ikeda`,title:`池田 さやか`,description:e(L(`desk_city`))},{key:`d-santos`,title:`Rafael Santos`,description:e(L(`desk_politics`))},{key:`d-tanabe`,title:`田辺 一志`,description:e(L(`desk_markets`))},{key:`d-oyelaran`,title:`Bisi Oyelaran`,description:e(L(`desk_sports`))},{key:`d-mori`,title:`森 千夏`,description:e(L(`desk_night`)),disabled:!0}];return(0,F.jsx)(m,{p:`lg`,children:(0,F.jsx)(O,{open:!0,onOpenChange:()=>void 0,children:(0,F.jsxs)(O.Content,{children:[(0,F.jsxs)(O.Header,{children:[(0,F.jsx)(O.Title,{children:e(L(`assign_title`))}),(0,F.jsx)(O.Description,{children:e(L(`assign_desc`))})]}),(0,F.jsx)(C,{dataSource:i,targetKeys:t,onChange:n}),(0,F.jsxs)(O.Footer,{children:[(0,F.jsx)(T,{variant:`ghost`,children:e(L(`cancel`))}),(0,F.jsx)(T,{variant:`solid`,children:e(L(`assign_save`))})]})]})})})}},W={render:()=>{let{t:e}=r(s),[t,n]=(0,P.useState)([{id:`a-8829`,label:e(L(`h_election`)),slot:e(L(`slot_lead`))},{id:`a-8798`,label:e(L(`h_transit`)),slot:e(L(`slot_second`))},{id:`a-8812`,label:e(L(`h_longform`)),slot:e(L(`slot_feature`))},{id:`a-8764`,label:e(L(`h_market`)),slot:e(L(`slot_below`))}]);return(0,F.jsx)(m,{p:`lg`,children:(0,F.jsx)(h,{open:!0,onOpenChange:()=>void 0,children:(0,F.jsxs)(v,{children:[(0,F.jsxs)(_,{children:[(0,F.jsx)(x,{children:e(L(`front_title`))}),(0,F.jsx)(b,{children:e(L(`front_desc`))})]}),(0,F.jsx)(y,{children:(0,F.jsx)(N,{onSortEnd:(e,t)=>n(n=>{let r=[...n],[i]=r.splice(e,1);return r.splice(t,0,i),r}),children:t.map((e,t)=>(0,F.jsxs)(N.Item,{index:t,children:[(0,F.jsx)(N.DragHandle,{}),(0,F.jsxs)(S,{gap:`2xs`,children:[(0,F.jsx)(D,{size:`sm`,children:e.label}),(0,F.jsx)(D,{size:`xs`,color:`text-tertiary`,children:e.slot})]})]},e.id))})}),(0,F.jsxs)(g,{children:[(0,F.jsx)(T,{variant:`ghost`,children:e(L(`cancel`))}),(0,F.jsx)(T,{variant:`solid`,children:e(L(`front_lock`))})]})]})})})}},G={render:()=>{let{t:e}=r(s),t=[`宮下 玲奈`,`Amara Osei`,`池田 さやか`,`河合 拓真`,`Rafael Santos`],n=[e(L(`log_edit`)),e(L(`log_move`)),e(L(`log_assign`)),e(L(`log_kill`))],i=[3,11,2,27,5,8,1,19],a=0,o=Array.from({length:420},(r,o)=>(a+=i[o%i.length],{id:`r-${9412-o}`,actor:t[o*3%t.length],action:n[o*5%n.length],ago:e(L(`minutes_ago`),{count:a})}));return(0,F.jsx)(m,{p:`lg`,children:(0,F.jsxs)(S,{gap:`sm`,children:[(0,F.jsx)(M,{tag:`h2`,size:`sm`,children:e(L(`log_title`))}),(0,F.jsx)(k,{items:o,height:320,itemHeight:44,"aria-label":e(L(`log_title`)),renderItem:e=>(0,F.jsxs)(l,{justify:`between`,align:`center`,wrap:`nowrap`,children:[(0,F.jsxs)(l,{gap:`sm`,align:`center`,wrap:`nowrap`,style:{minWidth:0},children:[(0,F.jsx)(D,{size:`sm`,truncate:!0,children:e.actor}),(0,F.jsx)(D,{size:`sm`,color:`secondary`,truncate:!0,children:e.action}),(0,F.jsx)(E,{intent:`neutral`,variant:`subtle`,size:`sm`,children:e.id})]}),(0,F.jsx)(D,{size:`xs`,color:`text-tertiary`,nowrap:!0,children:e.ago})]})})]})})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AppShell>
        <AppShell.Header>
          {/* 左右に振るのは \`Header.Section\` の役目（T129）。\`Group justify="between"\`
              で包むと、グループ自体が内容幅に縮んで両端揃えが黙って効かない
              ── ここは見出しが長いので**たまたま**そう見えていただけ。 */}
          <Header>
            <Header.Section>
              <Title tag="h1" size="md">
                {t(ns("title"))}
              </Title>
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
            <Sidebar>
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"校閲の割り当て。`Transfer` は「候補から選ぶ」形が本来の用途なので、\nボードから離してダイアログに置く（画面の主役を割らない）。",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"1 面の組み。順序そのものが情報なので `SortableList` を使う。\n**Drawer に置くのは、ボードと同時に主役を張らせないため。**",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:"版の履歴。件数が多いので `VirtualList`。**等間隔の時刻にしない**\n（DESIGN.md「数値・日付を内部整合させ、規則性を消す」）。",...G.parameters?.docs?.description}}},K=[`Default`,`AssignDesk`,`FrontPageOrder`,`RevisionLog`]}))();export{U as AssignDesk,H as Default,W as FrontPageOrder,G as RevisionLog,K as __namedExportsOrder,I as default};