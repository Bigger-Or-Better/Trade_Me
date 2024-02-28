import React from "react";
import ListingItem from "./ListingItem";

const UserListing = ({ listings, user, currentUser, params }) => {
	// console.log("listings_start",listings,"listings_end")
	console.log("user_start", user.id, "user_end")
	console.log("currentuser_start",currentUser.id,"currentUser_end")
	if (currentUser){
		// console.log(user.id, "user", currentUser.id, "currentUser")
		// console.log(params, "params")
	}
	
	return (
		<div className="featured-area bg-color-181616 ptb-100">
			<div className="container">
				<div className="section-title left-title">
					<h2>Listings</h2>
				</div>

				<div className="row">
					{listings.length > 0 ? (
						listings.map((list) => (
							<ListingItem
								key={list.id}
								{...list}
								user={user}
								currentUser={currentUser}
							/>
						))
					) : (
						<div className="col-lg-12">
							<div className="border p-4 text-center">Empty</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserListing;
