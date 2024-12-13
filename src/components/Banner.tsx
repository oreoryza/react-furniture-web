import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscribe } from "../redux/async/fetchData";
import { AppDispatch } from "../redux";
import DOMPurify from "dompurify";

import lamp from "../assets/lamp.svg";

const Banner: React.FC = () => {
  const [email, setEmail] = useState("");
  const dispatch:AppDispatch = useDispatch();
  const subscribeMessage = useSelector((state: any) => state.fetch.subscribeMessage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setEmail(sanitizedValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      dispatch(subscribe(email));
      setEmail("");
    }
  };

  return (
    <div className="relative flex overflow-hidden">
      <object
        data={lamp}
        type="image/svg"
        className="object-cover w-full min-h-80"
      >
        <img src={lamp} className="object-cover w-full min-h-80" />
      </object>
      <div className="absolute flex flex-col justify-center w-full h-full lg:items-end itemx-center text-white lg:-translate-x-32">
        <div className="flex flex-col justify-center lg:items-start items-center gap-7">
          <h2 className="text-4xl font-semibold lg:text-start text-center">
            Get more discount<br/>Off your order
          </h2>
          <p>Join our mailing list</p>
          <form className="flex gap-4 justify-center w-full" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg outline-none text-black lg:min-w-[20rem]"
              value={email}
              onChange={handleChange}
            />
            <button className="font-semibold px-4 rounded-lg bg-[#23262F]" type="submit" disabled={!email}>Shop Now</button>
          </form>
          {subscribeMessage && <p className="text-white">{subscribeMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Banner;