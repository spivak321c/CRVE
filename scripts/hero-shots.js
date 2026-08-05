const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const outputDir = path.join(__dirname, 'hero-shots');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  console.log('launching chrome...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Users\\USER\\AppData\\Local\\ms-playwright\\chromium_headless_shell-1169\\chrome-win\\headless_shell.exe',
    timeout: 20000,
  });
  console.log('launched.');
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.setDefaultTimeout(15000);

  console.log('goto...');
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 20000 });
  console.log('loaded, waiting settle...');
  await page.waitForTimeout(2000);

  const shots = [
    { name: '01-design', offset: 900 },
    { name: '02-development', offset: 3100 },
    { name: '03-motion', offset: 2800 },
    { name: '04-motion-hold', offset: 1600 },
    { name: '05-finale-mid', offset: 1200 },
    { name: '06-finale-settled', offset: 2500 },
  ];

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));

  let elapsed = 0;
  for (const shot of shots) {
    await page.waitForTimeout(shot.offset);
    elapsed += shot.offset;
    try {
      await page.screenshot({ path: path.join(outputDir, `${shot.name}.png`), fullPage: false });
      console.log(`${shot.name} captured at t=~${(elapsed / 1000).toFixed(2)}s`);
    } catch (e) {
      console.log(`${shot.name} FAILED: ${e.message}`);
    }
  }

  await browser.close().catch(() => {});
  console.log('Done!');
  process.exit(0);
})().catch((e) => {
  console.error('FATAL', e.message);
  process.exit(1);
});