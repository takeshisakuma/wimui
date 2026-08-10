---
"wimui": minor
---

`ChatMessage`, `Header` and `Footer`: values renamed to say what they do.

**破壊的変更**（0.x のため minor）。

```diff
- <ChatMessage variant="primary" />   // 送信側
+ <ChatMessage variant="sent" />
- <ChatMessage variant="secondary" /> // 受信側
+ <ChatMessage variant="received" />

- <Header background="primary" />
+ <Header background="surface" />
- <Header background="secondary" />
+ <Header background="surface-variant" />

- <Footer background="dark" />
+ <Footer background="inverse" />
```

None of these were intent values, despite reading like them. `ChatMessage`'s
`primary` and `secondary` resolved to `--wim-comp-chat-bubble-sent` and
`-received`; the `background` values on `Header` and `Footer` resolved to
`--wim-color-surface`, `-variant` and `-inverse`. The names now match the
tokens they reach.

`ChatMessage.variant` overrides the colour that `position` already implies —
`left` is the received colour and `right` the sent one — so it is only needed
for the exception, such as a right-aligned bubble in the received colour. That
is easier to see now that the values are not borrowing the intent vocabulary.
