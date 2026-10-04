"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Box-lSx-_C-t.js";import{n as a,t as o}from"./Center-DWM_Hh6e.js";import{n as ee,t as s}from"./Divider-CVU4obg1.js";import{n as c,t as l}from"./Grid-B8FTnlHA.js";import{n as u,t as d}from"./Group-DVFOQHnC.js";import{n as te,t as ne}from"./HamburgerMenu-HMBO8Uit.js";import{n as f,t as p}from"./Stack-D0pTsuU-.js";import{n as re,t as ie}from"./Sidebar-D_luKnvC.js";import{n as m,t as h}from"./Card-BX8yw3HV.js";import{n as g,t as _}from"./Button-DrO46Brn.js";import{n as v,t as y}from"./Badge-CfPEoJgu.js";import{n as b,t as x}from"./Text-8oARqUeB.js";import{n as ae,t as oe}from"./Checkbox-C6MCvMe9.js";import{n as S,t as se}from"./Input-Cx7cDmF1.js";import{n as ce,t as le}from"./PasswordInput-AqlojnYq.js";import{n as ue,t as de}from"./SearchInput-DxowftA6.js";import{n as fe,t as pe}from"./Select-DCLSdcqg.js";import{n as me,t as he}from"./Switch-BG9TlH9E.js";import{n as ge,t as _e}from"./Link-CJxuiLm4.js";import{n as ve,t as ye}from"./Stepper-DxP9dpnW.js";import{n as C,t as w}from"./Table-C9i7rzu2.js";import{n as be,t as T}from"./Stats-BDbMgWPh.js";import{n as E,t as D}from"./Title-D19NtK2q.js";import{n as xe,t as Se}from"./Code-B3uCQtMh.js";import{n as Ce,t as we}from"./PromptInput-hU8vmY8F.js";import{n as O,r as Te,t as Ee}from"./ThoughtProcess-BI-foTX5.js";import{n as De,t as Oe}from"./AIResponseFeedback-DwdxEQuR.js";import{n as ke,r as Ae}from"./SourceCitation-D3cDYtbP.js";import{n as je,t as Me}from"./CodeBlock-B29-Ig7c.js";import{n as Ne,t as Pe}from"./AgentStatus-GKGkhdnH.js";import{n as Fe,t as Ie}from"./ModelSelector-B4GWpo9M.js";import{n as Le,t as Re}from"./ThreadList-DAxmtKPc.js";import{n as ze,t as Be}from"./UsageMeter-Bfqp1RIG.js";import{a as k,i as Ve,n as He,o as Ue,s as We}from"./ChatUI-CIenbD5C.js";var A;function j(){return(j=e((()=>{A=`0.47.8`})))()}function M(){return(0,N.jsxs)(p,{gap:`lg`,children:[(0,N.jsx)(D,{tag:`h2`,size:`lg`,children:`Billing`}),(0,N.jsxs)(l,{cols:{base:1,sm:2,lg:3},gap:`md`,children:[(0,N.jsxs)(T,{variant:`outline`,children:[(0,N.jsx)(T.Label,{children:`MRR`}),(0,N.jsx)(T.Value,{children:`$48,210`}),(0,N.jsx)(T.Trend,{children:`+6.4%`})]}),(0,N.jsxs)(T,{variant:`outline`,children:[(0,N.jsx)(T.Label,{children:`Active workspaces`}),(0,N.jsx)(T.Value,{children:`1,204`}),(0,N.jsx)(T.Description,{children:`176 idle over 30 days`})]}),(0,N.jsxs)(T,{variant:`outline`,children:[(0,N.jsx)(T.Label,{children:`Failed webhooks`}),(0,N.jsx)(T.Value,{children:`137`}),(0,N.jsx)(T.Description,{children:`+23 today`})]})]}),(0,N.jsxs)(w,{card:!0,hoverable:!0,fullWidth:!0,mobileCard:!0,children:[(0,N.jsx)(w.Header,{children:(0,N.jsxs)(w.Row,{children:[(0,N.jsx)(w.Head,{children:`Customer`}),(0,N.jsx)(w.Head,{children:`Plan`}),(0,N.jsx)(w.Head,{children:`Amount`}),(0,N.jsx)(w.Head,{children:`Status`})]})}),(0,N.jsx)(w.Body,{children:P.map(e=>(0,N.jsxs)(w.Row,{children:[(0,N.jsx)(w.Cell,{label:`Customer`,children:e.name}),(0,N.jsx)(w.Cell,{label:`Plan`,children:e.plan??(0,N.jsx)(x,{color:`text-tertiary`,children:`—`})}),(0,N.jsx)(w.Cell,{label:`Amount`,children:e.amount}),(0,N.jsx)(w.Cell,{label:`Status`,children:(0,N.jsx)(y,{variant:`subtle`,intent:F[e.status],children:e.status})})]},e.id))})]})]})}var N,P,F;function I(){return(I=e((()=>{f(),c(),be(),C(),v(),E(),b(),N=n(),P=[{id:`in_9f2a`,name:`Marisol Okonkwo`,plan:`Scale`,amount:`$4,610.50`,status:`paid`},{id:`in_7b41`,name:`Dmitri Sørensen`,plan:`Enterprise`,amount:`$12,199.00`,status:`failed`},{id:`in_2a90`,name:`Thomas O'Reilly`,plan:null,amount:`$89.00`,status:`pending`}],F={paid:`success`,failed:`danger`,pending:`neutral`},M.__docgenInfo={description:``,methods:[],displayName:`BillingOverview`}})))()}var L;function R(){return(R=e((()=>{L=`import { Stack, Grid, Card, Stats, Table, Badge, Title, Text } from "wimui";

type Status = "paid" | "failed" | "pending";
type Row = {
  id: string;
  name: string;
  plan: string | null;
  amount: string;
  status: Status;
};

const rows: Row[] = [
  { id: "in_9f2a", name: "Marisol Okonkwo", plan: "Scale", amount: "$4,610.50", status: "paid" },
  { id: "in_7b41", name: "Dmitri Sørensen", plan: "Enterprise", amount: "$12,199.00", status: "failed" },
  { id: "in_2a90", name: "Thomas O'Reilly", plan: null, amount: "$89.00", status: "pending" }, // incomplete row
];

// Colour carries state only: paid and failed earn an intent, pending is the
// ordinary case. Leaving the intent undefined would fall back to primary and
// paint the ordinary case as loudly as the exceptions.
const statusIntent: Record<Status, "success" | "danger" | "neutral"> = {
  paid: "success",
  failed: "danger",
  pending: "neutral",
};

// One protagonist (the KPI row), a dense table below, tokens via props,
// jagged real data, and one deliberately incomplete row.
export default function BillingOverview() {
  return (
    <Stack gap="lg">
      <Title tag="h2" size="lg">Billing</Title>

      {/* Protagonist: KPI row. Uneven content per tile — not three clones.
          \`outline\` everywhere: one elevation stance per screen, and the table
          below is framed by a border too. Stats defaults to \`elevated\`. */}
      <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap="md">
        <Stats variant="outline">
          <Stats.Label>MRR</Stats.Label>
          <Stats.Value>$48,210</Stats.Value>
          <Stats.Trend>+6.4%</Stats.Trend>
        </Stats>
        <Stats variant="outline">
          <Stats.Label>Active workspaces</Stats.Label>
          <Stats.Value>1,204</Stats.Value>
          <Stats.Description>176 idle over 30 days</Stats.Description>
        </Stats>
        <Stats variant="outline">
          <Stats.Label>Failed webhooks</Stats.Label>
          <Stats.Value>137</Stats.Value>
          {/* Not a Trend: rising failures are bad, and Trend only pairs ↑ with
              the success colour. A plain description says it without lying. */}
          <Stats.Description>+23 today</Stats.Description>
        </Stats>
      </Grid>

      {/* Dense data region. \`card\` frames the table itself — wrapping it in a
          Card instead would stack the table's border on the last row's and put
          a 4px radius inside a 12px one. \`mobileCard\` + Cell \`label\` keep the
          four columns readable when the Playground card is narrow (T97). */}
      <Table card hoverable fullWidth mobileCard>
        <Table.Header>
          <Table.Row>
            <Table.Head>Customer</Table.Head>
            <Table.Head>Plan</Table.Head>
            <Table.Head>Amount</Table.Head>
            <Table.Head>Status</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((r) => (
            <Table.Row key={r.id}>
              <Table.Cell label="Customer">{r.name}</Table.Cell>
              <Table.Cell label="Plan">
                {r.plan ?? <Text color="text-tertiary">—</Text>}
              </Table.Cell>
              <Table.Cell label="Amount">{r.amount}</Table.Cell>
              <Table.Cell label="Status">
                <Badge variant="subtle" intent={statusIntent[r.status]}>{r.status}</Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Stack>
  );
}
`})))()}function z(){return(0,B.jsx)(o,{h:`100%`,p:`lg`,children:(0,B.jsx)(h,{padding:`lg`,variant:`outline`,style:{width:`min(380px, 100%)`},children:(0,B.jsxs)(p,{gap:`lg`,children:[(0,B.jsxs)(p,{gap:`2xs`,children:[(0,B.jsx)(D,{tag:`h1`,size:`md`,children:`Sign in to Larkfield`}),(0,B.jsx)(x,{color:`secondary`,children:`Use your work email — SSO is enabled for Enterprise workspaces.`})]}),(0,B.jsx)(`form`,{onSubmit:e=>e.preventDefault(),children:(0,B.jsxs)(p,{gap:`md`,children:[(0,B.jsx)(se,{label:`Work email`,type:`email`,placeholder:`you@company.com`,fullWidth:!0}),(0,B.jsx)(le,{label:`Password`,fullWidth:!0}),(0,B.jsxs)(d,{justify:`between`,align:`center`,children:[(0,B.jsx)(oe,{children:`Keep me signed in`}),(0,B.jsx)(_e,{href:`#`,priority:`secondary`,children:`Forgot password?`})]}),(0,B.jsx)(_,{type:`submit`,variant:`solid`,fullWidth:!0,children:`Sign in`})]})}),(0,B.jsxs)(x,{size:`sm`,color:`text-tertiary`,children:[`No account? `,(0,B.jsx)(_e,{href:`#`,children:`Start a 14-day trial`})]})]})})})}var B;function V(){return(V=e((()=>{a(),m(),f(),u(),E(),b(),S(),ce(),ae(),g(),ge(),B=n(),z.__docgenInfo={description:``,methods:[],displayName:`SignIn`}})))()}var H;function Ge(){return(Ge=e((()=>{H=`import { Center, Card, Stack, Group, Title, Text, Input, PasswordInput, Checkbox, Button, Link } from "wimui";

// A focused single-protagonist screen: one centered card, a left-aligned form.
// Not the generic badge → heading → two-buttons hero. Real product context.
export default function SignIn() {
  // \`h="100%"\` fills the host container when it has a height (the sandbox app
  // shell) and hugs its content when it does not (the docs preview).
  return (
    <Center h="100%" p="lg">
      <Card padding="lg" variant="outline" style={{ width: "min(380px, 100%)" }}>
        <Stack gap="lg">
          <Stack gap="2xs">
            <Title tag="h1" size="md">Sign in to Larkfield</Title>
            <Text color="secondary">Use your work email — SSO is enabled for Enterprise workspaces.</Text>
          </Stack>
          <form onSubmit={(e) => e.preventDefault()}>
            <Stack gap="md">
              <Input label="Work email" type="email" placeholder="you@company.com" fullWidth />
              <PasswordInput label="Password" fullWidth />
              <Group justify="between" align="center">
                <Checkbox>Keep me signed in</Checkbox>
                <Link href="#" priority="secondary">Forgot password?</Link>
              </Group>
              <Button type="submit" variant="solid" fullWidth>Sign in</Button>
            </Stack>
          </form>
          <Text size="sm" color="text-tertiary">
            No account? <Link href="#">Start a 14-day trial</Link>
          </Text>
        </Stack>
      </Card>
    </Center>
  );
}
`})))()}function Ke(){return(0,W.jsxs)(p,{gap:`lg`,style:{maxWidth:720},children:[(0,W.jsxs)(p,{gap:`2xs`,children:[(0,W.jsx)(D,{tag:`h1`,size:`lg`,children:`Notifications`}),(0,W.jsx)(x,{color:`secondary`,children:`Control what Larkfield emails you about. Changes apply immediately.`})]}),(0,W.jsx)(h,{padding:`lg`,variant:`outline`,children:(0,W.jsxs)(p,{gap:`md`,children:[(0,W.jsx)(U,{label:`Deliverability alerts`,hint:`Bounce-rate spikes and blocklist hits.`,children:e=>(0,W.jsx)(he,{defaultChecked:!0,...e})}),(0,W.jsx)(s,{}),(0,W.jsx)(U,{label:`Weekly summary`,hint:`Every Monday, 09:00 in your timezone.`,children:e=>(0,W.jsx)(he,{...e})}),(0,W.jsx)(s,{}),(0,W.jsx)(U,{label:`Digest timezone`,children:e=>(0,W.jsx)(pe,{...e,value:`jst`,options:[{label:`Asia/Tokyo (JST)`,value:`jst`},{label:`Europe/Berlin (CET)`,value:`cet`},{label:`UTC`,value:`utc`}]})})]})}),(0,W.jsxs)(d,{justify:`end`,gap:`sm`,children:[(0,W.jsx)(_,{variant:`ghost`,children:`Reset`}),(0,W.jsx)(_,{variant:`solid`,children:`Save changes`})]})]})}function U({label:e,hint:t,children:n}){let r=(0,qe.useId)(),i=`${r}-label`,a=`${r}-hint`;return(0,W.jsxs)(d,{justify:`between`,align:`center`,gap:`md`,children:[(0,W.jsxs)(p,{gap:`3xs`,children:[(0,W.jsx)(x,{id:i,weight:`medium`,children:e}),t?(0,W.jsx)(x,{id:a,size:`sm`,color:`secondary`,children:t}):null]}),n({"aria-labelledby":i,"aria-describedby":t?a:void 0})]})}var qe,W;function Je(){return(Je=e((()=>{qe=t(),f(),u(),E(),b(),m(),ee(),fe(),me(),g(),W=n(),Ke.__docgenInfo={description:``,methods:[],displayName:`NotificationSettings`}})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye=`import { useId } from "react";
import type React from "react";
import { Stack, Group, Title, Text, Card, Divider, Select, Switch, Button } from "wimui";

// Dense label-left / control-right rows grouped in one card, separated by
// Divider. Density comes from token gaps, not hardcoded spacing.
export default function NotificationSettings() {
  return (
    <Stack gap="lg" style={{ maxWidth: 720 }}>
      <Stack gap="2xs">
        <Title tag="h1" size="lg">Notifications</Title>
        <Text color="secondary">Control what Larkfield emails you about. Changes apply immediately.</Text>
      </Stack>

      <Card padding="lg" variant="outline">
        <Stack gap="md">
          <SettingRow label="Deliverability alerts" hint="Bounce-rate spikes and blocklist hits.">
            {(ids) => <Switch defaultChecked {...ids} />}
          </SettingRow>
          <Divider />
          <SettingRow label="Weekly summary" hint="Every Monday, 09:00 in your timezone.">
            {(ids) => <Switch {...ids} />}
          </SettingRow>
          <Divider />
          <SettingRow label="Digest timezone">
            {(ids) => (
              <Select
                {...ids}
                value="jst"
                options={[
                  { label: "Asia/Tokyo (JST)", value: "jst" },
                  { label: "Europe/Berlin (CET)", value: "cet" },
                  { label: "UTC", value: "utc" },
                ]}
              />
            )}
          </SettingRow>
        </Stack>
      </Card>

      <Group justify="end" gap="sm">
        <Button variant="ghost">Reset</Button>
        <Button variant="solid">Save changes</Button>
      </Group>
    </Stack>
  );
}

// Local helper: label-left / control-right row. One protagonist per row = the
// control. The row *looks* labelled, but nothing associates the text with the
// control — so the row wires it up itself: the child is called with the ids to
// put on \`aria-labelledby\` / \`aria-describedby\`. Without this the switches are
// unlabelled to a screen reader (axe \`label\`, critical).
function SettingRow({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: (ids: { "aria-labelledby": string; "aria-describedby"?: string }) => React.ReactNode;
}) {
  const id = useId();
  const labelId = \`\${id}-label\`;
  const hintId = \`\${id}-hint\`;

  return (
    <Group justify="between" align="center" gap="md">
      <Stack gap="3xs">
        <Text id={labelId} weight="medium">{label}</Text>
        {hint ? <Text id={hintId} size="sm" color="secondary">{hint}</Text> : null}
      </Stack>
      {children({
        "aria-labelledby": labelId,
        "aria-describedby": hint ? hintId : undefined,
      })}
    </Group>
  );
}
`})))()}function Ze(){let[e,t]=(0,G.useState)(``),[n,r]=(0,G.useState)(`all`),i=(0,G.useMemo)(()=>Qe.filter(t=>(n===`all`||t.role===n)&&t.name.toLowerCase().includes(e.trim().toLowerCase())),[e,n]);return(0,K.jsxs)(p,{gap:`md`,children:[(0,K.jsxs)(d,{justify:`between`,align:`center`,gap:`md`,children:[(0,K.jsx)(de,{placeholder:`Search members`,value:e,onChange:e=>t(e.target.value),allowClear:!0,width:280}),(0,K.jsx)(pe,{"aria-label":`Filter by role`,value:n,onChange:r,options:[{label:`All roles`,value:`all`},{label:`Admins`,value:`admin`},{label:`Members`,value:`member`}]})]}),(0,K.jsxs)(w,{card:!0,hoverable:!0,fullWidth:!0,mobileCard:!0,children:[(0,K.jsx)(w.Header,{children:(0,K.jsxs)(w.Row,{children:[(0,K.jsx)(w.Head,{children:`Member`}),(0,K.jsx)(w.Head,{children:`Team`}),(0,K.jsx)(w.Head,{children:`Role`}),(0,K.jsx)(w.Head,{children:`Status`})]})}),(0,K.jsx)(w.Body,{children:i.map(e=>(0,K.jsxs)(w.Row,{children:[(0,K.jsx)(w.Cell,{label:`Member`,children:e.name}),(0,K.jsx)(w.Cell,{label:`Team`,children:e.team??(0,K.jsx)(x,{color:`text-tertiary`,children:`No team`})}),(0,K.jsx)(w.Cell,{label:`Role`,children:(0,K.jsx)(y,{variant:`subtle`,intent:$e[e.role],children:e.role})}),(0,K.jsx)(w.Cell,{label:`Status`,children:(0,K.jsx)(y,{variant:`subtle`,intent:et[e.status],children:e.status})})]},e.id))})]})]})}var G,K,Qe,$e,et;function tt(){return(tt=e((()=>{G=t(),f(),u(),ue(),fe(),C(),v(),b(),K=n(),Qe=[{id:`u_1`,name:`Marisol Okonkwo`,team:`Growth`,role:`admin`,status:`active`},{id:`u_2`,name:`Dmitri Sørensen`,team:`Platform`,role:`member`,status:`invited`},{id:`u_3`,name:`Aleksandra Wiśniewska-Nowak`,team:null,role:`member`,status:`active`},{id:`u_4`,name:`Thomas O'Reilly`,team:`Growth`,role:`member`,status:`suspended`}],$e={admin:`primary`,member:`neutral`},et={active:`success`,invited:`neutral`,suspended:`danger`},Ze.__docgenInfo={description:``,methods:[],displayName:`MembersTable`}})))()}var nt;function rt(){return(rt=e((()=>{nt=`import { useMemo, useState } from "react";
import { Stack, Group, SearchInput, Select, Table, Badge, Text } from "wimui";

type Role = "admin" | "member";
type MemberStatus = "active" | "invited" | "suspended";
type Member = {
  id: string;
  name: string;
  team: string | null;
  role: Role;
  status: MemberStatus;
};

const members: Member[] = [
  { id: "u_1", name: "Marisol Okonkwo", team: "Growth", role: "admin", status: "active" },
  { id: "u_2", name: "Dmitri Sørensen", team: "Platform", role: "member", status: "invited" },
  { id: "u_3", name: "Aleksandra Wiśniewska-Nowak", team: null, role: "member", status: "active" }, // no team
  { id: "u_4", name: "Thomas O'Reilly", team: "Growth", role: "member", status: "suspended" }, // non-happy path
];

// Only the exceptional value is coloured — an undefined intent falls back to
// primary, which would paint every row and tell the reader nothing.
const roleIntent: Record<Role, "primary" | "neutral"> = { admin: "primary", member: "neutral" };
const statusIntent: Record<MemberStatus, "success" | "danger" | "neutral"> = {
  active: "success",
  invited: "neutral",
  suspended: "danger",
};

// A search/filter toolbar as the sparse region above a dense table.
export default function MembersTable() {
  const [q, setQ] = useState("");
  const [role, setRole] = useState("all");

  const rows = useMemo(
    () =>
      members.filter(
        (m) =>
          (role === "all" || m.role === role) &&
          m.name.toLowerCase().includes(q.trim().toLowerCase()),
      ),
    [q, role],
  );

  return (
    <Stack gap="md">
      {/* Sparse toolbar */}
      <Group justify="between" align="center" gap="md">
        <SearchInput
          placeholder="Search members"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          allowClear
          width={280}
        />
        <Select
          aria-label="Filter by role"
          value={role}
          onChange={setRole}
          options={[
            { label: "All roles", value: "all" },
            { label: "Admins", value: "admin" },
            { label: "Members", value: "member" },
          ]}
        />
      </Group>

      {/* Dense data region. \`mobileCard\` stacks rows as labelled cards below
          the md container breakpoint (same shape as Captions / T97) — without
          it a wide table is clipped or scrolled inside the Playground card. */}
      <Table card hoverable fullWidth mobileCard>
        <Table.Header>
          <Table.Row>
            <Table.Head>Member</Table.Head>
            <Table.Head>Team</Table.Head>
            <Table.Head>Role</Table.Head>
            <Table.Head>Status</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((m) => (
            <Table.Row key={m.id}>
              <Table.Cell label="Member">{m.name}</Table.Cell>
              <Table.Cell label="Team">
                {m.team ?? <Text color="text-tertiary">No team</Text>}
              </Table.Cell>
              <Table.Cell label="Role">
                <Badge variant="subtle" intent={roleIntent[m.role]}>{m.role}</Badge>
              </Table.Cell>
              <Table.Cell label="Status">
                <Badge variant="subtle" intent={statusIntent[m.status]}>{m.status}</Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Stack>
  );
}
`})))()}function it(){let[e,t]=(0,at.useState)(1);return(0,q.jsxs)(p,{gap:`lg`,style:{maxWidth:640},children:[(0,q.jsx)(ye,{steps:J,current:e,onChange:t}),(0,q.jsx)(h,{padding:`lg`,variant:`outline`,children:(0,q.jsxs)(p,{gap:`md`,children:[(0,q.jsxs)(p,{gap:`2xs`,children:[(0,q.jsx)(D,{tag:`h2`,size:`md`,children:`Name your workspace`}),(0,q.jsx)(x,{color:`secondary`,children:`You can change this later in Settings — existing links keep working.`})]}),(0,q.jsx)(se,{label:`Workspace name`,placeholder:`Acme Inc.`,fullWidth:!0})]})}),(0,q.jsxs)(d,{justify:`between`,align:`center`,children:[(0,q.jsx)(_,{variant:`ghost`,onClick:()=>t(e=>Math.max(0,e-1)),disabled:e===0,children:`Back`}),(0,q.jsx)(_,{variant:`solid`,onClick:()=>t(e=>Math.min(J.length-1,e+1)),children:`Continue`})]})]})}var at,q,J;function ot(){return(ot=e((()=>{at=t(),f(),m(),ve(),E(),b(),u(),g(),S(),q=n(),J=[{title:`Account`,description:`Your details`},{title:`Workspace`,description:`Name & URL`},{title:`Invite`,description:`Optional`}],it.__docgenInfo={description:``,methods:[],displayName:`Onboarding`}})))()}var st;function ct(){return(ct=e((()=>{st=`import { useState } from "react";
import { Stack, Card, Stepper, Title, Text, Group, Button, Input } from "wimui";

const steps = [
  { title: "Account", description: "Your details" },
  { title: "Workspace", description: "Name & URL" },
  { title: "Invite", description: "Optional" },
];

// The Stepper shows where you are; the card is the single focused task for the
// current step. Starts mid-flow so it reads like a real session.
export default function Onboarding() {
  const [current, setCurrent] = useState(1); // mid-flow
  const back = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(steps.length - 1, c + 1));

  return (
    <Stack gap="lg" style={{ maxWidth: 640 }}>
      <Stepper steps={steps} current={current} onChange={setCurrent} />

      <Card padding="lg" variant="outline">
        <Stack gap="md">
          <Stack gap="2xs">
            <Title tag="h2" size="md">Name your workspace</Title>
            <Text color="secondary">You can change this later in Settings — existing links keep working.</Text>
          </Stack>
          <Input label="Workspace name" placeholder="Acme Inc." fullWidth />
        </Stack>
      </Card>

      <Group justify="between" align="center">
        <Button variant="ghost" onClick={back} disabled={current === 0}>Back</Button>
        <Button variant="solid" onClick={next}>Continue</Button>
      </Group>
    </Stack>
  );
}
`})))()}function lt(){let[e,t]=(0,Y.useState)(`t_8f2c`),[n,r]=(0,Y.useState)(``),[a,o]=(0,Y.useState)(!1);return(0,X.jsxs)(p,{gap:`xl`,children:[(0,X.jsxs)(d,{gap:`md`,align:`center`,children:[(0,X.jsx)(ne,{size:`sm`,visibleBelow:`md`,open:a,onClick:()=>o(e=>!e)}),(0,X.jsx)(D,{tag:`h1`,size:`sm`,children:`Deploy assistant`})]}),(0,X.jsxs)(l,{cols:{base:`1fr`,lg:`auto 1fr`},gap:`xl`,align:`start`,children:[(0,X.jsx)(ie,{bordered:!0,mobileOpen:a,onOverlayClick:()=>o(!1),children:(0,X.jsx)(i,{py:`lg`,children:(0,X.jsxs)(p,{gap:`lg`,children:[(0,X.jsx)(Re,{threads:ut,activeId:e,onSelect:e=>{t(e),o(!1)}}),(0,X.jsx)(i,{px:`md`,children:(0,X.jsxs)(p,{gap:`md`,children:[(0,X.jsx)(Ie,{models:dt,value:`sonnet`}),(0,X.jsx)(Be,{used:128400,max:2e5,size:`sm`,labels:{label:`Context`,unit:`tokens`}})]})})]})})}),(0,X.jsxs)(He,{children:[(0,X.jsxs)(Ue,{children:[(0,X.jsx)(k,{position:`right`,senderName:`You`,timestamp:`14:04`,children:`8f2c1ad has rolled back twice in prod. Health checks pass in the pod logs, so why does the rollout never finish?`}),(0,X.jsx)(k,{position:`left`,senderName:`Assistant`,timestamp:`14:05`,actions:(0,X.jsx)(Oe,{showRegenerate:!0}),children:(0,X.jsxs)(p,{gap:`lg`,children:[(0,X.jsxs)(Ee,{children:[(0,X.jsx)(O,{status:`completed`,label:`Read the rollout events`,children:`Both attempts stopped at 3 of 5 replicas ready.`}),(0,X.jsx)(O,{status:`completed`,label:`Compared against the last good deploy`,children:`7c41e90 used the same image and finished in 12.4s.`}),(0,X.jsx)(O,{status:`completed`,label:`Checked the mesh sidecar`,isLast:!0,children:`The sidecar reports the pod unhealthy for 30s after the container is ready.`})]}),(0,X.jsx)(x,{children:`Kubernetes considers the pod ready before the mesh does. Your probe waits 5 seconds and fails after 3 checks, so the rollout gives up at second 35 — while the sidecar is still holding the pod out of the pool.`}),(0,X.jsx)(Me,{code:ft,language:`yaml`,filename:`k8s/deployment.yaml`,showLineNumbers:!0}),(0,X.jsxs)(x,{children:[`Raising `,(0,X.jsx)(`code`,{children:`initialDelaySeconds`}),` past the sidecar's own warm-up is the smaller change. Raising `,(0,X.jsx)(`code`,{children:`failureThreshold`}),` hides the symptom on every future deploy.`]}),(0,X.jsx)(ke,{sources:pt})]})}),(0,X.jsx)(k,{position:`right`,senderName:`You`,timestamp:`14:08`,children:`Is that the same thing that hit us last Thursday?`}),(0,X.jsx)(k,{position:`left`,senderName:`Assistant`,timestamp:`14:09`,isTyping:!0,children:(0,X.jsx)(Pe,{status:`running`,message:`Reading 6 incidents from the last 30 days`})})]}),(0,X.jsx)(i,{px:`2xl`,py:`2xl`,children:(0,X.jsxs)(p,{gap:`md`,children:[(0,X.jsxs)(d,{gap:`md`,align:`center`,children:[(0,X.jsx)(y,{intent:`danger`,children:`No answer`}),(0,X.jsx)(x,{size:`sm`,color:`text-secondary`,children:`Search over incident history timed out`})]}),(0,X.jsx)(d,{gap:`sm`,children:(0,X.jsx)(_,{variant:`outline`,size:`sm`,children:`Search without history`})})]})}),(0,X.jsx)(Ve,{children:(0,X.jsx)(we,{value:n,onChange:r,onSubmit:()=>r(``),placeholder:`Ask about this deploy`,showAttach:!0,maxRows:6,fullWidth:!0})})]})]})]})}var Y,X,ut,dt,ft,pt;function mt(){return(mt=e((()=>{Y=t(),Ne(),De(),v(),r(),g(),We(),je(),c(),u(),te(),Fe(),Ce(),re(),Ae(),f(),b(),Te(),Le(),E(),ze(),X=n(),ut=[{id:`t_8f2c`,title:`Deploy 8f2c1ad rolled back twice`,preview:`Health checks pass but the pods never take traffic`,timestamp:`14:09`},{id:`t_pool`,title:`Postgres connection pool exhausted after the 14:02 restart — same as last Thursday?`,preview:`341 connections against a max of 200`,timestamp:`13:51`,unread:!0},{id:`t_queue`,title:`Staging queue draining slowly`,preview:`Backlog sat at 4,281 for most of the morning`,timestamp:`Yesterday`},{id:`t_tf`,title:`Terraform plan diff on the eu-west module`,timestamp:`Jul 29`}],dt=[{id:`sonnet`,name:`Sonnet`,description:`Fast enough to keep up with a live incident`,contextLength:2e5,badge:`Default`},{id:`opus`,name:`Opus`,description:`Slower, better at reading unfamiliar stack traces`,contextLength:2e5}],ft=`readinessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
  failureThreshold: 3`,pt=[{title:`Rollout stuck: pods ready but not receiving traffic`,url:`https://runbooks.internal/deploys/rollout-stuck`,domain:`runbooks.internal`,description:`Covers the readiness gate the service mesh adds on top of Kubernetes.`},{title:`Deploy 8f2c1ad — build log`,url:`https://ci.internal/builds/8f2c1ad`,domain:`ci.internal`}],lt.__docgenInfo={description:``,methods:[],displayName:`DeployAssistant`}})))()}var ht;function gt(){return(gt=e((()=>{ht=`import { useState } from "react";
import {
  AgentStatus,
  AIResponseFeedback,
  Badge,
  Box,
  Button,
  ChatContainer,
  ChatInputArea,
  ChatMessage,
  ChatMessageList,
  CodeBlock,
  Grid,
  Group,
  HamburgerMenu,
  ModelSelector,
  PromptInput,
  Sidebar,
  SourceCitationList,
  Stack,
  Text,
  ThoughtProcess,
  ThoughtStep,
  ThreadList,
  Title,
  UsageMeter,
} from "wimui";

// An assistant a support engineer opens while a deploy is on fire. The screen
// is the conversation; everything else is chrome and stays quieter than it.
//
// AppShell would be the obvious frame, but its root is \`position: fixed;
// inset: 0\` — it takes the whole viewport and cannot sit inside a gallery, a
// docs preview, or anything else. Two columns and a header row instead;
// \`Sidebar\` brings its own width, so no size is written here.

const threads = [
  {
    id: "t_8f2c",
    title: "Deploy 8f2c1ad rolled back twice",
    preview: "Health checks pass but the pods never take traffic",
    timestamp: "14:09",
  },
  {
    id: "t_pool",
    // Long on purpose: a real thread title is a sentence someone typed in a
    // hurry, and the list has to survive it.
    title: "Postgres connection pool exhausted after the 14:02 restart — same as last Thursday?",
    preview: "341 connections against a max of 200",
    timestamp: "13:51",
    unread: true,
  },
  {
    id: "t_queue",
    title: "Staging queue draining slowly",
    preview: "Backlog sat at 4,281 for most of the morning",
    timestamp: "Yesterday",
  },
  {
    id: "t_tf",
    title: "Terraform plan diff on the eu-west module",
    // No preview: opened and abandoned before a reply came back.
    timestamp: "Jul 29",
  },
];

const models = [
  {
    id: "sonnet",
    name: "Sonnet",
    description: "Fast enough to keep up with a live incident",
    contextLength: 200000,
    badge: "Default",
  },
  {
    id: "opus",
    name: "Opus",
    description: "Slower, better at reading unfamiliar stack traces",
    contextLength: 200000,
  },
];

const readinessProbe = \`readinessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
  failureThreshold: 3\`;

const sources = [
  {
    title: "Rollout stuck: pods ready but not receiving traffic",
    url: "https://runbooks.internal/deploys/rollout-stuck",
    domain: "runbooks.internal",
    description: "Covers the readiness gate the service mesh adds on top of Kubernetes.",
  },
  {
    title: "Deploy 8f2c1ad — build log",
    url: "https://ci.internal/builds/8f2c1ad",
    domain: "ci.internal",
  },
];

export default function DeployAssistant() {
  const [activeThread, setActiveThread] = useState("t_8f2c");
  const [draft, setDraft] = useState("");
  const [railOpen, setRailOpen] = useState(false);

  return (
    <Stack gap="xl">
      {/* Chrome: which model, how much budget is left, nothing else. No primary
          surface here — the page's one accent belongs to Send. */}
      {/* Chrome: the page title alone. UsageMeter and ModelSelector are
          \`width: 100%\` column fillers (ModelSelector even sets \`min-width: 0\`),
          so a flex row squeezes them to one character per line — measured 12px
          wide and 272px tall before they moved. They live in the rail, which is
          a column and the size they expect. Filed as T59. */}
      <Group gap="md" align="center">
        {/* Sidebar retreats off-canvas below md and does not bring its own way
            back: without this the rail — threads, model, budget — is simply
            unreachable on a phone. visibleBelow keeps the control out of the
            way at desktop widths, where the rail is already on screen. */}
        <HamburgerMenu
          size="sm"
          visibleBelow="md"
          open={railOpen}
          onClick={() => setRailOpen((o) => !o)}
        />
        <Title tag="h1" size="sm">
          Deploy assistant
        </Title>
      </Group>

      <Grid cols={{ base: "1fr", lg: "auto 1fr" }} gap="xl" align="start">
        <Sidebar bordered mobileOpen={railOpen} onOverlayClick={() => setRailOpen(false)}>
          {/* Sidebar has no padding of its own (measured 0 on all four sides),
              so the rail states its own. Without it the thread list sits on the
              top edge and the meter on the bottom one. */}
          <Box py="lg">
            <Stack gap="lg">
              <ThreadList threads={threads} activeId={activeThread} onSelect={(id) => {
                  setActiveThread(id);
                  setRailOpen(false);
                }} />
              <Box px="md">
                <Stack gap="md">
                  <ModelSelector models={models} value="sonnet" />
                  <UsageMeter
                    used={128400}
                    max={200000}
                    size="sm"
                    labels={{ label: "Context", unit: "tokens" }}
                  />
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Sidebar>

        <ChatContainer>
          <ChatMessageList>
            <ChatMessage position="right" senderName="You" timestamp="14:04">
              8f2c1ad has rolled back twice in prod. Health checks pass in the pod logs, so why does
              the rollout never finish?
            </ChatMessage>

            <ChatMessage
              position="left"
              senderName="Assistant"
              timestamp="14:05"
              actions={<AIResponseFeedback showRegenerate />}
            >
              <Stack gap="lg">
                <ThoughtProcess>
                  <ThoughtStep status="completed" label="Read the rollout events">
                    Both attempts stopped at 3 of 5 replicas ready.
                  </ThoughtStep>
                  <ThoughtStep status="completed" label="Compared against the last good deploy">
                    7c41e90 used the same image and finished in 12.4s.
                  </ThoughtStep>
                  <ThoughtStep status="completed" label="Checked the mesh sidecar" isLast>
                    The sidecar reports the pod unhealthy for 30s after the container is ready.
                  </ThoughtStep>
                </ThoughtProcess>

                <Text>
                  Kubernetes considers the pod ready before the mesh does. Your probe waits 5
                  seconds and fails after 3 checks, so the rollout gives up at second 35 — while the
                  sidecar is still holding the pod out of the pool.
                </Text>

                <CodeBlock
                  code={readinessProbe}
                  language="yaml"
                  filename="k8s/deployment.yaml"
                  showLineNumbers
                />

                <Text>
                  Raising <code>initialDelaySeconds</code> past the sidecar&apos;s own warm-up is the
                  smaller change. Raising <code>failureThreshold</code> hides the symptom on every
                  future deploy.
                </Text>

                <SourceCitationList sources={sources} />
              </Stack>
            </ChatMessage>

            <ChatMessage position="right" senderName="You" timestamp="14:08">
              Is that the same thing that hit us last Thursday?
            </ChatMessage>


            <ChatMessage position="left" senderName="Assistant" timestamp="14:09" isTyping>
              <AgentStatus status="running" message="Reading 6 incidents from the last 30 days" />
            </ChatMessage>
          </ChatMessageList>

          {/* Not a happy path: the answer never arrived. Deliberately *not* a
              ChatMessage — nothing was said, so a speech bubble would be a lie,
              and the retry belongs next to the failure rather than in a
              page-level banner.

              The danger colour here is solid, not subtle, and the failure is
              written as text rather than an \`AgentStatus status="error"\`.
              Both of those are workarounds for a real defect, measured while
              building this screen: on dark, \`text-danger\` (#ffa3a3) is
              6.06:1 over \`surface\` but only 4.30:1 over \`surface-variant\` /
              \`surface-tertiary\`, and 3.10–3.63:1 once a \`subtle\` tint
              composites on top. \`check:contrast\` stays green because it tests
              three of the eleven surface tokens. Filed as T56. */}
          {/* ChatMessageList pads its own children; a sibling of the list gets
              nothing, so the padding is stated here rather than left to chance.
              2xl (16px) rather than the list's own md (8px): the sender labels
              inside sit 14px from the list edge, so md left this block visibly
              tighter than everything above it. */}
          <Box px="2xl" py="2xl">
            <Stack gap="md">
              <Group gap="md" align="center">
                <Badge intent="danger">No answer</Badge>
                <Text size="sm" color="text-secondary">
                  Search over incident history timed out
                </Text>
              </Group>
              <Group gap="sm">
                <Button variant="outline" size="sm">
                  Search without history
                </Button>
              </Group>
            </Stack>
          </Box>

          <ChatInputArea>
            <PromptInput
              value={draft}
              onChange={setDraft}
              onSubmit={() => setDraft("")}
              placeholder="Ask about this deploy"
              showAttach
              maxRows={6}
              fullWidth
            />
          </ChatInputArea>
        </ChatContainer>
      </Grid>
    </Stack>
  );
}
`})))()}function _t(e){return{"index.html":Et,"package.json":Tt,"tsconfig.json":kt,"vite.config.ts":Ot,"src/main.tsx":Dt,"src/App.tsx":e}}function vt(e){let t=document.createElement(`form`);t.method=`POST`,t.action=`https://stackblitz.com/run?file=src/App.tsx`,t.target=`_blank`,t.rel=`noopener`,t.style.display=`none`;let n=(e,n)=>{let r=document.createElement(`input`);r.type=`hidden`,r.name=e,r.value=n,t.appendChild(r)};n(`project[title]`,`wimui — ${e.title}`),n(`project[description]`,e.description??`A wimui recipe: ${e.title}.`),n(`project[template]`,`node`);for(let[t,r]of Object.entries(_t(e.source)))n(`project[files][${t}]`,r);document.body.appendChild(t),t.submit(),t.remove()}function yt({Component:e,pad:t}){return(0,Z.jsx)(`div`,{style:{padding:t,background:`var(--wim-color-surface-app)`,overflow:`auto`},children:(0,Z.jsx)(e,{})})}function bt({source:e}){return(0,Z.jsxs)(`details`,{style:{borderTop:Q},children:[(0,Z.jsx)(`summary`,{style:{padding:`var(--wim-spacing-xl) var(--wim-spacing-2xl)`,cursor:`pointer`,fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:`View source`}),(0,Z.jsx)(`div`,{style:{padding:`0 var(--wim-spacing-2xl)`},children:(0,Z.jsx)(Se,{block:!0,language:`tsx`,code:e})})]})}function xt({recipe:e}){return(0,Z.jsxs)(p,{gap:`xl`,children:[(0,Z.jsxs)(d,{justify:`between`,align:`end`,gap:`2xl`,children:[(0,Z.jsxs)(p,{gap:`2xs`,style:{maxWidth:`58ch`},children:[(0,Z.jsx)(D,{tag:`h2`,size:`md`,children:e.title}),(0,Z.jsx)(x,{color:`secondary`,children:e.description})]}),(0,Z.jsx)(_,{variant:`solid`,onClick:()=>vt(e),children:`Open in StackBlitz`})]}),(0,Z.jsx)(h,{padding:`none`,variant:`outline`,style:{overflow:`hidden`},children:(0,Z.jsxs)(p,{gap:0,children:[(0,Z.jsx)(yt,{Component:e.Component,pad:`var(--wim-spacing-4xl)`}),(0,Z.jsx)(bt,{source:e.source})]})})]})}function St({recipe:e}){return(0,Z.jsx)(h,{padding:`none`,variant:`outline`,style:{overflow:`hidden`},children:(0,Z.jsxs)(p,{gap:0,children:[(0,Z.jsx)(yt,{Component:e.Component,pad:`var(--wim-spacing-3xl)`}),(0,Z.jsxs)(d,{justify:`between`,align:`center`,gap:`xl`,style:{padding:`var(--wim-spacing-2xl) var(--wim-spacing-3xl)`,borderTop:Q},children:[(0,Z.jsxs)(p,{gap:`3xs`,children:[(0,Z.jsx)(x,{weight:`medium`,children:e.title}),e.description?(0,Z.jsx)(x,{size:`sm`,color:`secondary`,children:e.description}):null]}),(0,Z.jsx)(_,{variant:`ghost`,size:`sm`,"aria-label":`Open ${e.title} in StackBlitz`,onClick:()=>vt(e),children:`Open`})]}),(0,Z.jsx)(bt,{source:e.source})]})})}function Ct(){let[e,...t]=wt,n=e=>t.filter(t=>t.column===e).map(e=>(0,Z.jsx)(St,{recipe:e},e.id));return(0,Z.jsxs)(p,{gap:`5xl`,"data-host-canary":!0,children:[(0,Z.jsx)(xt,{recipe:e}),(0,Z.jsxs)(l,{cols:{base:1,md:`minmax(0, 7fr) minmax(0, 5fr)`},gap:`2xl`,align:`start`,children:[(0,Z.jsx)(p,{gap:`2xl`,children:n(`wide`)}),(0,Z.jsx)(p,{gap:`2xl`,children:n(`narrow`)})]})]})}var Z,wt,Tt,Et,Dt,Ot,kt,Q;function $(){return($=e((()=>{g(),m(),xe(),c(),u(),f(),b(),E(),j(),I(),R(),V(),Ge(),Je(),Xe(),tt(),rt(),ot(),ct(),mt(),gt(),Z=n(),wt=[{id:`billing-overview`,title:`Billing overview`,description:`A KPI row over a dense invoice table. One customer has no plan and one payment failed — the two rows a billing screen actually has to survive.`,Component:M,source:L},{id:`deploy-assistant`,title:`Deploy assistant`,description:`A conversation mid-incident: one answer with its reasoning and sources, one that failed and offers a retry, one still being written.`,column:`wide`,Component:lt,source:ht},{id:`members-table`,title:`Members`,description:`A search and role filter over a table that narrows as you type.`,column:`wide`,Component:Ze,source:nt},{id:`sign-in`,title:`Sign in`,description:`One card, 380px, form left-aligned.`,column:`narrow`,Component:z,source:H},{id:`onboarding`,title:`Workspace onboarding`,description:`Opened at step 2, the way you would find it after a reload.`,column:`wide`,Component:it,source:st},{id:`notification-settings`,title:`Notification settings`,column:`narrow`,Component:Ke,source:Ye}],Tt=JSON.stringify({name:`wimui-recipe`,private:!0,type:`module`,scripts:{dev:`vite`,build:`vite build`},dependencies:{wimui:`^${A}`,react:`^19.0.0`,"react-dom":`^19.0.0`},devDependencies:{"@vitejs/plugin-react":`^4.3.4`,"@types/react":`^19.0.0`,"@types/react-dom":`^19.0.0`,typescript:`^5.7.0`,vite:`^6.0.0`}},null,2),Et=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>wimui recipe</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`,Dt=`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "wimui/styles.css"; // REQUIRED: design tokens + component styles
import { WimProvider } from "wimui";
import Recipe from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WimProvider theme="system">
      <div
        style={{
          height: "100dvh",
          boxSizing: "border-box",
          padding: "var(--wim-spacing-4xl)",
          background: "var(--wim-color-surface-app)",
        }}
      >
        <Recipe />
      </div>
    </WimProvider>
  </StrictMode>,
);
`,Ot=`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({ plugins: [react()] });
`,kt=JSON.stringify({compilerOptions:{target:`ESNext`,module:`ESNext`,moduleResolution:`bundler`,jsx:`react-jsx`,strict:!0,esModuleInterop:!0,skipLibCheck:!0},include:[`src`]},null,2),Q=`1px solid var(--wim-color-border-secondary)`,Ct.__docgenInfo={description:``,methods:[],displayName:`Playground`}})))()}export{$ as n,Ct as t};