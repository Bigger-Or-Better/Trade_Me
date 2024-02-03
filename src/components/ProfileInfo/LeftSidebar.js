"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const currentRoute = usePathname();

  return (
    <>
      <div className="db-sidebar">
        <ul>
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
            <hr></hr>
            <li>Settings</li>
            <li>Listings</li>
            <li>Reviews</li>
            <li>Friends</li>
          </li>
        </ul>
      </div>
    </>
  )
}

export default LeftSidebar;