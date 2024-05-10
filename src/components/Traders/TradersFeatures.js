"use client";
import React, {useState, useEffect} from "react";
import Traders from "./Traders";
import FilterSideBar from "./FilterSidebar";
import Image from "next/image";
import Link from "next/link";
import { formatDateWithMonth } from "@/utils/formatDate";
import HeartButton from "@/components/HeartButton";
import { usePathname } from "next/navigation";

const TradersFeatures = (
  {currentUser, allTradeListings, searchParams, allUsers}
  ) => {

    // const [viewableTraders, setViewableTraders] = useState(
    //   (searchParams.gender || searchParams.title) ? 
    //     allUsers.filter(trader =>(
    //       item.name.toLowerCase().includes(
    //         searchParams.name ? searchParams.name.toLowerCase() : searchParams) ||
    //       item.gender == searchParams.gender)) : 
    //     allUsers
    // )


    const [viewableTraders, setViewableTraders] = useState(
      (searchParams.title) ? 
        allUsers.filter(trader =>(
          trader.name.toLowerCase().includes(
            searchParams.name ? searchParams.name.toLowerCase() : searchParams))) : 
        allUsers
    )


  console.log(viewableTraders);


  
  return(

    <div className="row">
    <div className="col-lg-3 filterSidebar">
      <FilterSideBar 
        allUsers = {allUsers}
        currentUser = {currentUser}
        setViewableTraders = {setViewableTraders}
        searchParams = {searchParams}
      />
    </div>
    <Traders 
      // allUsers={allUsers}
      viewableTraders={viewableTraders}
      currentUser={currentUser}
    />
  </div>

 
  )
}

export default TradersFeatures
