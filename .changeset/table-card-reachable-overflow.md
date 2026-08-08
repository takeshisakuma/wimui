---
"wimui": patch
---

`Table card`: horizontal overflow is reachable again.

The card variant set `overflow: hidden` to clip the rounded corners, which also made the overhang unreachable — measured at 390px with a 5-column table, the container was 364px against a 443px table, so the last column sat outside with no scrollbar, wheel or touch panning (only scripts could move `scrollLeft`). It is now `overflow-x: auto` with `overflow-y: hidden`; the 12px radius clipping is unchanged.

This does not give `Table` a narrow-width mode — that is still `DataGrid mobileCard` only.
