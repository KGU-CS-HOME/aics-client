type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="321"
      height="220"
      viewBox="0 -0.271 321 220"
      {...props}
    >
      <path fill="#00A151" d="m320.193 0-26.471 31.54v156.116l26.471 32.073z" />
      <path
        fill="#F39700"
        d="m182.687 25.932 25.498 21.131 85.537-15.523L320.193 0z"
      />
      <path fill="#EA5506" d="M208.186 67.64V47.063l-25.499-21.131V67.64z" />
      <path
        fill="#ffffff"
        d="m42.257 76.88-22.3 27.422h-.209V76.88H0v67.171h19.748v-30.51h.209l23.041 30.51h25.166l-29.517-35.892L66.046 76.88z"
      />
      <defs>
        <path id="a" d="M0 0h320.193v219.729H0z" />
      </defs>
      <path
        fill="#ffffff"
        d="M118.185 75.727c-27.185 0-46.829 9.715-46.829 35.023 0 25.411 22.83 34.458 42.585 34.458 6.794 0 16.139-.191 28.665-3.08v-34.463h-19.115v23.108c-1.799.767-4.351 1.148-6.999 1.148-14.444 0-24.748-7.979-24.748-21.17 0-15.681 13.168-21.744 29.197-21.744 8.101 0 16.763 2.817 21.665 5.455v-15.05c-6.157-2.172-17.484-3.685-24.421-3.685M227.959 118.548c0 18.383-13.169 26.659-32.496 26.659-19.332 0-32.496-8.276-32.496-26.659V76.88h19.747v38.682c0 8.855 2.656 16.358 12.749 16.358 10.086 0 12.736-7.503 12.736-16.358V76.88h19.76v41.668z"
      />
      <path
        fill="#004EA2"
        d="m293.723 187.656-85.537-14.984v-18.117h-25.498v39.258l137.505 25.916z"
      />
    </svg>
  ),
}
