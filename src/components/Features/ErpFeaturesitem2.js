import React, {Component} from 'react';
import ErpIconitem from './ErpIconitem';

class ErpFeaturesitem2 extends Component {
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
                            <h2>AI ENABLED CLOUD MIGRATION</h2>
                            <p>AI enabled Wrap-Up cloud migration platform gives one platform solution to CTOs to assessing On-premises workload, choosing right cloud service, opting tailored cloud model and finally migrating workload to the best fit cloud service.</p>
                        </div>
                        <ErpIconitem iconName="icon_menu-square_alt2" erpText="Optimization"/>
                        <ErpIconitem eitemClass="green" iconName="icon_ribbon_alt" erpText="Modernization"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default ErpFeaturesitem2;