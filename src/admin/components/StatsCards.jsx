import React from "react";
import { AiOutlineProduct, AiOutlineStock } from "react-icons/ai";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Counter from "./Counter";


const StatsCards = () => {
  const stats = [
    { title: "Total Products", value: 113, icon:<AiOutlineProduct className="chartIcon" />},
    { title: "Total Brands", value: 4, icon: <LiaCertificateSolid className="chartIcon" />},
    { title: "New Products", value: 5, icon:<MdOutlineProductionQuantityLimits className="chartIcon" />},
    { title: "Out of Stock", value: 0, icon: <AiOutlineStock className="chartIcon" />},
  ];

  return (
    <div
      className="container-fluid   pb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className=" text-center pt-5">
        <div className="row mb-3">
          {stats.map((item, index) => (
            <div className="col-lg-3   " key={index}>
              <div className={'card d-flex justify-content-between mb-4 cardChart flex-row px-3 pt-3 pb-2 text-center'}>
                <div className="d-flex flex-column">
                 <h6 className="text-muted  ">{item.title}</h6>
                 <h4><Counter value={item.value} /></h4>
                </div>
                <div className="icon fs-1">{item.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
