const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  console.log('=== ANZ AUSTRALIA ===');
  await page.goto('https://www.anz.com.au/personal/', { waitUntil: 'networkidle2', timeout: 30000 });

  const auColors = await page.evaluate(() => {
    const results = {};
    
    // Header background
    const header = document.querySelector('header') || document.querySelector('.header--wrapper');
    if (header) results.headerBg = window.getComputedStyle(header).backgroundColor;
    
    // Body
    results.bodyBg = window.getComputedStyle(document.body).backgroundColor;
    results.bodyColor = window.getComputedStyle(document.body).color;
    results.bodyFont = window.getComputedStyle(document.body).fontFamily;
    
    // Find all blue buttons
    const blueButtons = document.querySelectorAll('.btn--blue, .btn-blue, a[class*="btn"]');
    const btnColors = [];
    blueButtons.forEach(btn => {
      const bg = window.getComputedStyle(btn).backgroundColor;
      const color = window.getComputedStyle(btn).color;
      const borderRadius = window.getComputedStyle(btn).borderRadius;
      if (bg !== 'rgba(0, 0, 0, 0)') {
        btnColors.push({ text: btn.textContent.trim().substring(0, 40), bg, color, borderRadius });
      }
    });
    results.buttons = btnColors;
    
    // Find login button
    const allEls = Array.from(document.querySelectorAll('a, button'));
    const loginEl = allEls.find(el => el.textContent.toLowerCase().trim().includes('log on') || el.textContent.toLowerCase().trim().includes('log in'));
    if (loginEl) {
      results.loginBg = window.getComputedStyle(loginEl).backgroundColor;
      results.loginColor = window.getComputedStyle(loginEl).color;
    }
    
    // Footer
    const footer = document.querySelector('footer');
    if (footer) {
      results.footerBg = window.getComputedStyle(footer).backgroundColor;
      results.footerColor = window.getComputedStyle(footer).color;
    }
    
    return results;
  });
  
  console.log(JSON.stringify(auColors, null, 2));

  console.log('\n=== ANZ NEW ZEALAND ===');
  await page.goto('https://www.anz.co.nz/personal/', { waitUntil: 'networkidle2', timeout: 30000 });

  const nzColors = await page.evaluate(() => {
    const results = {};
    results.bodyBg = window.getComputedStyle(document.body).backgroundColor;
    results.bodyColor = window.getComputedStyle(document.body).color;
    results.bodyFont = window.getComputedStyle(document.body).fontFamily;
    
    const blueButtons = document.querySelectorAll('.btn--blue, .btn-blue, a[class*="btn"]');
    const btnColors = [];
    blueButtons.forEach(btn => {
      const bg = window.getComputedStyle(btn).backgroundColor;
      const color = window.getComputedStyle(btn).color;
      if (bg !== 'rgba(0, 0, 0, 0)') {
        btnColors.push({ text: btn.textContent.trim().substring(0, 40), bg, color });
      }
    });
    results.buttons = btnColors;
    
    const allEls = Array.from(document.querySelectorAll('a, button'));
    const loginEl = allEls.find(el => el.textContent.toLowerCase().trim().includes('log in'));
    if (loginEl) {
      results.loginBg = window.getComputedStyle(loginEl).backgroundColor;
      results.loginColor = window.getComputedStyle(loginEl).color;
    }
    
    const footer = document.querySelector('footer');
    if (footer) {
      results.footerBg = window.getComputedStyle(footer).backgroundColor;
      results.footerColor = window.getComputedStyle(footer).color;
    }
    
    return results;
  });

  console.log(JSON.stringify(nzColors, null, 2));
  
  await browser.close();
})();
