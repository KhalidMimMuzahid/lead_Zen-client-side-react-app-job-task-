import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const TableInfo = ({ info }) => {
  const { name, username, address, company, email, id, phone } = info;
  //   console.log("xx", info);
  const [isExpandDetails, setIsExpandDetails] = useState(false);
  const { setId } = useContext(AuthContext);
  // console.log("ID", ID);

  return (
    <div className="bg-white p-5 rounded m-5">
      <div className=" grid grid-cols-5">
        <div className="my-auto">
          <h3>{name}</h3>
        </div>
        <div>
          <h2>CONTACT</h2>
          <h3>{username}</h3>
        </div>
        <div>
          <h2>CITY</h2>
          <h3>{address?.city}</h3>
        </div>
        <div>
          <h2>STATE</h2>
          <h3>{address?.city}</h3>
        </div>
        <div className="">
          <button
            onClick={() => setIsExpandDetails(!isExpandDetails)}
            className="btn btn-error rounded-full "
          >
            {isExpandDetails ? "Hide  Details" : "View Details"}
          </button>
        </div>
      </div>
      {isExpandDetails && (
        <div className="p-10">
          <div className="mt-5">
            <h2 className="text-xl font-bold">Description</h2>
            <p>{}</p>
          </div>
          <div className="grid grid-cols-2 mt-5">
            <div>
              <h2 className="text-xl font-bold">Contact Person</h2>
              <p>{username}</p>
              <h2 className="text-xl font-bold">Designation</h2>
              <p>{company?.name}</p>
              <h2 className="text-xl font-bold">Emails</h2>
              <p>{email}</p>
              <h2 className="text-xl font-bold">Phones</h2>
              <p>{phone}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Addderss</h2>
              <p>
                {address?.street}, {address?.suite}, {address?.city},{" "}
                {address?.zipcode}
              </p>
              <h2 className="text-xl font-bold">City</h2>
              <p>{address?.city}</p>
              <h2 className="text-xl font-bold">State</h2>
              <p>{address?.city}</p>
              <h2 className="text-xl font-bold">Country</h2>
              <p>{address?.city}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableInfo;
