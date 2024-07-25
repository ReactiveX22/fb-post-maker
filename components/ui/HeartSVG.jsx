const HeartSVG = () => {
  return (
    <svg
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      width={18}
      height={18}
    >
      <g clipPath='url(#clip0_heart_15251_63610)'>
        <path
          d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z'
          fill='url(#paint0_heart_linear_15251_63610)'
        />
        <path
          d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z'
          fill='url(#paint1_heart_radial_15251_63610)'
        />
        <path
          d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z'
          fill='#fff'
        />
      </g>
      <defs>
        <radialGradient
          id='paint1_heart_radial_15251_63610'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'
        >
          <stop offset='.5637' stopColor='#E11731' stopOpacity='0' />
          <stop offset='1' stopColor='#E11731' stopOpacity='.1' />
        </radialGradient>
        <linearGradient
          id='paint0_heart_linear_15251_63610'
          x1='2.3986'
          y1='2.4007'
          x2='13.5975'
          y2='13.5993'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF74AE' />
          <stop offset='.5001' stopColor='#FA2E3E' />
          <stop offset='1' stopColor='#FF5758' />
        </linearGradient>
        <clipPath id='clip0_heart_15251_63610'>
          <path fill='#fff' d='M-.001.0009h15.9992v15.9984H-.001z' />
        </clipPath>
      </defs>
    </svg>
  );
};
export default HeartSVG;
