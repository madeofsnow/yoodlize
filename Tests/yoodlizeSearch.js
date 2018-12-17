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

    'Search bar Exists everywhere test': browser => {
        yoodlize.click('@browse')
        yoodlize.expect.element('input.form-control').to.be.visible
        yoodlize.click('@logo')
        yoodlize.click('@allTools')
        yoodlize.expect.element('input.form-control').to.be.visible
        yoodlize.click('@logo')
        yoodlize.click('@allToys')
        yoodlize.expect.element('input.form-control').to.be.visible
        //yoodlize.click('@listProduct')
        //yoodlize.expect.element('input.form-control').to.be.visible.before(5000)
        // yoodlize.click('@messages')
        // yoodlize.expect.element('input.form-control').to.be.visible
        // // yoodlize.click('@login')
        // // yoodlize.expect.element('input.form-control').to.be.visible
    },
    'Search bar Exists part2': browser => {
        yoodlize.click('@allSport')
        yoodlize.expect.element('input.form-control').to.be.visible
        yoodlize.click('@logo')
        yoodlize.expect.element('input.form-control').to.be.visible
        yoodlize.click('@outDoorBall')
        yoodlize.expect.element('input.form-control').to.be.visible
    },
    'Searching functionality': browser => {
        yoodlize
            .setValue('@search', 'bike' + browser.Keys.ENTER)
            .expect.element('@searchedPage').text.to.contain('bike').after(5000)
        yoodlize
            .click('@filterBtn')
            .click('@SEfilter1')
            .click('@applyBtn') 
            .expect.element('@searchedPage').text.to.contain('Golf').after(5000)

    },
    // //Please change the Value of @email!! To test this again!
    // 'Testing sign-up brings user to dashboard.': browser => {
    //     yoodlize
    //         .click('@signUp')
    //         .click('@signEmail')
    //         .setValue('@fN', 'a')
    //         .setValue('@ln', 'h')
    //         .setValue('@email', 'tests@DEVPROJECTssssssssss.com')
    //         .setValue('@pw', '123456789')
    //         .setValue('@mo', '9')
    //         .setValue('@day', '15')
    //         .setValue('@yr', '1987')
    //         .click('@subBtn')
    //         .expect.element('@dash').to.be.visible.before(50000)

    // },
    // //Failed HERE!!!! < ---------------------->
    // 'Testing login and if it brings user back to orginal site' :browser => {
    //     yoodlize
    //         .click('@login')
    //         .setValue('@email', 'tests@DEVPROJECTssssssssss.com')
    //         .setValue('@pw', '123456789')
    //         .expect.element('a[href$="/s?category=86"]').to.not.visible.before(50000)



}







