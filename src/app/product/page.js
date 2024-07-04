"use client";

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import ProductsData from "./productData";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { TfiMoney } from "react-icons/tfi";
import { LuStarOff } from "react-icons/lu";

function Product() {
  const memberImage = "/Offers.jfif";
  const [currentPage, setCurrentPage] = useState(0);
  const [customerStatus, setCustomerStatus] = useState(
    ProductsData.map((customer) => ({ id: customer.id, active: true }))
  );
  const itemsPerPage = 6;

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
  const currentCustomers = ProductsData.slice(offset, offset + itemsPerPage);

  const totalCustomers = ProductsData.length;

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
        <div className="bg-gray-900 h-28 w-full shadow-xl rounded-3xl flex">
          <div className="w-full border-r-2 border-slate-300 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <AiOutlineProduct className="text-4xl text-white h-20 w-20 shadow-sm p-5 rounded-full bg-blue-400" />
            </div>
            <div className="w-full">
              <p className="text-sm font-bold text-white">Total Products</p>
              <p className="text-3xl font-bold text-white">{totalCustomers}</p>
              <div className="flex mt-2 gap-1">
                <FaArrowUp className="text-lg text-emerald-500" />
                <p className="font-bold text-xs text-white">
                  <span className="text-emerald-500 font-bold text-sm">
                    67%
                  </span>{" "}
                  this month
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border-r-2 border-slate-300 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <TfiMoney className="text-4xl text-white h-20 w-20 shadow-sm p-5 rounded-full bg-red-400" />
            </div>
            <div className="w-full">
              <p className="text-sm font-bold text-white">Total Revenue</p>
              <p className="text-3xl font-bold text-white">688</p>
              <div className="flex mt-2 gap-1">
                <FaArrowDownLong className="text-lg text-pink-600" />
                <p className="font-bold text-xs text-white">
                  <span className="text-pink-600 font-bold text-sm">17%</span>{" "}
                  this month
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <LuStarOff className="text-4xl text-white h-20 w-20 shadow-sm p-5 rounded-full bg-teal-300" />
            </div>
            <div className="w-full">
              <p className="text-sm font-bold text-white">
                Total Active Deals{" "}
              </p>
              <p className="text-3xl font-bold text-white">{activeCustomers}</p>
              <img
                src={memberImage}
                alt="member"
                className="h-6 w-9/12 rounded-full mt-1"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900  w-full mt-6 shadow-xl rounded-3xl flex flex-col">
          <div className="flex justify-between items-center h-14 w-full mt-5 p-8">
            <div>
              <div className="font-bold text-lg text-white">Total Products</div>
              <div className="text-emerald-500 text-[15px] mt-2">
                Products List
              </div>
            </div>
            <div className="relative w-60">
              
             
            </div>
            <div className="text-sm text-white ">
              <p className="flex ">
                Sort by:{" "}
                <span className="flex font-bold pl-1 justify-center  items-center">
                  {" "}
                  LastName <IoIosArrowDown />{" "}
                </span>{" "}
              </p>
            </div>
          </div>

          <div>
            <div className="flex grid-cols-1 justify-between w-full pb-3 p-8 border-b-2 text-white">
              <p>Product Name</p>
              <p>Brand</p>
              <p>Contact Number</p>
              <p>Mail</p>
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
                      className="flex mb-3 pb-2 text-white items-center text-sm justify-between border-b-2"
                    >
                      <div className="w-1/5">
                        <p className="font-medium">{customer.productsName}</p>
                      </div>
                      <div className="w-1/5">
                        <p>{customer.brand}</p>
                      </div>
                      <div className="w-1/5">
                        <p>{customer.contact}</p>
                      </div>
                      <div className="w-1/5">
                        <p>{customer.mail}</p>
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
          <div className="flex justify-start p-8 mt-0">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={Math.ceil(ProductsData.length / itemsPerPage)}
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

export default Product;
