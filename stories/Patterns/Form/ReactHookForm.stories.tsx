import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { ALL_NAMESPACES } from "../../i18nConstants";
import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Input,
  PasswordInput,
  RadioGroup,
  Rating,
  Select,
  Stack,
  Switch,
  Textarea,
} from "wimui";
import {
  FormField,
  checkedFieldProps,
  valueFieldProps,
  zodResolver,
} from "wimui/rhf";

type Translate = (key: string) => string;

const makeSchema = (t: Translate) =>
  z.object({
    name: z.string().min(1, t("rhf.err_name")),
    email: z.string().email(t("rhf.err_email")),
    role: z.string().min(1, t("rhf.err_role")),
    plan: z.string().min(1, t("rhf.err_plan")),
    bio: z.string().max(200, t("rhf.err_bio")).optional(),
    accept: z.boolean().refine((value) => value === true, {
      message: t("rhf.err_accept"),
    }),
  });

const makePickersSchema = (t: Translate) =>
  z.object({
    eventDate: z
      .union([z.instanceof(Date), z.null()])
      .refine((value): value is Date => value instanceof Date, {
        message: t("rhf.err_date"),
      }),
    notify: z.boolean(),
    score: z.number().min(1, t("rhf.err_score")),
  });

type FormValues = z.infer<ReturnType<typeof makeSchema>>;
type PickersFormValues = z.input<ReturnType<typeof makePickersSchema>>;
type PickersSubmitValues = z.output<ReturnType<typeof makePickersSchema>>;

const meta: Meta = {
  title: "Patterns/Form/React Hook Form",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const WithZod: StoryObj = {
  name: "RHF + zod",
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const schema = React.useMemo(() => makeSchema(t), [t]);
    const {
      control,
      handleSubmit,
      formState: { isSubmitting },
      reset,
    } = useForm<FormValues>({
      resolver: zodResolver(schema),
      defaultValues: {
        name: "",
        email: "",
        role: "",
        plan: "",
        bio: "",
        accept: false,
      },
    });

    return (
      <Card
        style={{
          width: "min(100vw - 2rem, 28rem)",
          padding: "var(--wim-spacing-3xl)",
          border: "1px solid var(--wim-color-border-secondary)",
        }}
      >
        <form
          onSubmit={handleSubmit(() => {
            reset();
          })}
        >
          <Stack gap="lg">
            <FormField
              control={control}
              name="name"
              render={({ field, error }) => (
                <Input
                  {...field}
                  label={t("rhf.label_name")}
                  error={error}
                  fullWidth
                  required
                />
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field, error }) => (
                <Input
                  {...field}
                  type="email"
                  label={t("rhf.label_email")}
                  error={error}
                  fullWidth
                  required
                />
              )}
            />
            <FormField
              control={control}
              name="role"
              render={({ field, error }) => (
                <Select
                  {...valueFieldProps(field)}
                  label={t("rhf.label_role")}
                  error={error}
                  fullWidth
                  required
                  options={[
                    { label: t("rhf.role_admin"), value: "admin" },
                    { label: t("rhf.role_editor"), value: "editor" },
                    { label: t("rhf.role_viewer"), value: "viewer" },
                  ]}
                />
              )}
            />
            <FormField
              control={control}
              name="plan"
              render={({ field, error }) => (
                <RadioGroup
                  {...valueFieldProps(field)}
                  label={t("rhf.label_plan")}
                  error={error}
                  required
                  direction="horizontal"
                  options={[
                    { label: t("rhf.plan_free"), value: "free" },
                    { label: t("rhf.plan_pro"), value: "pro" },
                  ]}
                />
              )}
            />
            <FormField
              control={control}
              name="bio"
              render={({ field, error }) => (
                <Textarea
                  {...field}
                  label={t("rhf.label_bio")}
                  error={error}
                  fullWidth
                  rows={3}
                />
              )}
            />
            <FormField
              control={control}
              name="accept"
              render={({ field, invalid }) => (
                <Checkbox {...checkedFieldProps(field)} error={invalid}>
                  {t("rhf.accept_terms")}
                </Checkbox>
              )}
            />
            <Button
              type="submit"
              variant="solid"
              disabled={isSubmitting}
              style={{ width: "100%" }}
            >
              {t("rhf.submit")}
            </Button>
          </Stack>
        </form>
      </Card>
    );
  },
};

/** Native inputs only — shows spreading `field` without value helpers. */
export const NativeFields: StoryObj = {
  name: "Native field spread",
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const { control, handleSubmit } = useForm({
      defaultValues: { username: "", password: "" },
    });

    return (
      <form onSubmit={handleSubmit(() => undefined)} style={{ width: "20rem" }}>
        <Stack gap="md">
          <FormField
            control={control}
            name="username"
            rules={{ required: t("rhf.err_required") }}
            render={({ field, error }) => (
              <Input
                {...field}
                label={t("rhf.label_username")}
                error={error}
                fullWidth
              />
            )}
          />
          <FormField
            control={control}
            name="password"
            rules={{
              required: t("rhf.err_required"),
              minLength: { value: 8, message: t("rhf.err_min8") },
            }}
            render={({ field, error }) => (
              <PasswordInput
                {...field}
                label={t("rhf.label_password")}
                error={error}
                fullWidth
              />
            )}
          />
          <Button type="submit" variant="solid">
            {t("rhf.submit")}
          </Button>
        </Stack>
      </form>
    );
  },
};

/** DatePicker / Switch / Rating via valueFieldProps and checkedFieldProps. */
export const WithPickers: StoryObj = {
  name: "DatePicker / Rating / Switch",
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const pickersSchema = React.useMemo(() => makePickersSchema(t), [t]);
    const {
      control,
      handleSubmit,
      formState: { isSubmitting },
      reset,
    } = useForm<PickersFormValues, unknown, PickersSubmitValues>({
      resolver: zodResolver(pickersSchema),
      defaultValues: {
        eventDate: null,
        notify: false,
        score: 0,
      },
    });

    return (
      <Card
        style={{
          width: "min(100vw - 2rem, 28rem)",
          padding: "var(--wim-spacing-3xl)",
          border: "1px solid var(--wim-color-border-secondary)",
        }}
      >
        <form
          onSubmit={handleSubmit(() => {
            reset();
          })}
        >
          <Stack gap="lg">
            <FormField
              control={control}
              name="eventDate"
              render={({ field, error }) => (
                <DatePicker
                  {...valueFieldProps(field)}
                  label={t("rhf.label_event_date")}
                  error={error}
                  fullWidth
                  required
                />
              )}
            />
            <FormField
              control={control}
              name="notify"
              render={({ field, invalid }) => (
                <Switch {...checkedFieldProps(field)} error={invalid}>
                  {t("rhf.notify_reminders")}
                </Switch>
              )}
            />
            <FormField
              control={control}
              name="score"
              render={({ field, error }) => (
                <Rating
                  {...valueFieldProps(field)}
                  label={t("rhf.label_score")}
                  error={error}
                  required
                />
              )}
            />
            <Button
              type="submit"
              variant="solid"
              disabled={isSubmitting}
              style={{ width: "100%" }}
            >
              {t("rhf.submit")}
            </Button>
          </Stack>
        </form>
      </Card>
    );
  },
};
