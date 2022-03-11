const puppeteer = require('puppeteer')
const app = require('./app')

test('tests if able to load index.html', async () => {
    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')

    await browser.close()
})