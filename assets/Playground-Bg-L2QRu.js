"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{cr as r}from"./iframe-F5Up1IQq.js";import{Di as i,Fi as a,St as o,Ti as s,Ut as ee,_i as te,a as ne,fr as re,it as c,ji as l,o as u,r as ie,s as ae,si as oe,t as d,y as se}from"./src-Ssuy8lr7.js";import{t as f}from"./Box--bAE-pUN.js";import{t as p}from"./Stack-CC3QEopK.js";import{t as m}from"./Card-D3LCYC3A.js";import{t as h}from"./Button-Dps1MPAd.js";import{t as g}from"./Badge-CRzmzbP0.js";import{t as _}from"./Text-DzblcqZm.js";import{t as ce}from"./Checkbox-B5hLPzl5.js";import{t as v}from"./Input-BY9GcYwo.js";import{a as y,r as le}from"./QueryBuilder-CGAN_DO-.js";import{r as ue}from"./PasswordStrength-B1GpDB9k.js";import{t as de}from"./PromptInput-C4lOtUyf.js";import{t as fe}from"./AIResponseFeedback-Bwn2G2bS.js";import{r as b}from"./Blockquote-DEh2oACH.js";import{n as x,t as pe}from"./ThoughtProcess-esVODyeM.js";import{t as S}from"./Title-9tGX8de8.js";import{n as me}from"./SourceCitation-Bb3xIkA7.js";import{t as he}from"./CodeBlock-CPmm5UF0.js";import{t as ge}from"./AgentStatus-DUjtdDcL.js";import{t as _e}from"./ModelSelector-CFg6eKdx.js";import{t as ve}from"./ThreadList-D9V54slQ.js";import{t as ye}from"./UsageMeter-CA4H-bVr.js";var C,be=e((()=>{C=`0.25.0`}));function w(){return(0,T.jsxs)(p,{gap:`lg`,children:[(0,T.jsx)(S,{tag:`h2`,size:`lg`,children:`Billing`}),(0,T.jsxs)(i,{cols:{base:1,sm:2,lg:3},gap:`md`,children:[(0,T.jsxs)(c,{variant:`outline`,children:[(0,T.jsx)(c.Label,{children:`MRR`}),(0,T.jsx)(c.Value,{children:`$48,210`}),(0,T.jsx)(c.Trend,{children:`+6.4%`})]}),(0,T.jsxs)(c,{variant:`outline`,children:[(0,T.jsx)(c.Label,{children:`Active workspaces`}),(0,T.jsx)(c.Value,{children:`1,204`}),(0,T.jsx)(c.Description,{children:`176 idle over 30 days`})]}),(0,T.jsxs)(c,{variant:`outline`,children:[(0,T.jsx)(c.Label,{children:`Failed webhooks`}),(0,T.jsx)(c.Value,{children:`137`}),(0,T.jsx)(c.Description,{children:`+23 today`})]})]}),(0,T.jsxs)(o,{card:!0,hoverable:!0,fullWidth:!0,mobileCard:!0,children:[(0,T.jsx)(o.Header,{children:(0,T.jsxs)(o.Row,{children:[(0,T.jsx)(o.Head,{children:`Customer`}),(0,T.jsx)(o.Head,{children:`Plan`}),(0,T.jsx)(o.Head,{children:`Amount`}),(0,T.jsx)(o.Head,{children:`Status`})]})}),(0,T.jsx)(o.Body,{children:E.map(e=>(0,T.jsxs)(o.Row,{children:[(0,T.jsx)(o.Cell,{label:`Customer`,children:e.name}),(0,T.jsx)(o.Cell,{label:`Plan`,children:e.plan??(0,T.jsx)(_,{color:`text-tertiary`,children:`—`})}),(0,T.jsx)(o.Cell,{label:`Amount`,children:e.amount}),(0,T.jsx)(o.Cell,{label:`Status`,children:(0,T.jsx)(g,{variant:`subtle`,intent:D[e.status],children:e.status})})]},e.id))})]})]})}var T,E,D,xe=e((()=>{d(),T=r(),E=[{id:`in_9f2a`,name:`Marisol Okonkwo`,plan:`Scale`,amount:`$4,610.50`,status:`paid`},{id:`in_7b41`,name:`Dmitri Sørensen`,plan:`Enterprise`,amount:`$12,199.00`,status:`failed`},{id:`in_2a90`,name:`Thomas O'Reilly`,plan:null,amount:`$89.00`,status:`pending`}],D={paid:`success`,failed:`danger`,pending:`neutral`},w.__docgenInfo={description:``,methods:[],displayName:`BillingOverview`}})),O,Se=e((()=>{O=`import { Stack, Grid, Card, Stats, Table, Badge, Title, Text } from "wimui";

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
`}));function k(){return(0,A.jsx)(a,{h:`100%`,p:`lg`,children:(0,A.jsx)(m,{padding:`lg`,variant:`outline`,style:{width:`min(380px, 100%)`},children:(0,A.jsxs)(p,{gap:`lg`,children:[(0,A.jsxs)(p,{gap:`2xs`,children:[(0,A.jsx)(S,{tag:`h1`,size:`md`,children:`Sign in to Larkfield`}),(0,A.jsx)(_,{color:`secondary`,children:`Use your work email — SSO is enabled for Enterprise workspaces.`})]}),(0,A.jsx)(`form`,{onSubmit:e=>e.preventDefault(),children:(0,A.jsxs)(p,{gap:`md`,children:[(0,A.jsx)(v,{label:`Work email`,type:`email`,placeholder:`you@company.com`,fullWidth:!0}),(0,A.jsx)(ue,{label:`Password`,fullWidth:!0}),(0,A.jsxs)(s,{justify:`between`,align:`center`,children:[(0,A.jsx)(ce,{children:`Keep me signed in`}),(0,A.jsx)(b,{href:`#`,priority:`secondary`,children:`Forgot password?`})]}),(0,A.jsx)(h,{type:`submit`,variant:`solid`,fullWidth:!0,children:`Sign in`})]})}),(0,A.jsxs)(_,{size:`sm`,color:`text-tertiary`,children:[`No account? `,(0,A.jsx)(b,{href:`#`,children:`Start a 14-day trial`})]})]})})})}var A,Ce=e((()=>{d(),A=r(),k.__docgenInfo={description:``,methods:[],displayName:`SignIn`}})),j,we=e((()=>{j=`import { Center, Card, Stack, Group, Title, Text, Input, PasswordInput, Checkbox, Button, Link } from "wimui";

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
`}));function M(){return(0,F.jsxs)(p,{gap:`lg`,style:{maxWidth:720},children:[(0,F.jsxs)(p,{gap:`2xs`,children:[(0,F.jsx)(S,{tag:`h1`,size:`lg`,children:`Notifications`}),(0,F.jsx)(_,{color:`secondary`,children:`Control what Larkfield emails you about. Changes apply immediately.`})]}),(0,F.jsx)(m,{padding:`lg`,variant:`outline`,children:(0,F.jsxs)(p,{gap:`md`,children:[(0,F.jsx)(N,{label:`Deliverability alerts`,hint:`Bounce-rate spikes and blocklist hits.`,children:e=>(0,F.jsx)(le,{defaultChecked:!0,...e})}),(0,F.jsx)(l,{}),(0,F.jsx)(N,{label:`Weekly summary`,hint:`Every Monday, 09:00 in your timezone.`,children:e=>(0,F.jsx)(le,{...e})}),(0,F.jsx)(l,{}),(0,F.jsx)(N,{label:`Digest timezone`,children:e=>(0,F.jsx)(y,{...e,value:`jst`,options:[{label:`Asia/Tokyo (JST)`,value:`jst`},{label:`Europe/Berlin (CET)`,value:`cet`},{label:`UTC`,value:`utc`}]})})]})}),(0,F.jsxs)(s,{justify:`end`,gap:`sm`,children:[(0,F.jsx)(h,{variant:`ghost`,children:`Reset`}),(0,F.jsx)(h,{variant:`solid`,children:`Save changes`})]})]})}function N({label:e,hint:t,children:n}){let r=(0,P.useId)(),i=`${r}-label`,a=`${r}-hint`;return(0,F.jsxs)(s,{justify:`between`,align:`center`,gap:`md`,children:[(0,F.jsxs)(p,{gap:`3xs`,children:[(0,F.jsx)(_,{id:i,weight:`medium`,children:e}),t?(0,F.jsx)(_,{id:a,size:`sm`,color:`secondary`,children:t}):null]}),n({"aria-labelledby":i,"aria-describedby":t?a:void 0})]})}var P,F,Te=e((()=>{P=t(n(),1),d(),F=r(),M.__docgenInfo={description:``,methods:[],displayName:`NotificationSettings`}})),I,Ee=e((()=>{I=`import { useId } from "react";
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
`}));function L(){let[e,t]=(0,R.useState)(``),[n,r]=(0,R.useState)(`all`),i=(0,R.useMemo)(()=>B.filter(t=>(n===`all`||t.role===n)&&t.name.toLowerCase().includes(e.trim().toLowerCase())),[e,n]);return(0,z.jsxs)(p,{gap:`md`,children:[(0,z.jsxs)(s,{justify:`between`,align:`center`,gap:`md`,children:[(0,z.jsx)(re,{placeholder:`Search members`,value:e,onChange:e=>t(e.target.value),allowClear:!0,width:280}),(0,z.jsx)(y,{"aria-label":`Filter by role`,value:n,onChange:r,options:[{label:`All roles`,value:`all`},{label:`Admins`,value:`admin`},{label:`Members`,value:`member`}]})]}),(0,z.jsxs)(o,{card:!0,hoverable:!0,fullWidth:!0,mobileCard:!0,children:[(0,z.jsx)(o.Header,{children:(0,z.jsxs)(o.Row,{children:[(0,z.jsx)(o.Head,{children:`Member`}),(0,z.jsx)(o.Head,{children:`Team`}),(0,z.jsx)(o.Head,{children:`Role`}),(0,z.jsx)(o.Head,{children:`Status`})]})}),(0,z.jsx)(o.Body,{children:i.map(e=>(0,z.jsxs)(o.Row,{children:[(0,z.jsx)(o.Cell,{label:`Member`,children:e.name}),(0,z.jsx)(o.Cell,{label:`Team`,children:e.team??(0,z.jsx)(_,{color:`text-tertiary`,children:`No team`})}),(0,z.jsx)(o.Cell,{label:`Role`,children:(0,z.jsx)(g,{variant:`subtle`,intent:V[e.role],children:e.role})}),(0,z.jsx)(o.Cell,{label:`Status`,children:(0,z.jsx)(g,{variant:`subtle`,intent:H[e.status],children:e.status})})]},e.id))})]})]})}var R,z,B,V,H,De=e((()=>{R=t(n(),1),d(),z=r(),B=[{id:`u_1`,name:`Marisol Okonkwo`,team:`Growth`,role:`admin`,status:`active`},{id:`u_2`,name:`Dmitri Sørensen`,team:`Platform`,role:`member`,status:`invited`},{id:`u_3`,name:`Aleksandra Wiśniewska-Nowak`,team:null,role:`member`,status:`active`},{id:`u_4`,name:`Thomas O'Reilly`,team:`Growth`,role:`member`,status:`suspended`}],V={admin:`primary`,member:`neutral`},H={active:`success`,invited:`neutral`,suspended:`danger`},L.__docgenInfo={description:``,methods:[],displayName:`MembersTable`}})),Oe,ke=e((()=>{Oe=`import { useMemo, useState } from "react";
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
`}));function U(){let[e,t]=(0,W.useState)(1);return(0,G.jsxs)(p,{gap:`lg`,style:{maxWidth:640},children:[(0,G.jsx)(ee,{steps:K,current:e,onChange:t}),(0,G.jsx)(m,{padding:`lg`,variant:`outline`,children:(0,G.jsxs)(p,{gap:`md`,children:[(0,G.jsxs)(p,{gap:`2xs`,children:[(0,G.jsx)(S,{tag:`h2`,size:`md`,children:`Name your workspace`}),(0,G.jsx)(_,{color:`secondary`,children:`You can change this later in Settings — existing links keep working.`})]}),(0,G.jsx)(v,{label:`Workspace name`,placeholder:`Acme Inc.`,fullWidth:!0})]})}),(0,G.jsxs)(s,{justify:`between`,align:`center`,children:[(0,G.jsx)(h,{variant:`ghost`,onClick:()=>t(e=>Math.max(0,e-1)),disabled:e===0,children:`Back`}),(0,G.jsx)(h,{variant:`solid`,onClick:()=>t(e=>Math.min(K.length-1,e+1)),children:`Continue`})]})]})}var W,G,K,Ae=e((()=>{W=t(n(),1),d(),G=r(),K=[{title:`Account`,description:`Your details`},{title:`Workspace`,description:`Name & URL`},{title:`Invite`,description:`Optional`}],U.__docgenInfo={description:``,methods:[],displayName:`Onboarding`}})),q,je=e((()=>{q=`import { useState } from "react";
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
`}));function J(){let[e,t]=(0,Y.useState)(`t_8f2c`),[n,r]=(0,Y.useState)(``),[a,o]=(0,Y.useState)(!1);return(0,X.jsxs)(p,{gap:`xl`,children:[(0,X.jsxs)(s,{gap:`md`,align:`center`,children:[(0,X.jsx)(te,{size:`sm`,visibleBelow:`md`,open:a,onClick:()=>o(e=>!e)}),(0,X.jsx)(S,{tag:`h1`,size:`sm`,children:`Deploy assistant`})]}),(0,X.jsxs)(i,{cols:{base:`1fr`,lg:`auto 1fr`},gap:`xl`,align:`start`,children:[(0,X.jsx)(oe,{bordered:!0,mobileOpen:a,onOverlayClick:()=>o(!1),children:(0,X.jsx)(f,{py:`lg`,children:(0,X.jsxs)(p,{gap:`lg`,children:[(0,X.jsx)(ve,{threads:Me,activeId:e,onSelect:e=>{t(e),o(!1)}}),(0,X.jsx)(f,{px:`md`,children:(0,X.jsxs)(p,{gap:`md`,children:[(0,X.jsx)(_e,{models:Ne,value:`sonnet`}),(0,X.jsx)(ye,{used:128400,max:2e5,size:`sm`,labels:{label:`Context`,unit:`tokens`}})]})})]})})}),(0,X.jsxs)(ie,{children:[(0,X.jsxs)(ae,{children:[(0,X.jsx)(u,{position:`right`,senderName:`You`,timestamp:`14:04`,children:`8f2c1ad has rolled back twice in prod. Health checks pass in the pod logs, so why does the rollout never finish?`}),(0,X.jsx)(u,{position:`left`,senderName:`Assistant`,timestamp:`14:05`,actions:(0,X.jsx)(fe,{showRegenerate:!0}),children:(0,X.jsxs)(p,{gap:`lg`,children:[(0,X.jsxs)(pe,{children:[(0,X.jsx)(x,{status:`completed`,label:`Read the rollout events`,children:`Both attempts stopped at 3 of 5 replicas ready.`}),(0,X.jsx)(x,{status:`completed`,label:`Compared against the last good deploy`,children:`7c41e90 used the same image and finished in 12.4s.`}),(0,X.jsx)(x,{status:`completed`,label:`Checked the mesh sidecar`,isLast:!0,children:`The sidecar reports the pod unhealthy for 30s after the container is ready.`})]}),(0,X.jsx)(_,{children:`Kubernetes considers the pod ready before the mesh does. Your probe waits 5 seconds and fails after 3 checks, so the rollout gives up at second 35 — while the sidecar is still holding the pod out of the pool.`}),(0,X.jsx)(he,{code:Pe,language:`yaml`,filename:`k8s/deployment.yaml`,showLineNumbers:!0}),(0,X.jsxs)(_,{children:[`Raising `,(0,X.jsx)(`code`,{children:`initialDelaySeconds`}),` past the sidecar's own warm-up is the smaller change. Raising `,(0,X.jsx)(`code`,{children:`failureThreshold`}),` hides the symptom on every future deploy.`]}),(0,X.jsx)(me,{sources:Fe})]})}),(0,X.jsx)(u,{position:`right`,senderName:`You`,timestamp:`14:08`,children:`Is that the same thing that hit us last Thursday?`}),(0,X.jsx)(u,{position:`left`,senderName:`Assistant`,timestamp:`14:09`,isTyping:!0,children:(0,X.jsx)(ge,{status:`running`,message:`Reading 6 incidents from the last 30 days`})})]}),(0,X.jsx)(f,{px:`2xl`,py:`2xl`,children:(0,X.jsxs)(p,{gap:`md`,children:[(0,X.jsxs)(s,{gap:`md`,align:`center`,children:[(0,X.jsx)(g,{intent:`danger`,children:`No answer`}),(0,X.jsx)(_,{size:`sm`,color:`text-secondary`,children:`Search over incident history timed out`})]}),(0,X.jsx)(s,{gap:`sm`,children:(0,X.jsx)(h,{variant:`outline`,size:`sm`,children:`Search without history`})})]})}),(0,X.jsx)(ne,{children:(0,X.jsx)(de,{value:n,onChange:r,onSubmit:()=>r(``),placeholder:`Ask about this deploy`,showAttach:!0,maxRows:6,fullWidth:!0})})]})]})]})}var Y,X,Me,Ne,Pe,Fe,Ie=e((()=>{Y=t(n(),1),d(),X=r(),Me=[{id:`t_8f2c`,title:`Deploy 8f2c1ad rolled back twice`,preview:`Health checks pass but the pods never take traffic`,timestamp:`14:09`},{id:`t_pool`,title:`Postgres connection pool exhausted after the 14:02 restart — same as last Thursday?`,preview:`341 connections against a max of 200`,timestamp:`13:51`,unread:!0},{id:`t_queue`,title:`Staging queue draining slowly`,preview:`Backlog sat at 4,281 for most of the morning`,timestamp:`Yesterday`},{id:`t_tf`,title:`Terraform plan diff on the eu-west module`,timestamp:`Jul 29`}],Ne=[{id:`sonnet`,name:`Sonnet`,description:`Fast enough to keep up with a live incident`,contextLength:2e5,badge:`Default`},{id:`opus`,name:`Opus`,description:`Slower, better at reading unfamiliar stack traces`,contextLength:2e5}],Pe=`readinessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
  failureThreshold: 3`,Fe=[{title:`Rollout stuck: pods ready but not receiving traffic`,url:`https://runbooks.internal/deploys/rollout-stuck`,domain:`runbooks.internal`,description:`Covers the readiness gate the service mesh adds on top of Kubernetes.`},{title:`Deploy 8f2c1ad — build log`,url:`https://ci.internal/builds/8f2c1ad`,domain:`ci.internal`}],J.__docgenInfo={description:``,methods:[],displayName:`DeployAssistant`}})),Le,Re=e((()=>{Le=`import { useState } from "react";
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
`}));function ze(e){return{"index.html":qe,"package.json":Ke,"tsconfig.json":Xe,"vite.config.ts":Ye,"src/main.tsx":Je,"src/App.tsx":e}}function Z(e){let t=document.createElement(`form`);t.method=`POST`,t.action=`https://stackblitz.com/run?file=src/App.tsx`,t.target=`_blank`,t.rel=`noopener`,t.style.display=`none`;let n=(e,n)=>{let r=document.createElement(`input`);r.type=`hidden`,r.name=e,r.value=n,t.appendChild(r)};n(`project[title]`,`wimui — ${e.title}`),n(`project[description]`,e.description??`A wimui recipe: ${e.title}.`),n(`project[template]`,`node`);for(let[t,r]of Object.entries(ze(e.source)))n(`project[files][${t}]`,r);document.body.appendChild(t),t.submit(),t.remove()}function Be({Component:e,pad:t}){return(0,Q.jsx)(`div`,{style:{padding:t,background:`var(--wim-color-surface-app)`,overflow:`auto`},children:(0,Q.jsx)(e,{})})}function Ve({source:e}){return(0,Q.jsxs)(`details`,{style:{borderTop:$},children:[(0,Q.jsx)(`summary`,{style:{padding:`var(--wim-spacing-xl) var(--wim-spacing-2xl)`,cursor:`pointer`,fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:`View source`}),(0,Q.jsx)(`div`,{style:{padding:`0 var(--wim-spacing-2xl)`},children:(0,Q.jsx)(se,{block:!0,language:`tsx`,code:e})})]})}function He({recipe:e}){return(0,Q.jsxs)(p,{gap:`xl`,children:[(0,Q.jsxs)(s,{justify:`between`,align:`end`,gap:`2xl`,children:[(0,Q.jsxs)(p,{gap:`2xs`,style:{maxWidth:`58ch`},children:[(0,Q.jsx)(S,{tag:`h2`,size:`md`,children:e.title}),(0,Q.jsx)(_,{color:`secondary`,children:e.description})]}),(0,Q.jsx)(h,{variant:`solid`,onClick:()=>Z(e),children:`Open in StackBlitz`})]}),(0,Q.jsx)(m,{padding:`none`,variant:`outline`,style:{overflow:`hidden`},children:(0,Q.jsxs)(p,{gap:0,children:[(0,Q.jsx)(Be,{Component:e.Component,pad:`var(--wim-spacing-4xl)`}),(0,Q.jsx)(Ve,{source:e.source})]})})]})}function Ue({recipe:e}){return(0,Q.jsx)(m,{padding:`none`,variant:`outline`,style:{overflow:`hidden`},children:(0,Q.jsxs)(p,{gap:0,children:[(0,Q.jsx)(Be,{Component:e.Component,pad:`var(--wim-spacing-3xl)`}),(0,Q.jsxs)(s,{justify:`between`,align:`center`,gap:`xl`,style:{padding:`var(--wim-spacing-2xl) var(--wim-spacing-3xl)`,borderTop:$},children:[(0,Q.jsxs)(p,{gap:`3xs`,children:[(0,Q.jsx)(_,{weight:`medium`,children:e.title}),e.description?(0,Q.jsx)(_,{size:`sm`,color:`secondary`,children:e.description}):null]}),(0,Q.jsx)(h,{variant:`ghost`,size:`sm`,"aria-label":`Open ${e.title} in StackBlitz`,onClick:()=>Z(e),children:`Open`})]}),(0,Q.jsx)(Ve,{source:e.source})]})})}function We(){let[e,...t]=Ge,n=e=>t.filter(t=>t.column===e).map(e=>(0,Q.jsx)(Ue,{recipe:e},e.id));return(0,Q.jsxs)(p,{gap:`5xl`,"data-host-canary":!0,children:[(0,Q.jsx)(He,{recipe:e}),(0,Q.jsxs)(i,{cols:{base:1,md:`minmax(0, 7fr) minmax(0, 5fr)`},gap:`2xl`,align:`start`,children:[(0,Q.jsx)(p,{gap:`2xl`,children:n(`wide`)}),(0,Q.jsx)(p,{gap:`2xl`,children:n(`narrow`)})]})]})}var Q,Ge,Ke,qe,Je,Ye,Xe,$,Ze=e((()=>{d(),be(),xe(),Se(),Ce(),we(),Te(),Ee(),De(),ke(),Ae(),je(),Ie(),Re(),Q=r(),Ge=[{id:`billing-overview`,title:`Billing overview`,description:`A KPI row over a dense invoice table. One customer has no plan and one payment failed — the two rows a billing screen actually has to survive.`,Component:w,source:O},{id:`deploy-assistant`,title:`Deploy assistant`,description:`A conversation mid-incident: one answer with its reasoning and sources, one that failed and offers a retry, one still being written.`,column:`wide`,Component:J,source:Le},{id:`members-table`,title:`Members`,description:`A search and role filter over a table that narrows as you type.`,column:`wide`,Component:L,source:Oe},{id:`sign-in`,title:`Sign in`,description:`One card, 380px, form left-aligned.`,column:`narrow`,Component:k,source:j},{id:`onboarding`,title:`Workspace onboarding`,description:`Opened at step 2, the way you would find it after a reload.`,column:`wide`,Component:U,source:q},{id:`notification-settings`,title:`Notification settings`,column:`narrow`,Component:M,source:I}],Ke=JSON.stringify({name:`wimui-recipe`,private:!0,type:`module`,scripts:{dev:`vite`,build:`vite build`},dependencies:{wimui:`^${C}`,react:`^19.0.0`,"react-dom":`^19.0.0`},devDependencies:{"@vitejs/plugin-react":`^4.3.4`,"@types/react":`^19.0.0`,"@types/react-dom":`^19.0.0`,typescript:`^5.7.0`,vite:`^6.0.0`}},null,2),qe=`<!doctype html>
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
`,Je=`import { StrictMode } from "react";
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
`,Ye=`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({ plugins: [react()] });
`,Xe=JSON.stringify({compilerOptions:{target:`ESNext`,module:`ESNext`,moduleResolution:`bundler`,jsx:`react-jsx`,strict:!0,esModuleInterop:!0,skipLibCheck:!0},include:[`src`]},null,2),$=`1px solid var(--wim-color-border-secondary)`,We.__docgenInfo={description:``,methods:[],displayName:`Playground`}}));export{Ze as n,We as t};