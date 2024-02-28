import { slugify } from "./slugify";
export const shortenText = (text) => {
  let present_text;
  if (text.length >10) {
    present_text = text.slice(0,8).trim() + "..."
  }
  else{
    present_text = text;
  }
	return present_text;
};
