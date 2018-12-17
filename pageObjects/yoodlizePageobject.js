module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        logo: 'img[src="/images/logo/blueRaw.png"]',

        navBtn: {
            selector: '//a[@class="dropdown-toggle"]',
            locateStrategy: 'xpath'
        },
        logout: {
            selector: '(//span[contains(.,"Logout")])[2]',
            locateStrategy: 'xpath'

        },
        search: 'input.form-control',
        searchedPage: {
            selector: '//div[@class="Search-searchResultContainer-33ivj"]',
            locateStrategy: 'xpath'
        },
        filterBtn: {
            selector: '//i[@class="fal fa-chevron-circle-down fa-lg"]',
            locateStrategy: 'xpath'
        },
        SEfilter1: {
            selector: '(//div[@class="icheckbox_minimal-blue"])[2]',
            locateStrategy: 'xpath'
        },
        applyBtn: {
            selector: '//button[@class="sc-esjQYD bCvtjb sc-ifAKCX kvYMhQ"]',
            locateStrategy: 'xpath'

        },
        browse: 'a[href$="/s"]',
        listProduct: 'a[href$="/become-a-host?mode=new"]',
        messages: 'a[href="/inbox"]',
        login: {
            selector: '//span[contains(.,"Login")]',
            locateStrategy: 'xpath'
        },

        LoginBtn: {
            selector: '//button[@class="Login-button-138K6 Login-btnPrimary-1tVae btn btn-lg btn-default btn-block"]',
            locateStrategy: 'xpath'
        },
        signUp: {
            selector: '//span[contains(.,"Sign up")]',
            locateStrategy: 'xpath'

        },
        signEmail: {
            selector: '//span[contains(.,"Signup with Email")]',
            locateStrategy: 'xpath'
        },
        fN: 'input[name="firstName"]',
        ln: 'input[name="lastName"]',
        email: 'input[name="email"]',
        pw: 'input[name="password"]',
        mo: 'select[name="month"]',
        day: 'select[name="day"]',
        yr: 'select[name="year"]',
        subBtn: {
            selector: '//button[@class="RegisterForm-button-3269Z RegisterForm-btnPrimary-1WVIG btn btn-lg btn-default btn-block"]',
            locateStrategy: 'xpath'
        },
        dash: {
            selector: '//div[contains(text(),"Dashboard")]',
            locateStrategy: 'xpath'
        },

        allTools: 'a[href$="/s?category=86"]',
        allToys: 'a[href$="/s?category=87"]',
        allSport: 'a[href$="/s?category=76"]',
        outDoorBall: 'div[class="sc-bwCtUz jDCpdj"]'

    }
}