import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  ChatContainer,
  ChatMessageList,
  ChatMessage,
  ChatInput,
  ChatAvatar,
} from "./ChatUI";

describe("ChatContainer", () => {
  it("renders children correctly", () => {
    render(
      <ChatContainer>
        <div>Test Content</div>
      </ChatContainer>,
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <ChatContainer className="custom-class">
        <div>Content</div>
      </ChatContainer>,
    );
    expect(container.firstChild).toHaveClass(
      "wim-chat-container",
      "custom-class",
    );
  });
});

describe("ChatMessageList", () => {
  it("renders messages correctly", () => {
    render(
      <ChatMessageList>
        <div>Message 1</div>
        <div>Message 2</div>
      </ChatMessageList>,
    );
    expect(screen.getByText("Message 1")).toBeInTheDocument();
    expect(screen.getByText("Message 2")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <ChatMessageList className="custom-list">
        <div>Messages</div>
      </ChatMessageList>,
    );
    expect(container.firstChild).toHaveClass(
      "wim-chat-message-list",
      "custom-list",
    );
  });
});

describe("ChatMessage", () => {
  it("renders message content", () => {
    render(<ChatMessage>Hello World</ChatMessage>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders with left position by default", () => {
    const { container } = render(<ChatMessage>Test</ChatMessage>);
    expect(container.firstChild).toHaveClass("wim-chat-message--left");
  });

  it("renders with right position", () => {
    const { container } = render(
      <ChatMessage position="right">Test</ChatMessage>,
    );
    expect(container.firstChild).toHaveClass("wim-chat-message--right");
  });

  it("renders sender name when provided", () => {
    render(<ChatMessage senderName="John Doe">Message</ChatMessage>);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("renders timestamp when provided", () => {
    render(<ChatMessage timestamp="10:30 AM">Message</ChatMessage>);
    expect(screen.getByText("10:30 AM")).toBeInTheDocument();
  });

  it("renders avatar when showAvatar is true", () => {
    render(
      <ChatMessage showAvatar avatar={<div>Avatar</div>}>
        Message
      </ChatMessage>,
    );
    expect(screen.getByText("Avatar")).toBeInTheDocument();
  });

  it("does not render avatar when showAvatar is false", () => {
    render(
      <ChatMessage showAvatar={false} avatar={<div>Avatar</div>}>
        Message
      </ChatMessage>,
    );
    expect(screen.queryByText("Avatar")).not.toBeInTheDocument();
  });

  it("applies variant classes", () => {
    const { container } = render(
      <ChatMessage variant="primary">Test</ChatMessage>,
    );
    expect(container.firstChild).toHaveClass("wim-chat-message--primary");
  });
});

describe("ChatInput", () => {
  it("renders input field", () => {
    render(<ChatInput placeholder="Type a message..." />);
    expect(
      screen.getByPlaceholderText("Type a message..."),
    ).toBeInTheDocument();
  });

  it("renders send button by default", () => {
    render(<ChatInput sendButtonLabel="Send" />);
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
  });

  it("does not render send button when showSendButton is false", () => {
    render(<ChatInput showSendButton={false} sendButtonLabel="Send" />);
    expect(
      screen.queryByRole("button", { name: "Send" }),
    ).not.toBeInTheDocument();
  });

  it("calls onSend when send button is clicked", () => {
    const handleSend = vi.fn();
    render(<ChatInput onSend={handleSend} />);

    const input = screen.getByRole("textbox");
    const sendButton = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.click(sendButton);

    expect(handleSend).toHaveBeenCalledWith("Test message");
  });

  it("calls onSend when Enter key is pressed", () => {
    const handleSend = vi.fn();
    render(<ChatInput onSend={handleSend} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    expect(handleSend).toHaveBeenCalledWith("Test message");
  });

  it("clears input after sending", () => {
    const handleSend = vi.fn();
    render(<ChatInput onSend={handleSend} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const sendButton = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.click(sendButton);

    expect(input.value).toBe("");
  });

  it("disables send button when input is empty", () => {
    render(<ChatInput />);
    const sendButton = screen.getByRole("button");
    expect(sendButton).toBeDisabled();
  });

  it("enables send button when input has text", () => {
    render(<ChatInput />);
    const input = screen.getByRole("textbox");
    const sendButton = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Test" } });
    expect(sendButton).not.toBeDisabled();
  });
});

describe("ChatAvatar", () => {
  it("renders image when src is provided", () => {
    render(
      <ChatAvatar src="https://example.com/avatar.jpg" alt="User Avatar" />,
    );
    const img = screen.getByAltText("User Avatar");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("renders fallback when src is not provided", () => {
    render(<ChatAvatar alt="John Doe" />);
    expect(screen.getByText("J")).toBeInTheDocument();
  });

  it("renders custom fallback when provided", () => {
    render(<ChatAvatar fallback="JD" alt="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("applies size classes", () => {
    const { container } = render(<ChatAvatar size="large" />);
    expect(container.firstChild).toHaveClass("wim-chat-avatar--large");
  });

  it("shows fallback when image fails to load", () => {
    render(<ChatAvatar src="invalid-url.jpg" alt="User" />);
    const img = screen.getByAltText("User");

    fireEvent.error(img);

    expect(screen.getByText("U")).toBeInTheDocument();
  });
});
