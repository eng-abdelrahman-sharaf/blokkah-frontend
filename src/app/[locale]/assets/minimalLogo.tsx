export default function MinimalLogo ({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_175_4120)">
        <mask
          id="mask0_175_4120"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x={-25}
          y={-26}
          width={85}
          height={86}
        >
          <path
            d="M59.8621 -25.2754H-24.9478V59.5344H59.8621V-25.2754Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_175_4120)">
          <path
            d="M0.495605 1.85547H15.473V16.6717H0.529521V2.1523L0.495605 1.85547Z"
            fill="#002949"
          />
          <path
            d="M35.2674 2.11804V16.0353H19.9932V1.22754H34.3769C34.8688 1.22754 35.2674 1.62615 35.2674 2.11804Z"
            fill="#02ADFF"
          />
          <path
            d="M0.529297 19.623H15.4643V34.7277H1.4198C0.927903 34.7277 0.529297 34.3291 0.529297 33.8372V19.623Z"
            fill="#002949"
          />
          <path
            d="M34.64 19.6315V34.7277H18.4243V19.623H34.5297C34.5551 19.6315 34.5636 19.6315 34.5891 19.6315H34.64Z"
            fill="#002949"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_175_4120">
          <rect width={36} height={36} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
