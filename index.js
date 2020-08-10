import Cookies from "js-cookie";

let sharedToken = [
  "authToken",
  "ghauthcode",
  "defaultVendor",
  "authRole",
  "authName",
  "authEmail",
];

let cookies = {
  set: (key, value, options) => {
    //check if the key in array
    if (sharedToken.includes(key)) {
      //set for all domain
      if (process.env.NODE_ENV === "production") {
        Cookies.set(key, value, {
          expires: options.expires ? options.expires : 1,
          domain: "greenhouse.co",
          secure: true,
          sameSite: "strict",
        });
        Cookies.set(key, value, {
          expires: options.expires ? options.expires : 1,
          domain: "vendor.greenhouse.co",
          secure: true,
          sameSite: "strict",
        });
      } else {
        Cookies.set(key, value, {
          expires: options.expires ? options.expires : 1,
          domain: "staging.greenhouse.co",
          secure: true,
          sameSite: "strict",
        });
        Cookies.set(key, value, {
          expires: options.expires ? options.expires : 1,
          domain: "dev-vendor.greenhouse.co",
          secure: true,
          sameSite: "strict",
        });
      }
    } else {
      Cookies.set(key, value, options);
    }
  },
};

export let Cookies = cookies;
