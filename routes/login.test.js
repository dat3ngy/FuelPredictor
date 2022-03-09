const puppeteer = require('puppeteer')
const login = require('./login')

test('tests if username and password inputed in the gui are sent to the server', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--window-size=852,480']
    })
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
})