"use client";

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { SlPeople } from "react-icons/sl";
import { CiDesktop } from "react-icons/ci";
import { LuUserCheck2 } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import CustomerData from "./customerData";
import { IoIosArrowDown } from "react-icons/io";

function Customer() {
  const memberImage = "/users.jpg";
  const [currentPage, setCurrentPage] = useState(0);
  const [customerStatus, setCustomerStatus] = useState(
    CustomerData.map((customer) => ({ id: customer.id, active: true }))
  );
  const itemsPerPage = 7;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const toggleCustomerStatus = (id) => {
    setCustomerStatus((prevStatus) =>
      prevStatus.map((status) =>
        status.id === id ? { ...status, active: !status.active } : status
      )
    );
  };

  const offset = currentPage * itemsPerPage;
  const currentCustomers = CustomerData.slice(offset, offset + itemsPerPage);

  const totalCustomers = CustomerData.length;

  const activeCustomers = customerStatus.filter(
    (status) => status.active
  ).length;
  const inactiveCustomers = customerStatus.filter(
    (status) => !status.active
  ).length;

  console.log("Active Customers:", activeCustomers);
  console.log("Inactive Customers:", inactiveCustomers);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between p-3">
          <div>
            <p>Hello Evano 👋,</p>
          </div>
          <div className="relative w-40">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LuSearch className="text-slate-500" />
            </div>
            <input
              placeholder="Search"
              className="w-full pl-10 p-1 border-2 rounded-xl focus:outline-none"
            />
          </div>
        </div>

        <div className="bg-white h-28 w-full shadow-xl rounded-3xl flex">
          <div className="w-full border-r-2 border-slate-300 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <SlPeople className="text-4xl text-emerald-500 h-20 w-20 shadow-sm p-5 rounded-full bg-emerald-200" />
            </div>
            <div className="w-full">
              <p className="text-sm font-bold text-slate-600">
                Total Customers
              </p>
              <p className="text-3xl font-bold text-slate-700">
                {totalCustomers}
              </p>
              <div className="flex mt-2 gap-1">
                <FaArrowUp className="text-lg text-emerald-500" />
                <p className="font-bold text-xs text-slate-700">
                  <span className="text-emerald-500 font-bold text-sm">
                    16%
                  </span>{" "}
                  this month
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border-r-2 border-slate-300 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <LuUserCheck2 className="text-4xl text-emerald-500 h-20 w-20 shadow-sm p-5 rounded-full bg-emerald-200" />
            </div>
            <div className="w-full">
              <p className="text-sm font-bold text-slate-600">Members</p>
              <p className="text-3xl font-bold text-slate-700">1,893</p>
              <div className="flex mt-2 gap-1">
                <FaArrowDownLong className="text-lg text-pink-600" />
                <p className="font-bold text-xs text-slate-700">
                  <span className="text-pink-600 font-bold text-sm">1%</span>{" "}
                  this month
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <CiDesktop className="text-4xl text-emerald-500 h-20 w-20 shadow-sm p-5 rounded-full bg-emerald-200" />
            </div>
            <div className="w-full">
              <p className="text-sm font-bold text-slate-600">Active Now</p>
              <p className="text-3xl font-bold text-slate-700">
                {activeCustomers}
              </p>
              <img
                src={memberImage}
                alt="member"
                className="h-6 w-9/12 rounded-full mt-1"
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full mt-6 shadow-xl rounded-3xl flex flex-col">
          <div className="flex justify-between items-center h-14 w-full mt-5 p-8">
            <div>
              <div className="font-bold text-lg">All Customers</div>
              <div className="text-emerald-500 text-[15px] mt-2">
                Active Members
              </div>
            </div>
            <div className="relative w-60">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LuSearch className="text-slate-500" />
              </div>
              <input
                placeholder="Search"
                className="w-full pl-10 p-2 border-2 rounded-xl focus:outline-none"
              />
            </div>
            <div className="text-sm">
              <p className="flex ">
                Sort by:{" "}
                <span className="flex font-bold pl-1 justify-center  items-center">
                  {" "}
                  Newest <IoIosArrowDown />{" "}
                </span>{" "}
              </p>
            </div>
          </div>

          <div>
            <div className="flex grid-cols-1 justify-between w-full pb-3 p-8 border-b-2 text-slate-500">
              <p>Customer Name</p>
              <p>Company</p>
              <p>Phone Number</p>
              <p>Email</p>
              <p>Country</p>
              <p>Status</p>
            </div>
            <div className="flex justify-between grid-cols-1 font-bold w-full flex-col">
              <div className="p-8 w-full">
                {currentCustomers.map((customer) => {
                  const status = customerStatus.find(
                    (status) => status.id === customer.id
                  );
                  return (
                    <div
                      key={customer.id}
                      className="flex mb-3 pb-2 items-center text-sm justify-between border-b-2"
                    >
                      <div className="w-1/5">
                        <p className="font-medium">{customer.customer_name}</p>
                      </div>
                      <div className="w-1/5">
                        <p>{customer.company}</p>
                      </div>
                      <div className="w-1/5">
                        <p>{customer.phoneno}</p>
                      </div>
                      <div className="w-1/5">
                        <p>{customer.email}</p>
                      </div>
                      <div className="w-1/5 flex justify-between items-center">
                        <p>{customer.country}</p>
                        <button
                          className={`${
                            status.active ? "bg-emerald-600" : "bg-red-700"
                          } p-2 text-white text-sm rounded-md`}
                          onClick={() => toggleCustomerStatus(customer.id)}
                        >
                          {status.active ? "Active" : "Inactive"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-between p-8 mt-0">
            <div className="text-sm text-slate-500">
              showing data of 1 to 8 of 256k entries
            </div>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={Math.ceil(CustomerData.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer;
