import React from "react";
import { redirect } from "next/navigation";
import PageBanner from "@/components/Common/PageBanner";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ListingCard from "@/components/Listings/ListingCard";
import getListings from "@/actions/getListings";
import getUserById from "@/actions/getUserById";
import getMyFavourites from "@/actions/getFavourites";
export const dynamic = "force-dynamic";
import FilterSideBar from "@/components/Listings/FilterSidebar";
import ListingFeatures from "@/components/Listings/ListingFeatures";


const page = async ({ searchParams }) => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	const user = await getUserById({ userId: `${currentUser.id}` });
	const favourites = await getMyFavourites();
	const newFav = [];
	const {listings} = await getListings( //get all listings instead of filtered few, that way All listings are available if reset is desired
		{
			"title":"",
			"category":""
		}
	)
	const allTradeListings = listings.filter(item => ((item.price == 0) && (item.userId !== currentUser.id))); //hide self posted listings;
	
	
	console.log(allTradeListings)

	

	// console.log(currentUser, "CURRENT USER", user, "USER")


	favourites.forEach(item => {
		newFav.push(item.listing);
	});
	

	return (
		<>
			{/* <PageBanner pageTitle="All Listings" /> */}

			<div className="ptb-100">
				<div className="container">
					<ListingFeatures
						currentUser={currentUser}
						allTradeListings={allTradeListings}
						searchParams={searchParams}/>
				</div>
			</div>
		</>
	);
};

export default page;
