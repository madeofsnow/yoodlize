var yoodlize = {}


module.exports = {
    beforeEach: browser => {
        yoodlize = browser.page.yoodlizeSearchfunction()
        yoodlize.navigate()
            .expect.element('@logoPic').to.be.visible.after(10000)
    },
    after: browser => {
        browser.end()
    },

'Searching item and search bar appears w/ function': Browser => {
    yoodlize.searchItem('Hockey')
    yoodlize.searchItem2('a man')
},

'Searching item with Filters w/functions': browser =>{
    yoodlize.searchFilters('bike','flushing','10','20')

    
},

}

    


