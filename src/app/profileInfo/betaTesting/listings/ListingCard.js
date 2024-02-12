"use client";
import React, {useState} from "react";
import ListingItem from "./ListingItem";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ListingCard = ({ listings,  currentUser, favourites }) => {
	// console.log("currentUser_start", currentUser, "currentUser_end")
	console.log("favourites_start",favourites,"favourites_end")
	// console.log('listings_start',listings,'listings_end')
	
	const [isPosted, setIsPosted] = useState(true);

	const router = useRouter();
	const deleteListing = async (listingId) => {
		const shouldDelete = window.confirm(
			"Are you sure you want to delete this listing?"
		);
		if (shouldDelete) {
			await axios
				.delete(`/api/listings/${listingId}`)
				.then((response) => {
					toast.success("Success");
					router.refresh();
				})
				.catch((error) => {
					toast.error("Something went wrong!");
				});
		}
	};

	const onShowPosted = () => {
		console.log("posted")
	}
	const onShowLiked = () => {
		console.log("liked")
	}
	return (
		<div className="row">
			<div>
				<button onClick={onShowPosted}>Posted</button>
				<button onClick={onShowLiked}>Liked</button>
			</div>
			{listings.map((list) => ( //if posted (different if liked)
				<ListingItem
					userName={currentUser.name} //wrong
					key={list.id}
					{...list}
					onDelete={() => deleteListing(list.id)}
				/>
			))}
		</div>
	);
};

export default ListingCard;
