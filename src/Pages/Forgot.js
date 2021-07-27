import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import ForgotForm from '../components/ForgotForm';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const Forgot = () => {
    return(
        <div className="body_wrapper">
        <CustomNavbar mClass="menu_eight" nClass="w_menu" slogo="sticky_logo" hbtnClass="security_btn"/>
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Forgot Password" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/> */}
            <ForgotForm/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Forgot;