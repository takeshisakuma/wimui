import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:6006/iframe.html?id=component-navigation-elements-tabnavigation--pills&viewMode=story', { waitUntil: 'networkidle0' });

    // hover over the unread tab
    const items = await page.$$('.wim-tab-navigation__item');
    if (items.length > 1) {
        await items[1].hover();
    }

    await new Promise(r => setTimeout(r, 500));

    await page.screenshot({ path: 'pill_screenshot.png' });

    const metrics = await page.evaluate(() => {
        const active = document.querySelector('.wim-tab-navigation__item--active');
        const hovered = document.querySelectorAll('.wim-tab-navigation__item')[1];

        return {
            activeHeight: active.offsetHeight,
            activeWidth: active.offsetWidth,
            activeBoxSizing: window.getComputedStyle(active).boxSizing,
            activePadding: window.getComputedStyle(active).padding,

            hoveredHeight: hovered.offsetHeight,
            hoveredWidth: hovered.offsetWidth,
            hoveredBoxSizing: window.getComputedStyle(hovered).boxSizing,
            hoveredPadding: window.getComputedStyle(hovered).padding,

            activeClientHeight: active.clientHeight,
            hoveredClientHeight: hovered.clientHeight,
        };
    });
    console.log('Metrics:', metrics);

    await browser.close();
})();
