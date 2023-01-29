import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import Lottie from 'lottie-react'
import contact from'../../Assets/contact.json'

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x5rshnx', 'template_hsauyqm', form.current, 'gnnMH5lFw1KMK6OSc')
      .then((result) => {
        toast.success('message send successfully')
        e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <div className='pb-8 px-10' id='contact'>
        <h1 className='text-5xl uppercase font-bold my-9 text-center'>Contact Me</h1>
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col">
          <div className='lg:w-[50%] md:w-[50%] sm:[100%] w-[100%]'>
            <Lottie
            animationData={contact}
            loop={true}
            />
          </div>
          <div className='lg:w-[50%] md:w-[50%] sm:[100%] w-[100%]'>
          <div className="card  w-full  shadow-xl bg-base-100">
            <form ref={form} onSubmit={sendEmail} className="card-body w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
              
                <textarea
                name="message"
                  className="textarea textarea-bordered h-24"
                  placeholder="Message"
                ></textarea>
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type='submit'>Submit</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    );
};

export default ContactMe;