var requestingItem ={
    requestItem: function(date,email,pw,text,name,cvv,CC,ccMo,ccYr){
        this
        // .click('@login')
        // .setValue('@email',email)
        // .setValue('@pw',pw)
        // .click('@LoginBtn')
        // .click('@search')
        // .setValue('@search',searching)
        // .click('@searchBtn')
        // .click('@surfItem')
        // this.swtichWindow('newWindowID')
        .click('@ReqStart')
        .expect.element('@ReqStart').to.be.present.after(5000)
        this
        .setValue('@ReqStart',date)
        .click('@nextReq')
        .expect.element('@email').to.be.present.after(5000)
        this
        .setValue('@email',email)
        .setValue('@pw',pw)
        .click('@LoginBtn')
        .expect.element('@ReqStart').to.be.present.after(5000)
        this
        .setValue('@ReqStart',date)
        .click('@nextReq')
        .click('@NextBtn')
        .setValue('@messReq', text)
        .setValue('@payName', name)
        .setValue('@CVV',cvv)
        .click('@ccNo')
        .setValue('@ccNo',CC)
        .click('@ccMo')
        .setValue('@ccMo',ccMo)
        .click('@ccYr')
        .setValue('@ccYr',ccYr)
        .click('@payNow')
        .expect.element('@receipt').text.to.contain('surf').after(5000)
        this
        .expect.element('@receipt').text.to.contain('View Receipt').after(5000)

    }
}

module.exports = {
    url:'https://alpha.yoodlize.com/details/19',
    //'https://alpha.yoodlize.com/',
    commands:[requestingItem],
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
        ReqStart: 'input[class="DateInput_input DateInput_input_1"]',
        ReqEnd:'input[name="It is End date id"]',
        nextReq:'button[Class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        NextBtn: 'button[class="Meetup-button-1IEeC Meetup-btnPrimary-3Fc0g btn btn-default"]',
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