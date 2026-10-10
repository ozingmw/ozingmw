import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

let playwright;
try { playwright = await import('playwright'); }
catch (error) {
  if (!process.env.PLAYWRIGHT_MODULE_PATH) throw error;
  playwright = createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE_PATH);
}
const root = fileURLToPath(new URL('../', import.meta.url));
const browser = await playwright.chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'chrome', headless: true });
try {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(resolve(root, 'docs/index.html')).href);
  await page.waitForSelector('#education');
  await page.evaluate(() => document.fonts.ready);
  const path = resolve(root, 'docs/Jonghun_Shin_Resume.pdf');
  await page.pdf({ path, format: 'A4', preferCSSPageSize: true, printBackground: true,
    displayHeaderFooter: true, headerTemplate: '<div></div>',
    footerTemplate: '<div style="font-size:8px;color:#777;width:100%;margin:0 15mm;display:flex;justify-content:space-between"><span>신종훈 · AI Agent Engineer</span><span class="pageNumber"></span></div>' });
  console.log(path);
} finally { await browser.close(); }
