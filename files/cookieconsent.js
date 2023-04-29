// JavaScript Document

let gaid = ''
let CmCookieConsent = ''
let consent = 0
let accepted = false

const myCookieModal = () => {
  function gtag() {
    // eslint-disable-next-line no-undef
    dataLayer.push(arguments)
  }

  const CCManager_cookie_button = document.getElementById('CCManager_cookie_button')
  CCManager_cookie_button.addEventListener('click', () => {
    popup('show')
  })

  const closeams = document.getElementById('closeams')
  closeams.addEventListener('click', () => {
    popup('hide')
  })

  const CCManager_modal_decline = document.getElementById('CCManager_modal_decline')

  CCManager_modal_decline.addEventListener('click', () => {
    document.cookie = 'Cm_modal_cookie=0; expires=Thu, 01-Jan-1970 00:00:01 GMT UTC; path=/'
    popup('hide')
    return
  })

  const CCManager_modal_accept = document.getElementById('CCManager_modal_accept')
  CCManager_modal_accept.addEventListener('click', () => {
    CCManagerAccept(2)
  })

  const CCManager_modal = document.getElementById('CCManager_modal')

  const popup = (option) => {
    if (option == 'show') {
      CCManager_modal.classList.remove('opacity-0')
      CCManager_modal.classList.remove('hidden')
      setTimeout(() => {
        CCManager_modal.classList.add('opacity-100')
      }, 10)
    } else {
      CCManager_modal.classList.remove('opacity-100')
      CCManager_modal.classList.add('opacity-0')
      setTimeout(() => {
        CCManager_modal.classList.add('hidden')
      }, 1000)
    }
    return false
  }

  const getCookie = (cname) => {
    var name = cname + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  const CCManagerAccept = (modo) => {
    document.cookie = 'Cm_modal_cookie=' + modo + '; expires=Thu, 18 Dec 2035 12:00:00 UTC; path=/'

    if (!accepted) {
      //UPDATE GTAG
      if (modo == 2) {
        gtag('consent', 'update', { ad_storage: 'granted', analytics_storage: 'granted' })
        console.log('The third-party cookies have been accepted.')
        //load extra script;
        /*
          const cookieconsentaccept = document.createElement('script');
          script.src = '/cookieconsentaccept.js';
          script.onload = function() {
              console.log('The code for accepting cookies has been full loaded successfully.');
          };
          document.head.appendChild(script);
        */
      }
    }

    accepted = true
    popup('hide')
    return
  }

  gaid = document.getElementById('gaid').value
  CmCookieConsent = getCookie('Cm_modal_cookie')

  let script = document.createElement('script')
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaid
  script.onload = function () {
    window.dataLayer = window.dataLayer || []
    gtag('js', new Date())
    if (CmCookieConsent == '2') {
      consent = 2
      gtag('consent', 'default', { ad_storage: 'granted', analytics_storage: 'granted' })
    }
    if (consent == 0) gtag('consent', 'default', { ad_storage: 'denied', analytics_storage: 'denied' })
    gtag('config', gaid)

    console.log('consent:' + consent)

    if (!consent) popup('show')
    if (consent) {
      CCManagerAccept(consent)
    }
  }

  document.head.appendChild(script)
}

if (document.readyState !== 'loading') {
  myCookieModal()
} else {
  document.addEventListener('DOMContentLoaded', function () {
    myCookieModal()
  })
}
