const isInBrowser = typeof window !== undefined;

export const desktopWidth = isInBrowser && window.innerWidth >= 1000;
export const tabletDesktopWidth = isInBrowser && window.innerWidth >= 768;
export const tabletWidth = isInBrowser && window.innerWidth >= 768 && window.innerWidth < 1000;
export const phoneTabletWidth = isInBrowser && window.innerWidth < 1000;
export const phoneWidth = isInBrowser && window.innerWidth < 768;
