/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		unoptimized: true,
		domains: [
			"res.cloudinary.com",
			"avatars.githubusercontent.com",
			"lh3.googleusercontent.com",
			"via.placeholder.com",
			"developers.google.com",
		],
	},
	env: {
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "cloude_name",
		NEXT_CLOUDINARY_PRESET: "cloud-preset",
		//https://cloudinary.com/documentation/upload_presets#managing_upload_presets_using_the_settings_ui
	},
};

module.exports = nextConfig;
