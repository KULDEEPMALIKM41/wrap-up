import React , {Component} from 'react';
import AboutWidget from './FooterWidget/AboutWidget';
import SolutionWidget from './FooterWidget/SolutionWidget';
import TeamWidget from './FooterWidget/TeamWidget';
import Reveal from 'react-reveal/Reveal'
class FooterTwo extends Component {
    render(){
        var {fClass} = this.props;
        let FooterData = this.props.FooterData;
        return(
            <footer className={`footer_area footer_area_four f_bg `}>
               
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row" style={{marginBottom:20}}>
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                <p className="mb-0 f_400">{FooterData.copywrite}</p>
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-sm-12">
                               
                            </div>
                        </div>
                        <div className="row " style={{marginLeft:10}}>
                                <ul className="list-unstyled f_menu text-right">
                                    <li><a href=".#">Privacy Policy</a></li>
                                    <li><a href=".#">Privacy Statement</a></li>
                                    <li><a href=".#">Telemetry Software Notice</a></li>
                                    <li><a href=".#">EULA</a></li>
                                    <li><a href=".#">Support</a></li>
                                    <li><a href=".#">Community</a></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default FooterTwo;