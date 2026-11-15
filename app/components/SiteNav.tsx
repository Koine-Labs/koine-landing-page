"use client";

// The masthead. The links sit in a row when they fit; when they do not, the same list opens from a Menu button as a
// native popover. Measuring decides which, so the layout never guesses at a breakpoint.
//
// In the row, the three products are always shown, and "The lab" sits at the right-hand end. The lab's own pages
// (About, Notebook, Contact) have their place between the two, kept empty until "The lab" is hovered, clicked or
// opened from the keyboard; then a rule sweeps across and uncovers them. Nothing else in the row moves. On a device
// that cannot hover, and in the Menu popover, the three pages are simply shown.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type PointerEvent } from "react";
import { NAV, PRODUCTS, type ProductKey } from "../lib/site";

const STAR = "M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z";

export default function SiteNav() {
  const path = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const labRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [labOpen, setLabOpen] = useState(false);
  const pinned = useRef(false);          // opened by a click or the keyboard, so it stays open when the pointer leaves

  useEffect(() => {
    const header = headerRef.current;
    const inner = innerRef.current;
    const menu = menuRef.current;
    if (!header || !inner || !menu) return;
    const hasPopover = "popover" in HTMLElement.prototype;
    const isOpen = () => {
      try {
        return menu.matches(":popover-open");
      } catch {
        return menu.classList.contains("open");
      }
    };
    let lastWidth = 0;
    const fit = () => {
      const width = header.clientWidth;
      const wide = header.classList.contains("is-wide");
      if (!wide && width <= lastWidth) {
        lastWidth = width;
        return;
      }
      lastWidth = width;
      const wasOpen = !wide && isOpen();
      header.classList.add("is-measuring", "is-wide");
      menu.removeAttribute("popover");
      // the lab's pages keep their place in the row even while covered, so this already allows for them
      const fits = inner.scrollWidth <= inner.clientWidth;
      header.classList.toggle("is-wide", fits);
      if (!fits) {
        menu.setAttribute("popover", "auto");
        if (wasOpen && hasPopover) menu.showPopover();
      }
      requestAnimationFrame(() => header.classList.remove("is-measuring"));
    };
    let frame = 0;
    const fitSoon = () => {
      if (!frame) frame = requestAnimationFrame(() => {
        frame = 0;
        fit();
      });
    };
    fit();
    const observer = new ResizeObserver(fitSoon);
    observer.observe(header);
    if (!hasPopover) document.documentElement.classList.add("no-popover");
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const closeLab = useCallback(() => {
    pinned.current = false;
    setLabOpen(false);
  }, []);

  // after moving to another page: cover the lab's pages again, and close the narrow menu
  useEffect(() => {
    closeLab();
    const header = headerRef.current;
    const menu = menuRef.current;
    if (!header || !menu || header.classList.contains("is-wide")) return;
    try {
      menu.hidePopover();
    } catch {
      menu.classList.remove("open");
    }
  }, [path, closeLab]);

  const toggleWithoutPopover = () => {
    if (!("popover" in HTMLElement.prototype)) menuRef.current?.classList.toggle("open");
  };

  // a mouse previews the pages on hover; touch uses the button
  const onLabEnter = (e: PointerEvent) => {
    if (e.pointerType !== "touch" && window.matchMedia("(hover: hover)").matches) setLabOpen(true);
  };
  const onLabLeave = (e: PointerEvent) => {
    if (e.pointerType !== "touch" && !pinned.current) setLabOpen(false);
  };
  const onTrigger = () => {
    if (labOpen && !pinned.current) {
      pinned.current = true;             // it was only a hover preview: a click keeps it open
      return;
    }
    pinned.current = !labOpen;
    setLabOpen(!labOpen);
  };
  const onLabBlur = (e: FocusEvent) => {
    const next = e.relatedTarget as Node | null;
    if (next && !labRef.current?.contains(next)) closeLab();
  };
  const onLabKey = (e: KeyboardEvent) => {
    if (e.key === "Escape" && labOpen) {
      closeLab();
      triggerRef.current?.focus();
    }
  };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner" ref={innerRef}>
        <Link className="site-logo" href="/" aria-label="Koine Labs, home" prefetch={false}>
          <img src="/assets/koine-mark.svg" alt="" width={100} height={100} />
          Koine Labs
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <button className="menu-button" type="button" popoverTarget="site-menu" popoverTargetAction="toggle"
            aria-controls="site-menu" onClick={toggleWithoutPopover}>
            Menu
          </button>
          {/* One list at every size. The product descriptions show only in the narrow menu. */}
          <ul id="site-menu" className="site-menu" popover="auto" ref={menuRef}>
            {NAV.slice(0, 3).map(({ href, label }) => (
              <li key={href} className="menu-product">
                <Link href={href} prefetch={false} aria-current={path === href ? "page" : undefined}>
                  {label}
                  <span className="menu-cat">{PRODUCTS[href.slice(1) as ProductKey].cat}</span>
                </Link>
              </li>
            ))}
            <li className={`menu-lab-group${labOpen ? " is-open" : ""}`} ref={labRef}
              onPointerEnter={onLabEnter} onPointerLeave={onLabLeave} onBlur={onLabBlur} onKeyDown={onLabKey}>
              <button className="lab-trigger" type="button" aria-expanded={labOpen} aria-controls="lab-links"
                ref={triggerRef} onClick={onTrigger}>
                <svg className="lab-star" viewBox="0 0 20 20" aria-hidden="true"><path d={STAR} fill="currentColor" /></svg>
                <span className="lab-word">The lab</span>
              </button>
              <div className="lab-reveal">
                <span className="lab-rule" aria-hidden="true" />
                <ul id="lab-links" className="lab-links">
                  {NAV.slice(3).map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} prefetch={false} aria-current={path === href ? "page" : undefined}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
