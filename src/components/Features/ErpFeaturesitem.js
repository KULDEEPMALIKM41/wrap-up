import React, {Component} from 'react';
import ErpIconitem from './ErpIconitem';

class ErpFeaturesitem extends Component {
    render(){
        let {rowClass, roundClass, image} = this.props;
        return(
            <div className={`row erp_item_features ${rowClass}`}>
                <div className="col-lg-6">
                    <div className="erp_features_img_two">
                        <div className={`img_icon ${roundClass}`}><span className="pluse_1"></span><span className="pluse_2"></span><i className="icon_lightbulb_alt"></i></div>
                        <img src={require ("../../img/hosting/" + image)} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="erp_content_two">
                        <div className="hosting_title erp_title">
                            <h2>Real-Time Asset Information</h2>
                            <p>A Real-Time with automated inventory tracking system eliminates tedious inventory tasks, ensures that the location of devices is always accurate, enhances data integrity of data center automation, and improves security. Manual asset tracking and inventory processes are doomed to extinction as they are supplanted by continuous automated asset tracking systems, a prerequisite for true automation in the modern data center.</p>
                        </div>
                        <ErpIconitem iconName="icon_menu-square_alt2" erpText="Accurate inventory Management"/>
                        <ErpIconitem eitemClass="green" iconName="icon_ribbon_alt" erpText="Everything at One click"/>
                        <ErpIconitem eitemClass="orange" iconName="icon_lightbulb_alt" erpText="Real-time Tracking"/>
                        {/* <a href="/#" className="erp_btn_learn">Learn More<i className="arrow_right"></i></a> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default ErpFeaturesitem;