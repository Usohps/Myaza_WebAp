import Image from "next/image";
import React from "react";
import Logo from "@/assets/myAzaLogo.png";
import Twitter from "@/assets/icons/twitter.png";
import Linkedin from "@/assets/icons/linkedin.png";
import Instagram from "@/assets/icons/instagram.png";
import Facebook from "@/assets/icons/facebook.png";
function Footer() {
  return (
    <div>
      <div className="bg-[#E9E7FE] text-[#5A5775]">
        <section className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row  justify-between px-3 py-5 ">
            {/* first col */}
            <div className="py-8 px-4 space-y-3 leading-5">
              <svg
                width="162"
                height="38"
                viewBox="0 0 162 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_139_368)">
                  <path
                    d="M22.9791 1.20824L38.0922 16.7541C39.7571 18.4669 40.2433 21.0048 39.3335 23.2111L34.1086 35.8637C33.4769 37.3905 31.7273 38.118 30.2005 37.4881C29.8266 37.3334 29.4877 37.105 29.2041 36.8159L20.1374 27.5557L10.6434 37.1105C9.47756 38.2837 7.58428 38.2892 6.41111 37.1234C6.12381 36.8361 5.89544 36.4954 5.74442 36.1179L0.447658 22.9736C-0.454779 20.7359 0.0774747 18.1741 1.79395 16.4779L17.3159 1.15115C18.8832 -0.397729 21.41 -0.381154 22.9589 1.18614C22.9662 1.19351 22.9736 1.20087 22.981 1.20824H22.9791Z"
                    fill="#5645F5"
                  />
                  <path
                    d="M9.47367 16.6977L22.338 29.7996L22.2717 29.7315C21.1151 28.5509 19.22 28.5325 18.0395 29.691C18.0266 29.7039 18.0137 29.7168 18.0008 29.7278L17.9308 29.7996L10.6432 37.1186C9.47736 38.2899 7.58224 38.2936 6.41091 37.1278C6.12361 36.8423 5.89707 36.5016 5.74605 36.1259L0.392204 22.8343C-0.688879 20.1491 0.541383 17.0881 3.18055 15.9002C5.36666 14.9149 7.46437 15.182 9.47552 16.6995L9.47367 16.6977Z"
                    fill="#19156F"
                  />
                  <path
                    d="M137.778 8.47766H123.293V13.0617H133.285L123.293 23.2537V27.8396H125.597H139.836V23.2537H130.016L139.836 13.0617V8.47766H137.778Z"
                    fill="#100671"
                  />
                  <path
                    d="M114.902 8.47778V9.92537C114.619 9.74856 114.326 9.58833 114.022 9.441C112.748 8.82587 111.317 8.47778 109.805 8.47778C104.46 8.47778 100.125 12.8095 100.125 18.156C100.125 23.5025 104.46 27.8378 109.805 27.8378C111.317 27.8378 112.748 27.4898 114.022 26.8728C114.324 26.7254 114.617 26.5652 114.902 26.3884V27.8378H119.486V8.47778H114.902ZM109.805 23.1949C107.024 23.1949 104.768 20.9388 104.768 18.1578C104.768 15.3768 107.024 13.1207 109.805 13.1207C112.586 13.1207 114.844 15.375 114.844 18.1578C114.844 20.9406 112.587 23.1949 109.805 23.1949Z"
                    fill="#100671"
                  />
                  <path
                    d="M157.146 8.47766V9.92525C156.862 9.74844 156.569 9.58821 156.265 9.44088C154.991 8.82574 153.56 8.47766 152.048 8.47766C146.703 8.47766 142.368 12.8094 142.368 18.1558C142.368 23.5023 146.703 27.8377 152.048 27.8377C153.56 27.8377 154.991 27.4896 156.265 26.8727C156.567 26.7253 156.86 26.5651 157.146 26.3883V27.8377H161.73V8.47766H157.146ZM152.048 23.1948C149.267 23.1948 147.011 20.9387 147.011 18.1577C147.011 15.3767 149.267 13.1206 152.048 13.1206C154.829 13.1206 157.087 15.3749 157.087 18.1577C157.087 20.9405 154.831 23.1948 152.048 23.1948Z"
                    fill="#100671"
                  />
                  <path
                    d="M94.023 8.40649L88.9914 19.8012L84.1901 8.40649H78.7184L86.2252 25.5583L81.4938 35.2752H87.0171L99.5665 8.40649H94.023Z"
                    fill="#100671"
                  />
                  <path
                    d="M69.0936 8.24294C66.7159 8.24294 64.493 9.21721 62.8925 10.9097C62.841 10.8545 62.7876 10.8011 62.7341 10.7477C61.119 9.13249 58.9715 8.24294 56.6878 8.24294C55.3397 8.24294 54.0321 8.55787 52.8515 9.15275V8.24294H48.1367V28.4962H52.8515V17.0997C52.8515 14.9854 54.5717 13.2634 56.6878 13.2634C57.7136 13.2634 58.6769 13.6631 59.4006 14.3869C60.1244 15.1107 60.5241 16.0739 60.5241 17.0979V28.4944H65.2573V17.0979C65.2573 14.9836 66.9774 13.2616 69.0936 13.2616C70.1194 13.2616 71.0826 13.6613 71.8064 14.385C72.5302 15.1088 72.9298 16.072 72.9298 17.096V28.4925H77.6446V16.7885C77.6446 14.5048 76.7551 12.3573 75.1399 10.744C73.5247 9.1288 71.3773 8.23926 69.0936 8.23926V8.24294Z"
                    fill="#100671"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_139_368">
                    <rect width="161.732" height="38" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>
                Aza Technologies is a financial platform for the people by the
                people.
              </p>
              <p className="hidden md:block">
                © 2022 Aza Technologies. All Rights Reserved.
              </p>
            </div>
            {/* second col */}
            <div className="flex flex-col md:flex-row flex-wrap  justify-center">
              <div>
                <div className="py-8 px-4 ">
                  <p className="text-lg text-[#2A0079] font-bold mb-3">
                    Our Products
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a href="#">Virtual Cards</a>
                    </li>
                    <li>
                      <a href="#">Swap Currency</a>
                    </li>
                    <li>
                      <a href="#">Transfer Funds</a>
                    </li>
                    <li>
                      <a href="#">Multiple Wallets</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4 ">
                  <p className="text-lg text-[#2A0079] font-bold mb-3">
                    Company
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Our Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4 ">
                  <p className="text-lg text-[#2A0079] font-bold mb-3">
                    Contact
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <p>Hello@aza.co</p>
                    </div>
                    <div className="flex items-center gap-4 md:justify-center">
                      <div>
                        <a href="#">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="20" cy="20" r="19.5" stroke="#6455F6" />
                            <path
                              d="M12.5938 12.9838C12.9629 12.9408 13.3255 13.106 13.5352 13.4128C15.0105 15.5716 16.7826 16.4697 18.7489 16.674C18.8454 15.8328 19.0724 15.0017 19.4991 14.2699C20.125 13.1963 21.143 12.4058 22.5972 12.1137C24.6066 11.7101 26.1366 12.4378 27.0244 13.3291L28.8162 12.9941C29.199 12.9226 29.5884 13.0797 29.8144 13.3967C30.0403 13.7138 30.0617 14.1332 29.8691 14.4716L28.1496 17.4937C28.3064 21.8551 27.0944 24.8988 24.5103 26.9958C23.1395 28.1081 21.178 28.739 19.0249 28.9338C16.855 29.1301 14.4021 28.8927 11.9638 28.1807C11.536 28.0558 11.2425 27.6629 11.2441 27.2173C11.2457 26.7716 11.542 26.3808 11.9706 26.2589C13.1968 25.9102 14.1301 25.6087 14.9738 25.0822C13.7753 24.4459 12.8923 23.6141 12.2673 22.6658C11.3986 21.3477 11.0765 19.8783 11.0125 18.553C10.9486 17.2278 11.1401 16.0005 11.3418 15.1147C11.4566 14.6104 11.5907 14.1038 11.7755 13.6198C11.9098 13.271 12.2246 13.0268 12.5938 12.9838Z"
                              fill="#6455F6"
                            />
                          </svg>
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="20" cy="20" r="19.5" stroke="#6455F6" />
                            <path
                              d="M29 12.3235V27.6765C29 28.0275 28.8606 28.3641 28.6123 28.6123C28.3641 28.8606 28.0275 29 27.6765 29H12.3235C11.9725 29 11.6359 28.8606 11.3877 28.6123C11.1394 28.3641 11 28.0275 11 27.6765V12.3235C11 11.9725 11.1394 11.6359 11.3877 11.3877C11.6359 11.1394 11.9725 11 12.3235 11H27.6765C28.0275 11 28.3641 11.1394 28.6123 11.3877C28.8606 11.6359 29 11.9725 29 12.3235ZM16.2941 17.8824H13.6471V26.3529H16.2941V17.8824ZM16.5324 14.9706C16.5337 14.7704 16.4957 14.5718 16.4204 14.3863C16.345 14.2008 16.2339 14.0319 16.0933 13.8893C15.9527 13.7468 15.7854 13.6333 15.6009 13.5554C15.4165 13.4775 15.2185 13.4367 15.0182 13.4353H14.9706C14.5634 13.4353 14.1729 13.597 13.885 13.885C13.597 14.1729 13.4353 14.5634 13.4353 14.9706C13.4353 15.3778 13.597 15.7683 13.885 16.0562C14.1729 16.3441 14.5634 16.5059 14.9706 16.5059C15.1708 16.5108 15.3701 16.4762 15.557 16.4041C15.7438 16.332 15.9147 16.2238 16.0597 16.0856C16.2047 15.9475 16.3211 15.7821 16.4022 15.599C16.4833 15.4158 16.5275 15.2185 16.5324 15.0182V14.9706ZM26.3529 21.2071C26.3529 18.6606 24.7329 17.6706 23.1235 17.6706C22.5966 17.6442 22.0719 17.7564 21.6019 17.9961C21.1318 18.2358 20.7328 18.5945 20.4447 19.0365H20.3706V17.8824H17.8824V26.3529H20.5294V21.8476C20.4911 21.3862 20.6365 20.9283 20.9339 20.5735C21.2313 20.2186 21.6567 19.9954 22.1176 19.9524H22.2182C23.06 19.9524 23.6847 20.4818 23.6847 21.8159V26.3529H26.3318L26.3529 21.2071Z"
                              fill="#6455F6"
                            />
                          </svg>
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="20" cy="20" r="19.5" stroke="#6455F6" />
                            <path
                              d="M29 12.3235V27.6765C29 28.0275 28.8606 28.3641 28.6123 28.6123C28.3641 28.8606 28.0275 29 27.6765 29H12.3235C11.9725 29 11.6359 28.8606 11.3877 28.6123C11.1394 28.3641 11 28.0275 11 27.6765V12.3235C11 11.9725 11.1394 11.6359 11.3877 11.3877C11.6359 11.1394 11.9725 11 12.3235 11H27.6765C28.0275 11 28.3641 11.1394 28.6123 11.3877C28.8606 11.6359 29 11.9725 29 12.3235ZM16.2941 17.8824H13.6471V26.3529H16.2941V17.8824ZM16.5324 14.9706C16.5337 14.7704 16.4957 14.5718 16.4204 14.3863C16.345 14.2008 16.2339 14.0319 16.0933 13.8893C15.9527 13.7468 15.7854 13.6333 15.6009 13.5554C15.4165 13.4775 15.2185 13.4367 15.0182 13.4353H14.9706C14.5634 13.4353 14.1729 13.597 13.885 13.885C13.597 14.1729 13.4353 14.5634 13.4353 14.9706C13.4353 15.3778 13.597 15.7683 13.885 16.0562C14.1729 16.3441 14.5634 16.5059 14.9706 16.5059C15.1708 16.5108 15.3701 16.4762 15.557 16.4041C15.7438 16.332 15.9147 16.2238 16.0597 16.0856C16.2047 15.9475 16.3211 15.7821 16.4022 15.599C16.4833 15.4158 16.5275 15.2185 16.5324 15.0182V14.9706ZM26.3529 21.2071C26.3529 18.6606 24.7329 17.6706 23.1235 17.6706C22.5966 17.6442 22.0719 17.7564 21.6019 17.9961C21.1318 18.2358 20.7328 18.5945 20.4447 19.0365H20.3706V17.8824H17.8824V26.3529H20.5294V21.8476C20.4911 21.3862 20.6365 20.9283 20.9339 20.5735C21.2313 20.2186 21.6567 19.9954 22.1176 19.9524H22.2182C23.06 19.9524 23.6847 20.4818 23.6847 21.8159V26.3529H26.3318L26.3529 21.2071Z"
                              fill="#6455F6"
                            />
                          </svg>
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="20" cy="20" r="19.5" stroke="#6455F6" />
                            <path
                              d="M21.5 29.8883C26.3113 29.1645 30 25.013 30 20C30 14.4771 25.5228 10 20 10C14.4771 10 10 14.4771 10 20C10 25.013 13.6887 29.1645 18.5 29.8883V23H17C16.1716 23 15.5 22.3284 15.5 21.5C15.5 20.6716 16.1716 20 17 20H18.5V18C18.5 16.067 20.067 14.5 22 14.5H22.5C23.3284 14.5 24 15.1716 24 16C24 16.8284 23.3284 17.5 22.5 17.5H22C21.7239 17.5 21.5 17.7239 21.5 18V20H23C23.8284 20 24.5 20.6716 24.5 21.5C24.5 22.3284 23.8284 23 23 23H21.5V29.8883Z"
                              fill="#6455F6"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:block">
            <hr className="md:hidden container w-full px-4 border-gray-400"></hr>
            <div className=" text-sm md:text-center  leading-8 space-y-4 p-6 md:border-t-2 border-gray-400 ">
              <p>
                Myaza&apos;s services are provided by FlitStack LTD. FlitStack
                is a Financial Technology company. FlitStack offers its products
                and services in partnership with licensed transmitters in their
                respective jurisdictions. Copyright ©️ Myaza. 2022
              </p>
              <div>
                <p>Designed with ❤️ & Caprisun</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
