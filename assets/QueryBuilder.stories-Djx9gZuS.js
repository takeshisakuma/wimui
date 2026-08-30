"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,cr as a,xr as o}from"./iframe-splidnB2.js";import{n as s,t as c}from"./QueryBuilder-C2357bRx.js";var l=e({Default:()=>_,Predefined:()=>v,__namedExportsOrder:()=>y,default:()=>g}),u,d,f,p,m,h,g,_,v,y,b=t((()=>{u=n(r(),1),s(),o(),d=a(),{expect:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h=[{name:`firstName`,label:`query.builder.field_first_name`,type:`string`},{name:`lastName`,label:`query.builder.field_last_name`,type:`string`},{name:`age`,label:`query.builder.field_age`,type:`number`},{name:`birthday`,label:`query.builder.field_birthday`,type:`date`},{name:`isActive`,label:`query.builder.field_is_active`,type:`boolean`}],g={title:`Components/Data Structures/QueryBuilder`,component:c,tags:[],args:{fields:h}},_={render:e=>{let{t}=i(`components`),n=e.fields.map(e=>({...e,label:typeof e.label==`string`?t(e.label):e.label})),r={ruleAdded:t(`query.builder.rule_added`),groupAdded:t(`query.builder.group_added`),removed:t(`query.builder.removed`),ruleAriaLabel:t(`query.builder.rule`),fieldAriaLabel:t(`query.builder.field`),operatorAriaLabel:t(`query.builder.operator`),valueAriaLabel:t(`query.builder.value`),trueLabel:t(`query.builder.true`),falseLabel:t(`query.builder.false`),removeRuleAriaLabel:t(`query.builder.remove_rule`),removeGroupAriaLabel:t(`query.builder.remove_group`),addRuleLabel:t(`query.builder.add_rule`),addGroupLabel:t(`query.builder.add_group`),regionAriaLabel:t(`query.builder.region_label`),combinatorAriaLabel:t(`query.builder.combinator`),operators:{equal:t(`operators.equal`),not_equal:t(`operators.not_equal`),contains:t(`operators.contains`),starts_with:t(`operators.starts_with`),ends_with:t(`operators.ends_with`),greater_than:t(`operators.greater_than`),less_than:t(`operators.less_than`),greater_than_or_equal:t(`operators.greater_than_or_equal`),less_than_or_equal:t(`operators.less_than_or_equal`),is_null:t(`operators.is_null`),is_not_null:t(`operators.is_not_null`),after:t(`operators.after`),before:t(`operators.before`),after_or_on:t(`operators.after_or_on`),before_or_on:t(`operators.before_or_on`)}},[a,o]=(0,u.useState)(e.query);return(0,d.jsxs)(`div`,{style:{padding:`20px`},children:[(0,d.jsx)(c,{...e,fields:n,labels:r,query:a,onChange:o}),(0,d.jsxs)(`div`,{style:{marginTop:`20px`},children:[(0,d.jsxs)(`h4`,{children:[t(`query.builder.generated_json`),`:`]}),(0,d.jsx)(`pre`,{style:{backgroundColor:`var(--wim-color-surface-variant)`,padding:`10px`,borderRadius:`4px`,overflow:`auto`},children:JSON.stringify(a,null,2)})]})]})},play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`button`,{name:/add rule/i});await p.click(n),await f(t.getByRole(`combobox`)).toBeVisible();let r=t.getByRole(`button`,{name:/add group/i});await p.click(r);let i=t.getAllByRole(`group`);await f(i.length).toBeGreaterThan(1)}},v={args:{fields:h,defaultQuery:{id:`root`,combinator:`and`,not:!1,rules:[{id:`rule1`,field:`firstName`,operator:`=`,value:`John`},{id:`group1`,combinator:`or`,not:!1,rules:[{id:`rule2`,field:`age`,operator:`>`,value:18},{id:`rule3`,field:`isActive`,operator:`=`,value:!0}]}]}},render:e=>{let{t}=i(`components`),n=e.fields.map(e=>({...e,label:typeof e.label==`string`?t(e.label):e.label})),r={ruleAdded:t(`query.builder.rule_added`),groupAdded:t(`query.builder.group_added`),removed:t(`query.builder.removed`),ruleAriaLabel:t(`query.builder.rule`),fieldAriaLabel:t(`query.builder.field`),operatorAriaLabel:t(`query.builder.operator`),valueAriaLabel:t(`query.builder.value`),trueLabel:t(`query.builder.true`),falseLabel:t(`query.builder.false`),removeRuleAriaLabel:t(`query.builder.remove_rule`),removeGroupAriaLabel:t(`query.builder.remove_group`),addRuleLabel:t(`query.builder.add_rule`),addGroupLabel:t(`query.builder.add_group`),regionAriaLabel:t(`query.builder.region_label`),combinatorAriaLabel:t(`query.builder.combinator`),operators:{equal:t(`operators.equal`),not_equal:t(`operators.not_equal`),contains:t(`operators.contains`),starts_with:t(`operators.starts_with`),ends_with:t(`operators.ends_with`),greater_than:t(`operators.greater_than`),less_than:t(`operators.less_than`),greater_than_or_equal:t(`operators.greater_than_or_equal`),less_than_or_equal:t(`operators.less_than_or_equal`),is_null:t(`operators.is_null`),is_not_null:t(`operators.is_not_null`),after:t(`operators.after`),before:t(`operators.before`),after_or_on:t(`operators.after_or_on`),before_or_on:t(`operators.before_or_on`)}},[a,o]=(0,u.useState)(e.defaultQuery);return(0,d.jsxs)(`div`,{style:{padding:`20px`},children:[(0,d.jsx)(c,{...e,fields:n,labels:r,query:a,onChange:o}),(0,d.jsxs)(`div`,{style:{marginTop:`20px`},children:[(0,d.jsxs)(`h4`,{children:[t(`query.builder.generated_json`),`:`]}),(0,d.jsx)(`pre`,{style:{backgroundColor:`var(--wim-color-surface-variant)`,padding:`10px`,borderRadius:`4px`,overflow:`auto`},children:JSON.stringify(a,null,2)})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("components");
    const translatedFields = args.fields.map(field => ({
      ...field,
      label: typeof field.label === "string" ? t(field.label) : field.label
    }));
    const labels = {
      ruleAdded: t("query.builder.rule_added"),
      groupAdded: t("query.builder.group_added"),
      removed: t("query.builder.removed"),
      ruleAriaLabel: t("query.builder.rule"),
      fieldAriaLabel: t("query.builder.field"),
      operatorAriaLabel: t("query.builder.operator"),
      valueAriaLabel: t("query.builder.value"),
      trueLabel: t("query.builder.true"),
      falseLabel: t("query.builder.false"),
      removeRuleAriaLabel: t("query.builder.remove_rule"),
      removeGroupAriaLabel: t("query.builder.remove_group"),
      addRuleLabel: t("query.builder.add_rule"),
      addGroupLabel: t("query.builder.add_group"),
      regionAriaLabel: t("query.builder.region_label"),
      combinatorAriaLabel: t("query.builder.combinator"),
      operators: {
        equal: t("operators.equal"),
        not_equal: t("operators.not_equal"),
        contains: t("operators.contains"),
        starts_with: t("operators.starts_with"),
        ends_with: t("operators.ends_with"),
        greater_than: t("operators.greater_than"),
        less_than: t("operators.less_than"),
        greater_than_or_equal: t("operators.greater_than_or_equal"),
        less_than_or_equal: t("operators.less_than_or_equal"),
        is_null: t("operators.is_null"),
        is_not_null: t("operators.is_not_null"),
        after: t("operators.after"),
        before: t("operators.before"),
        after_or_on: t("operators.after_or_on"),
        before_or_on: t("operators.before_or_on")
      }
    };
    const [query, setQuery] = useState<QueryGroup | undefined>(args.query);
    return <div style={{
      padding: "20px"
    }}>
        <QueryBuilder {...args} fields={translatedFields} labels={labels} query={query} onChange={setQuery} />
        <div style={{
        marginTop: "20px"
      }}>
          <h4>{t("query.builder.generated_json")}:</h4>
          <pre style={{
          backgroundColor: "var(--wim-color-surface-variant)",
          padding: "10px",
          borderRadius: "4px",
          overflow: "auto"
        }}>
            {JSON.stringify(query, null, 2)}
          </pre>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Click "Add Rule"
    const addRuleButton = canvas.getByRole("button", {
      name: /add rule/i
    });
    await userEvent.click(addRuleButton);

    // Check if a rule is added (field select is visible)
    await expect(canvas.getByRole("combobox")).toBeVisible();

    // Click "Add Group"
    const addGroupButton = canvas.getByRole("button", {
      name: /add group/i
    });
    await userEvent.click(addGroupButton);

    // Check if a nested group is added
    const groups = canvas.getAllByRole("group");
    await expect(groups.length).toBeGreaterThan(1);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    fields,
    defaultQuery: {
      id: "root",
      combinator: "and",
      not: false,
      rules: [{
        id: "rule1",
        field: "firstName",
        operator: "=",
        value: "John"
      }, {
        id: "group1",
        combinator: "or",
        not: false,
        rules: [{
          id: "rule2",
          field: "age",
          operator: ">",
          value: 18
        }, {
          id: "rule3",
          field: "isActive",
          operator: "=",
          value: true
        }]
      }]
    }
  },
  render: args => {
    const {
      t
    } = useTranslation("components");
    const translatedFields = args.fields.map(field => ({
      ...field,
      label: typeof field.label === "string" ? t(field.label) : field.label
    }));
    const labels = {
      ruleAdded: t("query.builder.rule_added"),
      groupAdded: t("query.builder.group_added"),
      removed: t("query.builder.removed"),
      ruleAriaLabel: t("query.builder.rule"),
      fieldAriaLabel: t("query.builder.field"),
      operatorAriaLabel: t("query.builder.operator"),
      valueAriaLabel: t("query.builder.value"),
      trueLabel: t("query.builder.true"),
      falseLabel: t("query.builder.false"),
      removeRuleAriaLabel: t("query.builder.remove_rule"),
      removeGroupAriaLabel: t("query.builder.remove_group"),
      addRuleLabel: t("query.builder.add_rule"),
      addGroupLabel: t("query.builder.add_group"),
      regionAriaLabel: t("query.builder.region_label"),
      combinatorAriaLabel: t("query.builder.combinator"),
      operators: {
        equal: t("operators.equal"),
        not_equal: t("operators.not_equal"),
        contains: t("operators.contains"),
        starts_with: t("operators.starts_with"),
        ends_with: t("operators.ends_with"),
        greater_than: t("operators.greater_than"),
        less_than: t("operators.less_than"),
        greater_than_or_equal: t("operators.greater_than_or_equal"),
        less_than_or_equal: t("operators.less_than_or_equal"),
        is_null: t("operators.is_null"),
        is_not_null: t("operators.is_not_null"),
        after: t("operators.after"),
        before: t("operators.before"),
        after_or_on: t("operators.after_or_on"),
        before_or_on: t("operators.before_or_on")
      }
    };
    const [query, setQuery] = useState<QueryGroup | undefined>(args.defaultQuery as QueryGroup);
    return <div style={{
      padding: "20px"
    }}>
        <QueryBuilder {...args} fields={translatedFields} labels={labels} query={query} onChange={setQuery} />
        <div style={{
        marginTop: "20px"
      }}>
          <h4>{t("query.builder.generated_json")}:</h4>
          <pre style={{
          backgroundColor: "var(--wim-color-surface-variant)",
          padding: "10px",
          borderRadius: "4px",
          overflow: "auto"
        }}>
            {JSON.stringify(query, null, 2)}
          </pre>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Predefined`]}));b();export{_ as Default,v as Predefined,y as __namedExportsOrder,g as default,b as n,l as t};