import React, { useState } from 'react';
import HeroMainHeading from './HeroMainHeading';
import HeroAdmissionHeading from './HeroAdmissionHeading';
import HeroProgramHeading from './HeroProgramHeading';
import HeroPublicationHeading from './HeroPublicationHeading';
import HeroOfficeHeading from './HeroOfficeHeading';
import HeroCampusHeading from './HeroCampusHeading';

const FooterNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFooterNav = () => {
    setIsOpen(!isOpen);
  }

  const { path } = props

  return (
    <>
		<div class="bg-msu-deep-ocean text-white-pure">
			<div class="mb-[60px] xl:mt-[80px] xs:mt-[40px]">
				<div class="flex xl:flex-row xs:flex-col xl:px-[12.5%] xs:px-[3.85%] xl:mb-[140px] xs:mb-[58px] justify-center items-center">
					<div class="flex mb-[40px]">
						<img src="/images/article-img-1.png" alt="" class="ml-10 xl:h-[200px] xs:h-[120px]"></img>
						<div class="ml-5">
							<h5 class="headings xl:h5 xs:h6 max-w-[220px]">Article Long Title </h5>
							<p class="paragraph xl:p2 xs:p3 max-w-[220px] text-titanium mt-[15px] max-h-[142px] overflow-hidden">Lorem ipsum dolor sit amet consectetur. Consequat neque interdum ut tristique habitant sapien. Facilisis eros mauris imperdiet nibh adipiscing sit sed sed. Vestibulum mattis netus interdum vitae pellentesque.</p>
						</div>
					</div>
					<div class="flex mb-[40px]">
						<img src="/images/article-img-1.png" alt="" class="ml-10 xl:h-[200px] xs:h-[120px]"></img>
						<div class="ml-5">
							<h5 class="headings xl:h5 xs:h6 max-w-[220px]">Article Long Title </h5>
							<p class="paragraph xl:p2 xs:p3 max-w-[220px] text-titanium mt-[15px] max-h-[142px] overflow-hidden">Lorem ipsum dolor sit amet consectetur. Consequat neque interdum ut tristique habitant sapien. Facilisis eros mauris imperdiet nibh adipiscing sit sed sed. Vestibulum mattis netus interdum vitae pellentesque.</p>
						</div>
					</div>
					<div class="flex mb-[40px]">
						<img src="/images/article-img-1.png" alt="" class="ml-10 xl:h-[200px] xs:h-[120px]"></img>
						<div class="ml-5">
							<h5 class="headings xl:h5 xs:h6 max-w-[220px]">Article Long Title </h5>
							<p class="paragraph xl:p2 xs:p3 max-w-[220px] text-titanium mt-[15px] max-h-[142px] overflow-hidden">Lorem ipsum dolor sit amet consectetur. Consequat neque interdum ut tristique habitant sapien. Facilisis eros mauris imperdiet nibh adipiscing sit sed sed. Vestibulum mattis netus interdum vitae pellentesque.</p>
						</div>
					</div>
				</div>
				
				<img src="/images/rectangle.png" alt="" class="max-w-full h-[20px] absolute xs:hidden 3xl:block"></img>
				<div class="flex xl:flex-row gap-[25px] xs:flex-col justify-center xl:items-stretch xs:items-center xl:mx-[12.5%] xs:mx-[3.85%]">
					
					<div class="flex xl:mt-0 xs:mt-10 xl:ml-[100px] xs:ml-0 xl:gap-[25px] ">
						<ul class="xl:min-w-[170px]">
							<li><h5 class="headings h5 w-200 mb-2">University </h5></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">History </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Mission / Vission </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">University Hymn </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Articles </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Events </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Gazette </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Annual Report </a></li>
						</ul>
						<ul class="xl:ml-[100px] xs:ml-[52px] xl:min-w-[170px]">
							<li><h5 class="headings h5 w-200 mb-2">Admissions </h5></li>	
							<li><a href="#" class="paragraph p2 text-titanium mb-1">MSU SASE </a></li>	
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Undergraduate </a></li>	
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Transferee </a></li>	
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Returning / Shifting </a></li>	
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Remedial Program </a></li>	
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Student Fees </a></li>	
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Scholarships & Grants </a></li>	
						</ul>
					</div>
					<div class="flex xl:mt-0 xs:mt-10 xl:ml-[100px] xs:ml-0 xl:gap-[25px] ">
						<ul class="xl:min-w-[170px]">
							<li><h5 class="headings h5 w-200 mb-2">Programs </h5></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">IICT </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">CAS </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">COF </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">COED </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">IOES </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">CIAS </a></li>
						</ul>
						<ul class="xl:ml-[100px] xs:ml-[52px] xl:min-w-[170px]">
							<li><h5 class="headings h5 w-200 mb-2">Offices</h5></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Academic</a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">Administrative</a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">IICT </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">CAS </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">COF </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">COED </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">IOES </a></li>
							<li><a href="#" class="paragraph p2 text-titanium mb-1">CIAS </a></li>
						</ul>
					</div>
					<div class="xl:mt-0 xs:mt-10 xl:ml-[100px] xs:ml-0 xl:gap-[25px] ">
						<h5 class="headings h5 w-200 mb-2 text-center">Legal </h5>
						<div class="flex xl:flex-col xs:flex-row items-center xl:gap-0 xs:gap-[137px]">
							<div class="flex flex-col min-w-[70px]">
								<a href="#" class="paragraph p2 text-titanium mb-1">Terms </a>
								<a href="#" class="paragraph p2 text-titanium mb-1">Pricacy </a>
							</div>
							<div class="flex flex-col min-w-[70px]">
								<a href="#" class="paragraph p2 text-titanium mb-1">RA 6060 </a>
								<a href="#" class="paragraph p2 text-titanium mb-1">KRA2 </a>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
    </>
  );
}

export default FooterNav;