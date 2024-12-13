import React from "react";
import mission from '../assets/mission.png'

const Mission: React.FC = () => {
    return (
        <div className="pb-16 lg:mx-32 mx-6">
            <div className="flex md:flex-row flex-col-reverse justify-between md:items-center gap-6">
                <div className="md:max-w-[48%] rounded-lg overflow-hidden">
                    <img src={mission} alt="sofa and table" />
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl font-semibold">We Create Your Home More Aestetic</h2>
                    <p>Furnitre power is a software as services for multiperpose business management system, </p>
                    <div className="flex items-start md:justify-center gap-2">
                        <i className="bi bi-check-circle-fill text-xl"></i>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Valuation Services</p>
                            <p>Sometimes features require a short description.  This can be detailed description</p>
                        </div>
                    </div>
                    <div className="flex items-start md:justify-center gap-2">
                        <i className="bi bi-check-circle-fill text-xl"></i>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Development of Furniture Modelss</p>
                            <p>Sometimes features require a short description.  This can be detailed description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission