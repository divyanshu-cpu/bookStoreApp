import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className="flex h-screen  items-center justify-center">
        <div className="w-[500px]">
          <div className="modal-box">
            <form action="">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h1 className="font-bold text-lg">Contact Us</h1>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-3 py-1 border rounded-md outline-none"
                  //{...register("fullname", { required: true })}
                />
              </div>
              <div className=" mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-3 py-1 border rounded-md outline-none"
                  //{...register("email", { required: true })}
                />
              </div>
              <div className=" mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea name="" id="" cols="30" rows="5" placeholder="type your text here..." className="px-3 py-1 w-full  border rounded-md outline-none">
                </textarea>
              </div>
              <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
