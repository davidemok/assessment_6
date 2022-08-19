
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})
describe('duel duo tests', () => {


test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('see all bots button shows up when page loads', async () => {
    const seeAllBots = await driver.findElement(By.id('see-all'))
    const displayed = await seeAllBots.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking Draw button displays div id "choices"', async () => {
    let drawButton = await driver.findElement(By.id('draw'))
    await drawButton.sendKeys('\n')
    await driver.sleep(2000)
    let newDiv = await driver.findElement(By.id('choices'))
    expect(newDiv).toBeTruthy();
})

test('clicking Add to Duo button displays div id "player-duo"', async () => {
    await driver.sleep(3000)
    let addButton = await driver.findElement(By.className('bot-btn'))
    await addButton.sendKeys('\n')
    await driver.sleep(2000)
    let newDiv2 = await driver.findElement(By.id('player-duo'))
    expect(newDiv2).toBeTruthy();
})
// hmmm i can't figure out how to select the addButton which (i think) is created in index.js

// test('see all bots button works', async () => {
//     let seeBots = await driver.findElement(By.id('see-all'))
//     await seeBots.sendKeys('\n')
//     await driver.sleep(1000)
//     let allBots = await driver.findElement(By.id('all-bots'))
//     expect(allBots).Contain(10)
// })
//i can't figure out how to test if allbots contains divs inside it :(


})