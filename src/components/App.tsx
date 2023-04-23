//import React, { useState } from 'react'

import React from 'react'
import CookiesModalSettings from './cookieconsent.json'

type Props = {
  value?: string
}
const MyCookieCM = ({ value = 'en-us' }: Props) => {
  const CookieMain: any = CookiesModalSettings.json.Main
  console.log(CookieMain)
  return (
    <div>
      <h1>El locale es: {value}</h1>
    </div>

    /*
    let locale = cookie_locale ?? 'en-us';

      const CookieMain = CookiesModalSettings.json.Main;  
      const localeObj = CookiesModalSettings.json.Locales[locale];
      
      // console.log('##################################################################');
      // console.log(locale);
      // console.log('##################################################################');
      console.log(localeObj);
      console.log(localeObj.first_sentence);

      // console.log('##################################################################');
      // console.log(CookiesModalSettings);
      // console.log(CookieMain);
      // console.log(CookiesModalSettings);
      
      return (
          <>
          <style>
            {`
            #CCManager_modal_button_svg {
              color: ${CookieMain.button_cookie_color};
            }
            #CCManager_modal.hidden{opacity:0; visibility:hidden; transition: all 1s ease-in;}

            #CCManager_modal {
              background-color: ${CookieMain.modal_background_color};
              color: ${CookieMain.modal_color};
            }
            #CCManager_modal_decline, #CCManager_modal_stats {
              color: ${CookieMain.buttons_color};
              background-color: ${CookieMain.buttons_background_color};
              font-size: 16px;
            } 

            #CCManager_modal_accept {
                color: ${CookieMain.buttonall_color};
                background-color: ${CookieMain.buttonall_background_color};
                font-size: 16px;
            } 

          `}
          </style>
          <div className="CCManager_cookie" id="CCManager_cookie">
              <button type="button" id="CCManager_cookie_button" className="m-8 fixed bottom-0 left-0 p-2 m-2 border-0 cursor-pointer bg-white">
                  <svg id="CCManager_modal_button_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" className="w-10 h-10 fill-current">
                      <g>
                          <g>
                              <path d="M501.791,236.285c-32.933-11.827-53.189-45.342-50.644-71.807c0-4.351-2.607-8.394-5.903-11.25 c-3.296-2.842-8.408-4.072-12.686-3.384c-50.186,7.363-96.14-29.352-100.693-80.962c-0.41-4.658-2.959-8.848-6.914-11.353 c-3.94-2.49-8.848-3.032-13.198-1.406C271.074,71.02,232.637,44.084,217.3,8.986c-2.871-6.563-9.99-10.181-17.007-8.628 C84.82,26.125,0.001,137.657,0.001,256.002c0,140.61,115.39,256,256,256s256-115.39,256-256 C511.584,247.068,511.522,239.771,501.791,236.285z M105.251,272.131c-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15 s15,6.714,15,15C120.251,265.415,113.534,272.131,105.251,272.131z M166.001,391.002c-24.814,0-45-20.186-45-45 c0-24.814,20.186-45,45-45c24.814,0,45,20.186,45,45C211.001,370.816,190.816,391.002,166.001,391.002z M181.001,211.002 c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30C211.001,197.54,197.539,211.002,181.001,211.002z M301.001,421.002c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30 C331.001,407.54,317.539,421.002,301.001,421.002z M316.001,301.002c-24.814,0-45-20.186-45-45c0-24.814,20.186-45,45-45 c24.814,0,45,20.186,45,45C361.001,280.816,340.816,301.002,316.001,301.002z M405.251,332.131c-8.284,0-15-6.716-15-15 c0-8.286,6.716-15,15-15s15,6.714,15,15C420.251,325.415,413.534,332.131,405.251,332.131z"/>
                          </g>
                      </g>
                  </svg>
              </button>
          </div>

          <div className="z-50 visible opacity-100 fixed bottom-0 right-0 w-full max-w-full bg-{{ $CookieMain['modal_background_color'] }} text-{{ $CookieMain['modal_color'] }} p-10 transition-opacity duration-1000 text-base font-sans leading-5 text-center" id="CCManager_modal" style={{display:'none'}}>
           <svg id="closeams" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 right-20 cursor-pointer" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
            <div className="mb-10">{localeObj.first_sentence}</div> 
            <div className="mb-10">{localeObj.second_sentence}</div>

            <div className="flex items-center justify-center">
                <button type="button" className="m-10 p-10 border-0 cursor-pointer bg-white
" id="CCManager_modal_decline">
                    <span>{localeObj.button_necesary}</span>
                </button>
                <button type="button"  style={{display:'none'}}  className="m-10 p-10 border-0 cursor-pointer bg-white
" id="CCManager_modal_stats">
                    <span>{localeObj.button_only_stats}</span>
                </button>
                <button type="button" className="m-10 p-10 border-0 cursor-pointer bg-white
" id="CCManager_modal_accept">
                    <span>{localeObj.button_accept_all}</span>
                </button>
                <button type="button" id="CCManager_modal_config" className="m-10 p-10 border-0 cursor-pointer bg-white flex flex-row flex-wrap items-center justify-center content-center

">
                    <svg id="CCManager_modal_config_svg" className="relative top-5 mr-3 -mt-11 fill-gray-700
"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <g>
                            <path d="M0,0h24v24H0V0z" fill="none"/>
                            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                        </g>
                    </svg>
                    <span>{localeObj.configuration_bottom}</span>
                </button>
            </div>
            <div id="CCManager_modal_state"></div>
            <input type={'hidden'} id="gaid" value={CookieMain.ga_id} />
            <input type={'hidden'} id="CCManager_modal_state1" value={localeObj.state1} />
            <input type={'hidden'} id="CCManager_modal_state2" value={localeObj.state2} />
            <input type={'hidden'} id="CCManager_modal_state3" value={localeObj.state3} />

            <Script
            src="/CookieConsentManager.js"
            strategy="afterInteractive"
            />
        </div>
          </>
      )*/
  )
}

export default MyCookieCM
