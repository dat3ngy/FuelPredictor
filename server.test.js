const puppeteer = require('puppeteer')
const server = require('./server')

test('tests if able to connect to the web server', async () => {
    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')

    await browser.close()
})