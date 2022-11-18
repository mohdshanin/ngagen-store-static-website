import Cookie from "js-cookie";

const setCookie = (cookiename, usrInput) => {
  Cookie.set(cookiename, usrInput, {
    expires: 1, // 1 day
    sameSite: "strict",
    path: "/",
  });
};

export default setCookie;
