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
    

}







