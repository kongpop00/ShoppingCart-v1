import { useState } from "react";
import Nav from "../component/nav/Nav";

const Listperson = [
  {
    id: 1,
    name: "Neil Sims",
    numberphone: "091-234-5678",
    email: "email@windster.com",
    img: "/slider/person1.jpg",
  },
  {
    id: 2,
    name: "Bonnie Green",
    numberphone: "091-234-567",
    email: "email@windster.com",
    img: "/slider/person2.jpg",
  },
  {
    id: 3,
    name: "Michael Gough",
    numberphone: "091-234-5678",
    email: "email@windster.com",
    img: "/slider/person3.jpg",
  },
];

const media = [
  {
    id: 1,
    name: "Line",
    img: "/about/line.png",
  },
  {
    id: 2,
    name: "Facebook",
    img: "/about/Facebook.png",
  },
  {
    id: 1,
    name: "Youtube",
    img: "/about/youtube.png",
  },
  {
    id: 1,
    name: "Email",
    img: "/about/Email.png",
  },
];

const Contact = () => {
  const [dataContact] = useState(Listperson);
 
  return (
    <div className=" m-[auto]">
      <Nav />
      <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 m-[auto] max-w-7xl">
        <div>
          {dataContact.map((e) => {
            return (
              <div
                key={e.id}
                className=" p-[20px]  text-center flex flex-col sm:flex-row justify-between items-center border-b-2 "
              >
                <div className="avatar justify-center items-center mt-[30px]  flex flex-col">
                  <div className="w-24 rounded-full">
                    <img src={e.img} />
                  </div>
                   {e.email}
                </div>
                <div className="text-[20px]"> {e.name}</div>
                <div className="text-[20px]">{e.numberphone}</div>
              </div>
            );
          })}
        </div>
        {/* */}
        <div className="flex flex-col p-[80px] items-center justify-between">
          <div className="flex flex-col text-[20px]">
            <header className="footer-title text-[#8e6646]">OPENING HOURS:</header>
            <a className="link link-hover">Mon - Fri: 7am - 10pm </a>
            <a className="link link-hover">Saturday: 8am - 10pm</a>
            <a className="link link-hover">Sunday: 8am - 11pm</a>
          </div>
          <div className="flex flex-col text-[20px]">
            <header className="footer-title text-[#8e6646]">ADDRESS:</header>
            <a className="link link-hover">500 Terry Francine Street</a>
            <a className="link link-hover">San Francisco, CA 94158</a>
            <a className="link link-hover">Tel: 123-456-7890</a>
          </div>
          <div className="flex  ">
            {media.map((e) => {
              return (
                <div key={e.id}>
                  <img className="w-[50px] mx-[20px]" src={e.img} />
                </div>
              );
            })}
          </div>
        </div>
        {/* */}
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.8577733840552!2d100.56704387595445!3d13.847574595067169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d1e111be769%3A0x4332e8cd6aec8c31!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiB4Lip4LiV4Lij4Lio4Liy4Liq4LiV4Lij4LmM!5e0!3m2!1sth!2sth!4v1698642625565!5m2!1sth!2sth"
        className="w-[90%] m-[auto] h-[400px] mt-[20px] p-40px"
      ></iframe>
    </div>
  );
};

export default Contact;
