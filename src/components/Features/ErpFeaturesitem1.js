import React, {Component} from 'react';
import ErpIconitem from './ErpIconitem';

class ErpFeaturesitem1 extends Component {
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
                            <h2>ITFM</h2>
                            <p>With the Wrap-up's ITFM module, gathering a central repository of mission critical information is no longer a fully manual process. Instead, it provides CIOs and CFOs with the facts required to better understand the IT investment, all while choosing the best service to suit their needs. The ITFM module provides a holistic view of the IT landscape with integrations ranging from collaboration software to configuration management databases (CMDBs) and on-prem to cloud inventories and costing.</p>
                        </div>
                        <ErpIconitem iconName="icon_menu-square_alt2" erpText="Comprehensive Exhibiting"/>
                        <ErpIconitem eitemClass="green" iconName="icon_ribbon_alt" erpText="Usage and Request Management"/>
                        <ErpIconitem eitemClass="orange" iconName="icon_lightbulb_alt" erpText="Holistic cost and infra management"/>
                        {/* <a href="/#" className="erp_btn_learn">Learn More<i className="arrow_right"></i></a> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default ErpFeaturesitem1;