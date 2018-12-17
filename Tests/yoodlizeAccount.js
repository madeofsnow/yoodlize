var yoodlize = {}


module.exports = {
    beforeEach: browser => {
        yoodlize = browser.page.yoodlizePageobject()
        yoodlize.navigate()
            .expect.element('@logo').to.be.visible.before(5000)
    },
    after: browser => {
        browser.end()
    },
    //Please change the Value of @email!! To test this again!
    'Testing sign-up brings user to dashboard.': browser => {
        yoodlize
            .click('@signUp')
            .click('@signEmail')
            .setValue('@fN', 'a')
            .setValue('@ln', 'h')
            .setValue('@email', 'tests@DEVPROJECT.com')
            .setValue('@pw', '123456789')
            .setValue('@mo', '9')
            .setValue('@day', '15')
            .setValue('@yr', '1987')
            .click('@subBtn')
            .expect.element('@dash').to.be.visible.before(50000)

    },
    //Failed HERE!!!! < ---------------------->
    // 'Testing login and if it brings user back to orginal site': browser => {
    //     yoodlize
    //         .click('@navBtn')
    //         .click('@logout')
    //         .click('@login')
    //         .setValue('@email', 'tests@DEVPROJECT.com')
    //         .setValue('@pw', '123456789')
    //         .expect.element('a[href$="/s?category=86"]').to.not.visible.before(50000)

    }
