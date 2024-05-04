import Image from "next/image";
import React from "react";
import Logo from "@/assets/myAzaLogo.png";
import Twitter from "@/assets/icons/twitter.png"
import Linkedin from "@/assets/icons/linkedin.png"
import Instagram from "@/assets/icons/instagram.png"
import Facebook from "@/assets/icons/facebook.png"
function Footer() {
  return (
    <div>
      <div className="bg-[#E9E7FE] text-[#5A5775]">
        <section className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row  justify-between px-3 py-5 ">
            {/* first col */}
            <div className="py-8 px-4 space-y-3 leading-8">
              <Image src={Logo} alt="company logo" className="w-24" />
              <p>
                Aza Technologies is a financial platform for the people by the
                people.
              </p>
              <p className="hidden md:block">© 2022 Aza Technologies. All Rights Reserved.</p>
            </div>
            {/* second col */}
            <div className="flex flex-col md:flex-row flex-wrap  justify-center">
              <div>
                <div className="py-8 px-4 ">
                  <h1 className="text-xl text-[#2A0079] font-bold mb-3">Our Products</h1>
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
                  <h1 className="text-xl text-[#2A0079] font-bold mb-3">Company</h1>
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
                  <h1 className="text-xl text-[#2A0079] font-bold mb-3">Contact</h1>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <p>Hello@aza.co</p>
                    </div>
                    <div className="flex items-center gap-4 md:justify-center">
                      <div>
                        <a href="#">
                          <Image src={Twitter} alt="twitter logo" className="w-6" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <Image src={Linkedin} alt="linkedin logo" className="w-6" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <Image src={Instagram} alt="instagram logo" className="w-6" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <Image src={Facebook} alt="facebook logo" className="w-6" />
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
                Myaza&apos;s services are provided by FlitStack LTD. FlitStack is a
                Financial Technology company. FlitStack offers its products and
                services in partnership with licensed transmitters in their
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
