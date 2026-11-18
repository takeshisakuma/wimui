---
"wimui": minor
---

部品の内側の要素に、CSS で狙える部位名 `data-part` を付けた（T384）。まず `Calendar`（`header`・`prev-button`・`next-button`・`title`・`title-button`・`day-grid`・`weekday`・`day`・`month-grid`・`month`・`year-grid`・`year`）、`Select`（`trigger`・`value`・`dropdown`・`search`・`search-input`・`list`・`option`・`group-label`・`separator`・`empty`）、`Kanban`（`column`・`column-header`・`column-title`・`column-count`・`column-body`・`card`・`card-content`・`move-button`・`move-menu`・`move-option`）。部品の CSS は `@layer component` の中なので、レイヤーの外に書いた `.my-calendar [data-part="day"] { … }` が詳細度に関係なく勝つ。状態は部位名ではなく、既存の `aria-selected` などで狙う。部位名は変えない約束で、各部品の文書の Anatomy 節と `dist/llms/<Component>.md` に載る。props は変わらない。
