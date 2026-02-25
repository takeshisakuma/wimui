import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import "./anchor.scss";

export interface AnchorLinkItem {
  /** Unique key for the link */
  key: string;
  /** Target anchor href (e.g. #section1) */
  href: string;
  /** Title of the anchor link */
  title: React.ReactNode;
  /** Children of the anchor link */
  children?: AnchorLinkItem[];
}

export interface AnchorProps {
  /** Array of anchor link configurations */
  items: AnchorLinkItem[];
  /** Bounding distance (in pixels) for triggering active state */
  bounds?: number;
  /** Offset (in pixels) from top when clicking to scroll */
  offset?: number;
  /** Orientation of the anchor links */
  direction?: "vertical" | "horizontal";
  /** Additional class names */
  className?: string;
  /** Style attribute */
  style?: React.CSSProperties;
}

export const Anchor = ({
  items = [],
  bounds = 5,
  offset = 0,
  direction = "vertical",
  className,
  style,
}: AnchorProps) => {
  const [activeId, setActiveId] = useState<string>("");
  const [markerStyle, setMarkerStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
      // Immediately set active ID for smoother UI feedback
      setActiveId(href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const getAllLinks = (
        links: AnchorLinkItem[],
        parentHref?: string,
      ): { href: string; parentHref?: string }[] => {
        let flat: { href: string; parentHref?: string }[] = [];
        links.forEach((link) => {
          flat.push({ href: link.href, parentHref });
          if (link.children) {
            flat = flat.concat(
              getAllLinks(link.children, parentHref || link.href),
            );
          }
        });
        return flat;
      };

      const flatLinks = getAllLinks(items);
      let currentActiveId = "";

      // Check if we are at the bottom of the page
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      // Use a small threshold for rounding differences and ensure we've actually scrolled
      const isAtBottom =
        scrollTop > 0 && Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (isAtBottom && flatLinks.length > 0) {
        const lastLink = flatLinks[flatLinks.length - 1];
        if (direction === "horizontal" && lastLink.parentHref) {
          currentActiveId = lastLink.parentHref;
        } else {
          currentActiveId = lastLink.href;
        }
      } else {
        for (const link of flatLinks) {
          const id = link.href.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= offset + bounds) {
              // In horizontal mode, if the item is nested, highlight the parent instead
              if (direction === "horizontal" && link.parentHref) {
                currentActiveId = link.parentHref;
              } else {
                currentActiveId = link.href;
              }
            } else {
              break;
            }
          }
        }
      }

      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, offset, bounds, activeId, direction]);

  useEffect(() => {
    if (!activeId || !containerRef.current) return;
    const activeLink = containerRef.current.querySelector(
      `a[href="${activeId}"]`,
    ) as HTMLElement;

    if (activeLink) {
      const containerRect = containerRef.current.getBoundingClientRect();

      if (direction === "vertical") {
        const rect = activeLink.getBoundingClientRect();
        setMarkerStyle({
          top: rect.top - containerRect.top,
          height: rect.height,
          opacity: 1,
        });
      } else {
        const listScrollContainer = containerRef.current.querySelector(
          ".wim-anchor__list",
        ) as HTMLElement;

        if (listScrollContainer) {
          const linkRect = activeLink.getBoundingClientRect();
          const listRect = listScrollContainer.getBoundingClientRect();

          const itemOffsetLeft =
            linkRect.left - listRect.left + listScrollContainer.scrollLeft;
          const scrollTarget =
            itemOffsetLeft - listRect.width / 2 + linkRect.width / 2;

          const maxScroll = listScrollContainer.scrollWidth - listRect.width;
          // Clamp the scroll target so it doesn't try to scroll past bounds
          const clampedScrollTarget = Math.max(
            0,
            Math.min(scrollTarget, maxScroll),
          );

          // We calculate where the item will visually end up after the scroll finishes
          const finalLeft =
            itemOffsetLeft -
            clampedScrollTarget +
            (listRect.left - containerRect.left);

          setMarkerStyle({
            left: finalLeft,
            width: linkRect.width,
            opacity: 1,
          });

          listScrollContainer.scrollTo({
            left: clampedScrollTarget,
            behavior: "smooth",
          });
        } else {
          const rect = activeLink.getBoundingClientRect();
          setMarkerStyle({
            left: rect.left - containerRect.left,
            width: rect.width,
            opacity: 1,
          });
        }
      }
    } else {
      setMarkerStyle({ opacity: 0 });
    }
  }, [activeId, direction]);

  const renderLinks = (links: AnchorLinkItem[]) => {
    return (
      <ul
        className={classNames(
          "wim-anchor__list",
          `wim-anchor__list--${direction}`,
        )}
      >
        {links.map((item) => (
          <li
            key={item.key}
            className={classNames(
              "wim-anchor__item",
              activeId === item.href && "wim-anchor__item--active",
            )}
          >
            <a
              href={item.href}
              className="wim-anchor__link"
              onClick={(e) => handleClick(e, item.href)}
              title={typeof item.title === "string" ? item.title : undefined}
            >
              {item.title}
            </a>
            {item.children &&
              direction === "vertical" &&
              renderLinks(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className={classNames(
        "wim-anchor",
        `wim-anchor--${direction}`,
        className,
      )}
      style={style}
      ref={containerRef}
    >
      <div className="wim-anchor__ink">
        <span className="wim-anchor__ink-ball" style={markerStyle} />
      </div>
      {renderLinks(items)}
    </div>
  );
};

export default Anchor;
