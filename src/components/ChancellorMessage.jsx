import React, { useState } from 'react';
import HeroMainHeading from './HeroMainHeading';
import HeroAdmissionHeading from './HeroAdmissionHeading';
import HeroProgramHeading from './HeroProgramHeading';
import HeroPublicationHeading from './HeroPublicationHeading';
import HeroOfficeHeading from './HeroOfficeHeading';
import HeroCampusHeading from './HeroCampusHeading';

const ChancellorMessage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChancellorMessage = () => {
    setIsOpen(!isOpen);
  }

  const { path } = props

  return (
    <>
        <div class="xl:home-fold-06-gb-img xs:bg-gradient flex xl:flex-row xs:flex-col justify-center xl:px-[12.5%] xs:px-0">
            <img src="/images/fold-06 chancy.png" alt="" class="mt-[122px] h-[958px] xl:block xs:hidden"></img>
            <div class="xl:ml-[76px]">
                <div class="flex flex-col justify-center items-center xl:bg-none xs:home-fold-06-gb-img xl:w-[720px] xs:w-full relative">
                    <h3 class="headings xl:h3 xs:h4 text-msu-deep-ocean xl:pt-[120px] xs:pt-[80px] xl:max-w-full xs:max-w-[350px]">We help you take your first step towards <span class="bg-msu-deep-ocean text-msu-gold px-[10px] pt-[10px]">SUCCESS!</span></h3>
                    
                    <img src="/images/fold-06 chancy.png" alt="" class="mt-[84px] h-[498px] xl:hidden xs:block" ></img>
                    <div class="bg-gradient-white absolute top-[769px] h-20 w-full rotate-180 xl:hidden xs:block"></div>
                </div>
                <div class="xl:bg-transparent xs:bg-white-pure xl:w-[720px] xs:w-full xl:px-0 xs:px-[3.85%]">
                    <h4 class="headings xl:h4 xs:h5 text-msu-maroon xl:mt-[125px] xs:pt-5 text-center"> A Message from the Chancellor </h4>
                    <p class="paragraph xl:p1 xs:p2 text-black-pure mt-[30px]">Lorem ipsum dolor sit amet consectetur. Consequat neque interdum ut tristique habitant sapien. Facilisis eros mauris imperdiet nibh adipiscing sit sed sed. Vestibulum mattis netus interdum vitae pellentesque.</p>
                    <p class="paragraph xl:p1 xs:p2 text-black-pure mt-[30px]">Lorem ipsum dolor sit amet consectetur. Consequat neque interdum ut tristique habitant sapien. Facilisis eros mauris imperdiet nibh adipiscing sit sed sed. Vestibulum mattis netus interdum vitae pellentesque.</p>
                    <h5 class="headings xl:h5 xs:h6 text-graphite mt-[30px]"> Prof. Mary Joyce Z. Guinto-Sali, Ph.D </h5>
                </div>
                <div class="flex xl:flex-row xs:flex-col xl:gap-[40px] xs:gap-[10px] text-center xl:bg-transparent xs:bg-white-pure pt-[45px] xl:px-0 xs:px-[3.85%] pb-[40px] justify-center">
                    <a href="#" class="paragraph xl:p1 xs:p2 bg-msu-maroon text-white-pure xl:py-[12.5px] xs:py-[20.5px] xl:px-[19px] rounded-[40px]">Contact with the Chancellor</a>
                    <a href="#" class="paragraph xl:p1 xs:p2 text-msu-maroon xl:py-[12.5px] xs:py-[20.5px] px-[30.5px] xl:px-[19px] rounded-[40px] border border-msu-maroon">Administrative Offices</a>

                </div>
            </div>
        </div>
    </>
  );
}

export default ChancellorMessage;