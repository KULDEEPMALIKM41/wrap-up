import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import DesignBanner from '../components/Banner/DesignBanner';
import Service from '../components/Service/Service';
import Subscribe from '../components/Subscribe';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import SecurityBanner from "../components/Banner/SecurityBanner";
import ErpFeatures from '../components/Features/ErpFeatures';
import CloudFeaturesTwo from '../components/Features/CloudFeaturesTwo';
import SupportIntegration from '../components/SupportIntegration';
import Partner from '../components/Partner';
import Testimonial from '../components/Testimonial/Testimonial';

export const Home = () => (
    <div className="body_wrapper">
        <CustomNavbar mClass="menu_eight" nClass="w_menu" slogo="sticky_logo" hbtnClass="security_btn"/>
        <SecurityBanner/>
        <ErpFeatures/>
        {/* <CloudFeaturesTwo/> */}
        {/* <SupportIntegration/> */}
        <Testimonial tClass="testimonial_area_four sec_pad" FooterData={FooterData}/>
        {/* <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/> */}
        {/* <DesignBanner/> */}
        {/* <Service/> */}
        {/* <Subscribe FooterData={FooterData}/> */}
        <FooterTwo fClass="pt_150" FooterData={FooterData}/>
    </div>
)