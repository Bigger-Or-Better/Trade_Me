"use client";
import React, {useState} from "react";
import ListingItem from "./ListingItem";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import EditListing from "@/components/ProfileInfo/listings/EditListing";


const ListingCard = ({ viewableListings, currentUser}) => {
	const router = useRouter();
	
	return (
		<div className={'row'}>
			{/* <div>
				<button onClick={alterView}>Posted: {postedListings.length}</button>
				<button onClick={alterView}>Liked: {likedListings.length}</button>
			</div> */}

			{/* {renderSwitch(viewKey)} */}
			{
				viewableListings.map((list) => (
					<ListingItem
						cUser = {currentUser}	
						key={list.id}
						{...list}
						onDelete={() => deleteListing(list.id)}
						internalChange={()=>setViewKey('Liked')}
						onEdit={() => setListingToEdit(
							{
								"id":list.id,
								"title":list.title,
								"description":list.description,
								"imageSrc":list.imageSrc,
								"category":list.category,
								"features":list.features,
								"price":list.price,
								"quantity":list.quantity
							}
						)}
						view={"all"}
					/>
				))
			}

		</div>
	);
};

export default ListingCard;
