import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as d}from"./Input-Cj3_iNBM.js";import{B as a}from"./Button-C6Nkaurv.js";import{C as c}from"./Card-BBPzuYGl.js";import{C as N}from"./Checkbox-DIk661eQ.js";import{L as o}from"./Link-l56rhT1E.js";import{H as r}from"./Heading-BOvTyIA_.js";import{S as n}from"./Stack-PgYpaCcw.js";import{C}from"./Center-h5K9Qq7b.js";import{C as k}from"./Container-OHiSsUTc.js";import{H as w}from"./Header-BkTjAyP1.js";import{A as z}from"./Avatar-DtU3XUE6.js";import{A}from"./AvatarGroup-BwvmxTGY.js";import{B as b}from"./Badge-_mG9CqJt.js";import{D as g}from"./Divider-Ct1xqqsB.js";import{S as L}from"./Selectbox-pfWUbEVA.js";import{R as T}from"./RadioGroup-D2tfAMXN.js";import{T as W}from"./Textarea-DafZefUI.js";import{S as H}from"./Switch-Cx_QI_3H.js";import{G as j}from"./Grid-Cw-3dSFu.js";import{P as t}from"./Paragraph-BZuVEvAX.js";import{A as B}from"./Alert-CqXM_20h.js";import{I as R}from"./Icon-T089OD9E.js";import{L as l}from"./Label-iJoCPZEQ.js";import{S}from"./Stats-IlDQZso-.js";import{L as I,a as i}from"./List-ChwCXFr_.js";import{S as v}from"./Sidebar-BMBYMNzE.js";import{S as p}from"./Skeleton-BDnv5QeC.js";import{G as P}from"./Group-TNOe3Az3.js";const D={title:"Patterns/Recipes",parameters:{layout:"fullscreen"}},m={render:()=>e.jsx(C,{style:{height:"100vh",background:"var(--bg-app)"},children:e.jsx(c,{style:{width:"400px",padding:"32px",border:"1px solid var(--wim-color-border-secondary)"},children:e.jsxs(n,{gap:"xl",children:[e.jsxs(n,{align:"center",gap:"md",children:[e.jsx(r,{tag:"h2",size:"xl",style:{lineHeight:1},children:"Welcome back"}),e.jsx(t,{content:"Please enter your details to sign in",color:"deepgray",size:"small"})]}),e.jsx("form",{onSubmit:s=>s.preventDefault(),children:e.jsxs(n,{gap:"lg",children:[e.jsx(l,{label:"Email",htmlFor:"login-email",children:e.jsx(d,{id:"login-email",placeholder:"Enter your email",fullWidth:!0})}),e.jsx(l,{label:"Password",htmlFor:"login-password",children:e.jsx(d,{id:"login-password",type:"password",placeholder:"••••••••",fullWidth:!0})}),e.jsxs(n,{direction:"row",justify:"space-between",align:"center",children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.875rem",cursor:"pointer",color:"var(--text-secondary)"},children:[e.jsx(N,{id:"remember-me"}),"Remember me"]}),e.jsx(o,{href:"#",style:{fontSize:"0.875rem"},children:"Forgot password?"})]}),e.jsxs(n,{gap:"sm",children:[e.jsx(a,{priority:"primary",style:{width:"100%"},label:"Sign In"}),e.jsx(a,{priority:"secondary",style:{width:"100%"},onClick:()=>{},label:"Sign in with Google"})]})]})}),e.jsxs(n,{direction:"row",justify:"center",gap:"2xs",children:[e.jsx(t,{content:"Don't have an account?",size:"small",color:"gray"}),e.jsx(o,{href:"#",style:{fontSize:"0.875rem"},children:"Sign up"})]})]})})})},h={render:()=>e.jsxs("div",{style:{minHeight:"400px",background:"var(--bg-app)"},children:[e.jsx("style",{children:`
                @media (max-width: 768px) {
                    .desktop-only { display: none !important; }
                    .mobile-only { display: block !important; }
                    .header-search { width: 100% !important; max-width: 160px; }
                }
                @media (min-width: 769px) {
                    .mobile-only { display: none !important; }
                    .header-search { width: 240px; }
                }
            `}),e.jsxs(w,{bordered:!0,sticky:!0,background:"primary",style:{padding:"0 24px"},children:[e.jsxs(w.Section,{align:"start",style:{gap:"16px",flex:1,overflow:"hidden"},children:[e.jsx("button",{"aria-label":"Toggle Menu",className:"mobile-only",style:{background:"none",border:"none",fontSize:"20px",cursor:"pointer",padding:"8px"},children:"☰"}),e.jsxs(n,{direction:"row",align:"center",gap:"sm",style:{flexShrink:0},children:[e.jsx("div",{style:{width:"32px",height:"32px",background:"var(--color-primary)",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-text-on-primary)",fontWeight:"bold"},children:"W"}),e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:"bold",color:"var(--text-primary)"},children:"WIM UI"})]}),e.jsxs(n,{as:"nav",direction:"row",gap:"lg",className:"desktop-only",style:{marginLeft:"32px"},children:[e.jsx(o,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:"Dashboard"}),e.jsx(o,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:"Projects"}),e.jsx(o,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:"Team"}),e.jsx(o,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:"Settings"})]})]}),e.jsxs(w.Section,{align:"end",style:{gap:"16px",flexShrink:0},children:[e.jsx("div",{className:"header-search",children:e.jsx(d,{placeholder:"Search...",fullWidth:!0,leftIcon:"SearchIcon"})}),e.jsx(g,{orientation:"vertical",style:{height:"24px"}}),e.jsxs("div",{style:{position:"relative",cursor:"pointer",display:"flex",alignItems:"center"},children:[e.jsx(R,{name:"BellIcon",size:"medium",color:"secondary","aria-label":"Notifications"}),e.jsx(b,{color:"secondary",size:"small",content:"3",style:{position:"absolute",top:"-4px",right:"-4px",minWidth:"16px",height:"16px",padding:0}})]}),e.jsxs(n,{direction:"row",align:"center",gap:"sm",style:{cursor:"pointer"},children:[e.jsx(z,{size:"md"}),e.jsxs(n,{gap:"none",className:"desktop-only",children:[e.jsx("span",{style:{fontSize:"0.875rem",fontWeight:600,color:"var(--text-primary)"},children:"John Doe"}),e.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-secondary)"},children:"Admin"})]})]})]})]}),e.jsx(k,{style:{padding:"32px"},children:e.jsxs(n,{gap:"xl",children:[e.jsx(r,{tag:"h2",size:"xl",children:"Dashboard Overview"}),e.jsx(j,{cols:"repeat(auto-fit, minmax(280px, 1fr))",gap:24,justify:"center",children:[1,2,3].map(s=>e.jsxs(S,{style:{border:"1px solid var(--wim-color-border-secondary)"},children:[e.jsxs(n,{justify:"space-between",align:"center",direction:"row",children:[e.jsx(S.Label,{children:"Total Revenue"}),e.jsx(b,{color:"neutral",content:"+12.5%",size:"small"})]}),e.jsx(S.Value,{children:e.jsx(r,{tag:"h3",size:"xl",style:{whiteSpace:"nowrap"},children:"$45,231.89"})}),e.jsx(S.Description,{children:"Compared to last month"})]},s))})]})})]})},x={render:()=>e.jsx(C,{style:{background:"var(--bg-app)",padding:"20px"},children:e.jsxs(c,{style:{maxWidth:"1000px",width:"100%",padding:"0",overflow:"hidden",border:"1px solid var(--wim-color-border-secondary)"},children:[e.jsxs("div",{style:{padding:"24px",borderBottom:"1px solid var(--wim-color-border-secondary)"},children:[e.jsx(r,{tag:"h2",size:"lg",children:"Edit Profile"}),e.jsx(t,{content:"Manage your public profile and settings",color:"deepgray",style:{marginTop:"4px"}})]}),e.jsxs(j,{cols:{base:1,md:"250px 1fr"},gap:0,style:{minHeight:"600px"},children:[e.jsx("div",{style:{borderRight:"1px solid var(--wim-color-border-secondary)",background:"var(--bg-app)"},children:e.jsx("div",{style:{padding:"24px"},children:e.jsxs(n,{gap:"sm",align:"stretch",children:[e.jsx(v.Item,{active:!0,children:"General Info"}),e.jsx(v.Item,{children:"Account Security"}),e.jsx(v.Item,{children:"Notifications"}),e.jsx(v.Item,{children:"Billing"})]})})}),e.jsx("div",{style:{padding:"32px",overflowX:"hidden"},children:e.jsx("form",{onSubmit:s=>s.preventDefault(),children:e.jsxs(n,{gap:"xl",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px",flexWrap:"wrap"},children:[e.jsx(z,{size:"lg",style:{width:"80px",height:"80px",fontSize:"2rem"}}),e.jsxs(n,{gap:"xs",children:[e.jsx(r,{tag:"h4",size:"sm",children:"Profile Picture"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{size:"small",priority:"secondary",label:"Change"}),e.jsx(a,{size:"small",priority:"tertiary",label:"Remove"})]})]})]}),e.jsx(g,{}),e.jsxs(n,{gap:"2xl",children:[e.jsx(r,{tag:"h3",size:"md",children:"Personal Information"}),e.jsxs(n,{gap:"lg",children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"24px"},children:[e.jsx(l,{label:"First Name",htmlFor:"profile-first-name",children:e.jsx(d,{id:"profile-first-name",defaultValue:"John",fullWidth:!0})}),e.jsx(l,{label:"Last Name",htmlFor:"profile-last-name",children:e.jsx(d,{id:"profile-last-name",defaultValue:"Doe",fullWidth:!0})})]}),e.jsx(l,{label:"Email Address",htmlFor:"profile-email",children:e.jsx(d,{id:"profile-email",type:"email",defaultValue:"john.doe@example.com",fullWidth:!0})}),e.jsxs(l,{label:"Bio",htmlFor:"profile-bio",children:[e.jsx(W,{id:"profile-bio",placeholder:"Tell us a little about yourself",rows:4,fullWidth:!0,defaultValue:"I am a software engineer based in Tokyo."}),e.jsx(t,{content:"0 / 500 characters",size:"ex-small",color:"gray",style:{textAlign:"right"}})]})]})]}),e.jsx(g,{}),e.jsxs(n,{gap:"2xl",children:[e.jsx(r,{tag:"h3",size:"md",children:"Regional Settings"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"24px"},children:[e.jsx(L,{label:"Language",options:[{label:"English",value:"en"},{label:"Japanese",value:"ja"},{label:"Spanish",value:"es"}],defaultValue:"en"}),e.jsx(L,{label:"Timezone",options:[{label:"UTC",value:"utc"},{label:"JST (Japan Standard Time)",value:"jst"},{label:"EST (Eastern Standard Time)",value:"est"}],defaultValue:"jst"})]})]}),e.jsx(g,{}),e.jsxs(n,{gap:"2xl",children:[e.jsx(r,{tag:"h3",size:"md",children:"Preferences"}),e.jsxs(n,{gap:"lg",children:[e.jsx(l,{label:"Visibility",children:e.jsx(T,{name:"visibility",defaultValue:"public",options:[{label:"Public - Everyone can see your profile",value:"public"},{label:"Private - Only you can see your profile",value:"private"},{label:"Friends - Only friends can see your profile",value:"friends"}]})}),e.jsx(l,{label:"Notifications",children:e.jsxs(n,{gap:"sm",children:[e.jsx(H,{label:"Email Notifications",defaultChecked:!0}),e.jsx(H,{label:"Push Notifications"})]})})]})]}),e.jsx(g,{}),e.jsxs(P,{justify:"end",gap:"md",children:[e.jsx(a,{priority:"tertiary",label:"Cancel"}),e.jsx(a,{priority:"primary",label:"Save Changes"})]})]})})})]})]})})},y={render:()=>e.jsxs(k,{style:{padding:"80px 24px",background:"#fff"},children:[e.jsxs(n,{align:"center",gap:"lg",style:{marginBottom:"64px"},children:[e.jsx(b,{color:"primary",content:"PRICING PLANS"}),e.jsxs(n,{align:"center",gap:"3xl",children:[e.jsx(r,{tag:"h2",size:"xl",align:"center",children:"Choose the right plan for you"}),e.jsx(k,{size:"sm",children:e.jsx(t,{content:"Simple, transparent pricing that grows with your team. No hidden fees.",color:"deepgray",style:{textAlign:"center"}})})]})]}),e.jsxs(j,{cols:{base:1,md:3},gap:{base:32,lg:48,xl:64},style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsx(c,{style:{padding:"32px",border:"2px solid var(--wim-color-border-secondary)"},children:e.jsxs(n,{gap:"lg",style:{height:"100%"},children:[e.jsxs(n,{gap:"lg",align:"center",style:{flex:1},children:[e.jsxs(n,{gap:"xs",align:"center",children:[e.jsx("div",{style:{minHeight:"48px",display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e.jsx(r,{tag:"h3",size:"sm",align:"center",style:{margin:0},children:"Starter"})}),e.jsxs(n,{direction:"row",align:"baseline",gap:"none",justify:"center",style:{whiteSpace:"nowrap"},children:[e.jsx(r,{tag:"h4",size:"2xl",style:{whiteSpace:"nowrap"},children:"$0"}),e.jsx(t,{content:"/month",color:"gray",size:"small",style:{whiteSpace:"nowrap"}})]})]}),e.jsx("div",{style:{minHeight:"40px",display:"flex",alignItems:"center"},children:e.jsx(t,{content:"Perfect for individuals just getting started.",size:"small",color:"deepgray",style:{textAlign:"center",margin:0}})}),e.jsxs(I,{spacing:"normal",style:{marginTop:"24px",alignSelf:"stretch"},children:[e.jsx(i,{iconName:"CheckIcon",children:"Core components"}),e.jsx(i,{iconName:"CheckIcon",children:"Basic documentation"}),e.jsx(i,{iconName:"CheckIcon",children:"Community support"}),e.jsx(i,{iconName:"CheckIcon",className:"wim-color-gray",style:{opacity:.5},children:"Advanced patterns"})]})]}),e.jsx(a,{priority:"secondary",label:"Get Started",style:{width:"100%"}})]})}),e.jsxs(c,{style:{padding:"32px",border:"2px solid #3b82f6",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"-14px",left:"50%",transform:"translateX(-50%)"},children:e.jsx(b,{color:"primary",content:"MOST POPULAR",size:"small"})}),e.jsxs(n,{gap:"lg",style:{height:"100%"},children:[e.jsxs(n,{gap:"lg",align:"center",style:{flex:1},children:[e.jsxs(n,{gap:"xs",align:"center",children:[e.jsx("div",{style:{minHeight:"48px",display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e.jsx(r,{tag:"h3",size:"sm",align:"center",style:{margin:0},children:"Professional"})}),e.jsxs(n,{direction:"row",align:"baseline",gap:"none",justify:"center",style:{whiteSpace:"nowrap"},children:[e.jsx(r,{tag:"h4",size:"2xl",style:{whiteSpace:"nowrap"},children:"$29"}),e.jsx(t,{content:"/month",color:"gray",size:"small",style:{whiteSpace:"nowrap"}})]})]}),e.jsx("div",{style:{minHeight:"40px",display:"flex",alignItems:"center"},children:e.jsx(t,{content:"Advanced features for growing teams.",size:"small",color:"deepgray",style:{textAlign:"center",margin:0}})}),e.jsxs(I,{spacing:"normal",style:{marginTop:"24px",alignSelf:"stretch"},children:[e.jsx(i,{iconName:"CheckIcon",children:"Everything in Starter"}),e.jsx(i,{iconName:"CheckIcon",children:"Advanced patterns"}),e.jsx(i,{iconName:"CheckIcon",children:"Priority email support"}),e.jsx(i,{iconName:"CheckIcon",children:"Custom themes"})]})]}),e.jsx(a,{priority:"primary",label:"Upgrade to Pro",style:{width:"100%"}})]})]}),e.jsx(c,{style:{padding:"32px",border:"2px solid var(--wim-color-border-secondary)"},children:e.jsxs(n,{gap:"lg",style:{height:"100%"},children:[e.jsxs(n,{gap:"lg",align:"center",style:{flex:1},children:[e.jsxs(n,{gap:"xs",align:"center",children:[e.jsx("div",{style:{minHeight:"48px",display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e.jsx(r,{tag:"h3",size:"sm",align:"center",style:{margin:0},children:"Enterprise"})}),e.jsxs(n,{direction:"row",align:"baseline",gap:"none",justify:"center",style:{whiteSpace:"nowrap"},children:[e.jsx(r,{tag:"h4",size:"2xl",style:{whiteSpace:"nowrap"},children:"$99"}),e.jsx(t,{content:"/month",color:"gray",size:"small",style:{whiteSpace:"nowrap"}})]})]}),e.jsx("div",{style:{minHeight:"40px",display:"flex",alignItems:"center"},children:e.jsx(t,{content:"Custom solutions for large organizations.",size:"small",color:"deepgray",style:{textAlign:"center",margin:0}})}),e.jsxs(I,{spacing:"normal",style:{marginTop:"24px",alignSelf:"stretch"},children:[e.jsx(i,{iconName:"CheckIcon",children:"Custom infrastructure"}),e.jsx(i,{iconName:"CheckIcon",children:"SSO & SAML"}),e.jsx(i,{iconName:"CheckIcon",children:"Dedicated account manager"})]})]}),e.jsx(a,{priority:"secondary",label:"Contact Sales",style:{width:"100%"}})]})})]})]})},u={render:()=>e.jsx("div",{style:{minHeight:"600px",display:"flex",alignItems:"center",background:"linear-gradient(135deg, var(--color-primary-light, #f0f7ff) 0%, var(--bg-app) 100%)",padding:"80px 24px"},children:e.jsx(k,{children:e.jsxs(j,{cols:{base:1,md:"1fr 1fr"},gap:48,align:"center",children:[e.jsxs(n,{gap:"3xl",children:[e.jsxs(n,{gap:"3xl",children:[e.jsx(b,{color:"primary",content:"v2.0 is now available",style:{width:"fit-content"}}),e.jsxs(n,{gap:"2xl",children:[e.jsx(r,{tag:"h1",size:"2xl",style:{lineHeight:"1",fontWeight:"800"},children:"Build beautiful interfaces faster than ever."}),e.jsx(t,{content:"WIM UI provides a comprehensive set of premium components and tools to help you create stunning user experiences in Record time.",size:"large",color:"deepgray"})]})]}),e.jsxs(P,{gap:"xl",wrap:"wrap",justify:"evenly",children:[e.jsx(a,{priority:"primary",size:"medium",label:"Get Started For Free"}),e.jsx(a,{priority:"secondary",size:"medium",label:"View Documentation"})]}),e.jsxs(n,{direction:"row",align:"center",gap:"md",children:[e.jsx(A,{size:"sm",children:[1,2,3,4].map(s=>e.jsx(z,{},s))}),e.jsx(t,{content:"Join 10,000+ developers",size:"small",color:"deepgray"})]})]}),e.jsx("div",{style:{position:"relative"},children:e.jsx(c,{style:{padding:"0",borderRadius:"24px",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",overflow:"hidden"},children:e.jsxs(n,{gap:"none",children:[e.jsxs(n,{direction:"row",gap:"xs",align:"center",style:{height:"32px",background:"#f3f4f6",borderBottom:"1px solid #e5e7eb",padding:"0 12px"},children:[e.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#ef4444"}}),e.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#f59e0b"}}),e.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#10b981"}})]}),e.jsx("div",{style:{padding:"24px"},children:e.jsxs(n,{gap:"lg",children:[e.jsx(p,{variant:"text",height:20,width:"100%"}),e.jsx(p,{variant:"text",height:20,width:"80%"}),e.jsxs(j,{cols:2,gap:16,children:[e.jsx(p,{variant:"rect",height:100,style:{borderRadius:"8px"}}),e.jsx(p,{variant:"rect",height:100,style:{borderRadius:"8px"}})]}),e.jsx(p,{variant:"rect",height:80,width:"100%",style:{borderRadius:"4px"}})]})})]})})})]})})})},f={render:()=>e.jsx(C,{style:{height:"100vh",background:"var(--bg-app)",padding:"24px"},children:e.jsxs(n,{align:"center",gap:"5xl",style:{maxWidth:"600px",textAlign:"center"},children:[e.jsx(r,{tag:"h1",size:"4xl",align:"center",style:{fontSize:"120px",fontWeight:"900",color:"var(--wim-color-border-secondary)",lineHeight:"1"},children:"404"}),e.jsxs(n,{gap:"2xl",align:"center",children:[e.jsx(r,{tag:"h2",size:"xl",align:"center",children:"Something's missing."}),e.jsx(t,{content:"The page you are looking for doesn't exist or has been moved. Check the URL or head back home.",color:"gray",style:{textAlign:"center"}})]}),e.jsx(B,{variant:"info",title:"Need help?",style:{textAlign:"left"},children:"Check our status page for any ongoing maintenance."}),e.jsxs(n,{direction:{base:"column",sm:"row"},gap:"xl",children:[e.jsx(a,{priority:"primary",label:"Back to Homepage"}),e.jsx(a,{priority:"secondary",label:"Contact Support"})]})]})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Center style={{
    height: "100vh",
    background: "var(--bg-app)"
  }}>\r
            <Card style={{
      width: "400px",
      padding: "32px",
      border: "1px solid var(--wim-color-border-secondary)"
    }}>\r
                <Stack gap="xl">\r
                    <Stack align="center" gap="md">\r
                        <Heading tag="h2" size="xl" style={{
            lineHeight: 1
          }}>\r
                            Welcome back\r
                        </Heading>\r
                        <Paragraph content="Please enter your details to sign in" color="deepgray" size="small" />\r
                    </Stack>\r
\r
                    <form onSubmit={e => e.preventDefault()}>\r
                        <Stack gap="lg">\r
                            <Label label="Email" htmlFor="login-email">\r
                                <Input id="login-email" placeholder="Enter your email" fullWidth />\r
                            </Label>\r
\r
                            <Label label="Password" htmlFor="login-password">\r
                                <Input id="login-password" type="password" placeholder="••••••••" fullWidth />\r
                            </Label>\r
\r
                            <Stack direction="row" justify="space-between" align="center">\r
                                <label style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.875rem",
                cursor: "pointer",
                color: "var(--text-secondary)"
              }}>\r
                                    <Checkbox id="remember-me" />\r
                                    Remember me\r
                                </label>\r
                                <Link href="#" style={{
                fontSize: "0.875rem"
              }}>Forgot password?</Link>\r
                            </Stack>\r
\r
                            <Stack gap="sm">\r
                                <Button priority="primary" style={{
                width: "100%"
              }} label="Sign In" />\r
\r
                                <Button priority="secondary" style={{
                width: "100%"
              }} onClick={() => {}} label="Sign in with Google" />\r
                            </Stack>\r
                        </Stack>\r
                    </form>\r
\r
                    <Stack direction="row" justify="center" gap="2xs">\r
                        <Paragraph content="Don't have an account?" size="small" color="gray" />\r
                        <Link href="#" style={{
            fontSize: "0.875rem"
          }}>Sign up</Link>\r
                    </Stack>\r
                </Stack>\r
            </Card>\r
        </Center>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    minHeight: "400px",
    background: "var(--bg-app)"
  }}>\r
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
            \`}</style>\r
            <Header bordered sticky background="primary" style={{
      padding: "0 24px"
    }}>\r
                <Header.Section align="start" style={{
        gap: "16px",
        flex: 1,
        overflow: "hidden"
      }}>\r
                    <button aria-label="Toggle Menu" className="mobile-only" style={{
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          padding: "8px"
        }}>\r
                        ☰\r
                    </button>\r
                    <Stack direction="row" align="center" gap="sm" style={{
          flexShrink: 0
        }}>\r
                        <div style={{
            width: "32px",
            height: "32px",
            background: "var(--color-primary)",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-on-primary)",
            fontWeight: "bold"
          }}>\r
                            W\r
                        </div>\r
                        <span style={{
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "var(--text-primary)"
          }}>WIM UI</span>\r
                    </Stack>\r
\r
                    <Stack as="nav" direction="row" gap="lg" className="desktop-only" style={{
          marginLeft: "32px"
        }}>\r
                        <Link href="#" priority="secondary" style={{
            color: "inherit",
            textDecoration: "none"
          }}>Dashboard</Link>\r
                        <Link href="#" priority="secondary" style={{
            color: "inherit",
            textDecoration: "none"
          }}>Projects</Link>\r
                        <Link href="#" priority="secondary" style={{
            color: "inherit",
            textDecoration: "none"
          }}>Team</Link>\r
                        <Link href="#" priority="secondary" style={{
            color: "inherit",
            textDecoration: "none"
          }}>Settings</Link>\r
                    </Stack>\r
                </Header.Section>\r
\r
                <Header.Section align="end" style={{
        gap: "16px",
        flexShrink: 0
      }}>\r
                    <div className="header-search">\r
                        <Input placeholder="Search..." fullWidth leftIcon="SearchIcon" />\r
                    </div>\r
\r
                    <Divider orientation="vertical" style={{
          height: "24px"
        }} />\r
\r
                    <div style={{
          position: "relative",
          cursor: "pointer",
          display: "flex",
          alignItems: "center"
        }}>\r
                        <Icon name="BellIcon" size="medium" color="secondary" aria-label="Notifications" />\r
                        <Badge color="secondary" size="small" content="3" style={{
            position: "absolute",
            top: "-4px",
            right: "-4px",
            minWidth: "16px",
            height: "16px",
            padding: 0
          }} />\r
                    </div>\r
\r
                    <Stack direction="row" align="center" gap="sm" style={{
          cursor: "pointer"
        }}>\r
                        <Avatar size="md" />\r
                        <Stack gap="none" className="desktop-only">\r
                            <span style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-primary)"
            }}>John Doe</span>\r
                            <span style={{
              fontSize: "0.75rem",
              color: "var(--text-secondary)"
            }}>Admin</span>\r
                        </Stack>\r
                    </Stack>\r
                </Header.Section>\r
            </Header>\r
\r
            <Container style={{
      padding: "32px"
    }}>\r
                <Stack gap="xl">\r
                    <Heading tag="h2" size="xl">Dashboard Overview</Heading>\r
                    <Grid cols="repeat(auto-fit, minmax(280px, 1fr))" gap={24} justify="center">\r
                        {[1, 2, 3].map(i => <Stats key={i} style={{
            border: "1px solid var(--wim-color-border-secondary)"
          }}>\r
                                <Stack justify="space-between" align="center" direction="row">\r
                                    <Stats.Label>Total Revenue</Stats.Label>\r
                                    <Badge color="neutral" content="+12.5%" size="small" />\r
                                </Stack>\r
                                <Stats.Value>\r
                                    <Heading tag="h3" size="xl" style={{
                whiteSpace: "nowrap"
              }}>$45,231.89</Heading>\r
                                </Stats.Value>\r
                                <Stats.Description>Compared to last month</Stats.Description>\r
                            </Stats>)}\r
                    </Grid>\r
                </Stack>\r
            </Container>\r
        </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Center style={{
    background: "var(--bg-app)",
    padding: "20px"
  }}>\r
            <Card style={{
      maxWidth: "1000px",
      width: "100%",
      padding: "0",
      overflow: "hidden",
      border: "1px solid var(--wim-color-border-secondary)"
    }}>\r
                <div style={{
        padding: "24px",
        borderBottom: "1px solid var(--wim-color-border-secondary)"
      }}>\r
                    <Heading tag="h2" size="lg">Edit Profile</Heading>\r
                    <Paragraph content="Manage your public profile and settings" color="deepgray" style={{
          marginTop: "4px"
        }} />\r
                </div>\r
\r
                <Grid cols={{
        base: 1,
        md: "250px 1fr"
      }} gap={0} style={{
        minHeight: "600px"
      }}>\r
                    {/* Sidebar Navigation */}\r
                    <div style={{
          borderRight: "1px solid var(--wim-color-border-secondary)",
          background: "var(--bg-app)"
        }}>\r
                        <div style={{
            padding: "24px"
          }}>\r
                            <Stack gap="sm" align="stretch">\r
                                <Sidebar.Item active>General Info</Sidebar.Item>\r
                                <Sidebar.Item>Account Security</Sidebar.Item>\r
                                <Sidebar.Item>Notifications</Sidebar.Item>\r
                                <Sidebar.Item>Billing</Sidebar.Item>\r
                            </Stack>\r
                        </div>\r
                    </div>\r
\r
                    {/* Main Form Content */}\r
                    <div style={{
          padding: "32px",
          overflowX: "hidden"
        }}>\r
                        <form onSubmit={e => e.preventDefault()}>\r
                            <Stack gap="xl">\r
                                {/* Profile Picture Section */}\r
                                <div style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                flexWrap: "wrap"
              }}>\r
                                    <Avatar size="lg" style={{
                  width: "80px",
                  height: "80px",
                  fontSize: "2rem"
                }} />\r
                                    <Stack gap="xs">\r
                                        <Heading tag="h4" size="sm">Profile Picture</Heading>\r
                                        <div style={{
                    display: "flex",
                    gap: "12px"
                  }}>\r
                                            <Button size="small" priority="secondary" label="Change" />\r
                                            <Button size="small" priority="tertiary" label="Remove" />\r
                                        </div>\r
                                    </Stack>\r
                                </div>\r
\r
                                <Divider />\r
\r
                                {/* Personal Information */}\r
                                <Stack gap="2xl">\r
                                    <Heading tag="h3" size="md">Personal Information</Heading>\r
\r
                                    <Stack gap="lg">\r
                                        <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "24px"
                  }}>\r
                                            <Label label="First Name" htmlFor="profile-first-name">\r
                                                <Input id="profile-first-name" defaultValue="John" fullWidth />\r
                                            </Label>\r
                                            <Label label="Last Name" htmlFor="profile-last-name">\r
                                                <Input id="profile-last-name" defaultValue="Doe" fullWidth />\r
                                            </Label>\r
                                        </div>\r
\r
                                        <Label label="Email Address" htmlFor="profile-email">\r
                                            <Input id="profile-email" type="email" defaultValue="john.doe@example.com" fullWidth />\r
                                        </Label>\r
\r
                                        <Label label="Bio" htmlFor="profile-bio">\r
                                            <Textarea id="profile-bio" placeholder="Tell us a little about yourself" rows={4} fullWidth defaultValue="I am a software engineer based in Tokyo." />\r
                                            <Paragraph content="0 / 500 characters" size="ex-small" color="gray" style={{
                      textAlign: "right"
                    }} />\r
                                        </Label>\r
                                    </Stack>\r
                                </Stack>\r
\r
                                <Divider />\r
\r
                                {/* Regional Settings */}\r
                                <Stack gap="2xl">\r
                                    <Heading tag="h3" size="md">Regional Settings</Heading>\r
\r
                                    <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "24px"
                }}>\r
                                        <Selectbox label="Language" options={[{
                    label: "English",
                    value: "en"
                  }, {
                    label: "Japanese",
                    value: "ja"
                  }, {
                    label: "Spanish",
                    value: "es"
                  }]} defaultValue="en" />\r
                                        <Selectbox label="Timezone" options={[{
                    label: "UTC",
                    value: "utc"
                  }, {
                    label: "JST (Japan Standard Time)",
                    value: "jst"
                  }, {
                    label: "EST (Eastern Standard Time)",
                    value: "est"
                  }]} defaultValue="jst" />\r
                                    </div>\r
                                </Stack>\r
\r
                                <Divider />\r
\r
                                {/* Preferences */}\r
                                <Stack gap="2xl">\r
                                    <Heading tag="h3" size="md">Preferences</Heading>\r
\r
                                    <Stack gap="lg">\r
                                        <Label label="Visibility">\r
                                            <RadioGroup name="visibility" defaultValue="public" options={[{
                      label: "Public - Everyone can see your profile",
                      value: "public"
                    }, {
                      label: "Private - Only you can see your profile",
                      value: "private"
                    }, {
                      label: "Friends - Only friends can see your profile",
                      value: "friends"
                    }]} />\r
                                        </Label>\r
\r
                                        <Label label="Notifications">\r
                                            <Stack gap="sm">\r
                                                <Switch label="Email Notifications" defaultChecked />\r
                                                <Switch label="Push Notifications" />\r
                                            </Stack>\r
                                        </Label>\r
                                    </Stack>\r
                                </Stack>\r
\r
                                <Divider />\r
                                <Group justify="end" gap="md">\r
                                    <Button priority="tertiary" label="Cancel" />\r
                                    <Button priority="primary" label="Save Changes" />\r
                                </Group>\r
                            </Stack>\r
                        </form>\r
                    </div>\r
                </Grid>\r
            </Card>\r
        </Center>
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Container style={{
    padding: "80px 24px",
    background: "#fff"
  }}>\r
            <Stack align="center" gap="lg" style={{
      marginBottom: "64px"
    }}>\r
                <Badge color="primary" content="PRICING PLANS" />\r
                <Stack align="center" gap="3xl">\r
                    <Heading tag="h2" size="xl" align="center">Choose the right plan for you</Heading>\r
                    <Container size="sm">\r
                        <Paragraph content="Simple, transparent pricing that grows with your team. No hidden fees." color="deepgray" style={{
            textAlign: "center"
          }} />\r
                    </Container>\r
                </Stack>\r
            </Stack>\r
\r
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
    }}>\r
                <Card style={{
        padding: "32px",
        border: "2px solid var(--wim-color-border-secondary)"
      }}>\r
                    <Stack gap="lg" style={{
          height: "100%"
        }}>\r
                        <Stack gap="lg" align="center" style={{
            flex: 1
          }}>\r
                            <Stack gap="xs" align="center">\r
                                <div style={{
                minHeight: "48px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center"
              }}>\r
                                    <Heading tag="h3" size="sm" align="center" style={{
                  margin: 0
                }}>Starter</Heading>\r
                                </div>\r
                                <Stack direction="row" align="baseline" gap="none" justify="center" style={{
                whiteSpace: "nowrap"
              }}>\r
                                    <Heading tag="h4" size="2xl" style={{
                  whiteSpace: "nowrap"
                }}>$0</Heading>\r
                                    <Paragraph content="/month" color="gray" size="small" style={{
                  whiteSpace: "nowrap"
                }} />\r
                                </Stack>\r
                            </Stack>\r
                            <div style={{
              minHeight: "40px",
              display: "flex",
              alignItems: "center"
            }}>\r
                                <Paragraph content="Perfect for individuals just getting started." size="small" color="deepgray" style={{
                textAlign: "center",
                margin: 0
              }} />\r
                            </div>\r
\r
                            <List spacing="normal" style={{
              marginTop: "24px",
              alignSelf: "stretch"
            }}>\r
                                <ListItem iconName="CheckIcon">Core components</ListItem>\r
                                <ListItem iconName="CheckIcon">Basic documentation</ListItem>\r
                                <ListItem iconName="CheckIcon">Community support</ListItem>\r
                                <ListItem iconName="CheckIcon" className="wim-color-gray" style={{
                opacity: 0.5
              }}>Advanced patterns</ListItem>\r
                            </List>\r
                        </Stack>\r
\r
                        <Button priority="secondary" label="Get Started" style={{
            width: "100%"
          }} />\r
                    </Stack>\r
                </Card>\r
\r
                <Card style={{
        padding: "32px",
        border: "2px solid #3b82f6",
        position: "relative"
      }}>\r
                    <div style={{
          position: "absolute",
          top: "-14px",
          left: "50%",
          transform: "translateX(-50%)"
        }}>\r
                        <Badge color="primary" content="MOST POPULAR" size="small" />\r
                    </div>\r
                    <Stack gap="lg" style={{
          height: "100%"
        }}>\r
                        <Stack gap="lg" align="center" style={{
            flex: 1
          }}>\r
                            <Stack gap="xs" align="center">\r
                                <div style={{
                minHeight: "48px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center"
              }}>\r
                                    <Heading tag="h3" size="sm" align="center" style={{
                  margin: 0
                }}>Professional</Heading>\r
                                </div>\r
                                <Stack direction="row" align="baseline" gap="none" justify="center" style={{
                whiteSpace: "nowrap"
              }}>\r
                                    <Heading tag="h4" size="2xl" style={{
                  whiteSpace: "nowrap"
                }}>$29</Heading>\r
                                    <Paragraph content="/month" color="gray" size="small" style={{
                  whiteSpace: "nowrap"
                }} />\r
                                </Stack>\r
                            </Stack>\r
                            <div style={{
              minHeight: "40px",
              display: "flex",
              alignItems: "center"
            }}>\r
                                <Paragraph content="Advanced features for growing teams." size="small" color="deepgray" style={{
                textAlign: "center",
                margin: 0
              }} />\r
                            </div>\r
\r
                            <List spacing="normal" style={{
              marginTop: "24px",
              alignSelf: "stretch"
            }}>\r
                                <ListItem iconName="CheckIcon">Everything in Starter</ListItem>\r
                                <ListItem iconName="CheckIcon">Advanced patterns</ListItem>\r
                                <ListItem iconName="CheckIcon">Priority email support</ListItem>\r
                                <ListItem iconName="CheckIcon">Custom themes</ListItem>\r
                            </List>\r
                        </Stack>\r
\r
                        <Button priority="primary" label="Upgrade to Pro" style={{
            width: "100%"
          }} />\r
                    </Stack>\r
                </Card>\r
\r
                <Card style={{
        padding: "32px",
        border: "2px solid var(--wim-color-border-secondary)"
      }}>\r
                    <Stack gap="lg" style={{
          height: "100%"
        }}>\r
                        <Stack gap="lg" align="center" style={{
            flex: 1
          }}>\r
                            <Stack gap="xs" align="center">\r
                                <div style={{
                minHeight: "48px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center"
              }}>\r
                                    <Heading tag="h3" size="sm" align="center" style={{
                  margin: 0
                }}>Enterprise</Heading>\r
                                </div>\r
                                <Stack direction="row" align="baseline" gap="none" justify="center" style={{
                whiteSpace: "nowrap"
              }}>\r
                                    <Heading tag="h4" size="2xl" style={{
                  whiteSpace: "nowrap"
                }}>$99</Heading>\r
                                    <Paragraph content="/month" color="gray" size="small" style={{
                  whiteSpace: "nowrap"
                }} />\r
                                </Stack>\r
                            </Stack>\r
                            <div style={{
              minHeight: "40px",
              display: "flex",
              alignItems: "center"
            }}>\r
                                <Paragraph content="Custom solutions for large organizations." size="small" color="deepgray" style={{
                textAlign: "center",
                margin: 0
              }} />\r
                            </div>\r
\r
                            <List spacing="normal" style={{
              marginTop: "24px",
              alignSelf: "stretch"
            }}>\r
                                <ListItem iconName="CheckIcon">Custom infrastructure</ListItem>\r
                                <ListItem iconName="CheckIcon">SSO & SAML</ListItem>\r
                                <ListItem iconName="CheckIcon">Dedicated account manager</ListItem>\r
                            </List>\r
                        </Stack>\r
\r
                        <Button priority="secondary" label="Contact Sales" style={{
            width: "100%"
          }} />\r
                    </Stack>\r
                </Card>\r
            </Grid>\r
        </Container>
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(135deg, var(--color-primary-light, #f0f7ff) 0%, var(--bg-app) 100%)",
    padding: "80px 24px"
  }}>\r
            <Container>\r
                <Grid cols={{
        base: 1,
        md: "1fr 1fr"
      }} gap={48} align="center">\r
                    <Stack gap="3xl">\r
                        <Stack gap="3xl">\r
                            <Badge color="primary" content="v2.0 is now available" style={{
              width: "fit-content"
            }} />\r
                            <Stack gap="2xl">\r
                                <Heading tag="h1" size="2xl" style={{
                lineHeight: "1",
                fontWeight: "800"
              }}>\r
                                    Build beautiful interfaces faster than ever.\r
                                </Heading>\r
                                <Paragraph content="WIM UI provides a comprehensive set of premium components and tools to help you create stunning user experiences in Record time." size="large" color="deepgray" />\r
                            </Stack>\r
                        </Stack>\r
\r
                        <Group gap="xl" wrap="wrap" justify="evenly">\r
                            <Button priority="primary" size="medium" label="Get Started For Free" />\r
                            <Button priority="secondary" size="medium" label="View Documentation" />\r
                        </Group>\r
\r
                        <Stack direction="row" align="center" gap="md">\r
                            <AvatarGroup size="sm">\r
                                {[1, 2, 3, 4].map(i => <Avatar key={i} />)}\r
                            </AvatarGroup>\r
                            <Paragraph content="Join 10,000+ developers" size="small" color="deepgray" />\r
                        </Stack>\r
                    </Stack>\r
\r
                    <div style={{
          position: "relative"
        }}>\r
                        <Card style={{
            padding: "0",
            borderRadius: "24px",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            overflow: "hidden"
          }}>\r
                            <Stack gap="none">\r
                                <Stack direction="row" gap="xs" align="center" style={{
                height: "32px",
                background: "#f3f4f6",
                borderBottom: "1px solid #e5e7eb",
                padding: "0 12px"
              }}>\r
                                    <div style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ef4444"
                }} />\r
                                    <div style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#f59e0b"
                }} />\r
                                    <div style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#10b981"
                }} />\r
                                </Stack>\r
                                <div style={{
                padding: "24px"
              }}>\r
                                    <Stack gap="lg">\r
                                        <Skeleton variant="text" height={20} width="100%" />\r
                                        <Skeleton variant="text" height={20} width="80%" />\r
                                        <Grid cols={2} gap={16}>\r
                                            <Skeleton variant="rect" height={100} style={{
                      borderRadius: "8px"
                    }} />\r
                                            <Skeleton variant="rect" height={100} style={{
                      borderRadius: "8px"
                    }} />\r
                                        </Grid>\r
                                        <Skeleton variant="rect" height={80} width="100%" style={{
                    borderRadius: "4px"
                  }} />\r
                                    </Stack>\r
                                </div>\r
                            </Stack>\r
                        </Card>\r
                    </div>\r
                </Grid>\r
            </Container>\r
        </div>
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Center style={{
    height: "100vh",
    background: "var(--bg-app)",
    padding: "24px"
  }}>\r
            <Stack align="center" gap="5xl" style={{
      maxWidth: "600px",
      textAlign: "center"
    }}>\r
                <Heading tag="h1" size="4xl" align="center" style={{
        fontSize: "120px",
        fontWeight: "900",
        color: "var(--wim-color-border-secondary)",
        lineHeight: "1"
      }}>\r
                    404\r
                </Heading>\r
                <Stack gap="2xl" align="center">\r
                    <Heading tag="h2" size="xl" align="center">Something's missing.</Heading>\r
                    <Paragraph content="The page you are looking for doesn't exist or has been moved. Check the URL or head back home." color="gray" style={{
          textAlign: "center"
        }} />\r
                </Stack>\r
\r
                <Alert variant="info" title="Need help?" style={{
        textAlign: "left"
      }}>\r
                    Check our status page for any ongoing maintenance.\r
                </Alert>\r
\r
                <Stack direction={{
        base: "column",
        sm: "row"
      }} gap="xl">\r
                    <Button priority="primary" label="Back to Homepage" />\r
                    <Button priority="secondary" label="Contact Support" />\r
                </Stack>\r
            </Stack>\r
        </Center>
}`,...f.parameters?.docs?.source}}};const G=["LoginForm","DashboardHeader","UserProfileForm","PricingTable","HeroSection","ErrorPage"],he=Object.freeze(Object.defineProperty({__proto__:null,DashboardHeader:h,ErrorPage:f,HeroSection:u,LoginForm:m,PricingTable:y,UserProfileForm:x,__namedExportsOrder:G,default:D},Symbol.toStringTag,{value:"Module"}));export{h as D,f as E,u as H,m as L,he as P,x as U,y as a};
