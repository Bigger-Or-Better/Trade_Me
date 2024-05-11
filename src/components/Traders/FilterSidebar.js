"use client";

import React, {useState, useEffect} from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { categories } from "@/libs/Categories";

const FilterSidebar = ({
  allUsers, 
  currentUser,
  setViewableTraders,
  searchParams}) => {
    const currentRoute = usePathname();
    const [name, setName] = useState("");
    const [distance, setDistance] = useState("");
    const [category, setCategory] = useState("Any");

    // console.log(categories);

    const filterTraders = (
    ) =>{
      if (category != "Any"){
        setViewableTraders(allUsers.filter(trader =>(
          (
            (trader.name.toLowerCase().includes(name.toLowerCase()))
            // &&(trader.category == category)
          )
        )));
      }
      else if (!name){
        setViewableTraders(allUsers);
      }
      else {
        setViewableTraders(allUsers.filter(trader =>(
          (trader.name.toLowerCase().includes(name.toLowerCase())) 
        )));
      }
      // console.log(allUsers);
    }


    return (
      <>
        <div className="db-sidebar">
          <input 
            type="text" 
            placeholder="Search By Name"
            value={name}
            onInput={e => setName(e.target.value)} ></input>
          <input 
            type="number"
            value={distance}
            placeholder="Distance"
            min={0}
            onInput={e => setDistance(e.target.value)}></input>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)} >
              <option key="Any" value="Any">Any</option>
              <option key="Male" value="Male">Male</option>
              <option key="Female" value="Female">Female</option>
              <option key="Other" value="Other">Other</option>
          </select>
          <button
            onClick={() =>{filterTraders()}}
          >
            Filter
          </button>

              {/* <ul>
                <li>
                  <Link 
                    href="/profileInfo"
                    className={`db-link ${
                      currentRoute === "/profileInfo" ? "active" : "non-active"
                    }`}
                  >Dashboard</Link>
                </li>

                <li>
                  <Link 
                    href="/profileInfo/users"
                    className={`db-link ${
                      currentRoute === "/profileInfo/users" ? "active" : "non-active"
                    }`}
                  >
                    Users
                  </Link>
                </li>
                  
                <li>
                  <Link 
                    href="/profileInfo/listings"
                    className={`db-link ${
                      currentRoute === "/profileInfo/listings" ? "active" : "non-active"
                    }`}
                  >
                    Listings
                  </Link>
                </li>
      
                <li>
                  <Link 
                    href="/profileInfo/reviews"
                    className={`db-link ${
                      currentRoute === "/profileInfo/reviews" ? "active" : "non-active"
                    }`}
                  >
                    Reviews
                  </Link>
                </li>

                <li>
                  <Link 
                    href="/profileInfo/blog/new"
                    className={`db-link ${
                      currentRoute === "/profileInfo/blog/new" ? "active" : "non-active"
                    }`}
                  >
                    Creact Blog Post
                  </Link>
                </li>
                <hr></hr>  
                <li>
                  <Link 
                    href="/profileInfo/betaTesting/settings"
                    className={`db-link ${
                      currentRoute === "/profileInfo/betaTesting/settings" ? "active" : "non-active"
                    }`}
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/profileInfo/betaTesting/listings"
                    className={`db-link ${
                      currentRoute === "/profileInfo/betaTesting/listings" ? "active" : "non-active"
                    }`}
                  >
                    Listings
                  </Link>
                </li>
                <li>Reviews</li>
                <li>Friends</li>
              </ul> */}
        </div>
      </>
    )
}

export default FilterSidebar;