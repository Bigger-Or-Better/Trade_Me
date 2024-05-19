"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateWithMonth } from "@/utils/formatDate";
import HeartButton from "@/components/HeartButton";

const ListingItem = ({
	cUser,
	id,
	title,
	slug,
	imageSrc,
	user,
	created_at,
	category,
	description,
	features,
	price, 
	quantity,
	tradeOffers,
	onDelete,
	onEdit,
	internalChange,
	view
}
) => {
	// console.log(title);
	return (
		<div className="col-md-6 col-xl-3 mb-4 listing-card-single">
			<div className="db-listing-card card">
				<figure>
				<Image
					src={imageSrc}
					className="card-img-top"
					alt="Card Image"
					width={300}
					height={300}
				/>
				</figure>
				<div className="card-body">
					<h6 className="card-title">{title}</h6>

					<ul className="fs-14">
						{
							(view == "Liked") ?
							<li>Author: {user.name}</li>:
							<></>						
						}
						<li>Date: {formatDateWithMonth(created_at)}</li>
						<li>Category: {category}</li>
						{
							(view == "Posted") ?
							<li>Trade Offers: {tradeOffers}</li>:
							<></>
						}
					</ul>
					<div class="row">
							<Link
								href={`/listing/${id}/${slug}`}
								className="btn btn-primary btn-sm"
							>
								View Details
							</Link>
							<HeartButton currentUser={cUser} listingId={id} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListingItem;
