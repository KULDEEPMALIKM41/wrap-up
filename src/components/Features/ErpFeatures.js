import React from 'react';
import ErpFeaturesitem from './ErpFeaturesitem';
import ErpFeaturesitem1 from './ErpFeaturesitem1';
import ErpFeaturesitem2 from './ErpFeaturesitem2';

const ErpFeatures =()=>{
    return(
        <section className="erp_features_area_two sec_pad">
            <div className="container">
                <ErpFeaturesitem rowClass="align-items-center flex-row-reverse" image="business1.png"/>
                <ErpFeaturesitem1 rowClass="align-items-center" image="action_img.png" roundClass="red"/>
                <ErpFeaturesitem2 rowClass="align-items-center flex-row-reverse" image="business2.png" roundClass="green"/>
            </div>
        </section>
    )
}
export default ErpFeatures;