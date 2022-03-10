const puppeteer = require('puppeteer')
const login = require('./login')

test('tests if username and password inputed in the gui are sent to the server', async () => {
    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    await page.click('#login')
    await page.click('input#user')
    await page.type('input#user', 'John', {delay: 100})
    await page.click('input#pw')
    await page.type('input#pw', 'upR/^JNh=6CV', {delay: 100})
    await page.click('[type=submit]')
    await browser.close()
    expect(login.user).toBe('John')
    expect(login.pw).toBe('upR/^JNh=6CV')
})