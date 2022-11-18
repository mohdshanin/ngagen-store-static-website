import Cookie from "js-cookie";

const setCookie = (cookiename, usrInput) => {
  Cookie.set(cookiename, usrInput, {
    sameSite: "strict",
    path: "/",
  });
};

export default setCookie;
