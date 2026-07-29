import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  Alert,
  Autosave,
  Box,
  Button,
  Card,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Code,
  Container,
  CounterTextarea,
  DatePicker,
  DescriptionList,
  DescriptionListDetails,
  DescriptionListItem,
  DescriptionListTerm,
  Divider,
  Dropzone,
  Fieldset,
  FileUpload,
  Grid,
  Group,
  Icon,
  IconButton,
  Input,
  InputMask,
  Legend,
  Link,
  NumberInput,
  OtpInput,
  PhoneInput,
  RadioGroup,
  Result,
  SegmentedControl,
  Stack,
  Stepper,
  Tag,
  Text,
  TimePicker,
  Title,
  TreeSelect,
} from "wimui";
import type { CascaderOption, TreeSelectNode } from "wimui";

const meta: Meta = {
  title: "Patterns/Form/Wholesale account",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

/**
 * 焙煎所（Patterns/Admin と同じ Kiyosumi Roasters）の卸売取引を申し込む側の画面。
 *
 * 下書きの保存時刻は固定する（VRT を決定的にするため）。
 */
const SAVED_AT = new Date("2026-07-28T10:42:00+09:00");
const FIRST_DELIVERY = new Date("2026-08-17T00:00:00+09:00");

/** 申込者の固有名詞。翻訳せず、値として持つ。 */
const APPLICANT = {
  tradeName: "Hoji Bakestand",
  registrationNumber: "7011-01-034982",
  contact: "Mariko Ueda",
  email: "ueda@hojibakestand.jp",
  phone: "090-2244-8130",
  receiptNumber: "WS-2607-0184",
};

/** アップロード済みの書類。1 件はサイズ超過で受理されていない（＝不完全な行）。 */
const DOCUMENTS = [
  {
    name: "hokenjo-eigyo-kyoka.pdf",
    sizeLabel: "1.2 MB",
    accepted: true,
  },
  {
    name: "hoji-shiire-keikaku-2026H2.xlsx",
    sizeLabel: "8.4 MB",
    accepted: false,
  },
];

const CATEGORY_VALUE = ["food_service", "bakery", "eat_in"];

const DELIVERY_KEYS = ["nakameguro", "kuramae"];

type ApplicationProps = {
  /** 表示するステップ（0=事業者 / 1=納品条件 / 2=書類 / 3=担当者）。 */
  initialStep?: number;
  /** 送信を試みてサーバ側の検証に落ちた状態。 */
  invalid?: boolean;
  /** SMS の確認コードが一致しなかった状態。 */
  codeMismatch?: boolean;
  /** 受付が完了した状態。 */
  accepted?: boolean;
};

function WholesaleApplication({
  initialStep = 0,
  invalid = false,
  codeMismatch = false,
  accepted = false,
}: ApplicationProps) {
  const { t } = useTranslation(ALL_NAMESPACES);
  const [step, setStep] = useState(initialStep);
  const [done, setDone] = useState(accepted);

  // 事業者情報
  const [tradeName, setTradeName] = useState(invalid ? "" : APPLICANT.tradeName);
  const [entity, setEntity] = useState("corporation");
  const [registration, setRegistration] = useState(
    invalid ? "7011-01" : APPLICANT.registrationNumber,
  );
  const [category, setCategory] = useState<string[]>(invalid ? [] : CATEGORY_VALUE);
  const [storeCount, setStoreCount] = useState(invalid ? "0" : "3");

  // 納品条件
  const [deliverTo, setDeliverTo] = useState<string[]>(DELIVERY_KEYS);
  const [monthlyKg, setMonthlyKg] = useState("45");
  const [frequency, setFrequency] = useState("weekly");
  const [weekdays, setWeekdays] = useState<string[]>(["tue", "fri"]);
  const [receiveAt, setReceiveAt] = useState("08:30");
  const [firstDelivery, setFirstDelivery] = useState<Date | null>(FIRST_DELIVERY);

  // 書類・担当者
  const [note, setNote] = useState(t("wholesale.note_value"));
  const [contact, setContact] = useState(APPLICANT.contact);
  const [email, setEmail] = useState(APPLICANT.email);
  const [phone, setPhone] = useState(APPLICANT.phone);
  const [countryCode, setCountryCode] = useState("JP");
  const [code, setCode] = useState(codeMismatch ? "418203" : "4192");
  const [agreed, setAgreed] = useState(false);

  const categoryOptions: CascaderOption[] = useMemo(
    () => [
      {
        value: "food_service",
        label: t("wholesale.cat_food_service"),
        children: [
          {
            value: "cafe",
            label: t("wholesale.cat_cafe"),
            children: [
              { value: "roast_in_house", label: t("wholesale.cat_roast_in_house") },
              { value: "roast_none", label: t("wholesale.cat_roast_none") },
            ],
          },
          {
            value: "bakery",
            label: t("wholesale.cat_bakery"),
            children: [
              { value: "eat_in", label: t("wholesale.cat_eat_in") },
              { value: "takeout", label: t("wholesale.cat_takeout") },
            ],
          },
        ],
      },
      {
        value: "retail",
        label: t("wholesale.cat_retail"),
        children: [
          { value: "grocery", label: t("wholesale.cat_grocery") },
          { value: "online", label: t("wholesale.cat_online") },
        ],
      },
      { value: "office", label: t("wholesale.cat_office") },
    ],
    [t],
  );

  // 店舗名は固有名詞なので翻訳しない。都県名だけラベルを持つ。
  const storeTree: TreeSelectNode[] = useMemo(
    () => [
      {
        value: "tokyo",
        label: t("wholesale.area_tokyo"),
        children: [
          { value: "nakameguro", label: "Nakameguro" },
          { value: "kuramae", label: "Kuramae" },
        ],
      },
      {
        value: "kanagawa",
        label: t("wholesale.area_kanagawa"),
        children: [{ value: "yuigahama", label: "Yuigahama" }],
      },
      { value: "warehouse", label: t("wholesale.area_warehouse"), disabled: true },
    ],
    [t],
  );

  const steps = [
    { title: t("wholesale.step_business") },
    { title: t("wholesale.step_delivery") },
    { title: t("wholesale.step_documents") },
    { title: t("wholesale.step_contact") },
  ];

  const stepLead = [
    t("wholesale.lead_business"),
    t("wholesale.lead_delivery"),
    t("wholesale.lead_documents"),
    t("wholesale.lead_contact"),
  ][step];

  const invalidHere = invalid && step === 0;

  if (done) {
    return (
      <Box bg="surface-app" py="4xl">
        <Container size="md">
          <Card variant="outline" padding="2xl">
            <Result
              intent="success"
              title={t("wholesale.done_title")}
              description={
                <Stack gap="sm" align="center">
                  <Text size="sm" color="text-secondary">
                    {t("wholesale.done_desc")}
                  </Text>
                  <Group gap="2xs" justify="center">
                    <Text size="sm" color="text-tertiary">
                      {t("wholesale.done_receipt")}
                    </Text>
                    <Code>{APPLICANT.receiptNumber}</Code>
                  </Group>
                </Stack>
              }
              extra={
                <Button variant="outline" onClick={() => setDone(false)}>
                  {t("wholesale.done_back")}
                </Button>
              }
            />
          </Card>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg="surface-app" py="4xl">
      <Container size="lg">
        <Stack gap="2xl">
          <Group justify="between" align="end" gap="lg">
            <Stack gap="2xs">
              <Text size="sm" color="text-tertiary">
                {t("wholesale.org")}
              </Text>
              <Title tag="h1" size="lg">
                {t("wholesale.title")}
              </Title>
            </Stack>
            <Autosave status="saved" savedAt={SAVED_AT} />
          </Group>

          <Grid
            cols={{ base: 1, lg: "minmax(0, 14rem) minmax(0, 1fr)" }}
            gap="2xl"
            align="start"
          >
            <Stack gap="lg">
              <Stepper
                steps={steps}
                current={step}
                direction="vertical"
                intent={invalidHere ? "error" : "process"}
                ariaLabel={t("wholesale.stepper_label")}
                onChange={(next) => setStep(next)}
              />
              <Stack gap="3xs">
                <Text size="xs" color="text-tertiary">
                  {t("wholesale.rail_review")}
                </Text>
                <Link href="#" size="sm" priority="secondary">
                  {t("wholesale.rail_contact")}
                </Link>
              </Stack>
            </Stack>

            <Card variant="outline" padding="2xl">
              <Stack gap="2xl">
                <Fieldset variant="plain">
                  {/* legend は heading content を直接含められるので、
                      グループ名とステップ見出し（h2）を 1 つで兼ねられる。 */}
                  <Legend>
                    <Title tag="h2" size="sm">
                      {steps[step].title}
                    </Title>
                  </Legend>
                  <Text size="sm" color="text-secondary">
                    {stepLead}
                  </Text>

                  {invalidHere && (
                    <Alert
                      intent="danger"
                      title={t("wholesale.invalid_title")}
                      description={t("wholesale.invalid_desc", { count: 4 })}
                    />
                  )}

                  {step === 0 && (
                    <Stack gap="xl">
                      <Input
                        label={t("wholesale.field_trade_name")}
                        required
                        fullWidth
                        value={tradeName}
                        onChange={(event) => setTradeName(event.target.value)}
                        error={invalid ? t("wholesale.error_trade_name") : undefined}
                      />
                      <Grid cols={{ base: 1, sm: 2 }} gap="xl">
                        <RadioGroup
                          label={t("wholesale.field_entity")}
                          direction="horizontal"
                          value={entity}
                          onChange={setEntity}
                          options={[
                            { value: "corporation", label: t("wholesale.entity_corporation") },
                            { value: "sole", label: t("wholesale.entity_sole") },
                          ]}
                        />
                        <InputMask
                          label={t("wholesale.field_registration")}
                          required
                          fullWidth
                          mask="9999-99-999999"
                          value={registration}
                          onChange={(event) => setRegistration(event.target.value)}
                          error={invalid ? t("wholesale.error_registration") : undefined}
                        />
                      </Grid>
                      <Grid cols={{ base: 1, sm: 2 }} gap="xl">
                        <Cascader
                          label={t("wholesale.field_category")}
                          required
                          fullWidth
                          options={categoryOptions}
                          value={category}
                          onChange={(value) => setCategory(value)}
                          placeholder={t("wholesale.category_placeholder")}
                          allowClear
                          error={invalid ? t("wholesale.error_category") : undefined}
                        />
                        <NumberInput
                          label={t("wholesale.field_stores")}
                          required
                          fullWidth
                          min={1}
                          value={storeCount}
                          onChange={(event) => setStoreCount(event.target.value)}
                          error={invalid ? t("wholesale.error_stores") : undefined}
                        />
                      </Grid>
                    </Stack>
                  )}

                  {step === 1 && (
                    <Stack gap="xl">
                      <TreeSelect
                        label={t("wholesale.field_deliver_to")}
                        required
                        fullWidth
                        multiple
                        searchable
                        treeData={storeTree}
                        value={deliverTo}
                        onChange={(value) => setDeliverTo(value as string[])}
                        defaultExpandedKeys={["tokyo"]}
                        placeholder={t("wholesale.deliver_to_placeholder")}
                      />
                      <Grid cols={{ base: 1, sm: 2 }} gap="xl">
                        <NumberInput
                          label={t("wholesale.field_monthly")}
                          required
                          fullWidth
                          min={1}
                          suffix="kg"
                          value={monthlyKg}
                          onChange={(event) => setMonthlyKg(event.target.value)}
                        />
                        <SegmentedControl
                          label={t("wholesale.field_frequency")}
                          value={frequency}
                          onChange={setFrequency}
                          fullWidth
                          options={[
                            { value: "weekly", label: t("wholesale.freq_weekly") },
                            { value: "biweekly", label: t("wholesale.freq_biweekly") },
                            { value: "on_demand", label: t("wholesale.freq_on_demand") },
                          ]}
                        />
                      </Grid>
                      <CheckboxGroup
                        label={t("wholesale.field_weekdays")}
                        direction="horizontal"
                        value={weekdays}
                        onChange={setWeekdays}
                        options={[
                          { value: "mon", label: t("wholesale.day_mon") },
                          { value: "tue", label: t("wholesale.day_tue") },
                          { value: "wed", label: t("wholesale.day_wed") },
                          { value: "thu", label: t("wholesale.day_thu") },
                          { value: "fri", label: t("wholesale.day_fri") },
                          { value: "sat", label: t("wholesale.day_sat"), disabled: true },
                        ]}
                      />
                      <Grid cols={{ base: 1, sm: 2 }} gap="xl">
                        <TimePicker
                          label={t("wholesale.field_receive_at")}
                          fullWidth
                          value={receiveAt}
                          onChange={(event) => setReceiveAt(event.target.value)}
                        />
                        <DatePicker
                          label={t("wholesale.field_first_delivery")}
                          fullWidth
                          value={firstDelivery}
                          onChange={setFirstDelivery}
                          minDate={FIRST_DELIVERY}
                        />
                      </Grid>
                      <Text size="xs" color="text-tertiary">
                        {t("wholesale.delivery_note")}
                      </Text>
                    </Stack>
                  )}

                  {step === 2 && (
                    <Stack gap="xl">
                      <FileUpload
                        label={t("wholesale.field_license")}
                        required
                        accept=".pdf,.jpg,.png"
                        buttonLabel={t("wholesale.license_button")}
                        noFileLabel={t("wholesale.license_none")}
                        onChange={() => undefined}
                      />
                      <Stack gap="2xs">
                        {DOCUMENTS.map((doc) => (
                          <React.Fragment key={doc.name}>
                            <Group justify="between" gap="sm" wrap="nowrap">
                              <Group gap="xs" wrap="nowrap">
                                <Icon
                                  name={doc.accepted ? "DocumentIcon" : "AlertCircleIcon"}
                                  size="sm"
                                  color={doc.accepted ? "tertiary" : "danger"}
                                />
                                <Text size="sm">{doc.name}</Text>
                                <Text size="xs" color="text-tertiary">
                                  {doc.sizeLabel}
                                </Text>
                              </Group>
                              <Group gap="2xs" wrap="nowrap">
                                <Tag
                                  intent={doc.accepted ? "success" : "danger"}
                                  variant="subtle"
                                  size="sm"
                                >
                                  {doc.accepted
                                    ? t("wholesale.doc_accepted")
                                    : t("wholesale.doc_too_large")}
                                </Tag>
                                <IconButton
                                  iconName="TrashIcon"
                                  variant="ghost"
                                  size="sm"
                                  aria-label={t("wholesale.doc_remove", { name: doc.name })}
                                />
                              </Group>
                            </Group>
                            <Divider />
                          </React.Fragment>
                        ))}
                      </Stack>
                      <Dropzone
                        label={t("wholesale.field_extra_docs")}
                        description={t("wholesale.extra_docs_desc")}
                        accept=".pdf,.xlsx,.jpg"
                        multiple
                        onChange={() => undefined}
                        error={t("wholesale.error_too_large")}
                      />
                      <CounterTextarea
                        label={t("wholesale.field_note")}
                        fullWidth
                        fieldSizing="content"
                        maxLength={300}
                        value={note}
                        onChange={(event) => setNote(event.target.value)}
                      />
                    </Stack>
                  )}

                  {step === 3 && (
                    <Stack gap="xl">
                      <Grid cols={{ base: 1, sm: 2 }} gap="xl">
                        <Input
                          label={t("wholesale.field_contact")}
                          required
                          fullWidth
                          value={contact}
                          onChange={(event) => setContact(event.target.value)}
                        />
                        <Input
                          label={t("wholesale.field_email")}
                          type="email"
                          required
                          fullWidth
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </Grid>
                      <PhoneInput
                        label={t("wholesale.field_phone")}
                        required
                        value={phone}
                        onChange={setPhone}
                        countryCode={countryCode}
                        onCountryChange={setCountryCode}
                      />
                      <OtpInput
                        label={t("wholesale.field_code")}
                        length={6}
                        value={code}
                        onChange={setCode}
                        error={codeMismatch ? t("wholesale.error_code") : undefined}
                        // digitAriaLabel は 1 始まりの桁番号で呼ばれる（OtpInput.tsx:205）。
                        labels={{
                          digitAriaLabel: (index) => t("wholesale.code_digit", { index }),
                        }}
                      />
                      <Text size="xs" color="text-tertiary">
                        {t("wholesale.code_hint", { phone: APPLICANT.phone })}
                      </Text>

                      <Divider />

                      <DescriptionList layout="horizontal" size="sm">
                        <DescriptionListItem>
                          <DescriptionListTerm>
                            {t("wholesale.review_business")}
                          </DescriptionListTerm>
                          <DescriptionListDetails>
                            {t("wholesale.review_business_value", {
                              name: APPLICANT.tradeName,
                              stores: storeCount,
                            })}
                          </DescriptionListDetails>
                        </DescriptionListItem>
                        <DescriptionListItem>
                          <DescriptionListTerm>
                            {t("wholesale.review_deliver_to")}
                          </DescriptionListTerm>
                          <DescriptionListDetails>
                            {t("wholesale.review_deliver_to_value", {
                              count: deliverTo.length,
                              kg: monthlyKg,
                            })}
                          </DescriptionListDetails>
                        </DescriptionListItem>
                        <DescriptionListItem>
                          <DescriptionListTerm>
                            {t("wholesale.review_documents")}
                          </DescriptionListTerm>
                          <DescriptionListDetails>
                            {t("wholesale.review_documents_value")}
                          </DescriptionListDetails>
                        </DescriptionListItem>
                      </DescriptionList>

                      <Group gap="sm" align="center">
                        <Checkbox
                          checked={agreed}
                          onChange={(event) => setAgreed(event.target.checked)}
                        >
                          <Text size="sm" asChild>
                            <span>{t("wholesale.agree")}</span>
                          </Text>
                        </Checkbox>
                        <Link href="#" size="sm" priority="secondary" external>
                          {t("wholesale.agree_link")}
                        </Link>
                      </Group>
                    </Stack>
                  )}
                </Fieldset>

                <Divider />

                <Group justify="between" gap="md">
                  <Button
                    variant="ghost"
                    disabled={step === 0}
                    onClick={() => setStep(Math.max(0, step - 1))}
                  >
                    {t("wholesale.back")}
                  </Button>
                  {step < 3 ? (
                    <Button variant="solid" onClick={() => setStep(step + 1)}>
                      {t("wholesale.next")}
                    </Button>
                  ) : (
                    <Button variant="solid" onClick={() => setDone(true)}>
                      {t("wholesale.submit")}
                    </Button>
                  )}
                </Group>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export const Business: StoryObj = {
  name: "Wholesale account",
  render: () => <WholesaleApplication />,
};

export const BusinessInvalid: StoryObj = {
  name: "Wholesale account / rejected on submit",
  render: () => <WholesaleApplication invalid />,
};

export const Delivery: StoryObj = {
  name: "Wholesale account / delivery terms",
  render: () => <WholesaleApplication initialStep={1} />,
};

export const Documents: StoryObj = {
  name: "Wholesale account / documents",
  render: () => <WholesaleApplication initialStep={2} />,
};

export const Contact: StoryObj = {
  name: "Wholesale account / code mismatch",
  render: () => <WholesaleApplication initialStep={3} codeMismatch />,
};

export const Accepted: StoryObj = {
  name: "Wholesale account / accepted",
  render: () => <WholesaleApplication accepted />,
};
