"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateWithMonth } from "@/utils/formatDate";
import HeartButton from "@/components/HeartButton";
import { usePathname } from "next/navigation";
import FilterSideBar from "./FilterSidebar";
import ListingCard from "./ListingCard";
import NoResults from "./NoResults";

const ListingFeatures = ({currentUser, allTradeListings, searchParams}) => {

  const [viewableListings, setViewableListings] = useState(
    (searchParams.category || searchParams.title) ? 
      allTradeListings.filter(item =>(
        item.title.toLowerCase().includes(
          searchParams.title ? searchParams.title.toLowerCase() : searchParams)||
        item.category == searchParams.category)) : 
      allTradeListings
  )

  console.log(allTradeListings, viewableListings);
  
  return(
    <div className="row">
      <div className="col-lg-3 filterSidebar">
        <FilterSideBar 
          allTradeListings = {allTradeListings}
          currentUser = {currentUser}
          setViewableListings = {setViewableListings}
          searchParams = {searchParams}
        />
      </div>
      <div className="col-lg-9 listingCard_area">
        {
          viewableListings.length ? 
          <ListingCard 
            viewableListings = {viewableListings}
            currentUser={currentUser} 
            /> :
          <NoResults
            allTradeListings={allTradeListings}
            setViewableListings={setViewableListings}
          ></NoResults>
        }
      </div>
    </div>
  )
}

export default ListingFeatures
