import React from "react";

function SubscriptionIcon(props) {
  const { pathProps, ...rest } = props || {};
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.56923 2.70769C2.27773 2.70769 1.23077 3.75466 1.23077 5.04615V12.4308C1.23077 13.7223 2.27773 14.7692 3.56923 14.7692H12.4308C13.7223 14.7692 14.7692 13.7223 14.7692 12.4308V5.04615C14.7692 3.75466 13.7223 2.70769 12.4308 2.70769H3.56923ZM0 5.04615C0 3.07492 1.598 1.47692 3.56923 1.47692H12.4308C14.402 1.47692 16 3.07492 16 5.04615V12.4308C16 14.402 14.402 16 12.4308 16H3.56923C1.598 16 0 14.402 0 12.4308V5.04615Z"
        fill="#FF811D"
        {...pathProps}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.04615 0C5.38602 0 5.66154 0.275517 5.66154 0.615385V3.56923C5.66154 3.9091 5.38602 4.18462 5.04615 4.18462C4.70629 4.18462 4.43077 3.9091 4.43077 3.56923V0.615385C4.43077 0.275517 4.70629 0 5.04615 0ZM10.9538 0C11.2937 0 11.5692 0.275517 11.5692 0.615385V3.56923C11.5692 3.9091 11.2937 4.18462 10.9538 4.18462C10.614 4.18462 10.3385 3.9091 10.3385 3.56923V0.615385C10.3385 0.275517 10.614 0 10.9538 0ZM0 6.52308C0 6.18321 0.275517 5.90769 0.615385 5.90769H15.3846C15.7245 5.90769 16 6.18321 16 6.52308C16 6.86295 15.7245 7.13846 15.3846 7.13846H0.615385C0.275517 7.13846 0 6.86295 0 6.52308Z"
        fill="#FF811D"
        {...pathProps}
      />
      <path
        d="M7.78585 9.72062H7.25415V8.90339H8.75077V12.6154H7.78585V9.72062Z"
        fill="#FF811D"
        {...pathProps}
      />
    </svg>
  );
}

export default SubscriptionIcon;
