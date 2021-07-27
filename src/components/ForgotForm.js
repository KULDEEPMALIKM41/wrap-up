import React from 'react';
import { forgot } from '../services/auth_curd'
import AsyncStorage from '@react-native-community/async-storage';
import { Link } from 'react-router';

function ForgotForm () {
    const [email, setEmail] = React.useState('');
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
          if(email =='')
          {
              alert('Please enter email')
              return false;
          }else{

            let data = {
                "email": email,
              };    
              forgot(data)
              .then(async (response) => {
                alert(response.data.message);
                window.location = '/signin';
              }, (error) => {
                if (error.response){
                    alert(error.response.data.message)
                }else{
                    alert('server in under maintanance')
                }
              });
          }
    }

    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">First time here?</h3>
                                <ul className="list-unstyled mb-0">
                                <li><i className="ti-check"></i> Real-Time Inventory</li>
                                    <li><i className="ti-check"></i> Calculating IT Cost</li>
                                    <li><i className="ti-check"></i> Optimizing Resources</li>
                                    <li><i className="ti-check"></i> Reduce Migration Lead time</li>
                                </ul>
                                <a href="/SignIn">
                                <button type="submit" className="btn_three sign_btn_transparent">Sign In</button></a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Forgot Password</h2>
                                <form action="/#" className="login-form sign-in-form">
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Id</label>
                                        <input type="text" placeholder="Wrap up@gmail.com" name="email" onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                {/* <input type="checkbox"/> Keep me Signed in */}
                                            </label>
                                        </div>
                                       
                                        {/* <div className="forgotten-password">
                                            <a href="/Forgot">Forgot Password?</a>
                                        </div> */}
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn_three" onClick={handleSubmit}>Submit </button>
                             
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ForgotForm;