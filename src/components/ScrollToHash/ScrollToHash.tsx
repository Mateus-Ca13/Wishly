'use client'
import { useEffect } from "react";

export function ScrollToHash() {
    useEffect(() => {
        const smoothScrollTo = (id: string) => {
            const el = document.getElementById(id);
            if (el) {
                const yOffset = -150;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        };

        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');

            if (link) {
                const href = link.getAttribute('href');
                if (href && (href.startsWith('/#') || href.startsWith('#'))) {
                    const id = href.replace(/^\/?#/, '');

                    const el = document.getElementById(id);
                    if (el) {
                        e.preventDefault();
                        smoothScrollTo(id);
                        window.history.pushState(null, '', `/#${id}`);
                    }
                }
            }
        };

        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            setTimeout(() => smoothScrollTo(id), 100);
        }

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return null;
}
