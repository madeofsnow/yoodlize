var yoodlize = {}


module.exports = {
    beforeEach: browser => {
        yoodlize = browser.page.yoodlizeRequestfunction()
        yoodlize.navigate()
            .expect.element('@ReqStart').to.be.visible.after(10000)
    },
    after: browser => {
        browser.end()
    },

    'Requsting item automation w funciton': browser => {
        yoodlize.requestItem('12/19/201912/20/2019','jynam87@gmail.com','1234567890','123test','tester','123','1','1','2222222222')
    
    },
}
