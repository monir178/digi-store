import Link from "next/link";

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <div className="w-full px-4 mt-6">
        <hr className="my-4 border-violet-400" />
        <div className=" mx-auto pb-10 ">
          <div className="grid grid-cols-2 lg:grid-cols-3 pt-10 gap-y-16 uppercase tracking-wide">
            <div>
              <h5 className="font-semibold mb-2 text-violet-400">All in one</h5>
              <ul className="list-none  space-y-1">
                <li>
                  <small>UI Kits</small>
                </li>
                <li>
                  <small>Editor Picks</small>
                </li>
                <li>
                  <small>New Arrivals</small>
                </li>
              </ul>
            </div>
            <div className="lg:ml-20">
              <h5 className="font-semibold mb-2 text-violet-400">
                Customer Service
              </h5>
              <ul className="list-none  space-y-1">
                <li>
                  <small>Contact</small>
                </li>
                <li>
                  <small>Shipping Policy</small>
                </li>

                <li>
                  <small>Terms & Conditions</small>
                </li>
              </ul>
            </div>
            <div className="normal-case lg:justify-self-end">
              <h5 className="font-semibold mb-2 uppercase text-violet-400">
                Contact Us
              </h5>
              <ul className="list-none  space-y-1">
                <li className="flex gap-4 items-center"></li>
                <li>
                  <p className="leading-4">
                    <small>example@gmail.com</small> <br />
                    <small>+88004493898943</small>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4 border-violet-400" />

          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="md:text-right mb-4 md:mb-0 text-violet-400">
              <small> @ 2024. All rights reserved.</small>
            </div>
            <div className="flex flex-wrap justify-between gap-6">
              <small>Terms</small>
              <small>Privacy</small>
              <small>Contact</small>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
