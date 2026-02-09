import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
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
    /** Additional class names */
    className?: string;
    /** Style attribute */
    style?: React.CSSProperties;
}

export const Anchor = ({
    items = [],
    bounds = 5,
    offset = 0,
    className,
    style,
}: AnchorProps) => {
    const [activeId, setActiveId] = useState<string>("");
    const [markerStyle, setMarkerStyle] = useState<React.CSSProperties>({});
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
            const getAllIds = (links: AnchorLinkItem[]): string[] => {
                let ids: string[] = [];
                links.forEach(link => {
                    ids.push(link.href.replace("#", ""));
                    if (link.children) {
                        ids = ids.concat(getAllIds(link.children));
                    }
                });
                return ids;
            };

            const ids = getAllIds(items);
            let currentActiveId = "";

            for (const id of ids) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the element's top is within the bounds or above it
                    if (rect.top <= offset + bounds + 10) { // added small buffer
                        currentActiveId = `#${id}`;
                    } else {
                        break;
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
    }, [items, offset, bounds, activeId]);

    useEffect(() => {
        if (!activeId || !containerRef.current) return;
        const activeLink = containerRef.current.querySelector(
            `a[href="${activeId}"]`
        ) as HTMLElement;
        if (activeLink) {
            setMarkerStyle({
                top: activeLink.offsetTop,
                height: activeLink.offsetHeight,
                opacity: 1,
            });
        } else {
            setMarkerStyle({ opacity: 0 });
        }
    }, [activeId]);

    const renderLinks = (links: AnchorLinkItem[]) => {
        return (
            <ul className="wim-anchor__list">
                {links.map((item) => (
                    <li
                        key={item.key}
                        className={[
                            "wim-anchor__item",
                            activeId === item.href ? "wim-anchor__item--active" : "",
                        ]
                            .filter(Boolean)
                            .join(" ")}
                    >
                        <a
                            href={item.href}
                            className="wim-anchor__link"
                            onClick={(e) => handleClick(e, item.href)}
                            title={typeof item.title === 'string' ? item.title : undefined}
                        >
                            {item.title}
                        </a>
                        {item.children && renderLinks(item.children)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div
            className={["wim-anchor", className].filter(Boolean).join(" ")}
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

Anchor.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            title: PropTypes.node.isRequired,
            children: PropTypes.array,
        })
    ).isRequired,
    bounds: PropTypes.number,
    offset: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Anchor;
