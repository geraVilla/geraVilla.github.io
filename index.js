

let mainTitleSection = document.querySelector(".mainTitleSection")
let paragraphSection = document.querySelector(".paragraphSection")

let addressFont = document.querySelector(".addressFont")
let addressInfo = document.querySelector(".addressInfo")

let toGoFont = document.querySelector(".toGoFont")

let phoneNumber = document.querySelector(".phoneNumber")

let hoursFont = document.querySelector(".HoursFont")

let realHours = document.querySelector(".realHours")

let closedHours = document.querySelector(".closedHours")

let CateringSection = document.querySelector(".CateringSection")

let servingSection = document.querySelector(".servingSection")

window.addEventListener('load', function(){
    mainTitleSection.classList.add("animateTitle")
    paragraphSection.classList.add("fadeParagraph")
    addressFont.classList.add("moveLeftAddressFont")
    addressInfo.classList.add("addFadeToAddressInfo")
    toGoFont.classList.add("moveLeftToGoFont")

    phoneNumber.classList.add("fadeInNumber")

    hoursFont.classList.add("hoursMoveLeft")

    realHours.classList.add("showRealHours")

    closedHours.classList.add("showClosedHours")

    CateringSection.classList.add("showCateringSection")

    servingSection.classList.add("showServingSection")
    
})