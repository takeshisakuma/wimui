import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../components/form/Input/Input";
import { Checkbox } from "../components/form/Checkbox/Checkbox";
import { RadioGroup } from "../components/form/RadioGroup/RadioGroup";
import { FormField } from "./FormField";
import { checkedFieldProps, valueFieldProps } from "./fieldProps";
import { zodResolver } from "./zod";

type Values = {
  email: string;
  country: string;
  accept: boolean;
};

const schema = z.object({
  email: z.string().email("Invalid email"),
  country: z.string().min(1, "Pick a country"),
  accept: z.boolean().refine((value) => value === true, { message: "Required" }),
});

function DemoForm({ onSubmit }: { onSubmit: (values: Values) => void }) {
  const { control, handleSubmit } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", country: "", accept: false },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        control={control}
        name="email"
        render={({ field, error }) => <Input {...field} label="Email" error={error} />}
      />
      <FormField
        control={control}
        name="country"
        render={({ field, error }) => (
          <RadioGroup
            {...valueFieldProps(field)}
            label="Country"
            error={error}
            options={[
              { label: "Japan", value: "jp" },
              { label: "Brazil", value: "br" },
            ]}
          />
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
      <button type="submit">Submit</button>
    </form>
  );
}

describe("FormField + zodResolver", () => {
  it("shows validation messages and submits valid values", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<DemoForm onSubmit={onSubmit} />);

    await user.click(screen.getByRole("button", { name: "Submit" }));
    expect(await screen.findByText("Invalid email")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();

    await user.type(screen.getByLabelText("Email"), "user@example.com");
    await user.click(screen.getByRole("radio", { name: "Japan" }));
    await user.click(screen.getByRole("checkbox", { name: "Accept terms" }));
    await user.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        { email: "user@example.com", country: "jp", accept: true },
        expect.anything(),
      );
    });
  });
});
