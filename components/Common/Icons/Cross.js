import React from "react";

function CrossIcon(props) {
  const { pathProps, ...rest } = props || {};
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z"
        fill="#f0f0f0"
        {...pathProps}
      />
    </svg>
  );
}

export default CrossIcon;
