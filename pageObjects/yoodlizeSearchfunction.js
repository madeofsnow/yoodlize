var searchForitem = {
    searchItem: function (search) {
        this
            .setValue('@search', search)
            .click('@searchBtn')
            .expect.element('@searchedPage').text.to.contain('Hockey Stick').after(10000)
        //this
        //.expect.element('@search').to.be.present.after(5000)
        return this
    }
}
var searchForitem2 = {
    searchItem2: function (search) {
        this
            .click('@logo')
            .setValue('@search', search)
            .click('@searchBtn')
            .expect.element('@searchedPage').text.to.contain('A MAN').after(10000)
        // this
        // .expect.element('@search').to.be.present.after(5000)
        return this
    }
}
var searchWithFilters = {
    searchFilters: function (search, area, minPrice, maxPrice) {
        this
            .click('@logo')
            .setValue('@search', search)
            .click('@searchBtn')
            .expect.element('@searchedPage').to.be.present.after(5000)
        this
            .click('@filterBtn')
            .click('@SEfilter1')
            .click('@SEfilter2')
            .setValue('@geoFilter', area)
            .setValue('@minPrice', minPrice)
            .setValue('@maxPrice', maxPrice)
            .click('@applyBtn')
            .expect.element('@searchedPage').text.to.contain('drone').after(10000)
        this
            .expect.element('@searchedPage').text.to.contain('Gopro').after(10000)
        this
            .expect.element('@searchedPage').text.to.contain('karaoke').after(10000)
        this
            .expect.element('@searchedPage').text.to.contain('Macbook').after(10000)

        return this


    }
}

var requestingItem = {
    requestItem: function (email, pw, searching, date, text, name, cvv) {
        this
            .click('@login')
            .setValue('@email', email)
            .setValue('@pw', pw)
            .click('@LoginBtn')
            .click('@search')
            .setValue('@search', searching)
            .click('@searchBtn')
            .click('@surfItem')
            .swtichWindow()
            .click('@ReqStart')
            .expect.element('@ReqStart').to.be.present.after(5000)
            .setValue('@ReqStart', date)
            .click('@nextReq')
            .setValue('@messReq', text)
            .setValue('@payName', name)
            .setValue('@CVV', cvv)
            .click('@ccNo')
            .click('select[id="@ccMo"] option[value=12]')
            .click('select[id="@ccYr" option[value=2019]')
            .click('payNow')
            .expect.element('@receipt').text.to.contain('A MAN').after(5000)

    }
}

module.exports = {
    url: 'https://alpha.yoodlize.com/',
    commands: [searchForitem, searchForitem2, searchWithFilters,],
    elements: {
        logo: 'img[src="/images/logo/blueRaw.png"]',
        logoPic: 'div[class="sc-ibxdXY kOAXGM"]',

        navBtn: {
            selector: '//a[@class="dropdown-toggle"]',
            locateStrategy: 'xpath'
        },
        logout: {
            selector: '(//span[contains(.,"Logout")])[2]',
            locateStrategy: 'xpath'

        },
        search: 'input.form-control',
        searchBtn: 'Button[class="sc-esjQYD fnHRGJ sc-ifAKCX kvYMhQ"]',
        geoFilter: 'input[class="geosuggest__input SearchForm-inputStyle-2pv3a"]',
        minPrice: 'input[name="priceMin"]',
        maxPrice: 'input[name="priceMax"]',
        searchedPage: 'div[class="Search-searchResultContainer-33ivj"]',
        filterBtn: 'i[class="fal fa-chevron-circle-down fa-lg"]',
        // {
        //     selector: '//div[@class="Search-searchResultContainer-33ivj"]',
        //     locateStrategy: 'xpath'
        // },
        //filterBtn: {
        //selector: '//i[@class="fal fa-chevron-circle-down fa-lg"]',
        // locateStrategy: 'xpath'

        SEfilter1: {
            selector: '(//div[@class="icheckbox_minimal-blue"])[2]',
            locateStrategy: 'xpath'
        },
        SEfilter2: {
            selector: '(//div[@class="icheckbox_minimal-blue"])[4]',
            locateStrategy: 'xpath'
        },
        SEfilter3: {
            selector: '(//div[@class="icheckbox_minimal-blue"])[6]',
            locateStrategy: 'xpath'
        },
        SEfilter4: {
            selector:
            '(div[class="icheckbox_minimal-blue"])[8]'
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
        outDoorBall: 'div[class="sc-bwCtUz jDCpdj"]',
        aMan: 'div[class="ListingPhotos-imageContent-1WAWo"]',
        surfItem: 'div[class="ListingPhotos-content-oNHU3"]',
        ReqStart: 'input[name="It is Start date id"]',
        ReqEnd: 'input[name="It is End date id"]',
        nextReq: 'button[class="Meetup-button-1IEeC Meetup-btnPrimary-3Fc0g btn btn-default"]',
        messReq: 'textarea[name="message"]',
        payName: 'input[name="name"]',
        CVV: 'input[name="cvv"]',
        ccNo: 'input[name="cardNumber"]',
        ccMo: 'select[name="expiryDate"]',
        ccYr: 'select[name="expiryYear"]',
        payNow: 'button[class="Payment-button-2Py7x Payment-btnPrimary-Ydh2n Payment-btnlarge-1FVRM btn btn-default"]',
        receipt: 'div[class="Itinerary-containerResponsive-3VaAu"]',

    }


}
