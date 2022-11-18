import React from "react";

function HeartIcon(props) {
  const { pathProps, ...rest } = props || {};
  return (
    <svg
      width="56"
      height="72"
      viewBox="0 0 56 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.9979 11.0636L24.6521 7.69452C19.3792 2.38722 9.51935 4.14261 5.94031 10.9859C4.3071 14.1172 3.83581 18.7891 7.04155 24.9832C10.0793 30.8711 16.4255 38.0343 27.9979 45.9062C39.5656 38.0298 45.9118 30.8665 48.9542 24.9832C52.1599 18.7891 51.6933 14.1172 50.0554 10.9904C46.4764 4.14261 36.6165 2.38722 31.3436 7.69452L27.9979 11.0636ZM25.7114 49.9198C-24.5912 15.9092 11.7125 -10.2159 27.3866 3.91861C27.5966 4.10604 27.8019 4.3026 28.0025 4.50831C28.2032 4.3026 28.4085 4.10604 28.6185 3.91861C44.2972 -10.2159 80.587 15.9137 30.2843 49.9198L31.3809 52.0591C31.4496 52.1936 31.4905 52.34 31.5014 52.49C31.5122 52.6399 31.4929 52.7905 31.4443 52.9332C31.3958 53.0758 31.3191 53.2077 31.2185 53.3212C31.118 53.4348 30.9956 53.5279 30.8583 53.5951C30.721 53.6623 30.5716 53.7024 30.4185 53.7131C30.2654 53.7237 30.1117 53.7048 29.9661 53.6572C29.8205 53.6097 29.6859 53.5345 29.57 53.436C29.4541 53.3375 29.3591 53.2176 29.2904 53.0831L29.2531 53.0054C29.2904 53.5083 29.3464 53.9288 29.4258 54.3311C29.6777 55.5653 30.177 56.5619 31.3809 58.9161C32.7248 61.5583 32.4775 64.1731 31.7356 66.3628C31.003 68.5067 29.7664 70.3261 28.9918 71.4598L28.9731 71.4918C28.8879 71.6167 28.7785 71.7239 28.651 71.8073C28.5236 71.8907 28.3806 71.9488 28.2302 71.978C28.0798 72.0073 27.9251 72.0073 27.7747 71.978C27.6244 71.9487 27.4814 71.8907 27.3539 71.8072C27.2265 71.7238 27.117 71.6166 27.0319 71.4917C26.9467 71.3668 26.8875 71.2267 26.8576 71.0794C26.8277 70.9321 26.8277 70.7805 26.8576 70.6332C26.8875 70.4859 26.9468 70.3458 27.0319 70.221C27.8159 69.069 28.8985 67.4782 29.5191 65.6359C30.1397 63.8257 30.2797 61.8692 29.2904 59.9401L29.2298 59.8121C28.1099 57.6179 27.4566 56.347 27.1393 54.7745C27.0085 54.0953 26.9274 53.4079 26.8966 52.7174L26.71 53.0831C26.6421 53.2185 26.5475 53.3393 26.4317 53.4387C26.3159 53.5381 26.1811 53.614 26.0352 53.6621C25.8893 53.7103 25.7351 53.7296 25.5815 53.7191C25.4279 53.7085 25.278 53.6683 25.1404 53.6008C25.0027 53.5332 24.8801 53.4396 24.7796 53.3254C24.679 53.2112 24.6025 53.0786 24.5546 52.9353C24.5066 52.792 24.488 52.6408 24.4999 52.4904C24.5119 52.34 24.5541 52.1935 24.6241 52.0591L25.7207 49.9198H25.7114ZM18.7259 9.4179C15.6975 8.59507 11.8058 9.79732 10.0933 13.0658C9.48202 14.2452 8.95006 16.2155 9.72 19.1685C10.014 20.2839 11.6518 20.0736 11.9925 18.972C12.9724 15.7857 14.9182 12.3573 18.334 11.2373C19.3466 10.9036 19.7525 9.69676 18.7259 9.4179Z"
        fill="#FF811D"
        {...pathProps}
      />
    </svg>
  );
}

export default HeartIcon;