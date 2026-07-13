import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  Card,
  Checkbox,
  Input,
  PasswordInput,
  RadioGroup,
  Selectbox,
  Stack,
  Textarea,
} from "wimui";
import {
  FormField,
  checkedFieldProps,
  valueFieldProps,
  zodResolver,
} from "wimui/rhf";

// i18n-ignore-start — integration demo; validation copy is intentional English sample text
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  role: z.string().min(1, "Pick a role"),
  plan: z.string().min(1, "Pick a plan"),
  bio: z.string().max(200, "Keep it under 200 characters").optional(),
  accept: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms",
  }),
});
// i18n-ignore-end

type FormValues = z.infer<typeof schema>;

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
            {/* i18n-ignore-start */}
            <FormField
              control={control}
              name="name"
              render={({ field, error }) => (
                <Input {...field} label="Name" error={error} fullWidth required />
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field, error }) => (
                <Input {...field} type="email" label="Email" error={error} fullWidth required />
              )}
            />
            <FormField
              control={control}
              name="role"
              render={({ field, error }) => (
                <Selectbox
                  {...valueFieldProps(field)}
                  label="Role"
                  error={error}
                  fullWidth
                  required
                  options={[
                    { label: "Admin", value: "admin" },
                    { label: "Editor", value: "editor" },
                    { label: "Viewer", value: "viewer" },
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
                  label="Plan"
                  error={error}
                  required
                  direction="horizontal"
                  options={[
                    { label: "Free", value: "free" },
                    { label: "Pro", value: "pro" },
                  ]}
                />
              )}
            />
            <FormField
              control={control}
              name="bio"
              render={({ field, error }) => (
                <Textarea {...field} label="Bio" error={error} fullWidth rows={3} />
              )}
            />
            <FormField
              control={control}
              name="accept"
              render={({ field, invalid }) => (
                <Checkbox {...checkedFieldProps(field)} error={invalid}>
                  Accept terms
                </Checkbox>
              )}
            />
            <Button type="submit" variant="solid" disabled={isSubmitting} style={{ width: "100%" }}>
              Submit
            </Button>
            {/* i18n-ignore-end */}
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
    const { control, handleSubmit } = useForm({
      defaultValues: { username: "", password: "" },
    });

    return (
      <form onSubmit={handleSubmit(() => undefined)} style={{ width: "20rem" }}>
        <Stack gap="md">
          {/* i18n-ignore-start */}
          <FormField
            control={control}
            name="username"
            rules={{ required: "Required" }}
            render={({ field, error }) => (
              <Input {...field} label="Username" error={error} fullWidth />
            )}
          />
          <FormField
            control={control}
            name="password"
            rules={{ required: "Required", minLength: { value: 8, message: "Min 8 chars" } }}
            render={({ field, error }) => (
              <PasswordInput {...field} label="Password" error={error} fullWidth />
            )}
          />
          <Button type="submit" variant="solid">
            Submit
          </Button>
          {/* i18n-ignore-end */}
        </Stack>
      </form>
    );
  },
};
