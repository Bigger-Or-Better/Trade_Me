"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NoResults = ({allTradeListings, setViewableListings}) => {

  const resetListings = () =>{
    setViewableListings(allTradeListings);
  }

  return(
    <div>
      <h1>No Results Found</h1>
      <button
        onClick={()=>resetListings()}>Click to see all listings</button>
    </div>
  )
}

export default NoResults
