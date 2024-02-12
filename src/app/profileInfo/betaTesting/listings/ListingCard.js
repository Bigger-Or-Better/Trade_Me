"use client";
import React, {useState} from "react";
import ListingItem from "./ListingItem";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ListingCard = ({ postedListings, likedListings, currentUser}) => {
	// console.log("postedListings_start",postedListings,"postedListings_end")
	// console.log("likedListings_start",likedListings,"likedListings_end")

	const [listingView, setListingView] = useState("Posted");
	// const [viewableArray, setViewableArray] = useState([postedListings])
	let viewableArray = postedListings;

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

	const alterView = (e) =>{
		console.log(e.target.innerHTML);
		if (e.target.innerHTML.includes("Posted")){ 
			setListingView("Posted");
			// setViewableArray(postedListings);
			viewableArray = postedListings
		}
		else { 
			setListingView("Liked");
			// setViewableArray(likedListings);
			viewableArray = likedListings
		}
		console.log(viewableArray)
	}

	return (
		<div className={'row'}>
			<div>
				<button onClick={alterView}>Posted: {postedListings.length}</button>
				<button onClick={alterView}>Liked: {likedListings.length}</button>
			</div>

		{
			// viewableArray.map((list) => (
			// 	<ListingItem
			// 		cUser = {currentUser}	
			// 		key={list.id}
			// 		{...list}
			// 		onDelete={() => deleteListing(list.id)}
			// 		view={listingView}
			// 	/>
			// ))



			((listingView == "Posted") ?
				postedListings.map((list) => (
					<ListingItem
						cUser = {currentUser}	
						key={list.id}
						{...list}
						onDelete={() => deleteListing(list.id)}
						view={listingView}
					/>
				))
				:
				likedListings.map((list) => (
					<ListingItem
						cUser = {currentUser}	
						key={list.id}
						{...list}
						onDelete={() => deleteListing(list.id)}
						view={listingView}
					/>
				))
			)
		}
		</div>
	);
};

export default ListingCard;
