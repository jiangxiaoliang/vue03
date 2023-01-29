import puppeteer from 'puppeteer'

const sleep = (time: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

(async () => {
    // 通过 launch 生成一个’浏览器‘实例,
    // option 中的 headless 是个布尔值，如果是 false 的话你就会看到一个浏览器从打开，到完成     //你整个任务的全过程，
    // 默认是 true，也就是在后台自动完成你的任务

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    })
    // 打开一个新标签
    const page = await browser.newPage()
    // 跳转对应页面
    await page.goto('https://jd.com')

    await page.focus('#key')

    await page.keyboard.sendCharacter('iphone13')

    await page.click('.button')

    // 延迟1s
    sleep(1000)

    // 等待元素加载完毕
    await page.waitForSelector('.gl-item')

    // 滚动截屏
    let scrollEnable: boolean = true
    let scrollStep: number = 500
    while(scrollEnable) {
        scrollEnable = await page.evaluate((scrollStep: number) => {
            let scrollTop: number = document.scrollingElement?.scrollTop ?? 0
            document.scrollingElement!.scrollTop = scrollTop + scrollStep
            return document.body.clientHeight > scrollTop + 1080 ? true : false
        }, scrollStep)
        sleep(500)
    }

    await page.screenshot({
        path: 'iphone13.png',
        fullPage: true
    })
})()