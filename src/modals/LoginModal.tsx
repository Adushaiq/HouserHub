import Image from "next/image"
import Link from "next/link"
import LoginForm from "@/components/forms/LoginForm"
import { useState } from "react"

import RegisterForm from "@/components/forms/RegisterForm"

const tab_title: string[] = ["Login", "Signup",];

interface LoginModalProps {
   onLoginSuccess?: () => void;
}

const LoginModal = ({ onLoginSuccess }: LoginModalProps) => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <>
         <div className="modal fade" id="loginModal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-fullscreen modal-dialog-centered">
               <div className="container">
                  <div className="user-data-form modal-content">
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     <div className="form-wrapper m-auto">
                        <ul className="nav nav-tabs w-100">
                           {tab_title.map((tab, index) => (
                              <li key={index} onClick={() => handleTabClick(index)} className="nav-item">
                                 <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                              </li>
                           ))}
                        </ul>
                        <div className="tab-content mt-30">
                           <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`}>
                              <div className="text-center mb-20">
                                 <h2>Welcome Back!</h2>
                                 <p className="fs-20 color-dark">Still don&apos;t have an account? <Link href="#" onClick={() => setActiveTab(1)}>Sign up</Link></p>
                              </div>
                              <LoginForm onSuccess={onLoginSuccess} />
                           </div>

                           <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                              <div className="text-center mb-20">
                                 <h2>Register</h2>
                                 <p className="fs-20 color-dark">Already have an account? <Link href="#" onClick={() => setActiveTab(0)}>Login</Link></p>
                              </div>
                              <RegisterForm onSuccess={onLoginSuccess} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default LoginModal
