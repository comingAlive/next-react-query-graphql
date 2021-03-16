const HalfStarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="myGradient">
          <stop offset="0.5" stopColor="currentColor" />
          <stop offset="0.5" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <polygon
        fill="url('#myGradient')"
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  );
};
export default HalfStarIcon;
