"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{$r as c,Ci as l,Di as u,Hi as d,Mr as f,Ni as p,Qn as m,Rr as h,Ti as g,Un as _,Yr as v,Zr as y,br as b,cr as x,er as S,gr as ee,ji as te,or as ne,qr as C,t as w,ur as T,vr as E,zr as D}from"./src-Ssuy8lr7.js";import{t as O}from"./Box--bAE-pUN.js";import{t as k}from"./Stack-CC3QEopK.js";import{t as A}from"./Button-Dps1MPAd.js";import{t as re}from"./ToggleGroup-BXpl-gxg.js";import{t as ie}from"./FieldTemplate-D3hWbscu.js";import{t as j}from"./Text-DzblcqZm.js";import{t as M}from"./Checkbox-B5hLPzl5.js";import{t as N}from"./Input-BY9GcYwo.js";import{s as P,t as F}from"./QueryBuilder-CGAN_DO-.js";import{r as I,t as L}from"./ImageCropper-CIOqgjbD.js";import{t as R}from"./TagInput-B5pmYsid.js";import{t as z}from"./ThemeToggle-BB4sISwD.js";import{t as B}from"./Title-9tGX8de8.js";var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{V=t(n(),1),o(),i(),w(),H=a(),U={title:`Patterns/Hiring`,parameters:{layout:`fullscreen`,docs:{description:{component:"8 枚目の合成画面（T32 / T109）。**狙いは「重い入力」の層**で、\n単体では成立していても隣り合わせると崩れやすい部品\n（`RichTextEditor` / `ImageCropper` / `QueryBuilder` / `SignaturePad` /\n`CreditCardInput` / `ColorPicker`）を、無理なく同居する題材に載せる。\n\n題材は `Patterns/Admin` `Patterns/Form` と同じ Kiyosumi Roasters の採用側。\n**1 画面に全部は載せない** ── 求人票を書く / 掲載先と支払い / 採用ページの体裁 /\n応募者の抽出 / 内定の署名、と**作業ごとにストーリーを分ける**。\n\n**主役はストーリーごとに 1 つ**（Default = 本文のエディタ、PageStyle = 写真、\nTalentPool = 条件式）。primary の面もそれぞれ 1 箇所に絞る。\n\n**載せなかったもの**: `FloatButton`（この 5 画面はどれもデスクトップの編集作業で、\n画面に浮かせる操作が無い＝置くと「スロットを埋める」ことになる）／`InputBase`\n（入力の殻そのもので、`Input` / `Combobox` 等の内側で必ず通る）／\n**`ButtonGroup`**（joined は「1 つの操作面」を作るもので、境目を共有して\n見える。この画面に出てくる操作はどれも独立していて束ねる理由が無い。\n合成のためだけに置くのは「スロットを埋める」側）。"}}}},W=e=>`docs_stories_recipes:hiring.${e}`,G=new Date(`2026-08-17T00:00:00+09:00`),K=new Date(`2026-09-14T00:00:00+09:00`),q={render:function(){let{t:e}=r(s);return(0,H.jsxs)(d,{children:[(0,H.jsx)(d.Header,{children:(0,H.jsxs)(l,{children:[(0,H.jsx)(l.Section,{children:(0,H.jsx)(j,{size:`sm`,color:`text-secondary`,children:e(W(`org`))})}),(0,H.jsx)(l.Section,{align:`end`,children:(0,H.jsxs)(g,{gap:`sm`,align:`center`,children:[(0,H.jsx)(_,{size:`sm`,toggleLabel:e(W(`publish_more`)),actions:[{label:e(W(`publish_schedule`))},{label:e(W(`publish_share`))},{label:e(W(`publish_withdraw`)),disabled:!0}],children:e(W(`publish`))}),(0,H.jsx)(z,{size:`sm`,applyToDocument:!1,storageKey:null,labels:{light:e(W(`theme_light`)),dark:e(W(`theme_dark`)),toggle:e(W(`theme_toggle`))}})]})})]})}),(0,H.jsx)(d.Body,{children:(0,H.jsx)(d.Main,{children:(0,H.jsxs)(k,{gap:`xl`,children:[(0,H.jsxs)(k,{gap:`2xs`,children:[(0,H.jsx)(B,{tag:`h1`,size:`md`,children:e(W(`role`))}),(0,H.jsxs)(g,{gap:`sm`,align:`center`,children:[(0,H.jsx)(j,{size:`xs`,color:`text-tertiary`,children:e(W(`autosaved`))}),(0,H.jsx)(S,{href:`#`,variant:`ghost`,size:`sm`,children:e(W(`preview`))})]})]}),(0,H.jsxs)(u,{cols:{base:1,lg:`minmax(0, 1fr) minmax(0, 21rem)`},gap:`2xl`,children:[(0,H.jsxs)(k,{gap:`md`,children:[(0,H.jsxs)(k,{gap:`3xs`,children:[(0,H.jsx)(B,{tag:`h2`,size:`sm`,children:e(W(`body_heading`))}),(0,H.jsx)(j,{size:`xs`,color:`text-tertiary`,children:e(W(`body_hint`))})]}),(0,H.jsx)(E,{fullWidth:!0,defaultValue:e(W(`body_html`)),minHeight:320,labels:{toolbar:e(W(`editor_toolbar`)),bold:e(W(`editor_bold`)),italic:e(W(`editor_italic`)),underline:e(W(`editor_underline`)),strikethrough:e(W(`editor_strike`)),ul:e(W(`editor_ul`)),ol:e(W(`editor_ol`)),link:e(W(`editor_link`)),unlink:e(W(`editor_unlink`)),removeFormat:e(W(`editor_clear`))},"aria-label":e(W(`body_heading`))}),(0,H.jsx)(R,{fullWidth:!0,label:e(W(`skills_label`)),defaultValue:[e(W(`skill_roasting`)),e(W(`skill_cupping`)),e(W(`skill_early`))],placeholder:e(W(`skills_placeholder`))})]}),(0,H.jsxs)(k,{gap:`xl`,children:[(0,H.jsxs)(k,{gap:`md`,children:[(0,H.jsx)(v,{label:e(W(`family_label`)),defaultValue:e(W(`family_roasting`)),fullWidth:!0,options:[{label:e(W(`family_roasting`)),value:`roasting`},{label:e(W(`family_floor`)),value:`floor`},{label:e(W(`family_delivery`)),value:`delivery`},{label:e(W(`family_qc`)),value:`qc`}],placeholder:e(W(`family_placeholder`))}),(0,H.jsx)(b,{label:e(W(`contract_label`)),defaultValue:`fixed`,options:[{label:e(W(`contract_permanent`)),value:`permanent`},{label:e(W(`contract_fixed`)),value:`fixed`},{label:e(W(`contract_part`)),value:`part`}]})]}),(0,H.jsxs)(k,{gap:`md`,children:[(0,H.jsx)(ie,{label:e(W(`pay_label`)),error:e(W(`pay_error`)),htmlFor:`hiring-pay`,children:(0,H.jsxs)(h,{fullWidth:!0,children:[(0,H.jsx)(D,{children:e(W(`pay_currency`))}),(0,H.jsx)(N,{id:`hiring-pay`,defaultValue:`1,150`,intent:`danger`,inputMode:`numeric`,fullWidth:!0}),(0,H.jsx)(D,{children:e(W(`pay_unit`))})]})}),(0,H.jsx)(ee,{label:e(W(`hours_label`)),min:8,max:40,step:2,defaultValue:[24,36]})]}),(0,H.jsx)(C,{label:e(W(`window_label`)),startProps:{defaultValue:G},endProps:{defaultValue:K}}),(0,H.jsx)(f,{label:e(W(`memo_label`)),options:[{id:`u-tsuzuki`,display:`都築 和真`},{id:`u-kowalczyk`,display:`Marta Kowalczyk`},{id:`u-tokano`,display:`戸叶 ひかる`},{id:`u-adeyemi`,display:`Samuel Adeyemi`}],defaultValue:e(W(`memo_value`)),placeholder:e(W(`memo_placeholder`)),rows:3,fullWidth:!0})]})]})]})})})]})}},J={render:function(){let{t:e}=r(s),[t,n]=(0,V.useState)([`own`,`minna`]);return(0,H.jsx)(O,{p:`2xl`,children:(0,H.jsx)(p,{size:`sm`,fluid:!1,children:(0,H.jsxs)(k,{gap:`2xl`,children:[(0,H.jsxs)(k,{gap:`3xs`,children:[(0,H.jsx)(B,{tag:`h2`,size:`sm`,children:e(W(`dist_title`))}),(0,H.jsx)(j,{size:`sm`,color:`text-secondary`,children:e(W(`dist_lead`))})]}),(0,H.jsx)(ne,{value:t,onChange:n,label:e(W(`dist_boards_label`)),options:[{label:e(W(`board_own`)),value:`own`},{label:e(W(`board_minna`)),value:`minna`},{label:e(W(`board_baristas`)),value:`baristas`},{label:e(W(`board_hw`)),value:`hw`,disabled:!0}]}),(0,H.jsx)(te,{}),(0,H.jsxs)(k,{gap:`md`,children:[(0,H.jsx)(j,{size:`sm`,color:`text-secondary`,children:e(W(`dist_charge`),{amount:`12,800`})}),(0,H.jsx)(m,{label:e(W(`card_label`)),defaultValue:`4111111111111111`,width:`md`}),(0,H.jsx)(b,{label:e(W(`bill_label`)),defaultValue:`company`,direction:`horizontal`,options:[{label:e(W(`bill_company`)),value:`company`},{label:e(W(`bill_reimburse`)),value:`reimburse`}]})]}),(0,H.jsxs)(g,{gap:`sm`,align:`center`,children:[(0,H.jsx)(A,{variant:`solid`,children:e(W(`dist_submit`))}),(0,H.jsx)(j,{size:`xs`,color:`text-tertiary`,children:e(W(`dist_footnote`))})]})]})})})}},Y={render:function(){let{t:e}=r(s),[t,n]=(0,V.useState)(16/9),[i,a]=(0,V.useState)(`#123f35`),[o,l]=(0,V.useState)(68),[d,f]=(0,V.useState)(`#f3ece1`),p=(()=>{let e=parseInt(i.slice(1),16),[t,n,r]=[e>>16&255,e>>8&255,e&255];return`rgba(${t}, ${n}, ${r}, ${o/100})`})();return(0,H.jsx)(O,{p:`2xl`,children:(0,H.jsxs)(u,{cols:{base:1,lg:`minmax(0, 1fr) minmax(0, 18rem)`},gap:`2xl`,children:[(0,H.jsxs)(k,{gap:`md`,children:[(0,H.jsxs)(k,{gap:`3xs`,children:[(0,H.jsx)(B,{tag:`h2`,size:`sm`,children:e(W(`style_title`))}),(0,H.jsx)(j,{size:`xs`,color:`text-tertiary`,children:e(W(`style_hint`))})]}),(0,H.jsx)(L,{src:`./images/sample-landscape.png`,aspectRatio:t,applyLabel:e(W(`style_apply`))}),(0,H.jsxs)(k,{gap:`2xs`,children:[(0,H.jsx)(j,{size:`xs`,color:`text-tertiary`,children:e(W(`style_preview_label`))}),(0,H.jsx)(O,{style:{backgroundImage:`url(./images/sample-landscape.png)`,backgroundSize:`cover`,backgroundPosition:`center`,aspectRatio:`16 / 5`,display:`flex`,alignItems:`flex-end`},children:(0,H.jsx)(O,{p:`lg`,style:{backgroundColor:p,width:`100%`},children:(0,H.jsx)(j,{size:`lg`,weight:`bold`,style:{color:d},children:e(W(`style_preview_headline`))})})})]})]}),(0,H.jsxs)(k,{gap:`xl`,children:[(0,H.jsx)(re,{label:e(W(`ratio_label`)),defaultValue:`wide`,size:`sm`,onChange:e=>n(e===`square`?1:e===`classic`?4/3:16/9),options:[{label:e(W(`ratio_wide`)),value:`wide`},{label:e(W(`ratio_classic`)),value:`classic`},{label:e(W(`ratio_square`)),value:`square`}]}),(0,H.jsxs)(k,{gap:`md`,children:[(0,H.jsx)(y,{label:e(W(`band_color_label`)),value:i,onChange:e=>a(e.target.value),fullWidth:!0}),(0,H.jsx)(I,{label:e(W(`band_opacity_label`)),min:0,max:100,step:4,value:o,onChange:l}),(0,H.jsx)(c,{label:e(W(`headline_color_label`)),value:d,onChange:e=>f(e.target.value),fullWidth:!0})]}),(0,H.jsx)(j,{size:`xs`,color:`text-tertiary`,children:e(W(`style_contrast_note`))})]})]})})}},X={applied:{id:`root`,combinator:`and`,not:!1,rules:[{id:`a-1`,field:`years`,operator:`>=`,value:1},{id:`a-2`,field:`shift`,operator:`contains`,value:`early`}]},screening:{id:`root`,combinator:`and`,not:!1,rules:[{id:`s-1`,field:`years`,operator:`>=`,value:2},{id:`s-2`,field:`shift`,operator:`contains`,value:`early`},{id:`s-g1`,combinator:`or`,not:!1,rules:[{id:`s-3`,field:`commute`,operator:`<=`,value:45},{id:`s-4`,field:`licence`,operator:`=`,value:!0}]}]},interview:{id:`root`,combinator:`and`,not:!1,rules:[{id:`i-1`,field:`licence`,operator:`=`,value:!0},{id:`i-2`,field:`commute`,operator:`<=`,value:30}]}},Z={render:function(){let{t:e}=r(s),[t,n]=(0,V.useState)(`screening`),{matched:i,total:a}={applied:{matched:62,total:184},screening:{matched:27,total:41},interview:{matched:9,total:12}}[t];return(0,H.jsx)(O,{p:`2xl`,children:(0,H.jsxs)(k,{gap:`xl`,children:[(0,H.jsxs)(k,{gap:`3xs`,children:[(0,H.jsx)(B,{tag:`h2`,size:`sm`,children:e(W(`pool_title`))}),(0,H.jsx)(j,{size:`xs`,color:`text-tertiary`,children:e(W(`pool_hint`))})]}),(0,H.jsxs)(u,{cols:{base:1,sm:`minmax(0, 22rem) auto`},gap:`md`,align:`end`,children:[(0,H.jsx)(T,{fullWidth:!0,placeholder:e(W(`pool_search_placeholder`))}),(0,H.jsx)(P,{value:t,onChange:n,options:[{label:e(W(`stage_applied`)),value:`applied`},{label:e(W(`stage_screening`)),value:`screening`},{label:e(W(`stage_interview`)),value:`interview`}],size:`sm`})]}),(0,H.jsx)(F,{fields:[{name:`applied_on`,label:e(W(`field_applied`)),type:`date`},{name:`years`,label:e(W(`field_years`)),type:`number`},{name:`shift`,label:e(W(`field_shift`)),type:`string`},{name:`commute`,label:e(W(`field_commute`)),type:`number`},{name:`licence`,label:e(W(`field_licence`)),type:`boolean`}],defaultQuery:X[t]},t),(0,H.jsxs)(u,{cols:{base:1,sm:`auto minmax(0, 20rem)`},gap:`md`,align:`center`,children:[(0,H.jsx)(j,{size:`sm`,color:`text-secondary`,children:e(W(`pool_count`),{matched:i,total:a})}),(0,H.jsxs)(g,{gap:`sm`,justify:`end`,children:[(0,H.jsx)(A,{size:`sm`,variant:`ghost`,children:e(W(`pool_export`))}),(0,H.jsx)(A,{size:`sm`,variant:`outline`,children:e(W(`pool_save`))})]})]})]})})}},Q={render:function(){let{t:e}=r(s);return(0,H.jsx)(O,{p:`2xl`,children:(0,H.jsxs)(k,{gap:`xl`,children:[(0,H.jsxs)(k,{gap:`3xs`,children:[(0,H.jsx)(B,{tag:`h2`,size:`sm`,children:e(W(`offer_title`))}),(0,H.jsx)(j,{size:`sm`,color:`text-secondary`,children:e(W(`offer_terms`))})]}),(0,H.jsx)(u,{cols:{base:`minmax(0, 1fr)`,sm:`20rem`},children:(0,H.jsx)(x,{label:e(W(`offer_sign_label`)),width:320,height:160,canvasAriaLabel:e(W(`offer_sign_aria`)),clearLabel:e(W(`offer_sign_clear`))})}),(0,H.jsx)(M,{defaultChecked:!1,children:e(W(`offer_confirm`))}),(0,H.jsxs)(g,{gap:`sm`,align:`center`,children:[(0,H.jsx)(A,{variant:`solid`,children:e(W(`offer_submit`))}),(0,H.jsx)(j,{size:`xs`,color:`text-tertiary`,children:e(W(`offer_footnote`))})]})]})})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);

    /** 社内メモで呼べる相手。並びは役職順でも五十音順でもない。 */
    const teammates = [{
      id: "u-tsuzuki",
      display: "都築 和真"
    }, {
      id: "u-kowalczyk",
      display: "Marta Kowalczyk"
    }, {
      id: "u-tokano",
      display: "戸叶 ひかる"
    }, {
      id: "u-adeyemi",
      display: "Samuel Adeyemi"
    }];
    return <AppShell>
        <AppShell.Header>
          {/* \`Header\` は高さ 64px 固定で、収まらない中身は折り返しも切り詰めもせず
              上下にはみ出す（768px で 19px、390px で 55px 出た）。
              **クロームに置くのは畳めるものだけにする** ── 見出しと状態は本文側へ。 */}
          <Header>
            {/* 左右に振るのは \`Header.Section\` の役目。\`Header\` の中身は
                flex アイテムなので、\`Group justify="between"\` で包むと
                グループ自体が内容幅に縮み、両端揃えが**黙って効かない**。 */}
            <Header.Section>
              <Text size="sm" color="text-secondary">
                {t(ns("org"))}
              </Text>
            </Header.Section>
            <Header.Section align="end">
              <Group gap="sm" align="center">
                <SplitButton size="sm" toggleLabel={t(ns("publish_more"))} actions={[{
                label: t(ns("publish_schedule"))
              }, {
                label: t(ns("publish_share"))
              }, {
                label: t(ns("publish_withdraw")),
                disabled: true
              }]}>
                  {t(ns("publish"))}
                </SplitButton>
                {/* この画面はホスト（Storybook）のテーマに従う。
                    既定の ThemeToggle は document へ書き戻すので、
                    埋め込むときは applyToDocument / storageKey を切る。 */}
                <ThemeToggle size="sm" applyToDocument={false} storageKey={null} labels={{
                light: t(ns("theme_light")),
                dark: t(ns("theme_dark")),
                toggle: t(ns("theme_toggle"))
              }} />
              </Group>
            </Header.Section>
          </Header>
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main>
            <Stack gap="xl">
              {/* \`Title\` は \`width: 100%\` なので、\`Group\` に入れても隣は次の行へ回る
                  （\`justify="between"\` は効かない）。素直に縦に積む。 */}
              <Stack gap="2xs">
                <Title tag="h1" size="md">
                  {t(ns("role"))}
                </Title>
                {/* 保存済みの表示はクローム。Alert に格上げしない（必須ルール 12）。 */}
                <Group gap="sm" align="center">
                  <Text size="xs" color="text-tertiary">
                    {t(ns("autosaved"))}
                  </Text>
                  <LinkButton href="#" variant="ghost" size="sm">
                    {t(ns("preview"))}
                  </LinkButton>
                </Group>
              </Stack>
              <Grid cols={{
              base: 1,
              lg: "minmax(0, 1fr) minmax(0, 21rem)"
            }} gap="2xl">
              <Stack gap="md">
                <Stack gap="3xs">
                  <Title tag="h2" size="sm">
                    {t(ns("body_heading"))}
                  </Title>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("body_hint"))}
                  </Text>
                </Stack>
                {/* 入力の既定幅は 320px（\`max-width\` で頭打ち）。カラムを埋める
                    面にするなら \`fullWidth\` が要る ── \`TagInput\` も同じ。 */}
                <RichTextEditor fullWidth defaultValue={t(ns("body_html"))} minHeight={320} labels={{
                  toolbar: t(ns("editor_toolbar")),
                  bold: t(ns("editor_bold")),
                  italic: t(ns("editor_italic")),
                  underline: t(ns("editor_underline")),
                  strikethrough: t(ns("editor_strike")),
                  ul: t(ns("editor_ul")),
                  ol: t(ns("editor_ol")),
                  link: t(ns("editor_link")),
                  unlink: t(ns("editor_unlink")),
                  removeFormat: t(ns("editor_clear"))
                }} aria-label={t(ns("body_heading"))} />
                <TagInput fullWidth label={t(ns("skills_label"))} defaultValue={[t(ns("skill_roasting")), t(ns("skill_cupping")), t(ns("skill_early"))]} placeholder={t(ns("skills_placeholder"))} />
              </Stack>

              {/* 条件欄。関連するものを近づけ、群と群の間だけを空ける（近接）。 */}
              <Stack gap="xl">
                <Stack gap="md">
                  {/* \`defaultValue\` は**入力欄の初期テキスト**で、\`options\` の
                      \`value\` ではない。\`"roasting"\` を渡すと生の値が表示される。 */}
                  <Combobox label={t(ns("family_label"))} defaultValue={t(ns("family_roasting"))} fullWidth options={[{
                    label: t(ns("family_roasting")),
                    value: "roasting"
                  }, {
                    label: t(ns("family_floor")),
                    value: "floor"
                  }, {
                    label: t(ns("family_delivery")),
                    value: "delivery"
                  }, {
                    label: t(ns("family_qc")),
                    value: "qc"
                  }]} placeholder={t(ns("family_placeholder"))} />
                  <RadioGroup label={t(ns("contract_label"))} defaultValue="fixed" options={[{
                    label: t(ns("contract_permanent")),
                    value: "permanent"
                  }, {
                    label: t(ns("contract_fixed")),
                    value: "fixed"
                  }, {
                    label: t(ns("contract_part")),
                    value: "part"
                  }]} />
                </Stack>

                <Stack gap="md">
                  {/* 単位付きの欄は InputGroup で 1 つの塊にし、
                      ラベルとエラーは FieldTemplate 側が持つ。 */}
                  <FieldTemplate label={t(ns("pay_label"))} error={t(ns("pay_error"))} htmlFor="hiring-pay">
                    <InputGroup fullWidth>
                      <InputGroupText>{t(ns("pay_currency"))}</InputGroupText>
                      <Input id="hiring-pay" defaultValue="1,150" intent="danger" inputMode="numeric" fullWidth />
                      <InputGroupText>{t(ns("pay_unit"))}</InputGroupText>
                    </InputGroup>
                  </FieldTemplate>
                  <RangeSlider label={t(ns("hours_label"))} min={8} max={40} step={2} defaultValue={[24, 36]} />
                </Stack>

                {/* T130 の修正後は、内側の 2 つの入力に名前が既定で付く
                    （見えるラベルを渡さなければ内蔵の「開始日 / 終了日」）。
                    **回避（\`aria-label\` の手当て）は外してある** ── 残したままだと
                    直ったかどうかを a11y で測れない。 */}
                <DateRangePicker label={t(ns("window_label"))} startProps={{
                  defaultValue: OPENS_AT
                }} endProps={{
                  defaultValue: CLOSES_AT
                }} />

                <Mentions label={t(ns("memo_label"))} options={teammates} defaultValue={t(ns("memo_value"))} placeholder={t(ns("memo_placeholder"))} rows={3} fullWidth />
              </Stack>
              </Grid>
            </Stack>
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>;
  }
}`,...q.parameters?.docs?.source},description:{story:`求人票を書く画面。**主役は本文のエディタ**で、右のレールは条件欄。
密度のコントラスト（エディタは疎・レールは密）で視線の起点を作る。`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [boards, setBoards] = useState(["own", "minna"]);
    return <Box p="2xl">
        <Container size="sm" fluid={false}>
        <Stack gap="2xl">
          <Stack gap="3xs">
            <Title tag="h2" size="sm">
              {t(ns("dist_title"))}
            </Title>
            <Text size="sm" color="text-secondary">
              {t(ns("dist_lead"))}
            </Text>
          </Stack>

          <SwitchGroup value={boards} onChange={setBoards} label={t(ns("dist_boards_label"))} options={[{
            label: t(ns("board_own")),
            value: "own"
          }, {
            label: t(ns("board_minna")),
            value: "minna"
          }, {
            label: t(ns("board_baristas")),
            value: "baristas"
          }, {
            label: t(ns("board_hw")),
            value: "hw",
            disabled: true
          }]} />

          <Divider />

          <Stack gap="md">
            <Text size="sm" color="text-secondary">
              {t(ns("dist_charge"), {
                amount: "12,800"
              })}
            </Text>
            <CreditCardInput label={t(ns("card_label"))} defaultValue="4111111111111111" width="md" />
            <RadioGroup label={t(ns("bill_label"))} defaultValue="company" direction="horizontal" options={[{
              label: t(ns("bill_company")),
              value: "company"
            }, {
              label: t(ns("bill_reimburse")),
              value: "reimburse"
            }]} />
          </Stack>

          <Group gap="sm" align="center">
            <Button variant="solid">{t(ns("dist_submit"))}</Button>
            <Text size="xs" color="text-tertiary">
              {t(ns("dist_footnote"))}
            </Text>
          </Group>
        </Stack>
        </Container>
      </Box>;
  }
}`,...J.parameters?.docs?.source},description:{story:`掲載先と出稿の支払い。**主役は媒体の一覧**で、支払いはその結果。
有料媒体を切るまで金額が動かないので、順番どおりに縦に置く。`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [ratio, setRatio] = useState(16 / 9);
    const [bandColor, setBandColor] = useState("#123f35");
    const [bandOpacity, setBandOpacity] = useState(68);
    const [headlineColor, setHeadlineColor] = useState("#f3ece1");

    /** 帯は写真の上に重なるので、不透明度は**アルファ**で持つ。
        \`opacity\` を使うと見出しの文字まで薄くなる。 */
    const band = (() => {
      const n = parseInt(bandColor.slice(1), 16);
      const [r, g, b] = [n >> 16 & 255, n >> 8 & 255, n & 255];
      return \`rgba(\${r}, \${g}, \${b}, \${bandOpacity / 100})\`;
    })();
    return <Box p="2xl">
        <Grid cols={{
        base: 1,
        lg: "minmax(0, 1fr) minmax(0, 18rem)"
      }} gap="2xl">
          <Stack gap="md">
            <Stack gap="3xs">
              <Title tag="h2" size="sm">
                {t(ns("style_title"))}
              </Title>
              <Text size="xs" color="text-tertiary">
                {t(ns("style_hint"))}
              </Text>
            </Stack>
            <ImageCropper src="./images/sample-landscape.png" aspectRatio={ratio} applyLabel={t(ns("style_apply"))} />

            {/* **右の 3 つが効く先**。ここが無いと、色も不透明度も動かしても
                画面に何も起きない＝操作できるだけの飾りになる。
                写真の上に帯を敷き、その上に見出しを載せる実際の並び。 */}
            <Stack gap="2xs">
              <Text size="xs" color="text-tertiary">
                {t(ns("style_preview_label"))}
              </Text>
              <Box style={{
              backgroundImage: "url(./images/sample-landscape.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "16 / 5",
              display: "flex",
              alignItems: "flex-end"
            }}>
                <Box p="lg" style={{
                backgroundColor: band,
                width: "100%"
              }}>
                  {/* 見出しの色を確かめる面なので、色は state から当てる。 */}
                  <Text size="lg" weight="bold" style={{
                  color: headlineColor
                }}>
                    {t(ns("style_preview_headline"))}
                  </Text>
                </Box>
              </Box>
            </Stack>
          </Stack>

          <Stack gap="xl">
            {/* 排他の選択なので \`ToggleGroup\`。\`ButtonGroup\` は操作を束ねるもので
                選択状態を持たないため、3 つとも同じ見た目のまま残る。 */}
            <ToggleGroup label={t(ns("ratio_label"))} defaultValue="wide" size="sm" onChange={v => setRatio(v === "square" ? 1 : v === "classic" ? 4 / 3 : 16 / 9)} options={[{
            label: t(ns("ratio_wide")),
            value: "wide"
          }, {
            label: t(ns("ratio_classic")),
            value: "classic"
          }, {
            label: t(ns("ratio_square")),
            value: "square"
          }]} />

            <Stack gap="md">
              <ColorPicker label={t(ns("band_color_label"))} value={bandColor} onChange={e => setBandColor(e.target.value)} fullWidth />
              <Slider label={t(ns("band_opacity_label"))} min={0} max={100} step={4} value={bandOpacity} onChange={setBandOpacity} />
              <ColorInput label={t(ns("headline_color_label"))} value={headlineColor} onChange={e => setHeadlineColor(e.target.value)} fullWidth />
            </Stack>

            <Text size="xs" color="text-tertiary">
              {t(ns("style_contrast_note"))}
            </Text>
          </Stack>
        </Grid>
      </Box>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"採用ページの体裁。**主役は写真**で、色はその上に載る帯の設定。\n比率は排他の選択なので `ToggleGroup`（選択状態が要る）。",...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [stage, setStage] = useState("screening");

    /**
     * 段階を切り替えたら**後ろの内容が変わる**こと。変わらないなら
     * \`SegmentedControl\` を名乗る意味が無く、ただの選択肢＝ラジオで足りる。
     * 母数は選考が進むほど減る（184 → 41 → 12）。一致数はその部分集合。
     */
    const counts: Record<string, {
      matched: number;
      total: number;
    }> = {
      applied: {
        matched: 62,
        total: 184
      },
      screening: {
        matched: 27,
        total: 41
      },
      interview: {
        matched: 9,
        total: 12
      }
    };
    const {
      matched,
      total
    } = counts[stage];
    return <Box p="2xl">
        <Stack gap="xl">
          <Stack gap="3xs">
            <Title tag="h2" size="sm">
              {t(ns("pool_title"))}
            </Title>
            <Text size="xs" color="text-tertiary">
              {t(ns("pool_hint"))}
            </Text>
          </Stack>

          {/* 入力の \`width\` は **max-width** として効くので（\`--wim-input-width\`）、
              flex 行に置くと内容幅（228px）まで縮み、placeholder が 2 行になって
              左のアイコンが 2 行目の高さに残る。列を作って \`fullWidth\` で埋める。 */}
          <Grid cols={{
          base: 1,
          sm: "minmax(0, 22rem) auto"
        }} gap="md" align="end">
            <SmartSearchInput fullWidth placeholder={t(ns("pool_search_placeholder"))} />
            {/* 見ているデータの切り替え（即時反映）は \`SegmentedControl\`。
                \`ToggleGroup\` は「チェックボックス／ラジオのボタン版」＝**値を持つ
                入力**で、ツールバーや設定の側（この画面では PageStyle の切り抜き比率）。
                docs の design intent が両者をこう分けている。 */}
            <SegmentedControl value={stage} onChange={setStage} options={[{
            label: t(ns("stage_applied")),
            value: "applied"
          }, {
            label: t(ns("stage_screening")),
            value: "screening"
          }, {
            label: t(ns("stage_interview")),
            value: "interview"
          }]} size="sm" />
          </Grid>

          {/* 段階ごとに条件そのものが入れ替わる（\`key\` で作り直す）。
              \`defaultQuery\` は非制御なので、\`key\` を変えないと段階を切り替えても
              前の条件が残り、「切り替わったのに何も起きない」画面になる。 */}
          <QueryBuilder key={stage} fields={[{
          name: "applied_on",
          label: t(ns("field_applied")),
          type: "date"
        }, {
          name: "years",
          label: t(ns("field_years")),
          type: "number"
        }, {
          name: "shift",
          label: t(ns("field_shift")),
          type: "string"
        }, {
          name: "commute",
          label: t(ns("field_commute")),
          type: "number"
        }, {
          name: "licence",
          label: t(ns("field_licence")),
          type: "boolean"
        }]}
        /* \`operator\` は記号で渡す（\`>=\` / \`<=\` / \`=\`）。\`greater_equal\` の
           ような語を渡すと、演算子の Select が**空のまま黙って描画される**。 */ defaultQuery={QUERIES[stage]} />

          {/* **\`ButtonGroup\`（joined）は使わない。** あれはセグメント状に
              「1 つの操作面」を作るもので、境目を共有して見える。ここの 2 つは
              別々の操作（条件を保存する / 結果を書き出す）で、押し間違いの
              コストも違うので、独立したボタンとして間を空ける。 */}
          <Grid cols={{
          base: 1,
          sm: "auto minmax(0, 20rem)"
        }} gap="md" align="center">
            <Text size="sm" color="text-secondary">
              {t(ns("pool_count"), {
              matched,
              total
            })}
            </Text>
            <Group gap="sm" justify="end">
              <Button size="sm" variant="ghost">
                {t(ns("pool_export"))}
              </Button>
              <Button size="sm" variant="outline">
                {t(ns("pool_save"))}
              </Button>
            </Group>
          </Grid>
        </Stack>
      </Box>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`応募者の抽出。**主役は条件式**で、検索欄と選考段階の切替はその入口。
件数は条件と内部整合させる（一致 ≤ 母数、段階が進むほど母数が減る）。`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Box p="2xl">
        <Stack gap="xl">
          <Stack gap="3xs">
            <Title tag="h2" size="sm">
              {t(ns("offer_title"))}
            </Title>
            <Text size="sm" color="text-secondary">
              {t(ns("offer_terms"))}
            </Text>
          </Stack>

          {/* \`width\` は canvas にしか効かず、消去ボタンの行は親いっぱいに広がる。
              列そのものを canvas 幅に合わせないと、ボタンが 670px 離れて座る。 */}
          <Grid cols={{
          base: "minmax(0, 1fr)",
          sm: "20rem"
        }}>
            <SignaturePad label={t(ns("offer_sign_label"))} width={320} height={160} canvasAriaLabel={t(ns("offer_sign_aria"))} clearLabel={t(ns("offer_sign_clear"))} />
          </Grid>

          <Checkbox defaultChecked={false}>{t(ns("offer_confirm"))}</Checkbox>

          <Group gap="sm" align="center">
            <Button variant="solid">{t(ns("offer_submit"))}</Button>
            <Text size="xs" color="text-tertiary">
              {t(ns("offer_footnote"))}
            </Text>
          </Group>
        </Stack>
      </Box>;
  }
}`,...Q.parameters?.docs?.source},description:{story:`内定通知の返送。**主役は署名**なので、条件は上に短く置いて読ませる。`,...Q.parameters?.docs?.description}}},$=[`Default`,`Distribution`,`PageStyle`,`TalentPool`,`Offer`]}))();export{q as Default,J as Distribution,Q as Offer,Y as PageStyle,Z as TalentPool,$ as __namedExportsOrder,U as default};