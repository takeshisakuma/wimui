import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as d}from"./Input-BdHfz_0Z.js";import{B as a}from"./Button-BrqZ6tMU.js";import{C as c}from"./Card-Bd5aikW4.js";import{C as N}from"./Checkbox-BEB_AC7w.js";import{L as s}from"./Link-B3mYXKPO.js";import{H as t}from"./Heading-3HAbvrDV.js";import{S as n}from"./Stack-Bcr48yXy.js";import{C as I}from"./Center-BiY3g6RK.js";import{C as k}from"./Container-B4AogijU.js";import{H as w}from"./Header-HciwugOe.js";import{A as z}from"./Avatar-CyyK4_Xo.js";import{A}from"./AvatarGroup-CPDTOWZ5.js";import{B as b}from"./Badge-EN01z27s.js";import{D as g}from"./Divider-Ks_-AKXN.js";import{S as L}from"./Selectbox-B8smxjHz.js";import{R as T}from"./RadioGroup-C76Nbwlc.js";import{T as W}from"./Textarea-C0bhMWqi.js";import{S as H}from"./Switch-BX1fSdSz.js";import{G as j}from"./Grid-CNBZsbp7.js";import{P as r}from"./Paragraph-kgJRGbQb.js";import{A as B}from"./Alert-64sJMMYJ.js";import{I as R}from"./Icon-BvK10F-r.js";import{L as l}from"./FieldTemplate-BbvQ6Zi6.js";import{S}from"./Stats-186q8QBm.js";import{L as C,a as i}from"./List-KcuEucwN.js";import{S as v}from"./Sidebar-C6M7XHGn.js";import{S as p}from"./Skeleton-vfcNngRE.js";import{G as P}from"./Group-hKGQiioM.js";const D={title:"Patterns/Recipes",parameters:{layout:"fullscreen"}},m={render:()=>e.jsx(I,{style:{height:"100vh",backgroundColor:"var(--wim-color-surface)"},children:e.jsx(c,{style:{width:"400px",padding:"32px",border:"1px solid",borderColor:"var(--wim-color-border-secondary)"},children:e.jsxs(n,{gap:"xl",children:[e.jsxs(n,{align:"center",gap:"md",children:[e.jsx(t,{tag:"h2",size:"xl",style:{lineHeight:1},children:"Welcome back"}),e.jsx(r,{content:"Please enter your details to sign in",color:"deepgray",size:"small"})]}),e.jsx("form",{onSubmit:o=>o.preventDefault(),children:e.jsxs(n,{gap:"lg",children:[e.jsx(l,{label:"Email",htmlFor:"login-email",children:e.jsx(d,{id:"login-email",placeholder:"Enter your email",fullWidth:!0})}),e.jsx(l,{label:"Password",htmlFor:"login-password",children:e.jsx(d,{id:"login-password",type:"password",placeholder:"••••••••",fullWidth:!0})}),e.jsxs(n,{direction:"row",justify:"space-between",align:"center",children:[e.jsxs("label",{htmlFor:"remember-me",style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.875rem",cursor:"pointer",color:"var(--wim-color-text-secondary)"},children:[e.jsx(N,{id:"remember-me"}),"Remember me"]}),e.jsx(s,{href:"#",style:{fontSize:"0.875rem"},children:"Forgot password?"})]}),e.jsxs(n,{gap:"sm",children:[e.jsx(a,{priority:"primary",style:{width:"100%"},label:"Sign In"}),e.jsx(a,{priority:"secondary",style:{width:"100%"},onClick:()=>{},label:"Sign in with Google"})]})]})}),e.jsxs(n,{direction:"row",justify:"center",gap:"2xs",children:[e.jsx(r,{content:"Don't have an account?",size:"small",color:"gray"}),e.jsx(s,{href:"#",style:{fontSize:"0.875rem"},children:"Sign up"})]})]})})})},h={render:()=>e.jsxs("div",{style:{minHeight:"400px",backgroundColor:"var(--wim-color-surface)"},children:[e.jsx("style",{children:`
                @media (max-width: 768px) {
                    .desktop-only { display: none !important; }
                    .mobile-only { display: block !important; }
                    .header-search { width: 100% !important; max-width: 160px; }
                }
                @media (min-width: 769px) {
                    .mobile-only { display: none !important; }
                    .header-search { width: 240px; }
                }
            `}),e.jsxs(w,{bordered:!0,sticky:!0,background:"primary",style:{padding:"0 24px"},children:[e.jsxs(w.Section,{align:"start",style:{gap:"16px",flex:1,overflow:"hidden"},children:[e.jsx("button",{"aria-label":"Toggle Menu",className:"mobile-only",style:{background:"none",border:"none",fontSize:"20px",cursor:"pointer",padding:"8px"},children:"☰"}),e.jsxs(n,{direction:"row",align:"center",gap:"sm",style:{flexShrink:0},children:[e.jsx("div",{style:{width:"32px",height:"32px",backgroundColor:"var(--color-primary)",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-text-on-primary)",fontWeight:"bold"},children:"W"}),e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:"bold",color:"var(--wim-color-text-primary)"},children:"WIM UI"})]}),e.jsxs(n,{as:"nav",direction:"row",gap:"lg",className:"desktop-only",style:{marginLeft:"32px"},children:[e.jsx(s,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:"Dashboard"}),e.jsx(s,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:"Projects"}),e.jsx(s,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:"Team"}),e.jsx(s,{href:"#",priority:"secondary",style:{color:"inherit",textDecoration:"none"},children:"Settings"})]})]}),e.jsxs(w.Section,{align:"end",style:{gap:"16px",flexShrink:0},children:[e.jsx("div",{className:"header-search",children:e.jsx(d,{placeholder:"Search...",fullWidth:!0,leftIcon:"SearchIcon"})}),e.jsx(g,{orientation:"vertical",style:{height:"24px"}}),e.jsxs("div",{style:{position:"relative",cursor:"pointer",display:"flex",alignItems:"center"},children:[e.jsx(R,{name:"BellIcon",size:"medium",color:"secondary","aria-label":"Notifications"}),e.jsx(b,{status:"secondary",size:"small",content:"3",style:{position:"absolute",top:"-4px",right:"-4px",minWidth:"16px",height:"16px",padding:0}})]}),e.jsxs(n,{direction:"row",align:"center",gap:"sm",style:{cursor:"pointer"},children:[e.jsx(z,{size:"medium"}),e.jsxs(n,{gap:"none",className:"desktop-only",children:[e.jsx("span",{style:{fontSize:"0.875rem",fontWeight:600,color:"var(--wim-color-text-primary)"},children:"John Doe"}),e.jsx("span",{style:{fontSize:"0.75rem",color:"var(--wim-color-text-secondary)"},children:"Admin"})]})]})]})]}),e.jsx(k,{style:{padding:"32px"},children:e.jsxs(n,{gap:"xl",children:[e.jsx(t,{tag:"h2",size:"xl",children:"Dashboard Overview"}),e.jsx(j,{cols:"repeat(auto-fit, minmax(280px, 1fr))",gap:24,justify:"center",children:[1,2,3].map(o=>e.jsxs(S,{style:{border:"1px solid",borderColor:"var(--wim-color-border-secondary)"},children:[e.jsxs(n,{justify:"space-between",align:"center",direction:"row",children:[e.jsx(S.Label,{children:"Total Revenue"}),e.jsx(b,{status:"neutral",content:"+12.5%",size:"small"})]}),e.jsx(S.Value,{children:e.jsx(t,{tag:"h3",size:"xl",style:{whiteSpace:"nowrap"},children:"$45,231.89"})}),e.jsx(S.Description,{children:"Compared to last month"})]},o))})]})})]})},x={render:()=>e.jsx(I,{style:{backgroundColor:"var(--wim-color-surface)",padding:"20px"},children:e.jsxs(c,{style:{maxWidth:"1000px",width:"100%",padding:"0",overflow:"hidden",border:"1px solid",borderColor:"var(--wim-color-border-secondary)"},children:[e.jsxs("div",{style:{padding:"24px",borderBottom:"1px solid var(--wim-color-border-secondary)"},children:[e.jsx(t,{tag:"h2",size:"lg",children:"Edit Profile"}),e.jsx(r,{content:"Manage your public profile and settings",color:"deepgray",style:{marginTop:"4px"}})]}),e.jsxs(j,{cols:{base:1,md:"250px 1fr"},gap:0,style:{minHeight:"600px"},children:[e.jsx("div",{style:{borderRight:"1px solid var(--wim-color-border-secondary)",backgroundColor:"var(--wim-color-surface)"},children:e.jsx("div",{style:{padding:"24px"},children:e.jsxs(n,{gap:"sm",align:"stretch",children:[e.jsx(v.Item,{active:!0,children:"General Info"}),e.jsx(v.Item,{children:"Account Security"}),e.jsx(v.Item,{children:"Notifications"}),e.jsx(v.Item,{children:"Billing"})]})})}),e.jsx("div",{style:{padding:"32px",overflowX:"hidden"},children:e.jsx("form",{onSubmit:o=>o.preventDefault(),children:e.jsxs(n,{gap:"xl",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px",flexWrap:"wrap"},children:[e.jsx(z,{size:"large",style:{width:"80px",height:"80px",fontSize:"2rem"}}),e.jsxs(n,{gap:"xs",children:[e.jsx(t,{tag:"h3",size:"sm",children:"Profile Picture"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{size:"small",priority:"secondary",label:"Change"}),e.jsx(a,{size:"small",priority:"tertiary",label:"Remove"})]})]})]}),e.jsx(g,{}),e.jsxs(n,{gap:"2xl",children:[e.jsx(t,{tag:"h3",size:"md",children:"Personal Information"}),e.jsxs(n,{gap:"lg",children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"24px"},children:[e.jsx(l,{label:"First Name",htmlFor:"profile-first-name",children:e.jsx(d,{id:"profile-first-name",defaultValue:"John",fullWidth:!0})}),e.jsx(l,{label:"Last Name",htmlFor:"profile-last-name",children:e.jsx(d,{id:"profile-last-name",defaultValue:"Doe",fullWidth:!0})})]}),e.jsx(l,{label:"Email Address",htmlFor:"profile-email",children:e.jsx(d,{id:"profile-email",type:"email",defaultValue:"john.doe@example.com",fullWidth:!0})}),e.jsxs(l,{label:"Bio",htmlFor:"profile-bio",children:[e.jsx(W,{id:"profile-bio",placeholder:"Tell us a little about yourself",rows:4,fullWidth:!0,defaultValue:"I am a software engineer based in Tokyo."}),e.jsx(r,{content:"0 / 500 characters",size:"ex-small",color:"gray",style:{textAlign:"right"}})]})]})]}),e.jsx(g,{}),e.jsxs(n,{gap:"2xl",children:[e.jsx(t,{tag:"h3",size:"md",children:"Regional Settings"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"24px"},children:[e.jsx(L,{label:"Language",options:[{label:"English",value:"en"},{label:"Japanese",value:"ja"},{label:"Spanish",value:"es"}],defaultValue:"en"}),e.jsx(L,{label:"Timezone",options:[{label:"UTC",value:"utc"},{label:"JST (Japan Standard Time)",value:"jst"},{label:"EST (Eastern Standard Time)",value:"est"}],defaultValue:"jst"})]})]}),e.jsx(g,{}),e.jsxs(n,{gap:"2xl",children:[e.jsx(t,{tag:"h3",size:"md",children:"Preferences"}),e.jsxs(n,{gap:"lg",children:[e.jsx(l,{label:"Visibility",children:e.jsx(T,{name:"visibility",defaultValue:"public",options:[{label:"Public - Everyone can see your profile",value:"public"},{label:"Private - Only you can see your profile",value:"private"},{label:"Friends - Only friends can see your profile",value:"friends"}]})}),e.jsx(l,{label:"Notifications",children:e.jsxs(n,{gap:"sm",children:[e.jsx(H,{label:"Email Notifications",defaultChecked:!0}),e.jsx(H,{label:"Push Notifications"})]})})]})]}),e.jsx(g,{}),e.jsxs(P,{justify:"end",gap:"md",children:[e.jsx(a,{priority:"tertiary",label:"Cancel"}),e.jsx(a,{priority:"primary",label:"Save Changes"})]})]})})})]})]})})},y={render:()=>e.jsxs(k,{style:{padding:"80px 24px",background:"#fff"},children:[e.jsxs(n,{align:"center",gap:"lg",style:{marginBottom:"64px"},children:[e.jsx(b,{status:"primary",content:"PRICING PLANS"}),e.jsxs(n,{align:"center",gap:"3xl",children:[e.jsx(t,{tag:"h2",size:"xl",align:"center",children:"Choose the right plan for you"}),e.jsx(k,{size:"sm",children:e.jsx(r,{content:"Simple, transparent pricing that grows with your team. No hidden fees.",color:"deepgray",style:{textAlign:"center"}})})]})]}),e.jsxs(j,{cols:{base:1,md:3},gap:{base:32,lg:48,xl:64},style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsx(c,{style:{padding:"32px",border:"2px solid",borderColor:"var(--wim-color-border-secondary)"},children:e.jsxs(n,{gap:"lg",style:{height:"100%"},children:[e.jsxs(n,{gap:"lg",align:"center",style:{flex:1},children:[e.jsxs(n,{gap:"xs",align:"center",children:[e.jsx("div",{style:{minHeight:"48px",display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e.jsx(t,{tag:"h3",size:"sm",align:"center",style:{margin:0},children:"Starter"})}),e.jsxs(n,{direction:"row",align:"baseline",gap:"none",justify:"center",style:{whiteSpace:"nowrap"},children:[e.jsx(t,{tag:"h4",size:"2xl",style:{whiteSpace:"nowrap"},children:"$0"}),e.jsx(r,{content:"/month",color:"gray",size:"small",style:{whiteSpace:"nowrap"}})]})]}),e.jsx("div",{style:{minHeight:"40px",display:"flex",alignItems:"center"},children:e.jsx(r,{content:"Perfect for individuals just getting started.",size:"small",color:"deepgray",style:{textAlign:"center",margin:0}})}),e.jsxs(C,{spacing:"normal",style:{marginTop:"24px",alignSelf:"stretch"},children:[e.jsx(i,{iconName:"CheckIcon",children:"Core components"}),e.jsx(i,{iconName:"CheckIcon",children:"Basic documentation"}),e.jsx(i,{iconName:"CheckIcon",children:"Community support"}),e.jsx(i,{iconName:"CheckIcon",className:"wim-color-gray",style:{opacity:.5},children:"Advanced patterns"})]})]}),e.jsx(a,{priority:"secondary",label:"Get Started",style:{width:"100%"}})]})}),e.jsxs(c,{style:{padding:"32px",border:"2px solid #3b82f6",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"-14px",left:"50%",transform:"translateX(-50%)"},children:e.jsx(b,{status:"primary",content:"MOST POPULAR",size:"small"})}),e.jsxs(n,{gap:"lg",style:{height:"100%"},children:[e.jsxs(n,{gap:"lg",align:"center",style:{flex:1},children:[e.jsxs(n,{gap:"xs",align:"center",children:[e.jsx("div",{style:{minHeight:"48px",display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e.jsx(t,{tag:"h3",size:"sm",align:"center",style:{margin:0},children:"Professional"})}),e.jsxs(n,{direction:"row",align:"baseline",gap:"none",justify:"center",style:{whiteSpace:"nowrap"},children:[e.jsx(t,{tag:"h4",size:"2xl",style:{whiteSpace:"nowrap"},children:"$29"}),e.jsx(r,{content:"/month",color:"gray",size:"small",style:{whiteSpace:"nowrap"}})]})]}),e.jsx("div",{style:{minHeight:"40px",display:"flex",alignItems:"center"},children:e.jsx(r,{content:"Advanced features for growing teams.",size:"small",color:"deepgray",style:{textAlign:"center",margin:0}})}),e.jsxs(C,{spacing:"normal",style:{marginTop:"24px",alignSelf:"stretch"},children:[e.jsx(i,{iconName:"CheckIcon",children:"Everything in Starter"}),e.jsx(i,{iconName:"CheckIcon",children:"Advanced patterns"}),e.jsx(i,{iconName:"CheckIcon",children:"Priority email support"}),e.jsx(i,{iconName:"CheckIcon",children:"Custom themes"})]})]}),e.jsx(a,{priority:"primary",label:"Upgrade to Pro",style:{width:"100%"}})]})]}),e.jsx(c,{style:{padding:"32px",border:"2px solid",borderColor:"var(--wim-color-border-secondary)"},children:e.jsxs(n,{gap:"lg",style:{height:"100%"},children:[e.jsxs(n,{gap:"lg",align:"center",style:{flex:1},children:[e.jsxs(n,{gap:"xs",align:"center",children:[e.jsx("div",{style:{minHeight:"48px",display:"flex",alignItems:"flex-start",justifyContent:"center"},children:e.jsx(t,{tag:"h3",size:"sm",align:"center",style:{margin:0},children:"Enterprise"})}),e.jsxs(n,{direction:"row",align:"baseline",gap:"none",justify:"center",style:{whiteSpace:"nowrap"},children:[e.jsx(t,{tag:"h4",size:"2xl",style:{whiteSpace:"nowrap"},children:"$99"}),e.jsx(r,{content:"/month",color:"gray",size:"small",style:{whiteSpace:"nowrap"}})]})]}),e.jsx("div",{style:{minHeight:"40px",display:"flex",alignItems:"center"},children:e.jsx(r,{content:"Custom solutions for large organizations.",size:"small",color:"deepgray",style:{textAlign:"center",margin:0}})}),e.jsxs(C,{spacing:"normal",style:{marginTop:"24px",alignSelf:"stretch"},children:[e.jsx(i,{iconName:"CheckIcon",children:"Custom infrastructure"}),e.jsx(i,{iconName:"CheckIcon",children:"SSO & SAML"}),e.jsx(i,{iconName:"CheckIcon",children:"Dedicated account manager"})]})]}),e.jsx(a,{priority:"secondary",label:"Contact Sales",style:{width:"100%"}})]})})]})]})},u={render:()=>e.jsx("div",{style:{minHeight:"600px",display:"flex",alignItems:"center",background:"linear-gradient(135deg, var(--color-primary-light, #f0f7ff) 0%, var(--wim-color-surface) 100%)",padding:"80px 24px"},children:e.jsx(k,{children:e.jsxs(j,{cols:{base:1,md:"1fr 1fr"},gap:48,align:"center",children:[e.jsxs(n,{gap:"3xl",children:[e.jsxs(n,{gap:"3xl",children:[e.jsx(b,{status:"primary",content:"v2.0 is now available",style:{width:"fit-content"}}),e.jsxs(n,{gap:"2xl",children:[e.jsx(t,{tag:"h1",size:"2xl",style:{lineHeight:"1",fontWeight:"800"},children:"Build beautiful interfaces faster than ever."}),e.jsx(r,{content:"WIM UI provides a comprehensive set of premium components and tools to help you create stunning user experiences in Record time.",size:"large",color:"deepgray"})]})]}),e.jsxs(P,{gap:"xl",wrap:"wrap",justify:"evenly",children:[e.jsx(a,{priority:"primary",size:"medium",label:"Get Started For Free"}),e.jsx(a,{priority:"secondary",size:"medium",label:"View Documentation"})]}),e.jsxs(n,{direction:"row",align:"center",gap:"md",children:[e.jsx(A,{size:"small",children:[1,2,3,4].map(o=>e.jsx(z,{},o))}),e.jsx(r,{content:"Join 10,000+ developers",size:"small",color:"deepgray"})]})]}),e.jsx("div",{style:{position:"relative"},children:e.jsx(c,{style:{padding:"0",borderRadius:"24px",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",overflow:"hidden"},children:e.jsxs(n,{gap:"none",children:[e.jsxs(n,{direction:"row",gap:"xs",align:"center",style:{height:"32px",background:"#f3f4f6",borderBottom:"1px solid #e5e7eb",padding:"0 12px"},children:[e.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#ef4444"}}),e.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#f59e0b"}}),e.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#10b981"}})]}),e.jsx("div",{style:{padding:"24px"},children:e.jsxs(n,{gap:"lg",children:[e.jsx(p,{variant:"text",height:20,width:"100%"}),e.jsx(p,{variant:"text",height:20,width:"80%"}),e.jsxs(j,{cols:2,gap:16,children:[e.jsx(p,{variant:"rect",height:100,style:{borderRadius:"8px"}}),e.jsx(p,{variant:"rect",height:100,style:{borderRadius:"8px"}})]}),e.jsx(p,{variant:"rect",height:80,width:"100%",style:{borderRadius:"4px"}})]})})]})})})]})})})},f={render:()=>e.jsx(I,{style:{height:"100vh",backgroundColor:"var(--wim-color-surface)",padding:"24px"},children:e.jsxs(n,{align:"center",gap:"5xl",style:{maxWidth:"600px",textAlign:"center"},children:[e.jsx("p",{"aria-hidden":"true",style:{fontSize:"120px",fontWeight:"900",color:"var(--wim-color-border-secondary)",lineHeight:"1",margin:"0"},children:"404"}),e.jsxs(n,{gap:"2xl",align:"center",children:[e.jsx(t,{tag:"h1",size:"xl",align:"center",children:"Something's missing."}),e.jsx(r,{content:"The page you are looking for doesn't exist or has been moved. Check the URL or head back home.",color:"gray",style:{textAlign:"center"}})]}),e.jsx(B,{status:"info",title:"Need help?",style:{textAlign:"left"},children:"Check our status page for any ongoing maintenance."}),e.jsxs(n,{direction:{base:"column",sm:"row"},gap:"xl",children:[e.jsx(a,{priority:"primary",label:"Back to Homepage"}),e.jsx(a,{priority:"secondary",label:"Contact Support"})]})]})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Center style={{
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
              Welcome back
            </Heading>
            <Paragraph content="Please enter your details to sign in" color="deepgray" size="small" />
          </Stack>

          <form onSubmit={e => e.preventDefault()}>
            <Stack gap="lg">
              <Label label="Email" htmlFor="login-email">
                <Input id="login-email" placeholder="Enter your email" fullWidth />
              </Label>

              <Label label="Password" htmlFor="login-password">
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
                  Remember me
                </label>
                <Link href="#" style={{
                fontSize: "0.875rem"
              }}>
                  Forgot password?
                </Link>
              </Stack>

              <Stack gap="sm">
                <Button priority="primary" style={{
                width: "100%"
              }} label="Sign In" />

                <Button priority="secondary" style={{
                width: "100%"
              }} onClick={() => {}} label="Sign in with Google" />
              </Stack>
            </Stack>
          </form>

          <Stack direction="row" justify="center" gap="2xs">
            <Paragraph content="Don't have an account?" size="small" color="gray" />
            <Link href="#" style={{
            fontSize: "0.875rem"
          }}>
              Sign up
            </Link>
          </Stack>
        </Stack>
      </Card>
    </Center>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
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
            backgroundColor: "var(--color-primary)",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-on-primary)",
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
              Dashboard
            </Link>
            <Link href="#" priority="secondary" style={{
            color: "inherit",
            textDecoration: "none"
          }}>
              Projects
            </Link>
            <Link href="#" priority="secondary" style={{
            color: "inherit",
            textDecoration: "none"
          }}>
              Team
            </Link>
            <Link href="#" priority="secondary" style={{
            color: "inherit",
            textDecoration: "none"
          }}>
              Settings
            </Link>
          </Stack>
        </Header.Section>

        <Header.Section align="end" style={{
        gap: "16px",
        flexShrink: 0
      }}>
          <div className="header-search">
            <Input placeholder="Search..." fullWidth leftIcon="SearchIcon" />
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
            <Icon name="BellIcon" size="medium" color="secondary" aria-label="Notifications" />
            <Badge status="secondary" size="small" content="3" style={{
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
            <Avatar size="medium" />
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
                Admin
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
            Dashboard Overview
          </Heading>
          <Grid cols="repeat(auto-fit, minmax(280px, 1fr))" gap={24} justify="center">
            {[1, 2, 3].map(i => <Stats key={i} style={{
            border: "1px solid",
            borderColor: "var(--wim-color-border-secondary)"
          }}>
                <Stack justify="space-between" align="center" direction="row">
                  <Stats.Label>Total Revenue</Stats.Label>
                  <Badge status="neutral" content="+12.5%" size="small" />
                </Stack>
                <Stats.Value>
                  <Heading tag="h3" size="xl" style={{
                whiteSpace: "nowrap"
              }}>
                    $45,231.89
                  </Heading>
                </Stats.Value>
                <Stats.Description>Compared to last month</Stats.Description>
              </Stats>)}
          </Grid>
        </Stack>
      </Container>
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Center style={{
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
            Edit Profile
          </Heading>
          <Paragraph content="Manage your public profile and settings" color="deepgray" style={{
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
                <Sidebar.Item active>General Info</Sidebar.Item>
                <Sidebar.Item>Account Security</Sidebar.Item>
                <Sidebar.Item>Notifications</Sidebar.Item>
                <Sidebar.Item>Billing</Sidebar.Item>
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
                  <Avatar size="large" style={{
                  width: "80px",
                  height: "80px",
                  fontSize: "2rem"
                }} />
                  <Stack gap="xs">
                    <Heading tag="h3" size="sm">
                      Profile Picture
                    </Heading>
                    <div style={{
                    display: "flex",
                    gap: "12px"
                  }}>
                      <Button size="small" priority="secondary" label="Change" />
                      <Button size="small" priority="tertiary" label="Remove" />
                    </div>
                  </Stack>
                </div>

                <Divider />

                {/* Personal Information */}
                <Stack gap="2xl">
                  <Heading tag="h3" size="md">
                    Personal Information
                  </Heading>

                  <Stack gap="lg">
                    <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "24px"
                  }}>
                      <Label label="First Name" htmlFor="profile-first-name">
                        <Input id="profile-first-name" defaultValue="John" fullWidth />
                      </Label>
                      <Label label="Last Name" htmlFor="profile-last-name">
                        <Input id="profile-last-name" defaultValue="Doe" fullWidth />
                      </Label>
                    </div>

                    <Label label="Email Address" htmlFor="profile-email">
                      <Input id="profile-email" type="email" defaultValue="john.doe@example.com" fullWidth />
                    </Label>

                    <Label label="Bio" htmlFor="profile-bio">
                      <Textarea id="profile-bio" placeholder="Tell us a little about yourself" rows={4} fullWidth defaultValue="I am a software engineer based in Tokyo." />
                      <Paragraph content="0 / 500 characters" size="ex-small" color="gray" style={{
                      textAlign: "right"
                    }} />
                    </Label>
                  </Stack>
                </Stack>

                <Divider />

                {/* Regional Settings */}
                <Stack gap="2xl">
                  <Heading tag="h3" size="md">
                    Regional Settings
                  </Heading>

                  <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "24px"
                }}>
                    <Selectbox label="Language" options={[{
                    label: "English",
                    value: "en"
                  }, {
                    label: "Japanese",
                    value: "ja"
                  }, {
                    label: "Spanish",
                    value: "es"
                  }]} defaultValue="en" />
                    <Selectbox label="Timezone" options={[{
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
                    Preferences
                  </Heading>

                  <Stack gap="lg">
                    <Label label="Visibility">
                      <RadioGroup name="visibility" defaultValue="public" options={[{
                      label: "Public - Everyone can see your profile",
                      value: "public"
                    }, {
                      label: "Private - Only you can see your profile",
                      value: "private"
                    }, {
                      label: "Friends - Only friends can see your profile",
                      value: "friends"
                    }]} />
                    </Label>

                    <Label label="Notifications">
                      <Stack gap="sm">
                        <Switch label="Email Notifications" defaultChecked />
                        <Switch label="Push Notifications" />
                      </Stack>
                    </Label>
                  </Stack>
                </Stack>

                <Divider />
                <Group justify="end" gap="md">
                  <Button priority="tertiary" label="Cancel" />
                  <Button priority="primary" label="Save Changes" />
                </Group>
              </Stack>
            </form>
          </div>
        </Grid>
      </Card>
    </Center>
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Container style={{
    padding: "80px 24px",
    background: "#fff"
  }}>
      <Stack align="center" gap="lg" style={{
      marginBottom: "64px"
    }}>
        <Badge status="primary" content="PRICING PLANS" />
        <Stack align="center" gap="3xl">
          <Heading tag="h2" size="xl" align="center">
            Choose the right plan for you
          </Heading>
          <Container size="sm">
            <Paragraph content="Simple, transparent pricing that grows with your team. No hidden fees." color="deepgray" style={{
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
                    Starter
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
                  <Paragraph content="/month" color="gray" size="small" style={{
                  whiteSpace: "nowrap"
                }} />
                </Stack>
              </Stack>
              <div style={{
              minHeight: "40px",
              display: "flex",
              alignItems: "center"
            }}>
                <Paragraph content="Perfect for individuals just getting started." size="small" color="deepgray" style={{
                textAlign: "center",
                margin: 0
              }} />
              </div>

              <List spacing="normal" style={{
              marginTop: "24px",
              alignSelf: "stretch"
            }}>
                <ListItem iconName="CheckIcon">Core components</ListItem>
                <ListItem iconName="CheckIcon">Basic documentation</ListItem>
                <ListItem iconName="CheckIcon">Community support</ListItem>
                <ListItem iconName="CheckIcon" className="wim-color-gray" style={{
                opacity: 0.5
              }}>
                  Advanced patterns
                </ListItem>
              </List>
            </Stack>

            <Button priority="secondary" label="Get Started" style={{
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
            <Badge status="primary" content="MOST POPULAR" size="small" />
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
                    Professional
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
                  <Paragraph content="/month" color="gray" size="small" style={{
                  whiteSpace: "nowrap"
                }} />
                </Stack>
              </Stack>
              <div style={{
              minHeight: "40px",
              display: "flex",
              alignItems: "center"
            }}>
                <Paragraph content="Advanced features for growing teams." size="small" color="deepgray" style={{
                textAlign: "center",
                margin: 0
              }} />
              </div>

              <List spacing="normal" style={{
              marginTop: "24px",
              alignSelf: "stretch"
            }}>
                <ListItem iconName="CheckIcon">Everything in Starter</ListItem>
                <ListItem iconName="CheckIcon">Advanced patterns</ListItem>
                <ListItem iconName="CheckIcon">Priority email support</ListItem>
                <ListItem iconName="CheckIcon">Custom themes</ListItem>
              </List>
            </Stack>

            <Button priority="primary" label="Upgrade to Pro" style={{
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
                    Enterprise
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
                  <Paragraph content="/month" color="gray" size="small" style={{
                  whiteSpace: "nowrap"
                }} />
                </Stack>
              </Stack>
              <div style={{
              minHeight: "40px",
              display: "flex",
              alignItems: "center"
            }}>
                <Paragraph content="Custom solutions for large organizations." size="small" color="deepgray" style={{
                textAlign: "center",
                margin: 0
              }} />
              </div>

              <List spacing="normal" style={{
              marginTop: "24px",
              alignSelf: "stretch"
            }}>
                <ListItem iconName="CheckIcon">Custom infrastructure</ListItem>
                <ListItem iconName="CheckIcon">SSO & SAML</ListItem>
                <ListItem iconName="CheckIcon">
                  Dedicated account manager
                </ListItem>
              </List>
            </Stack>

            <Button priority="secondary" label="Contact Sales" style={{
            width: "100%"
          }} />
          </Stack>
        </Card>
      </Grid>
    </Container>
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(135deg, var(--color-primary-light, #f0f7ff) 0%, var(--wim-color-surface) 100%)",
    padding: "80px 24px"
  }}>
      <Container>
        <Grid cols={{
        base: 1,
        md: "1fr 1fr"
      }} gap={48} align="center">
          <Stack gap="3xl">
            <Stack gap="3xl">
              <Badge status="primary" content="v2.0 is now available" style={{
              width: "fit-content"
            }} />
              <Stack gap="2xl">
                <Heading tag="h1" size="2xl" style={{
                lineHeight: "1",
                fontWeight: "800"
              }}>
                  Build beautiful interfaces faster than ever.
                </Heading>
                <Paragraph content="WIM UI provides a comprehensive set of premium components and tools to help you create stunning user experiences in Record time." size="large" color="deepgray" />
              </Stack>
            </Stack>

            <Group gap="xl" wrap="wrap" justify="evenly">
              <Button priority="primary" size="medium" label="Get Started For Free" />
              <Button priority="secondary" size="medium" label="View Documentation" />
            </Group>

            <Stack direction="row" align="center" gap="md">
              <AvatarGroup size="small">
                {[1, 2, 3, 4].map(i => <Avatar key={i} />)}
              </AvatarGroup>
              <Paragraph content="Join 10,000+ developers" size="small" color="deepgray" />
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
    </div>
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Center style={{
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
            Something&apos;s missing.
          </Heading>
          <Paragraph content="The page you are looking for doesn't exist or has been moved. Check the URL or head back home." color="gray" style={{
          textAlign: "center"
        }} />
        </Stack>

        <Alert status="info" title="Need help?" style={{
        textAlign: "left"
      }}>
          Check our status page for any ongoing maintenance.
        </Alert>

        <Stack direction={{
        base: "column",
        sm: "row"
      }} gap="xl">
          <Button priority="primary" label="Back to Homepage" />
          <Button priority="secondary" label="Contact Support" />
        </Stack>
      </Stack>
    </Center>
}`,...f.parameters?.docs?.source}}};const G=["LoginForm","DashboardHeader","UserProfileForm","PricingTable","HeroSection","ErrorPage"],he=Object.freeze(Object.defineProperty({__proto__:null,DashboardHeader:h,ErrorPage:f,HeroSection:u,LoginForm:m,PricingTable:y,UserProfileForm:x,__namedExportsOrder:G,default:D},Symbol.toStringTag,{value:"Module"}));export{h as D,f as E,u as H,m as L,he as P,x as U,y as a};
