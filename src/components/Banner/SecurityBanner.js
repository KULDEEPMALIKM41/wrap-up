import React from 'react';

const SecurityBanner =()=> {
    return (
        <section className="h_security_banner_area">
            <img className="p_absoulte s_shap" src={require ("../../img/home-security/shap.png")} alt=""/>
            <div className="s_round one"></div>
            <div className="s_round two"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="security_banner_content">
                            <h2 className="wow fadeInUp" data-wow-delay="0.3s">“Wrap-up”, an AI based cloud solution will help customers to quickly re-plan their IT expences to cut costs, budget faster and forecast continuously.</h2>
                            <p className="f_400 w_color l_height28 wow fadeInUp" data-wow-delay="0.4s">Download now to start with your free assessment.</p>
                            <div className="action_btn d-flex align-items-center mt_40 wow fadeInUp" data-wow-delay="0.6s">
                                <a href="/#" className="btn_hover app_btn">Free Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                        <div className="new_startup_img">
                        <iframe src='https://www.youtube.com/embed/eW6GDG6GqAM'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                        width="100%"
                        height="450"
                        style={{borderRadius:"20px"}}
                        />
                    {/* <p className="f_400 w_color l_height28 wow fadeInUp" data-wow-delay="0.4s">Have our Youtube video link</p> */}

                            {/* <img src={require ("../../img/home-security/banner.png")} alt=""/> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SecurityBanner;