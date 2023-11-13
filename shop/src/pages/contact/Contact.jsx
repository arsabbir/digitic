import React, { useState } from "react";
import { Seo } from "../../utils/Seo.jsx";
import Breadcrumb from "../../component/breadCrumb/BreadCrumb.jsx";
import { FaHome, FaPhoneAlt, FaEnvelope, FaInfo } from "react-icons/fa";
import "./Contact.scss";
const Contact = () => {
 


  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <>
      <Seo pageTitle={"Contact Ezy Shop"} />
      <Breadcrumb items={breadcrumbItems} />
      <section id="Contact">
        <div className="contain">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57928.33955787378!2d88.20714244999999!3d24.846041799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbaaf5b4c203e9%3A0x6362264a2a453679!2z4Kar4Kak4KeH4Kaq4KeB4KawIOCmieCmmuCnjeCmmiDgpqzgpr_gpqbgp43gpq_gpr7gprLgp58!5e0!3m2!1sen!2sbd!4v1697373467946!5m2!1sen!2sbd"
                width={"100%"}
                height={450}
                style={{ border: 0, paddingTop: 20 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="con_row">
                    <div className="form_side ">
                      <h4 className="card-title">Contact</h4>
                      <form action="">
                        <div className="mb-3">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="mb-3">
                          <textarea
                            type="text"
                            name="comment"
                            className="form-control"
                            placeholder="comment"
                          />
                        </div>
                        <div className="mb-3">
                          <button className="btn form_btn"> Send</button>
                        </div>
                      </form>
                    </div>
                    <div className="contact_info">
                      <h4 className="card-title">Get In touch</h4>
                      <div className="info_content">
                        <FaHome />
                        <span>
                          33 New Montgomery St. Ste 750 San Francisco, CA, USA
                          94105
                        </span>
                      </div>
                      <div className="info_content">
                        <FaPhoneAlt />
                        <span>(+880) 1786917499</span>
                      </div>
                      <div className="info_content">
                        <FaEnvelope />
                        <span>contact.arsabbir@gmail.com</span>
                      </div>
                      <div className="info_content">
                        <FaInfo />
                        <span>Monday – Friday 10 AM – 8 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
