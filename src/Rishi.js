import React, { useState } from "react";
import "./data.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 1,
    question: "Boost revenue",
    answers: ["Online ordering & delivery", "Reservations & waitlist", "Experiences"],
  },
  {
    id: 2,
    question: "Operate more efficiently",
    answers: ["Point-of-sale", "Virtual terminal"],
  },
  {
    id: 3,
    question: "Manage & retain staff",
    answers: ["Labor & scheduling", "Tip management"],
  },
  {
    id: 4,
    question: "Build guest relationships",
    answers: ["Marketing & reviews", "Loyalty program", "Websites", "Gift cards"],
  },
  {
    id: 5,
    question: "Manage finances",
    answers: ["Payment processing", "Capital loans", "Equipment financing"],
  },
];

function Rishi() {
  const [prevSelected, setSelected] = useState(null);

  const toggle = (id) => {
    setSelected((prevSelected) => (prevSelected === id ? null : id));
  };

  return (
   
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div className="px-32" onClick={() => toggle(item.id)}>
            <h3 className="p-6 px-6 border border-gray-400 rounded-t-lg flex">{item.question}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={`text-blue-600 ml-auto transform transition-transform ${
                  prevSelected === item.id ? "rotate-90" : "rotate-0"
                }`}
              />
            </h3>
          </div>
          <div
            className={prevSelected === item.id ? "contentshow" : "contenthide"}
          >
            <div className="answer py-6 flex text-blue-600 justify-start">
              {item.answers.map((answer, index) => (
                <h1 key={index} className="underline underline-offset-4 cursor-pointer font-semibold mr-auto">
                  {answer}
                  <FontAwesomeIcon className="pl-2" icon={faArrowRight} />
                </h1>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>)
}

export default Rishi;
