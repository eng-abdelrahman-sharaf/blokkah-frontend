const CheckMark = ({
    SvgClassName = "w-6 h-6",
    PathClassName = "fill-Gray-400",
}: {

  SvgClassName?: string;
  PathClassName?: string;
}) => (
  <svg
    className={SvgClassName}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.2959 4L8.36412 15.8657L3.5914 11.1642L2.00049 12.7313L8.36412 19L22.0005 5.56716L20.2959 4Z"
      className={PathClassName}
    />
  </svg>
);

export default CheckMark;
