import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import SignUpForm from '../components/SignUpForm';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const SignUp = () => {
    return(
        <div className="body_wrapper">
        <CustomNavbar mClass="menu_eight" nClass="w_menu" slogo="sticky_logo" hbtnClass="security_btn"/>
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sign Up" Pdescription="Most businesses think that a leadership is the crucial thing, however without a great product the company won't make a success"/> */}
            <SignUpForm/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default SignUp;