"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-DmCNssFd.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{ji as s,t as c}from"./src-CV0le6yM.js";import{t as l}from"./Box-BVB_9vOB.js";import{t as u}from"./Stack-z584y6QE.js";import{t as d}from"./Dashboard-DwfjPctW.js";import{t as f}from"./Text-CLDfz7UT.js";import{t as p}from"./Title-DgBJgLRP.js";import{t as m}from"./Sparkline-ODcYwvDv.js";import{A as h,E as g,O as _,S as v,b as y,f as b,m as x,t as S,u as C,v as w,w as T}from"./charts-Dg5J96mY.js";var E,D,O,k,A,j,M,N,P;e((()=>{t(),a(),r(),c(),S(),E=i(),D={title:`Patterns/Roastery`,parameters:{layout:`fullscreen`,docs:{description:{component:"9 枚目の合成画面（T32 / T110）。**狙いは charts** ── カテゴリまるごと未合成で、\n`Dashboard` / `DashboardWidgetCard` も一度も使われていなかった。\n\n題材は `Patterns/Admin` `Patterns/Form` `Patterns/Hiring` と同じ\nKiyosumi Roasters の運転席。**作業ごとに 3 ストーリーへ分ける**（今日の焙煎 /\n品質 / 生豆と出荷）。\n\n**形は仕事から選ぶ**（`dataviz` skill の手順 1）。同じ仕事に 2 つの形は置かない:\n- 推移で内訳も見たい → `AreaChart`（積み上げ）\n- 並べて比べる → `BarChart`\n- 1 本の推移 → `LineChart`\n- 面積で大小 → `Treemap`（**`PieChart` は同じ仕事なので載せない**）\n\n**載せなかったもの**: `PieChart`（`Treemap` と仕事が重なる）と\n`CustomizedContent`（`Treemap` の内側で使う描画部品で、単体では画面に置けない）。\n\n**色は 1 系列を基本にした。** このライブラリの `CHART_COLORS` は、隣り合う\n2 色（`chart-primary` `#4f8b96` と `chart-info` `#516691`）の差が **ΔE 10.8**\nしかなく、**色覚に関係なく見分けにくい**（`dataviz` skill の validator で実測）。\n2 系列以上が要る場所では、凡例に加えて**形や並びでも区別できる**ようにしてある。"}}}},O=e=>`docs_stories_recipes:roastery.${e}`,k=[{week:`W27`,house:412,wholesale:838},{week:`W28`,house:447,wholesale:902},{week:`W29`,house:398,wholesale:1074},{week:`W30`,house:465,wholesale:963},{week:`W31`,house:421,wholesale:1188},{week:`W32`,house:488,wholesale:1136}],A=[{shop:`Kiyosumi`,bags:186},{shop:`Monzen`,bags:143},{shop:`Kuramae`,bags:97},{shop:`Ryogoku`,bags:61}],j={render:function(){let{t:e}=n(o),t=(e,t,n,r)=>(0,E.jsxs)(u,{gap:`2xs`,children:[(0,E.jsx)(f,{size:`xl`,weight:`bold`,children:t}),(0,E.jsx)(m,{data:n,width:`100%`,height:28,ariaLabel:e}),(0,E.jsx)(f,{size:`xs`,color:`text-tertiary`,children:r})]});return(0,E.jsx)(l,{p:`2xl`,children:(0,E.jsxs)(u,{gap:`xl`,children:[(0,E.jsxs)(u,{gap:`2xs`,children:[(0,E.jsx)(p,{tag:`h1`,size:`md`,children:e(O(`title`))}),(0,E.jsx)(f,{size:`xs`,color:`text-tertiary`,children:e(O(`subtitle`))})]}),(0,E.jsx)(d,{titleLevel:2,columns:4,gap:`lg`,widgets:[{id:`roasted`,title:e(O(`kpi_roasted`)),content:t(e(O(`kpi_roasted`)),`1,624 kg`,[1250,1349,1472,1428,1609,1584,1624],e(O(`kpi_roasted_note`)))},{id:`batches`,title:e(O(`kpi_batches`)),content:t(e(O(`kpi_batches`)),`38`,[31,34,36,33,39,37,38],e(O(`kpi_batches_note`)))},{id:`yield`,title:e(O(`kpi_yield`)),content:t(e(O(`kpi_yield`)),`84.6 %`,[85.1,84.9,84.2,85.4,84.8,84.1,84.6],e(O(`kpi_yield_note`)))},{id:`late`,title:e(O(`kpi_late`)),content:t(e(O(`kpi_late`)),`3`,[0,1,0,2,1,4,3],e(O(`kpi_late_note`)))},{id:`trend`,title:e(O(`chart_trend`)),description:e(O(`chart_trend_desc`)),span:3,content:(0,E.jsx)(h,{data:k,keys:[`house`,`wholesale`],xAxisKey:`week`,stacked:!0,height:280})},{id:`pickups`,title:e(O(`chart_pickups`)),description:e(O(`chart_pickups_desc`)),content:(0,E.jsx)(_,{data:A,keys:[`bags`],xAxisKey:`shop`,height:280})}]})]})})}},M={render:function(){let{t:e}=n(o),t=[{axis:e(O(`cup_acidity`)),lot:8.2,house:7.5},{axis:e(O(`cup_body`)),lot:7.4,house:7.8},{axis:e(O(`cup_sweetness`)),lot:8.6,house:8},{axis:e(O(`cup_aroma`)),lot:7.9,house:7.6},{axis:e(O(`cup_aftertaste`)),lot:6.8,house:7.4}];return(0,E.jsx)(l,{p:`2xl`,children:(0,E.jsxs)(u,{gap:`xl`,children:[(0,E.jsxs)(u,{gap:`2xs`,children:[(0,E.jsx)(p,{tag:`h2`,size:`sm`,children:e(O(`quality_title`))}),(0,E.jsx)(f,{size:`xs`,color:`text-tertiary`,children:e(O(`quality_desc`))})]}),(0,E.jsx)(d,{columns:2,gap:`lg`,widgets:[{id:`cupping`,title:e(O(`chart_cupping`)),description:e(O(`chart_cupping_desc`)),content:(0,E.jsx)(x,{data:t,keys:[`lot`,`house`],indexKey:`axis`,height:300})},{id:`target`,title:e(O(`chart_target`)),description:e(O(`chart_target_desc`)),content:(0,E.jsx)(v,{value:84.6,min:70,max:95,height:260})},{id:`brews`,title:e(O(`chart_brews`)),description:e(O(`chart_brews_desc`)),span:2,content:(0,E.jsx)(b,{data:[{x:2.1,y:19.4,name:`L-2291`},{x:2.4,y:20.8,name:`L-2293`},{x:2.6,y:21.6,name:`L-2296`},{x:3.1,y:22.9,name:`L-2298`},{x:3.4,y:21.1,name:`L-2301`},{x:2.9,y:18.2,name:`L-2304`},{x:3.8,y:23.7,name:`L-2306`}],xAxisName:e(O(`brews_x`)),yAxisName:e(O(`brews_y`)),height:280})},{id:`yield`,title:e(O(`chart_yield`)),description:e(O(`chart_yield_desc`)),span:2,content:(0,E.jsx)(w,{data:[{day:`8/4`,yield:85.1},{day:`8/5`,yield:84.9},{day:`8/6`,yield:84.2},{day:`8/7`,yield:85.4},{day:`8/8`,yield:84.8},{day:`8/9`,yield:84.1},{day:`8/10`,yield:84.6}],keys:[`yield`],xAxisKey:`day`,yDomain:[`auto`,`auto`],height:280})}]})]})})}},N={render:function(){let{t:e}=n(o),t=e=>new Date(`${e}T00:00:00+09:00`),r=[{id:`l-2291`,label:`L-2291 Yirgacheffe`,startDate:t(`2026-08-03`),endDate:t(`2026-08-07`),progress:100},{id:`l-2296`,label:`L-2296 Huila`,startDate:t(`2026-08-05`),endDate:t(`2026-08-11`),progress:82},{id:`l-2301`,label:`L-2301 Antigua`,startDate:t(`2026-08-08`),endDate:t(`2026-08-14`),progress:45},{id:`l-2306`,label:`L-2306 Sidamo`,startDate:t(`2026-08-10`),endDate:t(`2026-08-18`),progress:12}],i=[{name:`Ethiopia`,kg:1240},{name:`Colombia`,kg:860},{name:`Guatemala`,kg:515},{name:`Rwanda`,kg:288},{name:`Brazil`,kg:174}],a=[{name:e(O(`flow_green`)),kg:3077},{name:e(O(`flow_roasted`)),kg:2603},{name:e(O(`flow_packed`)),kg:2544},{name:e(O(`flow_shipped`)),kg:2489}],c=[{x:e(O(`day_mon`)),y:e(O(`slot_am`)),value:12},{x:e(O(`day_mon`)),y:e(O(`slot_pm`)),value:31},{x:e(O(`day_wed`)),y:e(O(`slot_am`)),value:44},{x:e(O(`day_wed`)),y:e(O(`slot_pm`)),value:27},{x:e(O(`day_fri`)),y:e(O(`slot_am`)),value:19},{x:e(O(`day_fri`)),y:e(O(`slot_pm`)),value:58},{x:e(O(`day_sat`)),y:e(O(`slot_am`)),value:63},{x:e(O(`day_sat`)),y:e(O(`slot_pm`)),value:41}];return(0,E.jsx)(l,{p:`2xl`,children:(0,E.jsxs)(u,{gap:`xl`,children:[(0,E.jsx)(s,{justify:`between`,align:`end`,wrap:`wrap`,gap:`md`,children:(0,E.jsxs)(u,{gap:`2xs`,children:[(0,E.jsx)(p,{tag:`h2`,size:`sm`,children:e(O(`supply_title`))}),(0,E.jsx)(f,{size:`xs`,color:`text-tertiary`,children:e(O(`supply_desc`))})]})}),(0,E.jsx)(T,{tasks:r,startDate:new Date(`2026-08-03T00:00:00+09:00`),endDate:new Date(`2026-08-19T00:00:00+09:00`),viewMode:`day`}),(0,E.jsx)(d,{columns:3,gap:`lg`,widgets:[{id:`stock`,title:e(O(`chart_stock`)),description:e(O(`chart_stock_desc`)),content:(0,E.jsx)(C,{data:i,dataKey:`kg`,height:260})},{id:`heat`,title:e(O(`chart_heat`)),description:e(O(`chart_heat_desc`)),content:(0,E.jsx)(y,{data:c,xAxisKey:[e(O(`day_mon`)),e(O(`day_wed`)),e(O(`day_fri`)),e(O(`day_sat`))],yAxisKey:[e(O(`slot_am`)),e(O(`slot_pm`))],height:260})},{id:`flow`,title:e(O(`chart_flow`)),description:e(O(`chart_flow_desc`)),content:(0,E.jsx)(g,{data:a,dataKey:`kg`,nameKey:`name`,height:260})}]})]})})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const tile = (label: string, value: string, series: number[], note: string) => <Stack gap="2xs">
        <Text size="xl" weight="bold">
          {value}
        </Text>
        {/* 既定の \`width\` は 100px なので、タイルの左 3 分の 1 しか使わない。
            文字列を渡すと器は伸びる（VRT の撮影経路だけは 100px に落ちる＝T141）。 */}
        <Sparkline data={series} width="100%" height={28} ariaLabel={label} />
        <Text size="xs" color="text-tertiary">
          {note}
        </Text>
      </Stack>;
    return <Box p="2xl">
        <Stack gap="xl">
          <Stack gap="2xs">
            <Title tag="h1" size="md">
              {t(ns("title"))}
            </Title>
            <Text size="xs" color="text-tertiary">
              {t(ns("subtitle"))}
            </Text>
          </Stack>

          {/* T140 が直ったので、回避（節見出しの h2）ではなく段そのものを渡す。
              ページの見出しが h1 なので、ウィジェットは h2。 */}
          <Dashboard titleLevel={2} columns={4} gap="lg" widgets={[{
          id: "roasted",
          title: t(ns("kpi_roasted")),
          content: tile(t(ns("kpi_roasted")), "1,624 kg", [1250, 1349, 1472, 1428, 1609, 1584, 1624], t(ns("kpi_roasted_note")))
        }, {
          id: "batches",
          title: t(ns("kpi_batches")),
          content: tile(t(ns("kpi_batches")), "38", [31, 34, 36, 33, 39, 37, 38], t(ns("kpi_batches_note")))
        }, {
          id: "yield",
          title: t(ns("kpi_yield")),
          content: tile(t(ns("kpi_yield")), "84.6 %", [85.1, 84.9, 84.2, 85.4, 84.8, 84.1, 84.6], t(ns("kpi_yield_note")))
        }, {
          id: "late",
          title: t(ns("kpi_late")),
          content: tile(t(ns("kpi_late")), "3", [0, 1, 0, 2, 1, 4, 3], t(ns("kpi_late_note")))
        }, {
          id: "trend",
          title: t(ns("chart_trend")),
          description: t(ns("chart_trend_desc")),
          span: 3,
          content: <AreaChart data={ROAST_WEEKS} keys={["house", "wholesale"]} xAxisKey="week" stacked height={280} />
        }, {
          id: "pickups",
          title: t(ns("chart_pickups")),
          description: t(ns("chart_pickups_desc")),
          content: <BarChart data={PICKUPS} keys={["bags"]} xAxisKey="shop" height={280} />
        }]} />
        </Stack>
      </Box>;
  }
}`,...j.parameters?.docs?.source},description:{story:"今日の焙煎。**主役は週次の推移**（面積の積み上げ＝合計と内訳を同時に見る）。\n上の 3 つは今日の数字で、`Sparkline` が直近 2 週間の形だけを見せる。",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const cupping = [{
      axis: t(ns("cup_acidity")),
      lot: 8.2,
      house: 7.5
    }, {
      axis: t(ns("cup_body")),
      lot: 7.4,
      house: 7.8
    }, {
      axis: t(ns("cup_sweetness")),
      lot: 8.6,
      house: 8.0
    }, {
      axis: t(ns("cup_aroma")),
      lot: 7.9,
      house: 7.6
    }, {
      axis: t(ns("cup_aftertaste")),
      lot: 6.8,
      house: 7.4
    }];
    const brews = [{
      x: 2.1,
      y: 19.4,
      name: "L-2291"
    }, {
      x: 2.4,
      y: 20.8,
      name: "L-2293"
    }, {
      x: 2.6,
      y: 21.6,
      name: "L-2296"
    }, {
      x: 3.1,
      y: 22.9,
      name: "L-2298"
    }, {
      x: 3.4,
      y: 21.1,
      name: "L-2301"
    }, {
      x: 2.9,
      y: 18.2,
      name: "L-2304"
    }, {
      x: 3.8,
      y: 23.7,
      name: "L-2306"
    }];
    const yields = [{
      day: "8/4",
      yield: 85.1
    }, {
      day: "8/5",
      yield: 84.9
    }, {
      day: "8/6",
      yield: 84.2
    }, {
      day: "8/7",
      yield: 85.4
    }, {
      day: "8/8",
      yield: 84.8
    }, {
      day: "8/9",
      yield: 84.1
    }, {
      day: "8/10",
      yield: 84.6
    }];
    return <Box p="2xl">
        <Stack gap="xl">
          <Stack gap="2xs">
            <Title tag="h2" size="sm">
              {t(ns("quality_title"))}
            </Title>
            <Text size="xs" color="text-tertiary">
              {t(ns("quality_desc"))}
            </Text>
          </Stack>

          <Dashboard columns={2} gap="lg" widgets={[{
          id: "cupping",
          title: t(ns("chart_cupping")),
          description: t(ns("chart_cupping_desc")),
          /* レーダーは正方形に描かれるので、広い列に置くと左右が余る。
             幅を使うのは散布図のほうなので、そちらを 2 列にする。 */
          content: <RadarChart data={cupping} keys={["lot", "house"]} indexKey="axis" height={300} />
        }, {
          id: "target",
          title: t(ns("chart_target")),
          description: t(ns("chart_target_desc")),
          content: <GaugeChart value={84.6} min={70} max={95} height={260} />
        }, {
          id: "brews",
          title: t(ns("chart_brews")),
          description: t(ns("chart_brews_desc")),
          span: 2,
          content: <ScatterChart data={brews} xAxisName={t(ns("brews_x"))} yAxisName={t(ns("brews_y"))} height={280} />
        }, {
          id: "yield",
          title: t(ns("chart_yield")),
          description: t(ns("chart_yield_desc")),
          /* 折れ線は横に長いほど読める。ゲージとレーダーは正方形なので 1 列。 */
          span: 2,
          content: (
          /* 84.1〜85.4% の動きを見る図なので、0 起点だと平らになる
             （T134）。範囲をデータに合わせる。 */
          <LineChart data={yields} keys={["yield"]} xAxisKey="day" yDomain={["auto", "auto"]} height={280} />)
        }]} />
        </Stack>
      </Box>;
  }
}`,...M.parameters?.docs?.source},description:{story:`品質。**主役はカッピングの形**（軸ごとの強弱を 1 枚で読む）。
右は「時間と収率」の散らばりで、目標帯から外れたロットを探すための図。`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const day = (iso: string) => new Date(\`\${iso}T00:00:00+09:00\`);
    const tasks = [{
      id: "l-2291",
      label: "L-2291 Yirgacheffe",
      startDate: day("2026-08-03"),
      endDate: day("2026-08-07"),
      progress: 100
    }, {
      id: "l-2296",
      label: "L-2296 Huila",
      startDate: day("2026-08-05"),
      endDate: day("2026-08-11"),
      progress: 82
    }, {
      id: "l-2301",
      label: "L-2301 Antigua",
      startDate: day("2026-08-08"),
      endDate: day("2026-08-14"),
      progress: 45
    }, {
      id: "l-2306",
      label: "L-2306 Sidamo",
      startDate: day("2026-08-10"),
      endDate: day("2026-08-18"),
      progress: 12
    }];

    // \`Treemap\` にラベルのキーを渡す prop は無く、**\`name\` 固定**
    // （内側の \`CustomizedContent\` がそれを読む）。
    const stock = [{
      name: "Ethiopia",
      kg: 1240
    }, {
      name: "Colombia",
      kg: 860
    }, {
      name: "Guatemala",
      kg: 515
    }, {
      name: "Rwanda",
      kg: 288
    }, {
      name: "Brazil",
      kg: 174
    }];

    /* \`nameKey\` は**データの列名**だが、\`check_stories_keys\` は
       \`nameKey="…"\` を**翻訳キー**として拾う（同じ語が 2 つの意味で使われている
       ＝ T144）。衝突を避けるため、列名は \`name\` にしておく。 */
    const flow = [{
      name: t(ns("flow_green")),
      kg: 3077
    }, {
      name: t(ns("flow_roasted")),
      kg: 2603
    }, {
      name: t(ns("flow_packed")),
      kg: 2544
    }, {
      name: t(ns("flow_shipped")),
      kg: 2489
    }];
    const pickupHeat = [{
      x: t(ns("day_mon")),
      y: t(ns("slot_am")),
      value: 12
    }, {
      x: t(ns("day_mon")),
      y: t(ns("slot_pm")),
      value: 31
    }, {
      x: t(ns("day_wed")),
      y: t(ns("slot_am")),
      value: 44
    }, {
      x: t(ns("day_wed")),
      y: t(ns("slot_pm")),
      value: 27
    }, {
      x: t(ns("day_fri")),
      y: t(ns("slot_am")),
      value: 19
    }, {
      x: t(ns("day_fri")),
      y: t(ns("slot_pm")),
      value: 58
    }, {
      x: t(ns("day_sat")),
      y: t(ns("slot_am")),
      value: 63
    }, {
      x: t(ns("day_sat")),
      y: t(ns("slot_pm")),
      value: 41
    }];
    return <Box p="2xl">
        <Stack gap="xl">
          <Group justify="between" align="end" wrap="wrap" gap="md">
            <Stack gap="2xs">
              <Title tag="h2" size="sm">
                {t(ns("supply_title"))}
              </Title>
              <Text size="xs" color="text-tertiary">
                {t(ns("supply_desc"))}
              </Text>
            </Stack>
          </Group>

          <GanttChart tasks={tasks} startDate={new Date("2026-08-03T00:00:00+09:00")} endDate={new Date("2026-08-19T00:00:00+09:00")} viewMode="day" />

          <Dashboard columns={3} gap="lg" widgets={[{
          id: "stock",
          title: t(ns("chart_stock")),
          description: t(ns("chart_stock_desc")),
          content: <Treemap data={stock} dataKey="kg" height={260} />
        }, {
          id: "heat",
          title: t(ns("chart_heat")),
          description: t(ns("chart_heat_desc")),
          content: <Heatmap data={pickupHeat}
          /* 軸の並びは利用者が決める（曜日は五十音でも辞書順でもない）。 */ xAxisKey={[t(ns("day_mon")), t(ns("day_wed")), t(ns("day_fri")), t(ns("day_sat"))]} yAxisKey={[t(ns("slot_am")), t(ns("slot_pm"))]} height={260} />
        }, {
          id: "flow",
          title: t(ns("chart_flow")),
          description: t(ns("chart_flow_desc")),
          content: <FunnelChart data={flow} dataKey="kg" nameKey="name" height={260} />
        }]} />
        </Stack>
      </Box>;
  }
}`,...N.parameters?.docs?.source},description:{story:`生豆と出荷。**主役はロットの進行**（いつ何がどこまで来ているか）。
下段は在庫の構成と、受け渡しの混み方、入荷から出荷までの目減り。`,...N.parameters?.docs?.description}}},P=[`Default`,`Quality`,`Supply`]}))();export{j as Default,M as Quality,N as Supply,P as __namedExportsOrder,D as default};