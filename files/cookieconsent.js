// JavaScript Document

let gaid = ''
let CmCookieConsent = ''
let consent = 0
let accepted = false
let ad_not_acepted = ''
let ad_acepted = ''
let ad_acepted_stats = ''

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
  const CCManager_modal_state = document.getElementById('CCManager_modal_state')

  CCManager_modal_decline.addEventListener('click', () => {
    CCManager_modal_state.innerHTML = ad_not_acepted
    document.cookie = 'Cm_modal_cookie=0; expires=Thu, 01-Jan-1970 00:00:01 GMT UTC; path=/'
    popup('hide')
    return
  })

  const CCManager_modal_stats = document.getElementById('CCManager_modal_stats')
  CCManager_modal_stats.addEventListener('click', () => {
    CCManagerAccept(1)
  })

  const CCManager_modal_accept = document.getElementById('CCManager_modal_accept')
  CCManager_modal_accept.addEventListener('click', () => {
    CCManagerAccept(2)
  })

  const CCManager_modal_config = document.getElementById('CCManager_modal_config')
  CCManager_modal_config.addEventListener('click', () => {
    CCManagerConfig()
  })

  const CCManagerConfig = () => {
    CCManager_modal_decline.style.display = 'inline-block'
    CCManager_modal_stats.style.display = 'inline-block'
    CCManager_modal_config.style.display = 'none'
    return
  }

  const CCManager_modal = document.getElementById('CCManager_modal')

  const popup = (option) => {
    if (option == 'show') {
      CCManager_modal.style.display = 'block'
      CCManager_modal.classList.remove('hidden')
    } else CCManager_modal.classList.add('hidden')
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
    if (modo == 1) CCManager_modal_state.innerHTML = ad_acepted_stats
    if (modo == 2) CCManager_modal_state.innerHTML = ad_acepted
    document.cookie = 'Cm_modal_cookie=' + modo + '; expires=Thu, 18 Dec 2035 12:00:00 UTC; path=/'

    if (!accepted) {
      //UPDATE GTAG
      if (modo == 1) gtag('consent', 'update', { analytics_storage: 'granted' })
      if (modo == 2) {
        gtag('consent', 'update', { ad_storage: 'granted', analytics_storage: 'granted' })
        console.log('Pasamos por nivel 2')
        //load extra script;
      }
    }

    accepted = true
    popup('hide')
    return
  }

  gaid = document.getElementById('gaid').value
  CmCookieConsent = getCookie('Cm_modal_cookie')
  ad_not_acepted = document.getElementById('CCManager_modal_state1').value
  ad_acepted = document.getElementById('CCManager_modal_state3').value
  ad_acepted_stats = document.getElementById('CCManager_modal_state2').value

  let script = document.createElement('script')
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaid
  script.onload = function () {
    window.dataLayer = window.dataLayer || []
    gtag('js', new Date())
    if (CmCookieConsent == '1') {
      consent = 1
      gtag('consent', 'default', { analytics_storage: 'granted' })
      CCManager_modal_state.innerHTML = ad_acepted_stats
    }
    if (CmCookieConsent == '2') {
      consent = 2
      gtag('consent', 'default', { ad_storage: 'granted', analytics_storage: 'granted' })
      CCManager_modal_state.innerHTML = ad_acepted
    }
    if (consent == 0) gtag('consent', 'default', { ad_storage: 'denied', analytics_storage: 'denied' })
    gtag('config', gaid)

    CCManager_cookie_button.classList.remove('hidden')

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
