import React from "react";

function FacebookIcon(props) {
  const { pathProps, ...rest } = props || {};
  return (
    <svg
      width="11"
      height="22"
      viewBox="0 0 11 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.1163 7.20032H6.87988V5.07773C6.87988 4.28059 7.4082 4.09475 7.7803 4.09475C8.15157 4.09475 10.0642 4.09475 10.0642 4.09475V0.590402L6.91882 0.578125C3.42717 0.578125 2.63258 3.19178 2.63258 4.86437V7.20032H0.613281V10.8113H2.63258C2.63258 15.4456 2.63258 21.0293 2.63258 21.0293H6.87988C6.87988 21.0293 6.87988 15.3905 6.87988 10.8113H9.74584L10.1163 7.20032Z"
        fill="white"
        {...pathProps}
      />
    </svg>
  );
}

export default FacebookIcon;
