import React from 'react';
import { login } from '../services/auth_curd'
import AsyncStorage from '@react-native-community/async-storage';

function SignInFrom () {
    const [username, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

          if(username =='')
          {
              alert('Please enter email')
              return false;
          }else if(password =='')
          {
            alert('Please enter password.')
            return false;
          }else{

            let data = {
                "username": username,
                "password": password,
              };    

              login(data)
              .then(async (response) => {
                try {
                  await AsyncStorage.setItem(
                    'userData',
                    JSON.stringify(response.data.data)
                  );
                  alert('User Login Successfully');
                  window.location = '/dashboard';
                } catch (error) {
                  console.log(error)
                }
              }, (error) => {
                if (error.response){
                    // alert(error.response.data.message)
                    alert('Invalid Credentials')
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
                                <a href="/Signup">
                                <button type="submit" className="btn_three sign_btn_transparent">Sign Up</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign In</h2>
                                <form action="/#" className="login-form sign-in-form">
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email or Name</label>
                                        <input type="text" placeholder="Wrapup@gmail.com" name="username" onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input type="password" placeholder="******" name="password" onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                {/* <input type="checkbox"/> Keep me Signed in */}
                                            </label>
                                        </div>
                                       
                                        <div className="forgotten-password">
                                            <a href="/Forgot">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn_three" onClick={handleSubmit}>Sign in</button>
                                       
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
export default SignInFrom;