"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./AppShell-Dqy97opz.js";import{n as ee,t as u}from"./Box-lSx-_C-t.js";import{n as d,t as f}from"./Container-DJnhfdv_.js";import{n as te,t as ne}from"./Flex-CwvbGUNO.js";import{n as re,t as ie}from"./Grid-B8FTnlHA.js";import{n as ae,t as p}from"./Header-CEkDvelQ.js";import{n as m,t as h}from"./Stack-D0pTsuU-.js";import{n as oe,t as se}from"./Button-DrO46Brn.js";import{n as ce,t as g}from"./Text-8oARqUeB.js";import{n as le,t as ue}from"./Carousel-mDGQBYSH.js";import{n as de,t as _}from"./Title-D19NtK2q.js";import{i as fe,n as pe,r as me,t as v}from"./audiosample-Cq0zfMqj.js";import{n as y,t as b}from"./Image-DHQnBU31.js";import{a as x,c as S,i as C,n as w,o as T,r as E,s as D,t as O}from"./video_poster-BaPhLPhe.js";import{a as k,n as A,r as j,t as M}from"./Lightbox-Pv0bRwOm.js";import{a as N,c as P,d as F,f as I,i as L,l as R,n as z,o as he,r as B,s as ge,t as _e,u as ve}from"./gallery_desert-BaEyN3Hy.js";import{n as ye,t as be}from"./ImageCompare-mAQq_Vw6.js";import{n as xe,t as Se}from"./scene_wide-BjsOzZcP.js";import{n as Ce,t as we}from"./gallery_city-C_bxJSDP.js";import{n as Te,t as Ee}from"./scene_landscape-CYVOpy3D.js";var V;function H(){return(H=t((()=>{V=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20400'%20width='400'%20height='400'%3e%3cdefs%3e%3clinearGradient%20id='skyFaded'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='%239AA7B0'/%3e%3cstop%20offset='100%25'%20stop-color='%23C5CBCE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='snowFaded'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='%23E8E8E4'/%3e%3cstop%20offset='100%25'%20stop-color='%23C9CDD0'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='400'%20height='400'%20fill='url(%23skyFaded)'/%3e%3cpolygon%20points='0,400%20160,100%20320,400'%20fill='%238B9498'/%3e%3cpolygon%20points='80,400%20240,80%20400,400'%20fill='%239AA3A8'/%3e%3cpolygon%20points='160,400%20280,140%20400,350'%20fill='%23A8B0B4'%20opacity='0.8'/%3e%3cpolygon%20points='80,400%20160,200%20240,400'%20fill='%237A8488'/%3e%3cpolygon%20points='140,140%20160,100%20180,140%20175,135%20165,125%20155,135'%20fill='url(%23snowFaded)'/%3e%3cpolygon%20points='210,105%20240,80%20270,105%20260,98%20240,82%20220,98'%20fill='url(%23snowFaded)'/%3e%3crect%20y='340'%20width='400'%20height='60'%20fill='%237A8078'%20opacity='0.6'/%3e%3c/svg%3e`})))()}var U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{U=e(n(),1),i(),a(),c(),fe(),ee(),oe(),le(),d(),te(),I(),re(),ae(),y(),ye(),k(),m(),ce(),de(),S(),ve(),H(),P(),he(),Ce(),L(),z(),Se(),Ee(),x(),E(),O(),pe(),W=s(),G={title:`Patterns/AlpineDesk`,parameters:{layout:`fullscreen`,docs:{description:{component:'11 枚目の合成画面。**狙いは media 族**（公開カタログ 7 件中、合成済みは\n`Image` だけ＝`Patterns/Page`）。残り 6 件を作業ごとに載せる:\n`Gallery` / `Lightbox` / `ImageCompare` / `Video` / `Audio` / `Carousel`。\n\n`Carousel` は実装が `data-display` 配下でも、`components.json` の media に\n載っているので、ここの母数に含める。\n\n**題材は Kiyosumi とも `DeployAssistant` とも被らせない。** 盛岡市立図書館の\n書庫で、写真同好会が預けた箱を土曜日の展示用に開いている席。風景 SVG は\n「箱の中のプリント」そのものとして使う（山をヴァイオリンに見せかける、はしない）。\n\n**1 画面に 6 件は載せない。** スキャンの選別 / 退色の直し / 8mm とカセット /\nロビーのループ、と仕事が違うのでストーリーを分ける。主役はそれぞれ\nGallery / ImageCompare / Video / Carousel。\n\n**VRT を決める指定**: Video / Audio は止めている（`autoPlay` なし、\n`loading="eager"`）。Carousel は `autoPlay` も `loop` も切る（クローンスライドと\n自動送りが位相をずらす）。Lightbox は閉じたまま撮る。\n\n**書いて分かった穴**:\n① **T171（済）** チェックで選び、クリックは `onItemClick`。\n② **T172（済・③）** `Lightbox.Gallery` はサムネイル帯。`Gallery` は中に入れず、登録と描画を分ける。'}}}},K=e=>`docs_stories_recipes:alpineDesk.${e}`,q=()=>{let{t:e}=r(o);return(0,U.useMemo)(()=>[{id:`p-iwate`,src:R,alt:e(K(`alt_iwate`)),title:e(K(`title_iwate`)),caption:e(K(`cap_iwate`))},{id:`p-oga`,src:ge,alt:e(K(`alt_oga`)),title:e(K(`title_oga`)),caption:e(K(`cap_oga`))},{id:`p-hayachine`,src:N,alt:e(K(`alt_haya`)),title:e(K(`title_haya`)),caption:e(K(`cap_haya`))},{id:`p-station`,src:we,alt:e(K(`alt_station`)),title:e(K(`title_station`))},{id:`p-hachimantai`,src:B,alt:e(K(`alt_hachiman`)),title:e(K(`title_hachiman`)),caption:e(K(`cap_hachiman`))},{id:`p-lake`,src:`./demo/lightbox_1.png`,alt:e(K(`alt_lake`)),title:e(K(`title_lake`)),caption:e(K(`cap_lake`))},{id:`p-tottori`,src:_e,alt:e(K(`alt_tottori`)),title:e(K(`title_tottori`)),caption:e(K(`cap_tottori`))}],[e])},J={render:function(){let{t:e}=r(o),t=q(),[n,i]=(0,U.useState)([`p-iwate`,`p-hayachine`]),[a,s]=(0,U.useState)(null),c=t.map(e=>({src:e.src,alt:e.alt,title:e.title,caption:e.caption}));return(0,W.jsxs)(l,{children:[(0,W.jsx)(l.Header,{children:(0,W.jsxs)(p,{bordered:!0,background:`surface-variant`,children:[(0,W.jsx)(p.Section,{children:(0,W.jsx)(g,{size:`sm`,color:`text-secondary`,children:e(K(`org`))})}),(0,W.jsx)(p.Section,{align:`end`,children:(0,W.jsx)(se,{size:`sm`,disabled:n.length===0,children:e(K(`mark`),{count:n.length})})})]})}),(0,W.jsx)(l.Body,{children:(0,W.jsx)(l.Main,{children:(0,W.jsxs)(h,{gap:`xl`,children:[(0,W.jsxs)(h,{gap:`2xs`,children:[(0,W.jsx)(_,{tag:`h1`,size:`md`,children:e(K(`batch_title`))}),(0,W.jsx)(g,{size:`xs`,color:`text-tertiary`,children:e(K(`batch_meta`))})]}),(0,W.jsx)(g,{size:`sm`,children:e(K(`batch_lead`))}),(0,W.jsxs)(M,{defaultOpen:a!==null,defaultIndex:a??0,onOpenChange:e=>{e||s(null)},children:[(0,W.jsx)(j,{items:c,children:null}),(0,W.jsx)(F,{items:t,columns:3,gap:`lg`,aspect:`square`,selectable:!0,selected:n,onSelectionChange:i,onItemClick:(e,t)=>s(t)}),(0,W.jsx)(A,{})]},a??`closed`)]})})})]})}},Y={render:function(){let{t:e}=r(o);return(0,W.jsx)(u,{p:`2xl`,children:(0,W.jsx)(f,{size:`md`,children:(0,W.jsxs)(h,{gap:`xl`,children:[(0,W.jsxs)(h,{gap:`2xs`,children:[(0,W.jsx)(_,{tag:`h1`,size:`md`,children:e(K(`restore_title`))}),(0,W.jsx)(g,{size:`xs`,color:`text-tertiary`,children:e(K(`restore_meta`))})]}),(0,W.jsx)(be,{before:V,after:R,beforeAlt:e(K(`restore_before_alt`)),afterAlt:e(K(`restore_after_alt`)),beforeLabel:e(K(`restore_before`)),afterLabel:e(K(`restore_after`)),defaultPosition:37,width:`100%`,height:`22rem`,radius:`md`,labels:{handleAriaLabel:e(K(`restore_handle`))}}),(0,W.jsx)(g,{size:`sm`,color:`text-secondary`,children:e(K(`restore_note`))})]})})})}},X={render:function(){let{t:e}=r(o);return(0,W.jsx)(u,{p:`2xl`,children:(0,W.jsx)(f,{size:`lg`,children:(0,W.jsxs)(h,{gap:`xl`,children:[(0,W.jsxs)(h,{gap:`2xs`,children:[(0,W.jsx)(_,{tag:`h1`,size:`md`,children:e(K(`listen_title`))}),(0,W.jsx)(g,{size:`xs`,color:`text-tertiary`,children:e(K(`listen_meta`))})]}),(0,W.jsx)(g,{size:`sm`,children:e(K(`listen_note`))}),(0,W.jsxs)(ie,{cols:{base:1,md:`minmax(0, 1fr) auto`},gap:`xl`,children:[(0,W.jsx)(h,{gap:`sm`,children:(0,W.jsx)(D,{src:T,poster:w,loading:`eager`,preload:`metadata`,customControls:!0,radius:`md`,border:!0,fit:`contain`,caption:e(K(`video_caption`)),tracks:[{kind:`captions`,src:C,srcLang:`en`,label:`English`}],labels:{videoAriaLabel:e(K(`video_label`))}})}),(0,W.jsxs)(ne,{inline:!0,direction:`column`,gap:`sm`,align:`stretch`,children:[(0,W.jsx)(u,{w:0,style:{minWidth:`100%`},children:(0,W.jsx)(g,{size:`xs`,color:`text-tertiary`,children:e(K(`tape_note`))})}),(0,W.jsx)(me,{src:{src:v,title:e(K(`audio_title`)),artist:e(K(`audio_artist`)),coverArt:R},loading:`eager`,customControls:!0,showMetadata:!0,visualizer:!1,radius:`md`,border:!0,caption:e(K(`audio_caption`))})]})]})]})})})}},Z={render:function(){let{t:e}=r(o),t=[{src:R,alt:e(K(`slide1_alt`))},{src:B,alt:e(K(`slide2_alt`))},{src:xe,alt:e(K(`slide3_alt`))},{src:Te,alt:e(K(`slide4_alt`))}];return(0,W.jsx)(u,{p:`2xl`,children:(0,W.jsx)(f,{size:`md`,children:(0,W.jsxs)(h,{gap:`xl`,children:[(0,W.jsxs)(h,{gap:`2xs`,children:[(0,W.jsx)(_,{tag:`h1`,size:`md`,children:e(K(`lobby_title`))}),(0,W.jsx)(g,{size:`xs`,color:`text-tertiary`,children:e(K(`lobby_meta`))})]}),(0,W.jsx)(ue,{autoPlay:!1,loop:!1,aspectRatio:`4/3`,objectFit:`cover`,labels:{prevSlide:e(K(`slide_prev`)),nextSlide:e(K(`slide_next`)),slideLabel:t=>e(K(`slide_n`),{number:t}),goToSlide:t=>e(K(`slide_go`),{number:t})},children:t.map(e=>(0,W.jsx)(b,{src:e.src,alt:e.alt,width:`100%`,height:`100%`,fit:`cover`,loading:`eager`,radius:`none`},e.src))}),(0,W.jsx)(g,{size:`sm`,color:`text-secondary`,children:e(K(`lobby_note`))})]})})})}},Q=[`Batch`,`Restore`,`Listen`,`Lobby`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:"今夜のスキャンを選ぶ。**主役はコンタクトシート**（`Gallery`）。\nチェックで選び、写真クリックで `Lightbox`（T171）。",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`退色した山のプリントを、スキャンの色に戻す途中。**主役は比較スライダー。**
位置を 50 にしない（作業の途中）。左右の絵は同じ山で、退色版は別 SVG ──
実行時に canvas で削ると VRT の初回描画が色のままになる。`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`8mm の転送を確認し、箱の解説カセットを横に置く。**主役は映像。**
Audio は参照用なので声量を下げ、Visualizer は回さない（VRT の位相が定まらない）。`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`土曜日のロビーで回す 4 枚。**主役はカルーセル。** 3 枚に揃えない。
自動送りもループも切る（撮る位相を固定する）。`,...Z.parameters?.docs?.description}}}})))()}$();export{J as Batch,X as Listen,Z as Lobby,Y as Restore,Q as __namedExportsOrder,G as default};