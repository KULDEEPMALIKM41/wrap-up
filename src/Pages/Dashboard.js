import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Sservice from '../components/Service/Sservice/Sservice';
import AgencyAbout from '../components/About/AgencyAbout';
import Partner from '../components/Partner';
import FooterTwo from '../components/Footer/FooterTwo';
import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';
import Erpanalytics from '../components/Erpanalytics';
import Cprogress from '../components/CircleProgressbar';

const Dashboard = () => {
    return(
        <div className="body_wrapper">
        {/* <CustomNavbar mClass="menu_eight" nClass="w_menu" slogo="sticky_logo" hbtnClass="security_btn"/> */}
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Dashboard" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/> */}
            <Erpanalytics/>
            {/* <Cprogress/> */}
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Dashboard;