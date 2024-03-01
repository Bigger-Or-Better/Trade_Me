import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import getListingBySlug from "@/actions/getListingBySlug";
import Listing from "@/components/Listing/Index";
import { getCurrentUser } from "@/actions/getCurrentUser";
import getUserById from "@/actions/getUserById";
import  getReviewByListingId from "@/actions/getReviewsByListingId";


export const generateMetadata = ({ params }) => {
	return {
		title: `Listing - ${params.slug}`,
	};
};

const page = async ({ params }) => {
	console.log(params)
	const listing = await getListingBySlug(params);
	const currentUser = await getCurrentUser();
	const cUser = await getUserById({userId: `${currentUser.id}`})
	const reviews = await getReviewByListingId(params);

	return (
		<>
			{/* <PageBanner pageTitle={listing?.title} /> */}
			<Listing
				currentUser={cUser}
				listing={listing}
				reviews={reviews}
			/>
		</>
	);
};

export default page;
