import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  DescriptionList,
  DescriptionListItem,
  DescriptionListTerm,
  DescriptionListDetails,
} from "./DescriptionList";

// Mock translation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("DescriptionList", () => {
  it("renders list items", () => {
    render(
      <DescriptionList>
        <DescriptionListItem>
          <DescriptionListTerm>Term 1</DescriptionListTerm>
          <DescriptionListDetails>Details 1</DescriptionListDetails>
        </DescriptionListItem>
      </DescriptionList>,
    );
    expect(screen.getByText("Term 1")).toBeInTheDocument();
    expect(screen.getByText("Details 1")).toBeInTheDocument();
  });

  it("applies layout class", () => {
    render(
      <DescriptionList layout="vertical">
        <DescriptionListItem>
          <DescriptionListTerm>Term</DescriptionListTerm>
          <DescriptionListDetails>Details</DescriptionListDetails>
        </DescriptionListItem>
      </DescriptionList>,
    );
    const term = screen.getByText("Term");
    const dl = term.closest("dl");
    expect(dl).toHaveClass("wim-description-list--vertical");
  });

  it("applies border class", () => {
    render(
      <DescriptionList border>
        <DescriptionListItem>
          <DescriptionListTerm>Term</DescriptionListTerm>
          <DescriptionListDetails>Details</DescriptionListDetails>
        </DescriptionListItem>
      </DescriptionList>,
    );
    const dl = screen.getByText("Term").closest("dl");
    expect(dl).toHaveClass("wim-description-list--border");
  });

  it("renders ReactNode children in Term and Details", () => {
    render(
      <DescriptionList>
        <DescriptionListItem>
          <DescriptionListTerm><strong>Bold Term</strong></DescriptionListTerm>
          <DescriptionListDetails><em>Italic Details</em></DescriptionListDetails>
        </DescriptionListItem>
      </DescriptionList>,
    );
    expect(screen.getByText("Bold Term")).toBeInTheDocument();
    expect(screen.getByText("Italic Details")).toBeInTheDocument();
  });
});
