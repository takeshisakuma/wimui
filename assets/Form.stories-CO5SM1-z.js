"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{Ai as c,Bn as l,Ht as u,Nr as d,Pi as f,_t as p,gt as m,ht as h,mt as g,oi as _,t as v,wi as y,wn as b,yr as x}from"./src-BE5jBQ9L.js";import{i as S}from"./List-C4WUy_aA.js";import{t as C}from"./Card-eglN3578.js";import{t as w}from"./Button-d-SlSJ4S.js";import{a as T}from"./FieldTemplate-C0nkiaIz.js";import{t as E}from"./Text-B6DLYHMc.js";import{t as D}from"./Checkbox-C9bITARL.js";import{t as O}from"./Input-Bi6gYF1O.js";import{a as k,r as A}from"./QueryBuilder-BvfWrLHb.js";import{r as j,t as M}from"./PasswordStrength-Dpkg2Not.js";import{r as N}from"./Blockquote-BN18wCRL.js";import{t as P}from"./Title-BgOFD6Cx.js";var F,I,L,R,z,B,V,H,U,W,G;e((()=>{F=t(n(),1),o(),i(),v(),I=a(),L={title:`Patterns/Form`,parameters:{layout:`fullscreen`}},R={render:function(){let{t:e}=r(s);return(0,I.jsx)(f,{style:{height:`100vh`,backgroundColor:`var(--wim-color-surface-app)`},children:(0,I.jsx)(C,{variant:`outline`,padding:`xl`,style:{width:`100%`,maxWidth:`400px`},children:(0,I.jsxs)(S,{gap:`xl`,children:[(0,I.jsxs)(S,{align:`center`,gap:`md`,children:[(0,I.jsx)(P,{tag:`h2`,size:`xl`,align:`center`,style:{lineHeight:1},children:e(`login.title`)}),(0,I.jsx)(E,{content:e(`login.subtitle`),color:`text-secondary`,size:`sm`})]}),(0,I.jsx)(`form`,{onSubmit:e=>e.preventDefault(),children:(0,I.jsxs)(S,{gap:`lg`,children:[(0,I.jsx)(O,{id:`login-email`,label:e(`login.email`),placeholder:e(`login.email_placeholder`),fullWidth:!0}),(0,I.jsx)(O,{id:`login-password`,label:e(`login.password`),type:`password`,fullWidth:!0}),(0,I.jsxs)(S,{direction:`column`,gap:`sm`,align:`start`,children:[(0,I.jsx)(D,{id:`remember-me`,children:e(`login.remember_me`)}),(0,I.jsx)(N,{href:`#`,style:{fontSize:`var(--wim-font-size-sm)`},children:e(`login.forgot_password`)})]}),(0,I.jsxs)(S,{gap:`sm`,children:[(0,I.jsx)(w,{variant:`solid`,style:{width:`100%`},children:e(`login.sign_in`)}),(0,I.jsx)(w,{variant:`outline`,style:{width:`100%`},onClick:()=>{},children:e(`login.sign_in_google`)})]})]})}),(0,I.jsxs)(S,{direction:`row`,justify:`center`,gap:`2xs`,children:[(0,I.jsx)(E,{content:e(`login.no_account`),size:`sm`,color:`text-tertiary`}),(0,I.jsx)(N,{href:`#`,style:{fontSize:`var(--wim-font-size-sm)`},children:e(`login.sign_up`)})]})]})})})}},z={render:function(){let{t:e}=r(s),[t,n]=(0,F.useState)(``);return(0,I.jsx)(f,{style:{minHeight:`100vh`,backgroundColor:`var(--wim-color-surface-app)`,padding:`var(--wim-spacing-2xl)`},children:(0,I.jsx)(C,{variant:`outline`,padding:`xl`,style:{width:`100%`,maxWidth:`420px`},children:(0,I.jsxs)(S,{gap:`xl`,children:[(0,I.jsxs)(S,{align:`center`,gap:`sm`,children:[(0,I.jsx)(P,{tag:`h2`,size:`xl`,align:`center`,children:e(`signup.title`)}),(0,I.jsx)(E,{content:e(`signup.subtitle`),color:`text-secondary`,size:`sm`,style:{textAlign:`center`}})]}),(0,I.jsx)(`form`,{onSubmit:e=>e.preventDefault(),children:(0,I.jsxs)(S,{gap:`lg`,children:[(0,I.jsx)(O,{id:`signup-name`,label:e(`signup.name`),placeholder:e(`signup.name_placeholder`),fullWidth:!0}),(0,I.jsx)(O,{id:`signup-email`,label:e(`signup.email`),type:`email`,placeholder:e(`signup.email_placeholder`),fullWidth:!0}),(0,I.jsxs)(S,{gap:`xs`,children:[(0,I.jsx)(j,{id:`signup-password`,label:e(`signup.password`),fullWidth:!0,value:t,onChange:e=>n(e.target.value)}),t&&(0,I.jsx)(M,{score:(e=>{if(!e)return 0;let t=0;return e.length>8&&t++,/[A-Z]/.test(e)&&t++,/[0-9]/.test(e)&&t++,/[^A-Za-z0-9]/.test(e)&&t++,t})(t),showLabel:!0})]}),(0,I.jsx)(O,{id:`signup-confirm`,label:e(`signup.confirm_password`),type:`password`,fullWidth:!0}),(0,I.jsx)(D,{id:`signup-terms`,children:e(`signup.terms`)}),(0,I.jsx)(w,{variant:`solid`,style:{width:`100%`},children:e(`signup.btn`)})]})}),(0,I.jsxs)(S,{direction:`row`,justify:`center`,gap:`2xs`,children:[(0,I.jsx)(E,{content:e(`signup.have_account`),size:`sm`,color:`text-tertiary`}),(0,I.jsx)(N,{href:`#`,style:{fontSize:`var(--wim-font-size-sm)`},children:e(`signup.sign_in`)})]})]})})})}},B=`(min-width: 560px)`,V={render:function(){let{t:e}=r(s),[t,n]=(0,F.useState)(0),[i,a]=(0,F.useState)(()=>typeof window<`u`&&window.matchMedia(B).matches);F.useEffect(()=>{let e=window.matchMedia(B),t=e=>a(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]);let o=[{title:e(`multistep.step_account`)},{title:e(`multistep.step_profile`)},{title:e(`multistep.step_review`)}],c={email:`john@example.com`,name:`Priya Nair`,company:`Acme Inc.`,role:`Developer`};return(0,I.jsx)(f,{style:{minHeight:`100vh`,backgroundColor:`var(--wim-color-surface-app)`,padding:`var(--wim-spacing-2xl)`},children:(0,I.jsx)(C,{variant:`outline`,padding:`xl`,style:{width:`100%`,maxWidth:`560px`},children:(0,I.jsxs)(S,{gap:`3xl`,children:[(0,I.jsx)(P,{tag:`h2`,size:`lg`,align:`center`,children:e(`multistep.title`)}),(0,I.jsx)(u,{steps:o,current:t,direction:i?`horizontal`:`vertical`}),(0,I.jsxs)(`form`,{onSubmit:e=>e.preventDefault(),children:[t===0&&(0,I.jsxs)(S,{gap:`lg`,children:[(0,I.jsx)(O,{id:`ms-email`,label:e(`multistep.email`),type:`email`,defaultValue:c.email,fullWidth:!0}),(0,I.jsx)(O,{id:`ms-password`,label:e(`multistep.password`),type:`password`,defaultValue:`••••••••`,fullWidth:!0})]}),t===1&&(0,I.jsxs)(S,{gap:`lg`,children:[(0,I.jsx)(O,{id:`ms-name`,label:e(`multistep.display_name`),defaultValue:c.name,fullWidth:!0}),(0,I.jsx)(O,{id:`ms-company`,label:e(`multistep.company`),defaultValue:c.company,fullWidth:!0}),(0,I.jsx)(O,{id:`ms-role`,label:e(`multistep.role`),defaultValue:c.role,fullWidth:!0})]}),t===2&&(0,I.jsxs)(S,{gap:`lg`,children:[(0,I.jsx)(P,{tag:`h3`,size:`sm`,children:e(`multistep.review_title`)}),(0,I.jsxs)(g,{children:[(0,I.jsxs)(m,{children:[(0,I.jsx)(p,{children:e(`multistep.review_email`)}),(0,I.jsx)(h,{children:c.email})]}),(0,I.jsxs)(m,{children:[(0,I.jsx)(p,{children:e(`multistep.review_name`)}),(0,I.jsx)(h,{children:c.name})]}),(0,I.jsxs)(m,{children:[(0,I.jsx)(p,{children:e(`multistep.review_company`)}),(0,I.jsx)(h,{children:c.company})]}),(0,I.jsxs)(m,{children:[(0,I.jsx)(p,{children:e(`multistep.review_role`)}),(0,I.jsx)(h,{children:c.role})]})]})]})]}),(0,I.jsxs)(y,{justify:`between`,children:[(0,I.jsx)(w,{variant:`outline`,onClick:()=>n(Math.max(0,t-1)),disabled:t===0,children:e(`multistep.btn_back`)}),t<2?(0,I.jsx)(w,{variant:`solid`,onClick:()=>n(t+1),children:e(`multistep.btn_next`)}):(0,I.jsx)(w,{variant:`solid`,children:e(`multistep.btn_submit`)})]})]})})})}},H={render:function(){let{t:e}=r(s),t=[{title:e(`welcome.step_1_title`),description:e(`welcome.step_1_desc`),intent:`wait`},{title:e(`welcome.step_2_title`),description:e(`welcome.step_2_desc`),intent:`wait`},{title:e(`welcome.step_3_title`),description:e(`welcome.step_3_desc`),intent:`wait`}];return(0,I.jsx)(f,{style:{minHeight:`100vh`,backgroundColor:`var(--wim-color-surface-app)`,padding:`var(--wim-spacing-2xl)`},children:(0,I.jsx)(C,{variant:`outline`,padding:`3xl`,style:{width:`100%`,maxWidth:`600px`},children:(0,I.jsxs)(S,{gap:`3xl`,align:`center`,children:[(0,I.jsx)(`div`,{style:{width:`64px`,height:`64px`,borderRadius:`var(--wim-radius-xl)`,background:`var(--wim-color-primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--wim-color-text-on-primary)`,fontWeight:`bold`,fontSize:`1.5rem`},children:`W`}),(0,I.jsxs)(S,{gap:`md`,align:`center`,children:[(0,I.jsx)(P,{tag:`h1`,size:`xl`,align:`center`,children:e(`welcome.title`)}),(0,I.jsx)(E,{content:e(`welcome.subtitle`),color:`text-secondary`,style:{textAlign:`center`}})]}),(0,I.jsx)(c,{style:{width:`100%`}}),(0,I.jsx)(u,{steps:t,direction:`vertical`,ariaLabel:e(`welcome.title`),className:`wim-welcome-steps`}),(0,I.jsxs)(y,{gap:`md`,children:[(0,I.jsx)(w,{variant:`solid`,size:`lg`,children:e(`welcome.btn_start`)}),(0,I.jsx)(w,{variant:`outline`,size:`lg`,children:e(`welcome.btn_tour`)})]})]})})})}},U={render:function(){let{t:e}=r(s),[t,n]=(0,F.useState)([!0,!1,!1,!1,!1]),i=t.filter(Boolean).length,a=t.length,o=[e(`checklist.item_1`),e(`checklist.item_2`),e(`checklist.item_3`),e(`checklist.item_4`),e(`checklist.item_5`)];return(0,I.jsx)(f,{style:{minHeight:`100vh`,backgroundColor:`var(--wim-color-surface-app)`,padding:`var(--wim-spacing-2xl)`},children:(0,I.jsx)(C,{variant:`outline`,padding:`xl`,style:{width:`100%`,maxWidth:`500px`},children:(0,I.jsxs)(S,{gap:`2xl`,children:[(0,I.jsxs)(S,{gap:`sm`,children:[(0,I.jsx)(P,{tag:`h2`,size:`lg`,children:e(`checklist.title`)}),(0,I.jsx)(E,{content:e(`checklist.subtitle`),color:`text-secondary`,size:`sm`})]}),(0,I.jsxs)(S,{gap:`md`,children:[(0,I.jsxs)(S,{direction:`row`,justify:`space-between`,align:`center`,children:[(0,I.jsx)(E,{content:`${i} / ${a}`,size:`sm`,color:`text-secondary`}),(0,I.jsx)(E,{content:`${Math.round(i/a*100)}%`,size:`sm`,style:{fontWeight:600}})]}),(0,I.jsx)(b,{value:i/a*100,intent:i===a?`success`:`primary`,"aria-label":e(`checklist.title`)})]}),(0,I.jsx)(S,{gap:`sm`,children:o.map((e,r)=>(0,I.jsx)(`div`,{style:{padding:`var(--wim-spacing-md) var(--wim-spacing-lg)`,borderRadius:`var(--wim-radius-lg)`,background:t[r]?`var(--wim-color-surface-variant)`:`transparent`,border:`1px solid var(--wim-color-border-secondary)`,transition:`background 0.2s`},children:(0,I.jsx)(D,{id:`task-${r}`,checked:t[r],onChange:e=>{let i=[...t];i[r]=e.target.checked,n(i)},children:(0,I.jsx)(`span`,{style:{textDecoration:t[r]?`line-through`:`none`,color:t[r]?`var(--wim-color-text-tertiary)`:`inherit`},children:e})})},r))}),i===a&&(0,I.jsx)(l,{intent:`success`,title:e(`checklist.btn_view`)})]})})})}},W={render:function(){let{t:e}=r(s);return(0,I.jsx)(f,{style:{backgroundColor:`var(--wim-color-surface-app)`,padding:`var(--wim-spacing-xl)`},children:(0,I.jsxs)(C,{padding:`none`,style:{maxWidth:`1000px`,width:`100%`,overflow:`hidden`},children:[(0,I.jsxs)(`div`,{style:{padding:`var(--wim-spacing-xl)`,borderBottom:`1px solid var(--wim-color-border-secondary)`},children:[(0,I.jsx)(P,{tag:`h2`,size:`lg`,children:e(`profile.title`)}),(0,I.jsx)(E,{content:e(`profile.subtitle`),color:`text-secondary`,style:{marginTop:`var(--wim-spacing-xs)`}})]}),(0,I.jsx)(`style`,{children:`
            .wim-profile-layout {
              display: flex;
              flex-wrap: wrap;
              min-height: 600px;
              container-type: inline-size;
            }
            .wim-profile-sidebar {
              flex: 0 0 250px;
              background-color: var(--wim-color-surface);
              border-right: 1px solid var(--wim-color-border-secondary);
            }
            .wim-profile-content {
              flex: 1 1 350px;
              min-width: 0;
              background-color: var(--wim-color-surface);
            }
            @container (max-width: 599px) {
              .wim-profile-sidebar {
                flex-basis: 100%;
                border-right: none;
                border-bottom: 1px solid var(--wim-color-border-secondary);
              }
              .wim-profile-content {
                flex-basis: 100%;
              }
            }
          `}),(0,I.jsxs)(`div`,{className:`wim-profile-layout`,children:[(0,I.jsx)(`div`,{className:`wim-profile-sidebar`,children:(0,I.jsx)(`div`,{style:{padding:`var(--wim-spacing-xl)`},children:(0,I.jsxs)(S,{gap:`sm`,align:`stretch`,children:[(0,I.jsx)(_.Item,{active:!0,children:e(`profile.nav_general`)}),(0,I.jsx)(_.Item,{children:e(`profile.nav_security`)}),(0,I.jsx)(_.Item,{children:e(`profile.nav_notifications`)}),(0,I.jsx)(_.Item,{children:e(`profile.nav_billing`)})]})})}),(0,I.jsx)(`div`,{className:`wim-profile-content`,style:{padding:`var(--wim-spacing-4xl)`,overflowX:`hidden`},children:(0,I.jsx)(`form`,{onSubmit:e=>e.preventDefault(),children:(0,I.jsxs)(S,{gap:`xl`,children:[(0,I.jsxs)(S,{gap:`2xl`,children:[(0,I.jsx)(P,{tag:`h3`,size:`md`,children:e(`profile.info_title`)}),(0,I.jsxs)(S,{gap:`lg`,children:[(0,I.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:`var(--wim-spacing-xl)`},children:[(0,I.jsx)(O,{id:`profile-first-name`,label:e(`profile.first_name`),defaultValue:`John`,fullWidth:!0}),(0,I.jsx)(O,{id:`profile-last-name`,label:e(`profile.last_name`),defaultValue:`Doe`,fullWidth:!0})]}),(0,I.jsx)(O,{id:`profile-email`,label:e(`profile.email`),type:`email`,defaultValue:`john.doe@example.com`,fullWidth:!0}),(0,I.jsx)(d,{id:`profile-bio`,label:e(`profile.bio`),placeholder:e(`profile.bio_placeholder`),rows:4,fullWidth:!0,defaultValue:`I am a software engineer based in Tokyo.`})]})]}),(0,I.jsx)(c,{}),(0,I.jsxs)(S,{gap:`2xl`,children:[(0,I.jsx)(P,{tag:`h3`,size:`md`,children:e(`profile.reg_title`)}),(0,I.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:`var(--wim-spacing-xl)`},children:[(0,I.jsx)(k,{label:e(`profile.lang_label`),options:[{label:e(`profile.lang_en`),value:`en`},{label:e(`profile.lang_ja`),value:`ja`},{label:e(`profile.lang_es`),value:`es`}],defaultValue:`en`}),(0,I.jsx)(k,{label:e(`profile.tz_label`),options:[{label:`UTC`,value:`utc`},{label:e(`signup.tz_jst`),value:`jst`},{label:e(`signup.tz_est`),value:`est`}],defaultValue:`jst`})]})]}),(0,I.jsx)(c,{}),(0,I.jsxs)(S,{gap:`2xl`,children:[(0,I.jsx)(P,{tag:`h3`,size:`md`,children:e(`profile.pref_title`)}),(0,I.jsxs)(S,{gap:`lg`,children:[(0,I.jsx)(x,{name:`visibility`,label:e(`profile.visibility`),defaultValue:`public`,options:[{label:e(`profile.visibility_public`),value:`public`},{label:e(`profile.visibility_private`),value:`private`},{label:e(`profile.visibility_friends`),value:`friends`}]}),(0,I.jsx)(T,{label:e(`profile.notif_label`),children:(0,I.jsxs)(S,{gap:`sm`,children:[(0,I.jsx)(A,{defaultChecked:!0,children:e(`profile.notif_email`)}),(0,I.jsx)(A,{children:e(`profile.notif_push`)})]})})]})]}),(0,I.jsx)(c,{}),(0,I.jsxs)(y,{justify:`end`,gap:`md`,children:[(0,I.jsx)(w,{variant:`ghost`,children:e(`profile.btn_cancel`)}),(0,I.jsx)(w,{variant:`solid`,children:e(`profile.btn_save`)})]})]})})})]})]})})}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Center style={{
      height: "100vh",
      backgroundColor: "var(--wim-color-surface-app)"
    }}>
        <Card variant="outline" padding="xl" style={{
        width: "100%",
        maxWidth: "400px"
      }}>
          <Stack gap="xl">
            <Stack align="center" gap="md">
              <Title tag="h2" size="xl" align="center" style={{
              lineHeight: 1
            }}>
                {t("login.title")}
              </Title>
              <Text content={t("login.subtitle")} color="text-secondary" size="sm" />
            </Stack>

            <form onSubmit={e => e.preventDefault()}>
              <Stack gap="lg">
                <Input id="login-email" label={t("login.email")} placeholder={t("login.email_placeholder")} fullWidth />
                <Input id="login-password" label={t("login.password")} type="password" fullWidth />
                <Stack direction="column" gap="sm" align="start">
                  <Checkbox id="remember-me">{t("login.remember_me")}</Checkbox>
                  <Link href="#" style={{
                  fontSize: "var(--wim-font-size-sm)"
                }}>
                    {t("login.forgot_password")}
                  </Link>
                </Stack>
                <Stack gap="sm">
                  <Button variant="solid" style={{
                  width: "100%"
                }}>
                    {t("login.sign_in")}
                  </Button>
                  <Button variant="outline" style={{
                  width: "100%"
                }} onClick={() => {}}>
                    {t("login.sign_in_google")}
                  </Button>
                </Stack>
              </Stack>
            </form>

            <Stack direction="row" justify="center" gap="2xs">
              <Text content={t("login.no_account")} size="sm" color="text-tertiary" />
              <Link href="#" style={{
              fontSize: "var(--wim-font-size-sm)"
            }}>
                {t("login.sign_up")}
              </Link>
            </Stack>
          </Stack>
        </Card>
      </Center>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [password, setPassword] = useState("");
    const calculateScore = (pwd: string): 0 | 1 | 2 | 3 | 4 => {
      if (!pwd) return 0;
      let s = 0;
      if (pwd.length > 8) s++;
      if (/[A-Z]/.test(pwd)) s++;
      if (/[0-9]/.test(pwd)) s++;
      if (/[^A-Za-z0-9]/.test(pwd)) s++;
      return s as 0 | 1 | 2 | 3 | 4;
    };
    return <Center style={{
      minHeight: "100vh",
      backgroundColor: "var(--wim-color-surface-app)",
      padding: "var(--wim-spacing-2xl)"
    }}>
        <Card variant="outline" padding="xl" style={{
        width: "100%",
        maxWidth: "420px"
      }}>
          <Stack gap="xl">
            <Stack align="center" gap="sm">
              <Title tag="h2" size="xl" align="center">
                {t("signup.title")}
              </Title>
              <Text content={t("signup.subtitle")} color="text-secondary" size="sm" style={{
              textAlign: "center"
            }} />
            </Stack>

            <form onSubmit={e => e.preventDefault()}>
              <Stack gap="lg">
                <Input id="signup-name" label={t("signup.name")} placeholder={t("signup.name_placeholder")} fullWidth />
                <Input id="signup-email" label={t("signup.email")} type="email" placeholder={t("signup.email_placeholder")} fullWidth />
                <Stack gap="xs">
                  <PasswordInput id="signup-password" label={t("signup.password")} fullWidth value={password} onChange={e => setPassword(e.target.value)} />
                  {password && <PasswordStrength score={calculateScore(password)} showLabel />}
                </Stack>
                <Input id="signup-confirm" label={t("signup.confirm_password")} type="password" fullWidth />
                <Checkbox id="signup-terms">{t("signup.terms")}</Checkbox>
                <Button variant="solid" style={{
                width: "100%"
              }}>
                  {t("signup.btn")}
                </Button>
              </Stack>
            </form>

            <Stack direction="row" justify="center" gap="2xs">
              <Text content={t("signup.have_account")} size="sm" color="text-tertiary" />
              <Link href="#" style={{
              fontSize: "var(--wim-font-size-sm)"
            }}>
                {t("signup.sign_in")}
              </Link>
            </Stack>
          </Stack>
        </Card>
      </Center>;
  }
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [step, setStep] = useState(0);
    const [isWide, setIsWide] = useState(() => typeof window !== "undefined" && window.matchMedia(WIDE).matches);
    React.useEffect(() => {
      const mq = window.matchMedia(WIDE);
      const handler = (e: MediaQueryListEvent) => setIsWide(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }, []);
    const steps = [{
      title: t("multistep.step_account")
    }, {
      title: t("multistep.step_profile")
    }, {
      title: t("multistep.step_review")
    }];
    const formData = {
      email: "john@example.com",
      name: "Priya Nair",
      company: "Acme Inc.",
      role: "Developer"
    };
    return <Center style={{
      minHeight: "100vh",
      backgroundColor: "var(--wim-color-surface-app)",
      padding: "var(--wim-spacing-2xl)"
    }}>
        <Card variant="outline" padding="xl" style={{
        width: "100%",
        maxWidth: "560px"
      }}>
          <Stack gap="3xl">
            <Title tag="h2" size="lg" align="center">
              {t("multistep.title")}
            </Title>

            <Stepper steps={steps} current={step} direction={isWide ? "horizontal" : "vertical"} />

            <form onSubmit={e => e.preventDefault()}>
              {step === 0 && <Stack gap="lg">
                  <Input id="ms-email" label={t("multistep.email")} type="email" defaultValue={formData.email} fullWidth />
                  <Input id="ms-password" label={t("multistep.password")} type="password" defaultValue="••••••••" fullWidth />
                </Stack>}

              {step === 1 && <Stack gap="lg">
                  <Input id="ms-name" label={t("multistep.display_name")} defaultValue={formData.name} fullWidth />
                  <Input id="ms-company" label={t("multistep.company")} defaultValue={formData.company} fullWidth />
                  <Input id="ms-role" label={t("multistep.role")} defaultValue={formData.role} fullWidth />
                </Stack>}

              {step === 2 && <Stack gap="lg">
                  <Title tag="h3" size="sm">
                    {t("multistep.review_title")}
                  </Title>
                  <DescriptionList>
                    <DescriptionListItem>
                      <DescriptionListTerm>{t("multistep.review_email")}</DescriptionListTerm>
                      <DescriptionListDetails>{formData.email}</DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>{t("multistep.review_name")}</DescriptionListTerm>
                      <DescriptionListDetails>{formData.name}</DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>{t("multistep.review_company")}</DescriptionListTerm>
                      <DescriptionListDetails>{formData.company}</DescriptionListDetails>
                    </DescriptionListItem>
                    <DescriptionListItem>
                      <DescriptionListTerm>{t("multistep.review_role")}</DescriptionListTerm>
                      <DescriptionListDetails>{formData.role}</DescriptionListDetails>
                    </DescriptionListItem>
                  </DescriptionList>
                </Stack>}
            </form>

            <Group justify="between">
              <Button variant="outline" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
                {t("multistep.btn_back")}
              </Button>
              {step < 2 ? <Button variant="solid" onClick={() => setStep(step + 1)}>
                  {t("multistep.btn_next")}
                </Button> : <Button variant="solid">{t("multistep.btn_submit")}</Button>}
            </Group>
          </Stack>
        </Card>
      </Center>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    // 番号つきの手順は \`Stepper\` が描く。以前はここで素の <div> に
    // \`--wim-color-primary-muted\` + \`--wim-color-primary\` を直書きして
    // 「薄い面＋濃い同色文字」を手で再現していたが、それだとトークンや
    // バリアントを変えてもこの画面には届かない（T52）。
    // どれも「これからやること」なので全部 \`wait\`（進行中の 1 件を作らない）。
    const steps = [{
      title: t("welcome.step_1_title"),
      description: t("welcome.step_1_desc"),
      intent: "wait" as const
    }, {
      title: t("welcome.step_2_title"),
      description: t("welcome.step_2_desc"),
      intent: "wait" as const
    }, {
      title: t("welcome.step_3_title"),
      description: t("welcome.step_3_desc"),
      intent: "wait" as const
    }];
    return <Center style={{
      minHeight: "100vh",
      backgroundColor: "var(--wim-color-surface-app)",
      padding: "var(--wim-spacing-2xl)"
    }}>
        <Card variant="outline" padding="3xl" style={{
        width: "100%",
        maxWidth: "600px"
      }}>
          <Stack gap="3xl" align="center">
            <div style={{
            width: "64px",
            height: "64px",
            borderRadius: "var(--wim-radius-xl)",
            // intent-surface-ok: アプリのロゴマーク。ブランドの面であって
            // intent（状態）の面ではない。デザインシステムに「ロゴ」部品は無い。
            background: "var(--wim-color-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--wim-color-text-on-primary)",
            fontWeight: "bold",
            fontSize: "1.5rem"
          }}>
              W
            </div>

            <Stack gap="md" align="center">
              <Title tag="h1" size="xl" align="center">
                {t("welcome.title")}
              </Title>
              <Text content={t("welcome.subtitle")} color="text-secondary" style={{
              textAlign: "center"
            }} />
            </Stack>

            <Divider style={{
            width: "100%"
          }} />

            <Stepper steps={steps} direction="vertical" ariaLabel={t("welcome.title")} className="wim-welcome-steps" />

            <Group gap="md">
              <Button variant="solid" size="lg">
                {t("welcome.btn_start")}
              </Button>
              <Button variant="outline" size="lg">
                {t("welcome.btn_tour")}
              </Button>
            </Group>
          </Stack>
        </Card>
      </Center>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [checked, setChecked] = useState([true, false, false, false, false]);
    const completedCount = checked.filter(Boolean).length;
    const total = checked.length;
    const items = [t("checklist.item_1"), t("checklist.item_2"), t("checklist.item_3"), t("checklist.item_4"), t("checklist.item_5")];
    return <Center style={{
      minHeight: "100vh",
      backgroundColor: "var(--wim-color-surface-app)",
      padding: "var(--wim-spacing-2xl)"
    }}>
        <Card variant="outline" padding="xl" style={{
        width: "100%",
        maxWidth: "500px"
      }}>
          <Stack gap="2xl">
            <Stack gap="sm">
              <Title tag="h2" size="lg">
                {t("checklist.title")}
              </Title>
              <Text content={t("checklist.subtitle")} color="text-secondary" size="sm" />
            </Stack>

            <Stack gap="md">
              <Stack direction="row" justify="space-between" align="center">
                <Text content={\`\${completedCount} / \${total}\`} size="sm" color="text-secondary" />
                <Text content={\`\${Math.round(completedCount / total * 100)}%\`} size="sm" style={{
                fontWeight: 600
              }} />
              </Stack>
              <Progress value={completedCount / total * 100} intent={completedCount === total ? "success" : "primary"} aria-label={t("checklist.title")} />
            </Stack>

            <Stack gap="sm">
              {items.map((item, i) => <div key={i} style={{
              padding: "var(--wim-spacing-md) var(--wim-spacing-lg)",
              borderRadius: "var(--wim-radius-lg)",
              background: checked[i] ? "var(--wim-color-surface-variant)" : "transparent",
              border: "1px solid var(--wim-color-border-secondary)",
              transition: "background 0.2s"
            }}>
                  <Checkbox id={\`task-\${i}\`} checked={checked[i]} onChange={e => {
                const next = [...checked];
                next[i] = e.target.checked;
                setChecked(next);
              }}>
                    <span style={{
                  textDecoration: checked[i] ? "line-through" : "none",
                  // text-disabled は surface-variant 上で AA を割るため tertiary
                  color: checked[i] ? "var(--wim-color-text-tertiary)" : "inherit"
                }}>
                      {item}
                    </span>
                  </Checkbox>
                </div>)}
            </Stack>

            {completedCount === total && <Alert intent="success" title={t("checklist.btn_view")} />}
          </Stack>
        </Card>
      </Center>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Center style={{
      backgroundColor: "var(--wim-color-surface-app)",
      padding: "var(--wim-spacing-xl)"
    }}>
        <Card padding="none" style={{
        maxWidth: "1000px",
        width: "100%",
        overflow: "hidden"
      }}>
          <div style={{
          padding: "var(--wim-spacing-xl)",
          borderBottom: "1px solid var(--wim-color-border-secondary)"
        }}>
            <Title tag="h2" size="lg">
              {t("profile.title")}
            </Title>
            <Text content={t("profile.subtitle")} color="text-secondary" style={{
            marginTop: "var(--wim-spacing-xs)"
          }} />
          </div>

          <style>{\`
            .wim-profile-layout {
              display: flex;
              flex-wrap: wrap;
              min-height: 600px;
              container-type: inline-size;
            }
            .wim-profile-sidebar {
              flex: 0 0 250px;
              background-color: var(--wim-color-surface);
              border-right: 1px solid var(--wim-color-border-secondary);
            }
            .wim-profile-content {
              flex: 1 1 350px;
              min-width: 0;
              background-color: var(--wim-color-surface);
            }
            @container (max-width: 599px) {
              .wim-profile-sidebar {
                flex-basis: 100%;
                border-right: none;
                border-bottom: 1px solid var(--wim-color-border-secondary);
              }
              .wim-profile-content {
                flex-basis: 100%;
              }
            }
          \`}</style>
          <div className="wim-profile-layout">
            <div className="wim-profile-sidebar">
              <div style={{
              padding: "var(--wim-spacing-xl)"
            }}>
                <Stack gap="sm" align="stretch">
                  <Sidebar.Item active>{t("profile.nav_general")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_security")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_notifications")}</Sidebar.Item>
                  <Sidebar.Item>{t("profile.nav_billing")}</Sidebar.Item>
                </Stack>
              </div>
            </div>

            <div className="wim-profile-content" style={{
            padding: "var(--wim-spacing-4xl)",
            overflowX: "hidden"
          }}>
              <form onSubmit={e => e.preventDefault()}>
                <Stack gap="xl">
                  <Stack gap="2xl">
                    <Title tag="h3" size="md">
                      {t("profile.info_title")}
                    </Title>
                    <Stack gap="lg">
                      <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "var(--wim-spacing-xl)"
                    }}>
                        <Input id="profile-first-name" label={t("profile.first_name")} defaultValue="John" fullWidth />
                        <Input id="profile-last-name" label={t("profile.last_name")} defaultValue="Doe" fullWidth />
                      </div>
                      <Input id="profile-email" label={t("profile.email")} type="email" defaultValue="john.doe@example.com" fullWidth />
                      <Textarea id="profile-bio" label={t("profile.bio")} placeholder={t("profile.bio_placeholder")} rows={4} fullWidth defaultValue="I am a software engineer based in Tokyo." />
                    </Stack>
                  </Stack>

                  <Divider />

                  <Stack gap="2xl">
                    <Title tag="h3" size="md">
                      {t("profile.reg_title")}
                    </Title>
                    <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "var(--wim-spacing-xl)"
                  }}>
                      <Select label={t("profile.lang_label")} options={[{
                      label: t("profile.lang_en"),
                      value: "en"
                    }, {
                      label: t("profile.lang_ja"),
                      value: "ja"
                    }, {
                      label: t("profile.lang_es"),
                      value: "es"
                    }]} defaultValue="en" />
                      <Select label={t("profile.tz_label")} options={[{
                      label: "UTC",
                      value: "utc"
                    }, {
                      label: t("signup.tz_jst"),
                      value: "jst"
                    }, {
                      label: t("signup.tz_est"),
                      value: "est"
                    }]} defaultValue="jst" />
                    </div>
                  </Stack>

                  <Divider />

                  <Stack gap="2xl">
                    <Title tag="h3" size="md">
                      {t("profile.pref_title")}
                    </Title>
                    <Stack gap="lg">
                      <RadioGroup name="visibility" label={t("profile.visibility")} defaultValue="public" options={[{
                      label: t("profile.visibility_public"),
                      value: "public"
                    }, {
                      label: t("profile.visibility_private"),
                      value: "private"
                    }, {
                      label: t("profile.visibility_friends"),
                      value: "friends"
                    }]} />
                      <Label label={t("profile.notif_label")}>
                        <Stack gap="sm">
                          <Switch defaultChecked>
                            {t("profile.notif_email")}
                          </Switch>
                          <Switch>{t("profile.notif_push")}</Switch>
                        </Stack>
                      </Label>
                    </Stack>
                  </Stack>

                  <Divider />
                  <Group justify="end" gap="md">
                    <Button variant="ghost">{t("profile.btn_cancel")}</Button>
                    <Button variant="solid">{t("profile.btn_save")}</Button>
                  </Group>
                </Stack>
              </form>
            </div>
          </div>
        </Card>
      </Center>;
  }
}`,...W.parameters?.docs?.source}}},G=[`LoginForm`,`SignupForm`,`MultiStepForm`,`WelcomeScreen`,`ProgressChecklist`,`UserProfileForm`]}))();export{R as LoginForm,V as MultiStepForm,U as ProgressChecklist,z as SignupForm,W as UserProfileForm,H as WelcomeScreen,G as __namedExportsOrder,L as default};