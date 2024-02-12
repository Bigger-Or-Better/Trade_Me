import React from "react";
import { redirect } from "next/navigation";
import PageBanner from "@/components/Common/PageBanner";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ListingCard from "./ListingCard";
import getListings from "@/actions/getListings";
import getUserById from "@/actions/getUserById";
import getMyFavourites from "@/actions/getFavourites";
export const dynamic = "force-dynamic";
import LeftSidebar from "@/components/ProfileInfo/LeftSidebar";


const page = async ({ searchParams }) => {
	const currentUser = await getCurrentUser();
	const user = await getUserById({ userId: `${currentUser.id}` });
	const favourites = await getMyFavourites();
	const newFav = [];

	favourites.forEach(item => {
		newFav.push(item.listing);
	});
	

	return (
		<>
			<PageBanner pageTitle="All listings" />

			<div className="ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
						 	<LeftSidebar />
						</div>
						<div className="col-lg-8">
							<ListingCard 
								postedListings={user?.listings && user.listings}
								likedListings = {newFav} 
								currentUser={currentUser} 
								/> 							
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
