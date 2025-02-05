"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sal from "sal.js";



import bgShapeOne from "../../public/images/bg/bg-shape-four.png";
import bgShapeTwo from "../../public/images/bg/bg-shape-five.png";

import ServiceStyleOne from "../Services/ServiceStyle-One";


const Home = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    Sal();

    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--100">
                {/* Removed or replaced 'display-one' to allow the heading to appear in H5 size */}
                <h1 className="title text-sm">
                  Transform you style with AI-Powered
                  <br />{" "}
                  <span className="header-caption justify-content-center">
                    <span className="cd-headline rotate-1">
                      <span className="cd-words-wrapper text-center">
                        <b
                          className={
                            visibleIndex === 0
                              ? "is-visible theme-gradient "
                              : "is-hidden theme-gradient "
                          }
                        >
                          Fashion trends
                        </b>
                        <b
                          className={
                            visibleIndex === 1
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          Trendy styles
                        </b>
                        <b
                          className={
                            visibleIndex === 2
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          modern classics
                        </b>
                        <b
                          className={
                            visibleIndex === 3
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          on-trend outfits
                        </b>
                        <b
                          className={
                            visibleIndex === 4
                              ? "is-visible theme-gradient"
                              : "is-hidden theme-gradient"
                          }
                        >
                          style essentials
                        </b>
                      </span>
                    </span>
                  </span>{" "}
                </h1>
                <p className="description">
                Save hours of decision-making with AI-powered tools that curate 
                 personalized fashion collections tailored to your style
                </p>
                <div className="form-group">
                  <Link className="btn-default " href="/signin">
                    Try it Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-shape">
          <Image
            className="bg-shape-one"
            width={640}
            height={949}
            src={bgShapeOne}
            alt="Bg Shape"
          />
          <Image
            className="bg-shape-two"
            src={bgShapeTwo}
            width={626}
            height={1004}
            alt="Bg Shape"
          />
        </div>
      </div>

      <div className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                            <h4 className="subtitle">
              <span className="theme-gradient">Fashion Made Effortless</span>
            </h4>
            <h2 className="title mb--60">
              Let AI Craft Your <br /> Signature Style
            </h2>

              </div>
            </div>
          </div>
        </div>
        <ServiceStyleOne />
      </div>

   

    
    </>
  );
};

export default Home;
