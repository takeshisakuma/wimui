import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as c}from"./Input-CQyi56Pb.js";import{B as a}from"./Button-BVq6229i.js";import{C as p}from"./Card-DOcA_1sW.js";import{C as P}from"./Checkbox-C5BzfKQK.js";import{L as d}from"./Link-DSPnndwI.js";import{H as i}from"./Heading-0tX2SjU6.js";import{S as t}from"./Stack-CLA70Vmp.js";import{C as H}from"./Center-CMQX0qMA.js";import{C as I}from"./Container-DNEv1fOM.js";import{H as z}from"./Header-CrNDhy4r.js";import{A}from"./Avatar-CzHQGaME.js";import{A as R}from"./AvatarGroup-idHCDvrD.js";import{B as w}from"./Badge-CCxpiBGJ.js";import{D as f}from"./Divider-CtYejJB0.js";import{S as N}from"./Selectbox-4hakOgji.js";import{R as B}from"./RadioGroup-Vk38lnr-.js";import{T as D}from"./Textarea-ByiLXoLr.js";import{S as T}from"./Switch-81lLft1F.js";import{G as _}from"./Grid-rXp7wFd2.js";import{P as r}from"./Paragraph-D9to7CN0.js";import{A as E}from"./Alert-CtSKJEzg.js";import{I as G}from"./Icon-gOPTt6zC.js";import{L as o}from"./FieldTemplate-BptL9gjC.js";import{S as k}from"./Stats-C-Nc92MT.js";import{L,a as l}from"./List-poXLa3ao.js";import{S as C}from"./Sidebar-C5PTJJGv.js";import{S as m}from"./Skeleton-BRKAZrjk.js";import{G as W}from"./Group-DVlCtPsd.js";import{A as g}from"./iframe-Cm7axuZH.js";import{u as h}from"./useTranslation-NKv2iRzU.js";const F={title:"Patterns/Recipes",parameters:{layout:"fullscreen"}},y={render:function(){const{t:n}=h(g);return e.jsx(H,{style:{height:"100vh",backgroundColor:"var(--wim-color-surface)"},children:e.jsx(p,{style:{width:"400px",padding:"32px",border:"1px solid",borderColor:"var(--wim-color-border-secondary)"},children:e.jsxs(t,{gap:"xl",children:[e.jsxs(t,{align:"center",gap:"md",children:[e.jsx(i,{tag:"h2",size:"xl",style:{lineHeight:1},children:n("login.title")}),e.jsx(r,{content:n("login.subtitle"),color:"deepgray",size:"sm"})]}),e.jsx("form",{onSubmit:s=>s.preventDefault(),children:e.jsxs(t,{gap:"lg",children:[e.jsx(o,{label:n("login.email"),htmlFor:"login-email",children:e.jsx(c,{id:"login-email",placeholder:n("login.email_placeholder"),fullWidth:!0})}),e.jsx(o,{label:n("login.password"),htmlFor:"login-password",children:e.jsx(c,{id:"login-password",type:"password",placeholder:"••••••••",fullWidth:!0})}),e.jsxs(t,{direction:"row",justify:"space-between",align:"center",children:[e.jsxs("label",{htmlFor:"remember-me",style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.875rem",cursor:"pointer",color:"var(--wim-color-text-secondary)"},children:[e.jsx(P,{id:"remember-me"}),n("login.remember_me")]}),e.jsx(d,{href:"#",style:{fontSize:"0.875rem"},children:n("login.forgot_password")})]}),e.jsxs(t,{gap:"sm",children:[e.jsx(a,{variant:"filled",style:{width:"100%"},label:n("login.sign_in")}),e.jsx(a,{variant:"outlined",style:{width:"100%"},onClick:()=>{},label:n("login.sign_in_google")})]})]})}),e.jsxs(t,{direction:"row",justify:"center",gap:"2xs",children:[e.jsx(r,{content:n("login.no_account"),size:"sm",color:"gray"}),e.jsx(d,{href:"#",style:{fontSize:"0.875rem"},children:n("login.sign_up")})]})]})})})}},b={render:function(){const{t:n}=h(g);return e.jsxs("div",{style:{minHeight:"400px",backgroundColor:"var(--wim-color-surface)"},children:[e.jsx("style",{children:`
                  @media (max-width: 768px) {
                      .desktop-only { display: none !important; }
                      .mobile-only { display: block !important; }
                      .header-search { width: 100% !important; max-width: 160px; }
                  }
                  @media (min-width: 769px) {
                      .mobile-only { display: none !important; }
                      .header-search { width: 240px; }
                  }
              `}),e.jsxs(z,{bordered:!0,sticky:!0,background:"primary",style:{padding:"0 24px"},children:[e.jsxs(z.Section,{align:"start",style:{gap:"16px",flex:1,overflow:"hidden"},children:[e.jsx("button",{"aria-label":"Toggle Menu",className:"mobile-only",style:{background:"none",border:"none",fontSize:"20px",cursor:"pointer",padding:"8px"},children:"☰"}),e.jsxs(t,{direction:"row",align:"center",gap:"sm",style:{flexShrink:0},children:[e.jsx("div",{style:{width:"32px",height:"32px",backgroundColor:"var(--wim-color-primary)",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--wim-color-text-on-primary)",fontWeight:"bold"},children:"W"}),e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:"bold",color:"var(--wim-color-text-primary)"},children:"WIM UI"})]}),e.jsxs(t,{as:"nav",direction:"row",gap:"lg",className:"desktop-only",style:{marginLeft:"32px"},children:[e.jsx(d,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:n("dashboard.header_dashboard")}),e.jsx(d,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:n("dashboard.header_projects")}),e.jsx(d,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:n("dashboard.header_team")}),e.jsx(d,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:n("dashboard.header_settings")})]})]}),e.jsxs(z.Section,{align:"end",style:{gap:"16px",flexShrink:0},children:[e.jsx("div",{className:"header-search",children:e.jsx(c,{placeholder:n("dashboard.header_search_placeholder"),fullWidth:!0,leftIcon:"SearchIcon"})}),e.jsx(f,{orientation:"vertical",style:{height:"24px"}}),e.jsxs("div",{style:{position:"relative",cursor:"pointer",display:"flex",alignItems:"center"},children:[e.jsx(G,{name:"BellIcon",size:"md",color:"secondary","aria-label":"Notifications"}),e.jsx(w,{intent:"secondary",size:"sm",content:"3",style:{position:"absolute",top:"-4px",right:"-4px",minWidth:"16px",height:"16px",padding:0}})]}),e.jsxs(t,{direction:"row",align:"center",gap:"sm",style:{cursor:"pointer"},children:[e.jsx(A,{size:"md"}),e.jsxs(t,{gap:"none",className:"desktop-only",children:[e.jsx("span",{style:{fontSize:"0.875rem",fontWeight:600,color:"var(--wim-color-text-primary)"},children:"John Doe"}),e.jsx("span",{style:{fontSize:"0.75rem",color:"var(--wim-color-text-secondary)"},children:n("dashboard.header_admin")})]})]})]})]}),e.jsx(I,{style:{padding:"32px"},children:e.jsxs(t,{gap:"xl",children:[e.jsx(i,{tag:"h2",size:"xl",children:n("dashboard.overview_title")}),e.jsx(_,{cols:"repeat(auto-fit, minmax(280px, 1fr))",gap:24,justify:"center",children:[1,2,3].map(s=>e.jsxs(k,{style:{border:"1px solid",borderColor:"var(--wim-color-border-secondary)"},children:[e.jsxs(t,{justify:"space-between",align:"center",direction:"row",children:[e.jsx(k.Label,{children:n("dashboard.stats_revenue")}),e.jsx(w,{intent:"neutral",content:"+12.5%",size:"sm"})]}),e.jsx(k.Value,{children:e.jsx(i,{tag:"h3",size:"xl",style:{whiteSpace:"nowrap"},children:"$45,231.89"})}),e.jsx(k.Description,{children:n("dashboard.stats_last_month")})]},s))})]})})]})}},u={render:function(){const{t:n}=h(g);return e.jsx(H,{style:{backgroundColor:"var(--wim-color-surface)",padding:"20px"},children:e.jsxs(p,{style:{maxWidth:"1000px",width:"100%",padding:"0",overflow:"hidden",border:"1px solid",borderColor:"var(--wim-color-border-secondary)"},children:[e.jsxs("div",{style:{padding:"24px",borderBottom:"1px solid var(--wim-color-border-secondary)"},children:[e.jsx(i,{tag:"h2",size:"lg",children:n("profile.title")}),e.jsx(r,{content:n("profile.subtitle"),color:"deepgray",style:{marginTop:"4px"}})]}),e.jsxs(_,{cols:{base:1,md:"250px 1fr"},gap:0,style:{minHeight:"600px"},children:[e.jsx("div",{style:{borderRight:"1px solid var(--wim-color-border-secondary)",backgroundColor:"var(--wim-color-surface)"},children:e.jsx("div",{style:{padding:"24px"},children:e.jsxs(t,{gap:"sm",align:"stretch",children:[e.jsx(C.Item,{active:!0,children:n("profile.nav_general")}),e.jsx(C.Item,{children:n("profile.nav_security")}),e.jsx(C.Item,{children:n("profile.nav_notifications")}),e.jsx(C.Item,{children:n("profile.nav_billing")})]})})}),e.jsx("div",{style:{padding:"32px",overflowX:"hidden"},children:e.jsx("form",{onSubmit:s=>s.preventDefault(),children:e.jsxs(t,{gap:"xl",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px",flexWrap:"wrap"},children:[e.jsx(A,{size:"lg",style:{width:"80px",height:"80px",fontSize:"2rem"}}),e.jsxs(t,{gap:"xs",children:[e.jsx(i,{tag:"h3",size:"sm",children:n("profile.pic_title")}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{size:"sm",variant:"outlined",label:n("profile.btn_change")}),e.jsx(a,{size:"sm",variant:"ghost",label:n("profile.btn_remove")})]})]})]}),e.jsx(f,{}),e.jsxs(t,{gap:"2xl",children:[e.jsx(i,{tag:"h3",size:"md",children:n("profile.info_title")}),e.jsxs(t,{gap:"lg",children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"24px"},children:[e.jsx(o,{label:n("profile.first_name"),htmlFor:"profile-first-name",children:e.jsx(c,{id:"profile-first-name",defaultValue:"John",fullWidth:!0})}),e.jsx(o,{label:n("profile.last_name"),htmlFor:"profile-last-name",children:e.jsx(c,{id:"profile-last-name",defaultValue:"Doe",fullWidth:!0})})]}),e.jsx(o,{label:n("profile.email"),htmlFor:"profile-email",children:e.jsx(c,{id:"profile-email",type:"email",defaultValue:"john.doe@example.com",fullWidth:!0})}),e.jsxs(o,{label:n("profile.bio"),htmlFor:"profile-bio",children:[e.jsx(D,{id:"profile-bio",placeholder:n("profile.bio_placeholder"),rows:4,fullWidth:!0,defaultValue:"I am a software engineer based in Tokyo."}),e.jsx(r,{content:n("profile.bio_char_count"),size:"xs",color:"gray",style:{textAlign:"right"}})]})]})]}),e.jsx(f,{}),e.jsxs(t,{gap:"2xl",children:[e.jsx(i,{tag:"h3",size:"md",children:n("profile.reg_title")}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"24px"},children:[e.jsx(N,{label:n("profile.lang_label"),options:[{label:n("profile.lang_en"),value:"en"},{label:n("profile.lang_ja"),value:"ja"},{label:n("profile.lang_es"),value:"es"}],defaultValue:"en"}),e.jsx(N,{label:n("profile.tz_label"),options:[{label:"UTC",value:"utc"},{label:"JST (Japan Standard Time)",value:"jst"},{label:"EST (Eastern Standard Time)",value:"est"}],defaultValue:"jst"})]})]}),e.jsx(f,{}),e.jsxs(t,{gap:"2xl",children:[e.jsx(i,{tag:"h3",size:"md",children:n("profile.pref_title")}),e.jsxs(t,{gap:"lg",children:[e.jsx(o,{label:n("profile.visibility"),children:e.jsx(B,{name:"visibility",defaultValue:"public",options:[{label:n("profile.visibility_public"),value:"public"},{label:n("profile.visibility_private"),value:"private"},{label:n("profile.visibility_friends"),value:"friends"}]})}),e.jsx(o,{label:n("profile.notif_label"),children:e.jsxs(t,{gap:"sm",children:[e.jsx(T,{label:n("profile.notif_email"),defaultChecked:!0}),e.jsx(T,{label:n("profile.notif_push")})]})})]})]}),e.jsx(f,{}),e.jsxs(W,{justify:"end",gap:"md",children:[e.jsx(a,{variant:"ghost",label:n("profile.btn_cancel")}),e.jsx(a,{variant:"filled",label:n("profile.btn_save")})]})]})})})]})]})})}},j={render:function(){const{t:n}=h(g);return e.jsxs(I,{style:{padding:"80px 24px",background:"#fff"},children:[e.jsxs(t,{align:"center",gap:"lg",style:{marginBottom:"64px"},children:[e.jsx(w,{intent:"primary",content:n("pricing.badge")}),e.jsxs(t,{align:"center",gap:"3xl",children:[e.jsx(i,{tag:"h2",size:"xl",align:"center",children:n("pricing.title")}),e.jsx(I,{size:"sm",children:e.jsx(r,{content:n("pricing.subtitle"),color:"deepgray",style:{textAlign:"center"}})})]})]}),e.jsxs(_,{cols:{base:1,md:3},gap:{base:32,lg:48,xl:64},style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsx(p,{style:{padding:"32px",border:"2px solid",borderColor:"var(--wim-color-border-secondary)"},children:e.jsxs(t,{gap:"lg",style:{height:"100%"},children:[e.jsxs(t,{gap:"lg",align:"center",style:{flex:1},children:[e.jsxs(t,{gap:"xs",align:"center",children:[e.jsx("div",{style:{minHeight:"48px",display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e.jsx(i,{tag:"h3",size:"sm",align:"center",style:{margin:0},children:n("pricing.starter_title")})}),e.jsxs(t,{direction:"row",align:"baseline",gap:"none",justify:"center",style:{whiteSpace:"nowrap"},children:[e.jsx(i,{tag:"h4",size:"2xl",style:{whiteSpace:"nowrap"},children:"$0"}),e.jsx(r,{content:n("pricing.period"),color:"gray",size:"sm",style:{whiteSpace:"nowrap"}})]})]}),e.jsx("div",{style:{minHeight:"40px",display:"flex",alignItems:"center"},children:e.jsx(r,{content:n("pricing.starter_desc"),size:"sm",color:"deepgray",style:{textAlign:"center",margin:0}})}),e.jsxs(L,{spacing:"normal",style:{marginTop:"24px",alignSelf:"stretch"},children:[e.jsx(l,{iconName:"CheckIcon",children:n("pricing.starter_feat_1")}),e.jsx(l,{iconName:"CheckIcon",children:n("pricing.starter_feat_2")}),e.jsx(l,{iconName:"CheckIcon",children:n("pricing.starter_feat_3")}),e.jsx(l,{iconName:"CheckIcon",className:"wim-color-gray",style:{opacity:.5},children:n("pricing.starter_feat_4")})]})]}),e.jsx(a,{variant:"outlined",label:n("pricing.starter_btn"),style:{width:"100%"}})]})}),e.jsxs(p,{style:{padding:"32px",border:"2px solid #3b82f6",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"-14px",left:"50%",transform:"translateX(-50%)"},children:e.jsx(w,{intent:"primary",content:n("pricing.pro_badge"),size:"sm"})}),e.jsxs(t,{gap:"lg",style:{height:"100%"},children:[e.jsxs(t,{gap:"lg",align:"center",style:{flex:1},children:[e.jsxs(t,{gap:"xs",align:"center",children:[e.jsx("div",{style:{minHeight:"48px",display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e.jsx(i,{tag:"h3",size:"sm",align:"center",style:{margin:0},children:n("pricing.pro_title")})}),e.jsxs(t,{direction:"row",align:"baseline",gap:"none",justify:"center",style:{whiteSpace:"nowrap"},children:[e.jsx(i,{tag:"h4",size:"2xl",style:{whiteSpace:"nowrap"},children:"$29"}),e.jsx(r,{content:n("pricing.period"),color:"gray",size:"sm",style:{whiteSpace:"nowrap"}})]})]}),e.jsx("div",{style:{minHeight:"40px",display:"flex",alignItems:"center"},children:e.jsx(r,{content:n("pricing.pro_desc"),size:"sm",color:"deepgray",style:{textAlign:"center",margin:0}})}),e.jsxs(L,{spacing:"normal",style:{marginTop:"24px",alignSelf:"stretch"},children:[e.jsx(l,{iconName:"CheckIcon",children:n("pricing.pro_feat_1")}),e.jsx(l,{iconName:"CheckIcon",children:n("pricing.pro_feat_2")}),e.jsx(l,{iconName:"CheckIcon",children:n("pricing.pro_feat_3")}),e.jsx(l,{iconName:"CheckIcon",children:n("pricing.pro_feat_4")})]})]}),e.jsx(a,{variant:"filled",label:n("pricing.pro_btn"),style:{width:"100%"}})]})]}),e.jsx(p,{style:{padding:"32px",border:"2px solid",borderColor:"var(--wim-color-border-secondary)"},children:e.jsxs(t,{gap:"lg",style:{height:"100%"},children:[e.jsxs(t,{gap:"lg",align:"center",style:{flex:1},children:[e.jsxs(t,{gap:"xs",align:"center",children:[e.jsx("div",{style:{minHeight:"48px",display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e.jsx(i,{tag:"h3",size:"sm",align:"center",style:{margin:0},children:n("pricing.ent_title")})}),e.jsxs(t,{direction:"row",align:"baseline",gap:"none",justify:"center",style:{whiteSpace:"nowrap"},children:[e.jsx(i,{tag:"h4",size:"2xl",style:{whiteSpace:"nowrap"},children:"$99"}),e.jsx(r,{content:n("pricing.period"),color:"gray",size:"sm",style:{whiteSpace:"nowrap"}})]})]}),e.jsx("div",{style:{minHeight:"40px",display:"flex",alignItems:"center"},children:e.jsx(r,{content:n("pricing.ent_desc"),size:"sm",color:"deepgray",style:{textAlign:"center",margin:0}})}),e.jsxs(L,{spacing:"normal",style:{marginTop:"24px",alignSelf:"stretch"},children:[e.jsx(l,{iconName:"CheckIcon",children:n("pricing.ent_feat_1")}),e.jsx(l,{iconName:"CheckIcon",children:n("pricing.ent_feat_2")}),e.jsx(l,{iconName:"CheckIcon",children:n("pricing.ent_feat_3")})]})]}),e.jsx(a,{variant:"outlined",label:n("pricing.ent_btn"),style:{width:"100%"}})]})})]})]})}},v={render:function(){const{t:n}=h(g);return e.jsx("div",{style:{minHeight:"600px",display:"flex",alignItems:"center",background:"linear-gradient(135deg, var(--wim-color-primary-light, #f0f7ff) 0%, var(--wim-color-surface) 100%)",padding:"80px 24px"},children:e.jsx(I,{children:e.jsxs(_,{cols:{base:1,md:"1fr 1fr"},gap:48,align:"center",children:[e.jsxs(t,{gap:"3xl",children:[e.jsxs(t,{gap:"3xl",children:[e.jsx(w,{intent:"primary",content:n("hero.badge"),style:{width:"fit-content"}}),e.jsxs(t,{gap:"2xl",children:[e.jsx(i,{tag:"h1",size:"2xl",style:{lineHeight:"1",fontWeight:"800"},children:n("hero.title")}),e.jsx(r,{content:n("hero.desc"),size:"lg",color:"deepgray"})]})]}),e.jsxs(W,{gap:"xl",wrap:"wrap",justify:"evenly",children:[e.jsx(a,{variant:"filled",size:"md",label:n("hero.btn_started")}),e.jsx(a,{variant:"outlined",size:"md",label:n("hero.btn_docs")})]}),e.jsxs(t,{direction:"row",align:"center",gap:"md",children:[e.jsx(R,{size:"sm",children:[1,2,3,4].map(s=>e.jsx(A,{},s))}),e.jsx(r,{content:n("hero.dev_count"),size:"sm",color:"deepgray"})]})]}),e.jsx("div",{style:{position:"relative"},children:e.jsx(p,{style:{padding:"0",borderRadius:"24px",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",overflow:"hidden"},children:e.jsxs(t,{gap:"none",children:[e.jsxs(t,{direction:"row",gap:"xs",align:"center",style:{height:"32px",background:"#f3f4f6",borderBottom:"1px solid #e5e7eb",padding:"0 12px"},children:[e.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#ef4444"}}),e.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#f59e0b"}}),e.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#10b981"}})]}),e.jsx("div",{style:{padding:"24px"},children:e.jsxs(t,{gap:"lg",children:[e.jsx(m,{variant:"text",height:20,width:"100%"}),e.jsx(m,{variant:"text",height:20,width:"80%"}),e.jsxs(_,{cols:2,gap:16,children:[e.jsx(m,{variant:"rect",height:100,style:{borderRadius:"8px"}}),e.jsx(m,{variant:"rect",height:100,style:{borderRadius:"8px"}})]}),e.jsx(m,{variant:"rect",height:80,width:"100%",style:{borderRadius:"4px"}})]})})]})})})]})})})}},S={render:function(){const{t:n}=h(g);return e.jsx(H,{style:{height:"100vh",backgroundColor:"var(--wim-color-surface)",padding:"24px"},children:e.jsxs(t,{align:"center",gap:"5xl",style:{maxWidth:"600px",textAlign:"center"},children:[e.jsx("p",{"aria-hidden":"true",style:{fontSize:"120px",fontWeight:"900",color:"var(--wim-color-border-secondary)",lineHeight:"1",margin:"0"},children:"404"}),e.jsxs(t,{gap:"2xl",align:"center",children:[e.jsx(i,{tag:"h1",size:"xl",align:"center",children:n("error.title")}),e.jsx(r,{content:n("error.desc"),color:"gray",style:{textAlign:"center"}})]}),e.jsx(E,{intent:"info",title:n("error.help_title"),style:{textAlign:"left"},children:n("error.help_desc")}),e.jsxs(t,{direction:{base:"column",sm:"row"},gap:"xl",children:[e.jsx(a,{variant:"filled",label:n("error.btn_home")}),e.jsx(a,{variant:"outlined",label:n("error.btn_support")})]})]})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Center style={{
      height: "100vh",
      backgroundColor: "var(--wim-color-surface)"
    }}>
        <Card style={{
        width: "400px",
        padding: "32px",
        border: "1px solid",
        borderColor: "var(--wim-color-border-secondary)"
      }}>
          <Stack gap="xl">
            <Stack align="center" gap="md">
              <Heading tag="h2" size="xl" style={{
              lineHeight: 1
            }}>
                {t("login.title")}
              </Heading>
              <Paragraph content={t("login.subtitle")} color="deepgray" size="sm" />
            </Stack>

            <form onSubmit={e => e.preventDefault()}>
              <Stack gap="lg">
                <Label label={t("login.email")} htmlFor="login-email">
                  <Input id="login-email" placeholder={t("login.email_placeholder")} fullWidth />
                </Label>

                <Label label={t("login.password")} htmlFor="login-password">
                  <Input id="login-password" type="password" placeholder="••••••••" fullWidth />
                </Label>

                <Stack direction="row" justify="space-between" align="center">
                  <label htmlFor="remember-me" style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  color: "var(--wim-color-text-secondary)"
                }}>
                    <Checkbox id="remember-me" />
                    {t("login.remember_me")}
                  </label>
                  <Link href="#" style={{
                  fontSize: "0.875rem"
                }}>
                    {t("login.forgot_password")}
                  </Link>
                </Stack>

                <Stack gap="sm">
                  <Button variant="filled" style={{
                  width: "100%"
                }} label={t("login.sign_in")} />

                  <Button variant="outlined" style={{
                  width: "100%"
                }} onClick={() => {}} label={t("login.sign_in_google")} />
                </Stack>
              </Stack>
            </form>

            <Stack direction="row" justify="center" gap="2xs">
              <Paragraph content={t("login.no_account")} size="sm" color="gray" />
              <Link href="#" style={{
              fontSize: "0.875rem"
            }}>
                {t("login.sign_up")}
              </Link>
            </Stack>
          </Stack>
        </Card>
      </Center>;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      minHeight: "400px",
      backgroundColor: "var(--wim-color-surface)"
    }}>
        <style>{\`
                  @media (max-width: 768px) {
                      .desktop-only { display: none !important; }
                      .mobile-only { display: block !important; }
                      .header-search { width: 100% !important; max-width: 160px; }
                  }
                  @media (min-width: 769px) {
                      .mobile-only { display: none !important; }
                      .header-search { width: 240px; }
                  }
              \`}</style>
        <Header bordered sticky background="primary" style={{
        padding: "0 24px"
      }}>
          <Header.Section align="start" style={{
          gap: "16px",
          flex: 1,
          overflow: "hidden"
        }}>
            <button aria-label="Toggle Menu" className="mobile-only" style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            padding: "8px"
          }}>
              ☰
            </button>
            <Stack direction="row" align="center" gap="sm" style={{
            flexShrink: 0
          }}>
              <div style={{
              width: "32px",
              height: "32px",
              backgroundColor: "var(--wim-color-primary)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--wim-color-text-on-primary)",
              fontWeight: "bold"
            }}>
                W
              </div>
              <span style={{
              fontSize: "0.9rem",
              fontWeight: "bold",
              color: "var(--wim-color-text-primary)"
            }}>
                WIM UI
              </span>
            </Stack>

            <Stack as="nav" direction="row" gap="lg" className="desktop-only" style={{
            marginLeft: "32px"
          }}>
              <Link href="#" priority="secondary" style={{
              color: "inherit",
              textDecoration: "none"
            }}>
                {t("dashboard.header_dashboard")}
              </Link>
              <Link href="#" priority="secondary" style={{
              color: "inherit",
              textDecoration: "none"
            }}>
                {t("dashboard.header_projects")}
              </Link>
              <Link href="#" priority="secondary" style={{
              color: "inherit",
              textDecoration: "none"
            }}>
                {t("dashboard.header_team")}
              </Link>
              <Link href="#" priority="secondary" style={{
              color: "inherit",
              textDecoration: "none"
            }}>
                {t("dashboard.header_settings")}
              </Link>
            </Stack>
          </Header.Section>

          <Header.Section align="end" style={{
          gap: "16px",
          flexShrink: 0
        }}>
            <div className="header-search">
              <Input placeholder={t("dashboard.header_search_placeholder")} fullWidth leftIcon="SearchIcon" />
            </div>

            <Divider orientation="vertical" style={{
            height: "24px"
          }} />

            <div style={{
            position: "relative",
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }}>
              <Icon name="BellIcon" size="md" color="secondary" aria-label="Notifications" />
              <Badge intent="secondary" size="sm" content="3" style={{
              position: "absolute",
              top: "-4px",
              right: "-4px",
              minWidth: "16px",
              height: "16px",
              padding: 0
            }} />
            </div>

            <Stack direction="row" align="center" gap="sm" style={{
            cursor: "pointer"
          }}>
              <Avatar size="md" />
              <Stack gap="none" className="desktop-only">
                <span style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--wim-color-text-primary)"
              }}>
                  John Doe
                </span>
                <span style={{
                fontSize: "0.75rem",
                color: "var(--wim-color-text-secondary)"
              }}>
                  {t("dashboard.header_admin")}
                </span>
              </Stack>
            </Stack>
          </Header.Section>
        </Header>

        <Container style={{
        padding: "32px"
      }}>
          <Stack gap="xl">
            <Heading tag="h2" size="xl">
              {t("dashboard.overview_title")}
            </Heading>
            <Grid cols="repeat(auto-fit, minmax(280px, 1fr))" gap={24} justify="center">
              {[1, 2, 3].map(i => <Stats key={i} style={{
              border: "1px solid",
              borderColor: "var(--wim-color-border-secondary)"
            }}>
                  <Stack justify="space-between" align="center" direction="row">
                    <Stats.Label>{t("dashboard.stats_revenue")}</Stats.Label>
                    <Badge intent="neutral" content="+12.5%" size="sm" />
                  </Stack>
                  <Stats.Value>
                    <Heading tag="h3" size="xl" style={{
                  whiteSpace: "nowrap"
                }}>
                      $45,231.89
                    </Heading>
                  </Stats.Value>
                  <Stats.Description>{t("dashboard.stats_last_month")}</Stats.Description>
                </Stats>)}
            </Grid>
          </Stack>
        </Container>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Center style={{
      backgroundColor: "var(--wim-color-surface)",
      padding: "20px"
    }}>
        <Card style={{
        maxWidth: "1000px",
        width: "100%",
        padding: "0",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "var(--wim-color-border-secondary)"
      }}>
          <div style={{
          padding: "24px",
          borderBottom: "1px solid var(--wim-color-border-secondary)"
        }}>
            <Heading tag="h2" size="lg">
              {t("profile.title")}
            </Heading>
            <Paragraph content={t("profile.subtitle")} color="deepgray" style={{
            marginTop: "4px"
          }} />
          </div>

          <Grid cols={{
          base: 1,
          md: "250px 1fr"
        }} gap={0} style={{
          minHeight: "600px"
        }}>
            {/* Sidebar Navigation */}
            <div style={{
            borderRight: "1px solid var(--wim-color-border-secondary)",
            backgroundColor: "var(--wim-color-surface)"
          }}>
              <div style={{
              padding: "24px"
            }}>
                <Stack gap="sm" align="stretch">
                  <Sidebar.Item active>{t("profile.nav_general")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_security")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_notifications")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_billing")}</Sidebar.Item>
                </Stack>
              </div>
            </div>

            {/* Main Form Content */}
            <div style={{
            padding: "32px",
            overflowX: "hidden"
          }}>
              <form onSubmit={e => e.preventDefault()}>
                <Stack gap="xl">
                  {/* Profile Picture Section */}
                  <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  flexWrap: "wrap"
                }}>
                    <Avatar size="lg" style={{
                    width: "80px",
                    height: "80px",
                    fontSize: "2rem"
                  }} />
                    <Stack gap="xs">
                      <Heading tag="h3" size="sm">
                        {t("profile.pic_title")}
                      </Heading>
                      <div style={{
                      display: "flex",
                      gap: "12px"
                    }}>
                        <Button size="sm" variant="outlined" label={t("profile.btn_change")} />
                        <Button size="sm" variant="ghost" label={t("profile.btn_remove")} />
                      </div>
                    </Stack>
                  </div>

                  <Divider />

                  {/* Personal Information */}
                  <Stack gap="2xl">
                    <Heading tag="h3" size="md">
                      {t("profile.info_title")}
                    </Heading>

                    <Stack gap="lg">
                      <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "24px"
                    }}>
                        <Label label={t("profile.first_name")} htmlFor="profile-first-name">
                          <Input id="profile-first-name" defaultValue="John" fullWidth />
                        </Label>
                        <Label label={t("profile.last_name")} htmlFor="profile-last-name">
                          <Input id="profile-last-name" defaultValue="Doe" fullWidth />
                        </Label>
                      </div>

                      <Label label={t("profile.email")} htmlFor="profile-email">
                        <Input id="profile-email" type="email" defaultValue="john.doe@example.com" fullWidth />
                      </Label>

                      <Label label={t("profile.bio")} htmlFor="profile-bio">
                        <Textarea id="profile-bio" placeholder={t("profile.bio_placeholder")} rows={4} fullWidth defaultValue="I am a software engineer based in Tokyo." />
                        <Paragraph content={t("profile.bio_char_count")} size="xs" color="gray" style={{
                        textAlign: "right"
                      }} />
                      </Label>
                    </Stack>
                  </Stack>

                  <Divider />

                  {/* Regional Settings */}
                  <Stack gap="2xl">
                    <Heading tag="h3" size="md">
                      {t("profile.reg_title")}
                    </Heading>

                    <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "24px"
                  }}>
                      <Selectbox label={t("profile.lang_label")} options={[{
                      label: t("profile.lang_en"),
                      value: "en"
                    }, {
                      label: t("profile.lang_ja"),
                      value: "ja"
                    }, {
                      label: t("profile.lang_es"),
                      value: "es"
                    }]} defaultValue="en" />
                      <Selectbox label={t("profile.tz_label")} options={[{
                      label: "UTC",
                      value: "utc"
                    }, {
                      label: "JST (Japan Standard Time)",
                      value: "jst"
                    }, {
                      label: "EST (Eastern Standard Time)",
                      value: "est"
                    }]} defaultValue="jst" />
                    </div>
                  </Stack>

                  <Divider />

                  {/* Preferences */}
                  <Stack gap="2xl">
                    <Heading tag="h3" size="md">
                      {t("profile.pref_title")}
                    </Heading>

                    <Stack gap="lg">
                      <Label label={t("profile.visibility")}>
                        <RadioGroup name="visibility" defaultValue="public" options={[{
                        label: t("profile.visibility_public"),
                        value: "public"
                      }, {
                        label: t("profile.visibility_private"),
                        value: "private"
                      }, {
                        label: t("profile.visibility_friends"),
                        value: "friends"
                      }]} />
                      </Label>

                      <Label label={t("profile.notif_label")}>
                        <Stack gap="sm">
                          <Switch label={t("profile.notif_email")} defaultChecked />
                          <Switch label={t("profile.notif_push")} />
                        </Stack>
                      </Label>
                    </Stack>
                  </Stack>

                  <Divider />
                  <Group justify="end" gap="md">
                    <Button variant="ghost" label={t("profile.btn_cancel")} />
                    <Button variant="filled" label={t("profile.btn_save")} />
                  </Group>
                </Stack>
              </form>
            </div>
          </Grid>
        </Card>
      </Center>;
  }
}`,...u.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container style={{
      padding: "80px 24px",
      background: "#fff"
    }}>
        <Stack align="center" gap="lg" style={{
        marginBottom: "64px"
      }}>
          <Badge intent="primary" content={t("pricing.badge")} />
          <Stack align="center" gap="3xl">
            <Heading tag="h2" size="xl" align="center">
              {t("pricing.title")}
            </Heading>
            <Container size="sm">
              <Paragraph content={t("pricing.subtitle")} color="deepgray" style={{
              textAlign: "center"
            }} />
            </Container>
          </Stack>
        </Stack>

        <Grid cols={{
        base: 1,
        md: 3
      }} gap={{
        base: 32,
        lg: 48,
        xl: 64
      }} style={{
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
          <Card style={{
          padding: "32px",
          border: "2px solid",
          borderColor: "var(--wim-color-border-secondary)"
        }}>
            <Stack gap="lg" style={{
            height: "100%"
          }}>
              <Stack gap="lg" align="center" style={{
              flex: 1
            }}>
                <Stack gap="xs" align="center">
                  <div style={{
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}>
                    <Heading tag="h3" size="sm" align="center" style={{
                    margin: 0
                  }}>
                      {t("pricing.starter_title")}
                    </Heading>
                  </div>
                  <Stack direction="row" align="baseline" gap="none" justify="center" style={{
                  whiteSpace: "nowrap"
                }}>
                    <Heading tag="h4" size="2xl" style={{
                    whiteSpace: "nowrap"
                  }}>
                      $0
                    </Heading>
                    <Paragraph content={t("pricing.period")} color="gray" size="sm" style={{
                    whiteSpace: "nowrap"
                  }} />
                  </Stack>
                </Stack>
                <div style={{
                minHeight: "40px",
                display: "flex",
                alignItems: "center"
              }}>
                  <Paragraph content={t("pricing.starter_desc")} size="sm" color="deepgray" style={{
                  textAlign: "center",
                  margin: 0
                }} />
                </div>

                <List spacing="normal" style={{
                marginTop: "24px",
                alignSelf: "stretch"
              }}>
                  <ListItem iconName="CheckIcon">{t("pricing.starter_feat_1")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.starter_feat_2")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.starter_feat_3")}</ListItem>
                  <ListItem iconName="CheckIcon" className="wim-color-gray" style={{
                  opacity: 0.5
                }}>
                    {t("pricing.starter_feat_4")}
                  </ListItem>
                </List>
              </Stack>

              <Button variant="outlined" label={t("pricing.starter_btn")} style={{
              width: "100%"
            }} />
            </Stack>
          </Card>

          <Card style={{
          padding: "32px",
          border: "2px solid #3b82f6",
          position: "relative"
        }}>
            <div style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)"
          }}>
              <Badge intent="primary" content={t("pricing.pro_badge")} size="sm" />
            </div>
            <Stack gap="lg" style={{
            height: "100%"
          }}>
              <Stack gap="lg" align="center" style={{
              flex: 1
            }}>
                <Stack gap="xs" align="center">
                  <div style={{
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}>
                    <Heading tag="h3" size="sm" align="center" style={{
                    margin: 0
                  }}>
                      {t("pricing.pro_title")}
                    </Heading>
                  </div>
                  <Stack direction="row" align="baseline" gap="none" justify="center" style={{
                  whiteSpace: "nowrap"
                }}>
                    <Heading tag="h4" size="2xl" style={{
                    whiteSpace: "nowrap"
                  }}>
                      $29
                    </Heading>
                    <Paragraph content={t("pricing.period")} color="gray" size="sm" style={{
                    whiteSpace: "nowrap"
                  }} />
                  </Stack>
                </Stack>
                <div style={{
                minHeight: "40px",
                display: "flex",
                alignItems: "center"
              }}>
                  <Paragraph content={t("pricing.pro_desc")} size="sm" color="deepgray" style={{
                  textAlign: "center",
                  margin: 0
                }} />
                </div>

                <List spacing="normal" style={{
                marginTop: "24px",
                alignSelf: "stretch"
              }}>
                  <ListItem iconName="CheckIcon">{t("pricing.pro_feat_1")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.pro_feat_2")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.pro_feat_3")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.pro_feat_4")}</ListItem>
                </List>
              </Stack>

              <Button variant="filled" label={t("pricing.pro_btn")} style={{
              width: "100%"
            }} />
            </Stack>
          </Card>

          <Card style={{
          padding: "32px",
          border: "2px solid",
          borderColor: "var(--wim-color-border-secondary)"
        }}>
            <Stack gap="lg" style={{
            height: "100%"
          }}>
              <Stack gap="lg" align="center" style={{
              flex: 1
            }}>
                <Stack gap="xs" align="center">
                  <div style={{
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center"
                }}>
                    <Heading tag="h3" size="sm" align="center" style={{
                    margin: 0
                  }}>
                      {t("pricing.ent_title")}
                    </Heading>
                  </div>
                  <Stack direction="row" align="baseline" gap="none" justify="center" style={{
                  whiteSpace: "nowrap"
                }}>
                    <Heading tag="h4" size="2xl" style={{
                    whiteSpace: "nowrap"
                  }}>
                      $99
                    </Heading>
                    <Paragraph content={t("pricing.period")} color="gray" size="sm" style={{
                    whiteSpace: "nowrap"
                  }} />
                  </Stack>
                </Stack>
                <div style={{
                minHeight: "40px",
                display: "flex",
                alignItems: "center"
              }}>
                  <Paragraph content={t("pricing.ent_desc")} size="sm" color="deepgray" style={{
                  textAlign: "center",
                  margin: 0
                }} />
                </div>

                <List spacing="normal" style={{
                marginTop: "24px",
                alignSelf: "stretch"
              }}>
                  <ListItem iconName="CheckIcon">{t("pricing.ent_feat_1")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.ent_feat_2")}</ListItem>
                  <ListItem iconName="CheckIcon">{t("pricing.ent_feat_3")}</ListItem>
                </List>
              </Stack>

              <Button variant="outlined" label={t("pricing.ent_btn")} style={{
              width: "100%"
            }} />
            </Stack>
          </Card>
        </Grid>
      </Container>;
  }
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      minHeight: "600px",
      display: "flex",
      alignItems: "center",
      background: "linear-gradient(135deg, var(--wim-color-primary-light, #f0f7ff) 0%, var(--wim-color-surface) 100%)",
      padding: "80px 24px"
    }}>
        <Container>
          <Grid cols={{
          base: 1,
          md: "1fr 1fr"
        }} gap={48} align="center">
            <Stack gap="3xl">
              <Stack gap="3xl">
                <Badge intent="primary" content={t("hero.badge")} style={{
                width: "fit-content"
              }} />
                <Stack gap="2xl">
                  <Heading tag="h1" size="2xl" style={{
                  lineHeight: "1",
                  fontWeight: "800"
                }}>
                    {t("hero.title")}
                  </Heading>
                  <Paragraph content={t("hero.desc")} size="lg" color="deepgray" />
                </Stack>
              </Stack>

              <Group gap="xl" wrap="wrap" justify="evenly">
                <Button variant="filled" size="md" label={t("hero.btn_started")} />
                <Button variant="outlined" size="md" label={t("hero.btn_docs")} />
              </Group>

              <Stack direction="row" align="center" gap="md">
                <AvatarGroup size="sm">
                  {[1, 2, 3, 4].map(i => <Avatar key={i} />)}
                </AvatarGroup>
                <Paragraph content={t("hero.dev_count")} size="sm" color="deepgray" />
              </Stack>
            </Stack>

            <div style={{
            position: "relative"
          }}>
              <Card style={{
              padding: "0",
              borderRadius: "24px",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              overflow: "hidden"
            }}>
                <Stack gap="none">
                  <Stack direction="row" gap="xs" align="center" style={{
                  height: "32px",
                  background: "#f3f4f6",
                  borderBottom: "1px solid #e5e7eb",
                  padding: "0 12px"
                }}>
                    <div style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#ef4444"
                  }} />
                    <div style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#f59e0b"
                  }} />
                    <div style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#10b981"
                  }} />
                  </Stack>
                  <div style={{
                  padding: "24px"
                }}>
                    <Stack gap="lg">
                      <Skeleton variant="text" height={20} width="100%" />
                      <Skeleton variant="text" height={20} width="80%" />
                      <Grid cols={2} gap={16}>
                        <Skeleton variant="rect" height={100} style={{
                        borderRadius: "8px"
                      }} />
                        <Skeleton variant="rect" height={100} style={{
                        borderRadius: "8px"
                      }} />
                      </Grid>
                      <Skeleton variant="rect" height={80} width="100%" style={{
                      borderRadius: "4px"
                    }} />
                    </Stack>
                  </div>
                </Stack>
              </Card>
            </div>
          </Grid>
        </Container>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Center style={{
      height: "100vh",
      backgroundColor: "var(--wim-color-surface)",
      padding: "24px"
    }}>
        <Stack align="center" gap="5xl" style={{
        maxWidth: "600px",
        textAlign: "center"
      }}>
          <p aria-hidden="true" style={{
          fontSize: "120px",
          fontWeight: "900",
          color: "var(--wim-color-border-secondary)",
          lineHeight: "1",
          margin: "0"
        }}>
            404
          </p>
          <Stack gap="2xl" align="center">
            <Heading tag="h1" size="xl" align="center">
              {t("error.title")}
            </Heading>
            <Paragraph content={t("error.desc")} color="gray" style={{
            textAlign: "center"
          }} />
          </Stack>

          <Alert intent="info" title={t("error.help_title")} style={{
          textAlign: "left"
        }}>
            {t("error.help_desc")}
          </Alert>

          <Stack direction={{
          base: "column",
          sm: "row"
        }} gap="xl">
            <Button variant="filled" label={t("error.btn_home")} />
            <Button variant="outlined" label={t("error.btn_support")} />
          </Stack>
        </Stack>
      </Center>;
  }
}`,...S.parameters?.docs?.source}}};const V=["LoginForm","DashboardHeader","UserProfileForm","PricingTable","HeroSection","ErrorPage"],je=Object.freeze(Object.defineProperty({__proto__:null,DashboardHeader:b,ErrorPage:S,HeroSection:v,LoginForm:y,PricingTable:j,UserProfileForm:u,__namedExportsOrder:V,default:F},Symbol.toStringTag,{value:"Module"}));export{b as D,S as E,v as H,y as L,je as P,u as U,j as a};
