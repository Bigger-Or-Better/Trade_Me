"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateWithMonth } from "@/utils/formatDate";
import HeartButton from "@/components/HeartButton";
import { usePathname } from "next/navigation";
import FilterSideBar from "./FilterSidebar";
import ListingCard from "./ListingCard";

const ListingFeatures = ({currentUser, listings}) => {

  // console.log(listings);
  const startUpView = listings.filter(item => ((item.price == 0) && (item.userId !== currentUser.id))); //hide self posted listings;
  
  const [viewableListings, setViewableListings] = useState(startUpView)

  
  return(
    <div className="row">
      <div className="col-lg-3 filterSidebar">
        <FilterSideBar 
          listings = {listings}
          currentUser = {currentUser}
          setViewableListings = {setViewableListings}
        />
      </div>
      <div className="col-lg-9 listingCard_area">
        <ListingCard 
          viewableListings = {viewableListings}
          currentUser={currentUser} 
          /> 							
      </div>
    </div>
  )
}

export default ListingFeatures
