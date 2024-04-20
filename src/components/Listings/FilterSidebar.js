"use client";

import React, {useState, useEffect} from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const LeftSidebar = ({
  listings, 
  currentUser,
  setViewableListings}) => {
    const currentRoute = usePathname();
    const [title, setTitle] = useState("");
    const [distance, setDistance] = useState("");
    const [category, setCategory] = useState("Any");


    const filterListings = (
    ) =>{
      if (category != "Any"){
        setViewableListings(listings.filter(item =>(
          ((item.price == 0)&&(item.userId !== currentUser.id)) &&
          ((item.title.includes(title))&&(item.category == category))
        )));
      }
      else {
        setViewableListings(listings.filter(item =>(
          ((item.price == 0)&&(item.userId !== currentUser.id))&&
          ((item.title.includes(title))) 
        )));
      }
    }


    return (
      <>
        <div className="db-sidebar">
          <input 
            type="text" 
            placeholder="Search Listings"
            value={title}
            onInput={e => setTitle(e.target.value)} ></input>
          <input 
            type="number"
            value={distance}
            placeholder="Distance"
            min={0}
            onInput={e => setDistance(e.target.value)}></input>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)} >
              <option value="Any">Any</option>
              <option value="Family">Family</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Apparel">Apparel</option>
          </select>
          <button
            onClick={() =>{filterListings()}}
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

export default LeftSidebar;