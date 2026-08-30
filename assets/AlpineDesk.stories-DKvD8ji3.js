"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{At as c,Ji as l,Ni as ee,d as te,ki as u,l as ne,t as d,zi as f}from"./src-CV0le6yM.js";import{t as p}from"./Box-BVB_9vOB.js";import{a as re}from"./SpeedDial-75iu1pCN.js";import{t as m}from"./Stack-z584y6QE.js";import{t as ie}from"./Button-vRcm9ObM.js";import{t as h}from"./Text-CLDfz7UT.js";import{t as g}from"./Title-DgBJgLRP.js";import{n as ae,o as _,r as v,t as y}from"./Lightbox-DjDH4X_G.js";import{t as b}from"./Gallery-D9GDLDlk.js";import{t as x}from"./ImageCompare-tveGkNcB.js";import{n as oe,t as se}from"./scene_wide-D9LdrP9R.js";import{a as ce,c as S,i as C,l as w,n as T,o as E,r as D,s as O,t as k,u as A}from"./gallery_desert-yY585wZC.js";import{n as j,t as M}from"./gallery_city-Lb4TsQv8.js";import{n as N,t as P}from"./scene_landscape-DRLAOg4r.js";import{a as F,i as I,n as le,o as L,r as R,t as z}from"./video_poster-CqGOMAzs.js";import{n as B,t as V}from"./audiosample-RzkJBVqu.js";var H,U=e((()=>{H=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20400'%20width='400'%20height='400'%3e%3cdefs%3e%3clinearGradient%20id='skyFaded'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='%239AA7B0'/%3e%3cstop%20offset='100%25'%20stop-color='%23C5CBCE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='snowFaded'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='%23E8E8E4'/%3e%3cstop%20offset='100%25'%20stop-color='%23C9CDD0'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='400'%20height='400'%20fill='url(%23skyFaded)'/%3e%3cpolygon%20points='0,400%20160,100%20320,400'%20fill='%238B9498'/%3e%3cpolygon%20points='80,400%20240,80%20400,400'%20fill='%239AA3A8'/%3e%3cpolygon%20points='160,400%20280,140%20400,350'%20fill='%23A8B0B4'%20opacity='0.8'/%3e%3cpolygon%20points='80,400%20160,200%20240,400'%20fill='%237A8488'/%3e%3cpolygon%20points='140,140%20160,100%20180,140%20175,135%20165,125%20155,135'%20fill='url(%23snowFaded)'/%3e%3cpolygon%20points='210,105%20240,80%20270,105%20260,98%20240,82%20220,98'%20fill='url(%23snowFaded)'/%3e%3crect%20y='340'%20width='400'%20height='60'%20fill='%237A8078'%20opacity='0.6'/%3e%3c/svg%3e`})),W,G,K,q,J,Y,X,Z,Q,$;e((()=>{W=t(n(),1),o(),i(),d(),A(),U(),S(),E(),j(),C(),T(),se(),P(),F(),R(),z(),B(),G=a(),K={title:`Patterns/AlpineDesk`,parameters:{layout:`fullscreen`,docs:{description:{component:'11 枚目の合成画面。**狙いは media 族**（公開カタログ 7 件中、合成済みは\n`Image` だけ＝`Patterns/Page`）。残り 6 件を作業ごとに載せる:\n`Gallery` / `Lightbox` / `ImageCompare` / `Video` / `Audio` / `Carousel`。\n\n`Carousel` は実装が `data-display` 配下でも、`components.json` の media に\n載っているので、ここの母数に含める。\n\n**題材は Kiyosumi とも `DeployAssistant` とも被らせない。** 盛岡市立図書館の\n書庫で、写真同好会が預けた箱を土曜日の展示用に開いている席。風景 SVG は\n「箱の中のプリント」そのものとして使う（山をヴァイオリンに見せかける、はしない）。\n\n**1 画面に 6 件は載せない。** スキャンの選別 / 退色の直し / 8mm とカセット /\nロビーのループ、と仕事が違うのでストーリーを分ける。主役はそれぞれ\nGallery / ImageCompare / Video / Carousel。\n\n**VRT を決める指定**: Video / Audio は止めている（`autoPlay` なし、\n`loading="eager"`）。Carousel は `autoPlay` も `loop` も切る（クローンスライドと\n自動送りが位相をずらす）。Lightbox は閉じたまま撮る。\n\n**書いて分かった穴**:\n① **T171（済）** チェックで選び、クリックは `onItemClick`。\n② **T172（済・③）** `Lightbox.Gallery` はサムネイル帯。`Gallery` は中に入れず、登録と描画を分ける。'}}}},q=e=>`docs_stories_recipes:alpineDesk.${e}`,J=()=>{let{t:e}=r(s);return(0,W.useMemo)(()=>[{id:`p-iwate`,src:w,alt:e(q(`alt_iwate`)),title:e(q(`title_iwate`)),caption:e(q(`cap_iwate`))},{id:`p-oga`,src:O,alt:e(q(`alt_oga`)),title:e(q(`title_oga`)),caption:e(q(`cap_oga`))},{id:`p-hayachine`,src:ce,alt:e(q(`alt_haya`)),title:e(q(`title_haya`)),caption:e(q(`cap_haya`))},{id:`p-station`,src:M,alt:e(q(`alt_station`)),title:e(q(`title_station`))},{id:`p-hachimantai`,src:D,alt:e(q(`alt_hachiman`)),title:e(q(`title_hachiman`)),caption:e(q(`cap_hachiman`))},{id:`p-lake`,src:`./demo/lightbox_1.png`,alt:e(q(`alt_lake`)),title:e(q(`title_lake`)),caption:e(q(`cap_lake`))},{id:`p-tottori`,src:k,alt:e(q(`alt_tottori`)),title:e(q(`title_tottori`)),caption:e(q(`cap_tottori`))}],[e])},Y={render:function(){let{t:e}=r(s),t=J(),[n,i]=(0,W.useState)([`p-iwate`,`p-hayachine`]),[a,o]=(0,W.useState)(null),c=t.map(e=>({src:e.src,alt:e.alt,title:e.title,caption:e.caption}));return(0,G.jsxs)(l,{children:[(0,G.jsx)(l.Header,{children:(0,G.jsxs)(u,{bordered:!0,background:`surface-variant`,children:[(0,G.jsx)(u.Section,{children:(0,G.jsx)(h,{size:`sm`,color:`text-secondary`,children:e(q(`org`))})}),(0,G.jsx)(u.Section,{align:`end`,children:(0,G.jsx)(ie,{size:`sm`,disabled:n.length===0,children:e(q(`mark`),{count:n.length})})})]})}),(0,G.jsx)(l.Body,{children:(0,G.jsx)(l.Main,{children:(0,G.jsxs)(m,{gap:`xl`,children:[(0,G.jsxs)(m,{gap:`2xs`,children:[(0,G.jsx)(g,{tag:`h1`,size:`md`,children:e(q(`batch_title`))}),(0,G.jsx)(h,{size:`xs`,color:`text-tertiary`,children:e(q(`batch_meta`))})]}),(0,G.jsx)(h,{size:`sm`,children:e(q(`batch_lead`))}),(0,G.jsxs)(y,{defaultOpen:a!==null,defaultIndex:a??0,onOpenChange:e=>{e||o(null)},children:[(0,G.jsx)(v,{items:c,children:null}),(0,G.jsx)(b,{items:t,columns:3,gap:`lg`,aspect:`square`,selectable:!0,selected:n,onSelectionChange:i,onItemClick:(e,t)=>o(t)}),(0,G.jsx)(ae,{})]},a??`closed`)]})})})]})}},X={render:function(){let{t:e}=r(s);return(0,G.jsx)(p,{p:`2xl`,children:(0,G.jsx)(f,{size:`md`,children:(0,G.jsxs)(m,{gap:`xl`,children:[(0,G.jsxs)(m,{gap:`2xs`,children:[(0,G.jsx)(g,{tag:`h1`,size:`md`,children:e(q(`restore_title`))}),(0,G.jsx)(h,{size:`xs`,color:`text-tertiary`,children:e(q(`restore_meta`))})]}),(0,G.jsx)(x,{before:H,after:w,beforeAlt:e(q(`restore_before_alt`)),afterAlt:e(q(`restore_after_alt`)),beforeLabel:e(q(`restore_before`)),afterLabel:e(q(`restore_after`)),defaultPosition:37,width:`100%`,height:`22rem`,radius:`md`,labels:{handleAriaLabel:e(q(`restore_handle`))}}),(0,G.jsx)(h,{size:`sm`,color:`text-secondary`,children:e(q(`restore_note`))})]})})})}},Z={render:function(){let{t:e}=r(s);return(0,G.jsx)(p,{p:`2xl`,children:(0,G.jsx)(f,{size:`lg`,children:(0,G.jsxs)(m,{gap:`xl`,children:[(0,G.jsxs)(m,{gap:`2xs`,children:[(0,G.jsx)(g,{tag:`h1`,size:`md`,children:e(q(`listen_title`))}),(0,G.jsx)(h,{size:`xs`,color:`text-tertiary`,children:e(q(`listen_meta`))})]}),(0,G.jsx)(h,{size:`sm`,children:e(q(`listen_note`))}),(0,G.jsxs)(ee,{cols:{base:1,md:`minmax(0, 1fr) auto`},gap:`xl`,children:[(0,G.jsx)(m,{gap:`sm`,children:(0,G.jsx)(ne,{src:L,poster:le,loading:`eager`,preload:`metadata`,customControls:!0,radius:`md`,border:!0,fit:`contain`,caption:e(q(`video_caption`)),tracks:[{kind:`captions`,src:I,srcLang:`en`,label:`English`}],labels:{videoAriaLabel:e(q(`video_label`))}})}),(0,G.jsxs)(re,{inline:!0,direction:`column`,gap:`sm`,align:`stretch`,children:[(0,G.jsx)(p,{w:0,style:{minWidth:`100%`},children:(0,G.jsx)(h,{size:`xs`,color:`text-tertiary`,children:e(q(`tape_note`))})}),(0,G.jsx)(te,{src:{src:V,title:e(q(`audio_title`)),artist:e(q(`audio_artist`)),coverArt:w},loading:`eager`,customControls:!0,showMetadata:!0,visualizer:!1,radius:`md`,border:!0,caption:e(q(`audio_caption`))})]})]})]})})})}},Q={render:function(){let{t:e}=r(s),t=[{src:w,alt:e(q(`slide1_alt`))},{src:D,alt:e(q(`slide2_alt`))},{src:oe,alt:e(q(`slide3_alt`))},{src:N,alt:e(q(`slide4_alt`))}];return(0,G.jsx)(p,{p:`2xl`,children:(0,G.jsx)(f,{size:`md`,children:(0,G.jsxs)(m,{gap:`xl`,children:[(0,G.jsxs)(m,{gap:`2xs`,children:[(0,G.jsx)(g,{tag:`h1`,size:`md`,children:e(q(`lobby_title`))}),(0,G.jsx)(h,{size:`xs`,color:`text-tertiary`,children:e(q(`lobby_meta`))})]}),(0,G.jsx)(c,{autoPlay:!1,loop:!1,aspectRatio:`4/3`,objectFit:`cover`,labels:{prevSlide:e(q(`slide_prev`)),nextSlide:e(q(`slide_next`)),slideLabel:t=>e(q(`slide_n`),{number:t}),goToSlide:t=>e(q(`slide_go`),{number:t})},children:t.map(e=>(0,G.jsx)(_,{src:e.src,alt:e.alt,width:`100%`,height:`100%`,fit:`cover`,loading:`eager`,radius:`none`},e.src))}),(0,G.jsx)(h,{size:`sm`,color:`text-secondary`,children:e(q(`lobby_note`))})]})})})}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const items = useBatchItems();
    const [selected, setSelected] = useState<string[]>(["p-iwate", "p-hayachine"]);
    const [inspect, setInspect] = useState<number | null>(null);
    const lightboxItems = items.map(item => ({
      src: item.src,
      alt: item.alt,
      title: item.title,
      caption: item.caption
    }));
    return <AppShell>
        <AppShell.Header>
          {/* 本体と同じ \`surface\` だとスクロール中に境が消える。影は
              AppShell では中身がヘッダーの下に潜らないので嘘になる。
              面の段（surface-variant）と下線で切る。 */}
          <Header bordered background="surface-variant">
            <Header.Section>
              <Text size="sm" color="text-secondary">
                {t(ns("org"))}
              </Text>
            </Header.Section>
            <Header.Section align="end">
              <Button size="sm" disabled={selected.length === 0}>
                {t(ns("mark"), {
                count: selected.length
              })}
              </Button>
            </Header.Section>
          </Header>
        </AppShell.Header>
        <AppShell.Body>
          <AppShell.Main>
            <Stack gap="xl">
              <Stack gap="2xs">
                <Title tag="h1" size="md">
                  {t(ns("batch_title"))}
                </Title>
                <Text size="xs" color="text-tertiary">
                  {t(ns("batch_meta"))}
                </Text>
              </Stack>
              <Text size="sm">{t(ns("batch_lead"))}</Text>
              <Lightbox key={inspect ?? "closed"} defaultOpen={inspect !== null} defaultIndex={inspect ?? 0} onOpenChange={open => {
              if (!open) setInspect(null);
            }}>
                {/*
                  \`Lightbox.Gallery\` はサムネイル帯（flex wrap + 中央揃え、sm で縦積み）
                  なので \`Gallery\` を中に入れるとシート全体が中央に寄る。
                  アイテムの登録だけこちらで行い、コンタクトシートは外に置く。
                 */}
                <LightboxGallery items={lightboxItems}>{null}</LightboxGallery>
                <Gallery items={items} columns={3} gap="lg" aspect="square" selectable selected={selected} onSelectionChange={setSelected} onItemClick={(_item, index) => setInspect(index)} />
                <LightboxContent />
              </Lightbox>
            </Stack>
          </AppShell.Main>
        </AppShell.Body>
      </AppShell>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"今夜のスキャンを選ぶ。**主役はコンタクトシート**（`Gallery`）。\nチェックで選び、写真クリックで `Lightbox`（T171）。",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Box p="2xl">
        <Container size="md">
          <Stack gap="xl">
            <Stack gap="2xs">
              <Title tag="h1" size="md">
                {t(ns("restore_title"))}
              </Title>
              <Text size="xs" color="text-tertiary">
                {t(ns("restore_meta"))}
              </Text>
            </Stack>
            <ImageCompare before={galleryMountainFaded} after={galleryMountain} beforeAlt={t(ns("restore_before_alt"))} afterAlt={t(ns("restore_after_alt"))} beforeLabel={t(ns("restore_before"))} afterLabel={t(ns("restore_after"))} defaultPosition={37} width="100%" height="22rem" radius="md" labels={{
            handleAriaLabel: t(ns("restore_handle"))
          }} />
            <Text size="sm" color="text-secondary">
              {t(ns("restore_note"))}
            </Text>
          </Stack>
        </Container>
      </Box>;
  }
}`,...X.parameters?.docs?.source},description:{story:`退色した山のプリントを、スキャンの色に戻す途中。**主役は比較スライダー。**
位置を 50 にしない（作業の途中）。左右の絵は同じ山で、退色版は別 SVG ──
実行時に canvas で削ると VRT の初回描画が色のままになる。`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Box p="2xl">
        <Container size="lg">
          <Stack gap="xl">
            <Stack gap="2xs">
              <Title tag="h1" size="md">
                {t(ns("listen_title"))}
              </Title>
                <Text size="xs" color="text-tertiary">
                  {t(ns("listen_meta"))}
                </Text>
              </Stack>
              <Text size="sm">{t(ns("listen_note"))}</Text>
              <Grid cols={{
            base: 1,
            md: "minmax(0, 1fr) auto"
          }} gap="xl">
              <Stack gap="sm">
                <Video src={sampleVideo} poster={videoPoster} loading="eager" preload="metadata" customControls radius="md" border fit="contain" caption={t(ns("video_caption"))}
              /* T205: 字幕トラックの無い <video> は axe の video-caption
                 （critical）が「人が確かめろ」と言い続ける。 */ tracks={[{
                kind: "captions",
                src: sampleCaptions,
                srcLang: "en",
                label: "English"
              }]} labels={{
                videoAriaLabel: t(ns("video_label"))
              }} />
              </Stack>
              {/* 列を 16rem にするとプレーヤー（min 300px）より先に文が折り返す。
                  inline Flex の幅はプレーヤー、文はそれに合わせて折り返す。 */}
              <Flex inline direction="column" gap="sm" align="stretch">
                <Box w={0} style={{
                minWidth: "100%"
              }}>
                  <Text size="xs" color="text-tertiary">
                    {t(ns("tape_note"))}
                  </Text>
                </Box>
                <Audio src={{
                src: audioSample,
                title: t(ns("audio_title")),
                artist: t(ns("audio_artist")),
                coverArt: galleryMountain
              }} loading="eager" customControls showMetadata visualizer={false} radius="md" border caption={t(ns("audio_caption"))} />
              </Flex>
            </Grid>
          </Stack>
        </Container>
      </Box>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`8mm の転送を確認し、箱の解説カセットを横に置く。**主役は映像。**
Audio は参照用なので声量を下げ、Visualizer は回さない（VRT の位相が定まらない）。`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const slides = [{
      src: galleryMountain,
      alt: t(ns("slide1_alt"))
    }, {
      src: gallerySnow,
      alt: t(ns("slide2_alt"))
    }, {
      src: sceneWide,
      alt: t(ns("slide3_alt"))
    }, {
      src: sceneLandscape,
      alt: t(ns("slide4_alt"))
    }];
    return <Box p="2xl">
        <Container size="md">
          <Stack gap="xl">
            <Stack gap="2xs">
              <Title tag="h1" size="md">
                {t(ns("lobby_title"))}
              </Title>
              <Text size="xs" color="text-tertiary">
                {t(ns("lobby_meta"))}
              </Text>
            </Stack>
            <Carousel autoPlay={false} loop={false} aspectRatio="4/3" objectFit="cover" labels={{
            prevSlide: t(ns("slide_prev")),
            nextSlide: t(ns("slide_next")),
            slideLabel: n => t(ns("slide_n"), {
              number: n
            }),
            goToSlide: n => t(ns("slide_go"), {
              number: n
            })
          }}>
              {slides.map(slide => <Image key={slide.src} src={slide.src} alt={slide.alt} width="100%" height="100%" fit="cover" loading="eager" radius="none" />)}
            </Carousel>
            <Text size="sm" color="text-secondary">
              {t(ns("lobby_note"))}
            </Text>
          </Stack>
        </Container>
      </Box>;
  }
}`,...Q.parameters?.docs?.source},description:{story:`土曜日のロビーで回す 4 枚。**主役はカルーセル。** 3 枚に揃えない。
自動送りもループも切る（撮る位相を固定する）。`,...Q.parameters?.docs?.description}}},$=[`Batch`,`Restore`,`Listen`,`Lobby`]}))();export{Y as Batch,Z as Listen,Q as Lobby,X as Restore,$ as __namedExportsOrder,K as default};