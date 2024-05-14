"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DividerNL4() {
  const { theme } = useTheme();
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    theme === "light" ? setLightMode(true) : setLightMode(false);
  }, [theme]);

  return (
    <div className='divider'>
      <svg
        width='100pt'
        version='1.1'
        viewBox='0 0 1200 1200'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          marginRight: "-6px",
          width: "125px",
          minWidth: "125px",
        }}
      >
        <defs>
          <linearGradient id='myGradient1' gradientTransform='rotate(90)'>
            {lightMode ? (
              <stop offset='50%' stopColor='black' />
            ) : (
              <stop offset='50%' stopColor='#ffffffab' />
            )}
            <stop offset='50%' stopColor='#ffffffab' />
          </linearGradient>
          <linearGradient id='myGradient2' gradientTransform='rotate(90)'>
            <stop offset='50%' stopColor='#ffffffab' />
            {lightMode ? (
              <stop offset='50%' stopColor='black' />
            ) : (
              <stop offset='50%' stopColor='#ffffffab' />
            )}
          </linearGradient>
        </defs>
        <g fill='url(#myGradient1)'>
          <path d='m618.69 399.9v14.859h-29.074v-13.184h-212.13c-3.4336 0-6.1992 2.7773-6.1992 6.1875v55.863h-305.09c-3.4219 0-6.1992 2.7656-6.1992 6.1992v260.31c0 3.4336 2.7773 6.1992 6.1992 6.1992h305.09v55.406c0 3.4219 2.7656 6.1992 6.1992 6.1992h212.13v-11.156h29.086v13.324l116.8 0.36328c9.1172-3.3633 60.891-13.535 71.039-16.711 72.363-6.0586 191.33-8.6953 296.73-32.496 2.2969-0.51562 4.5117-1.1133 6.6914-1.7461 10.477-1.5938 19.301-6.8438 24.633-14.074 3.3398-4.0312 5.4023-8.7539 5.4023-14.402l-0.046875-0.83203c0-0.12891 0.046875-0.23438 0.046875-0.36328v-241.79c0-16.688-16.934-25.746-36.727-30.223-107.94-24.375-229.96-26.578-301.76-32.941-16.523-4.0898-57.938-12.387-66.023-15.363zm-546.45 324.2v-248.24h299.04v86.344h-45.082c-0.44531 0-0.82031 0.55078-0.82031 1.2305v75.809c0 0.67969 0.375 1.2305 0.82031 1.2305h45.082v83.625zm563.79-66.75c-1.4883 0.64453-2.9883 1.2773-4.4883 1.8984-0.55078 0.23438-1.0898 0.46875-1.6289 0.69141l-0.011719-119.32h0.023438c2.0742 0.82031 4.0781 1.6641 6.0938 2.5195zm24.469-101.64c0.046875 0.035156 0.09375 0.070312 0.11719 0.09375 2.0859 1.3008 4.0664 2.625 5.9648 3.9727 0.023437 0.011719 0.023437 0.023438 0.046874 0.035156l0.011719 80.859c-1.9805 1.3828-4.0078 2.7422-6.1289 4.0664zm-55.078 112.95c-2.0859 0.65625-4.1133 1.2656-6.1172 1.875v-140.23c2.0508 0.59766 4.1016 1.1953 6.1172 1.8164zm-30.609 8.3086c-1.9922 0.48047-4.1016 0.84375-6.1172 1.2891v-155.48c2.0039 0.42187 4.1367 0.77344 6.1172 1.2305zm-30.609-159.15v165.63c-2.0391 0.38672-4.0664 0.75-6.1172 1.125v-167.8c2.0508 0.33984 4.0898 0.67969 6.1172 1.043zm-30.598 170.71c-2.0508 0.30469-4.0781 0.71484-6.1289 0.99609v-177.41c2.0625 0.26953 4.0664 0.64453 6.1289 0.92578zm-88.055-183.49c0.058593 0 0.11719 0 0.17578 0.011719 22.406 0.98438 45.996 2.8242 69.516 5.5547v180.59c-0.023438 0-0.046875 0.011718-0.070313 0.011718-24.352 3.0352-48.082 5.0273-69.469 6.1523-0.57422 0.023438-1.1953 0.070313-1.7578 0.09375-7.2305 0.35156-14.168 0.62109-20.754 0.78516-9.375-29.672-14.309-62.719-14.309-96.176 0-34.066 5.1094-67.664 14.812-97.734 7.125 0.14062 14.426 0.375 21.855 0.71484zm151.83 280.66h-193.85v-115.96c1.3945 6.9492 2.9062 13.805 4.6992 20.426 1.8398 7.0312 3.8789 13.898 6.1992 20.473 3.8203-0.046875 7.7695-0.14062 11.801-0.23438 0.9375-0.023438 1.9102-0.082032 2.8594-0.10547 3.2109-0.10547 6.4805-0.21094 9.7969-0.35156 0.97266-0.046874 1.9453-0.09375 2.918-0.14062 3.5039-0.16406 7.0664-0.33984 10.688-0.55078 0.75-0.046875 1.5-0.10547 2.2617-0.14062 4.2305-0.24609 8.5078-0.52734 12.844-0.84375 0.12891-0.023437 0.26953-0.023437 0.39844-0.035156 41.449-3.0703 87.656-9.1758 129.39-19.16zm12.234-11.156v-88.57c-0.15234 0.046875-0.30469 0.082031-0.46875 0.12891 10.254-2.707 20.133-5.6836 29.555-8.918v97.359zm263.38-343.65c2.5547 0.17578 5.0859 0.33984 7.7227 0.50391 70.84 4.5117 159 10.125 239.85 28.383 10.16 2.2969 27.188 7.7109 27.188 18.281l-0.046875 242.51 0.070313 1.1836c-0.023438 1.6992-0.80859 3.7266-2.6016 5.8828-3.9727 5.3555-10.02 8.707-17.051 9.7734l-0.80859 0.12891-0.79688 0.23438c-1.9336 0.57422-3.9141 1.1016-5.9297 1.5469-80.871 18.258-169.03 23.883-239.87 28.383-1.4414 0.10547-2.7305 0.1875-4.1367 0.28125-0.09375 0.023438-0.19922 0.058594-0.29297 0.082032 39.047-12.352 56.355-20.109 56.355-43.195 0-0.09375-0.070312-0.16406-0.070312-0.23438 0-0.058594 0.070312-0.12891 0.070312-0.21094 0-20.344-40.91-31.277-111.14-65.473-45.316-22.078-62.812-46.664-69.668-58.945 6.8555-12.27 24.34-36.867 69.656-58.934 70.242-34.207 111.15-45.141 111.15-65.484 0-0.082031-0.070312-0.14062-0.070312-0.19922 0-0.082031 0.070312-0.15234 0.070312-0.24609 0-24.867-20.109-31.969-65.848-46.172 2.0859 0.64453 4.207 1.3008 6.1992 1.9219zm-234.3-3.8789v96.258c-9.2695-3.1289-18.984-5.9883-29.074-8.5664v-87.691zm-41.309 84.715c-0.035156 0-0.058593-0.011718-0.082031-0.011718-41.402-9.5273-87.281-15.012-128.68-17.707-0.21094-0.011718-0.43359-0.023437-0.65625-0.035156-9.0234-0.58594-17.812-1.0312-26.309-1.3594-0.62109-0.023437-1.2305-0.046875-1.8398-0.070313-8.625-0.31641-16.957-0.52734-24.82-0.60937-2.4258 6.75-4.5586 13.793-6.4922 21.035-1.8984 6.9258-3.4922 14.086-4.957 21.375-0.011719 0.011718-0.011719 0.023437-0.011719 0.035156v-120.55h193.85z' />
          <path d='m518.71 739.78c-17.473 17.473-40.676 29.812-40.676 29.812s-21.434-14.895-38.133-31.605c-9.0586-9.0586 90.023-9.4453 78.809 1.793z' />
          <path d='m507.86 462.93c-12.621-12.645-29.402-21.562-29.402-21.562s-15.48 10.758-27.562 22.84c-6.5391 6.5508 65.074 6.8203 56.965-1.2773z' />
          <path d='m409.55 546.96c33.094 30.223 40.172 53.555 40.172 53.555s-9.1875 27.363-40.172 53.566c-10.02 8.4727-9.3984-115.7 0-107.12z' />
        </g>
      </svg>
      <svg height='19' width='900' xmlns='http://www.w3.org/2000/svg'>
        <line
          x1='0'
          y1='10'
          x2='900'
          y2='10'
          style={{ strokeWidth: "4", stroke: "#ffffffab" }}
        />
      </svg>
      <svg
        width='100pt'
        version='1.1'
        viewBox='0 0 1200 1200'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          rotate: "180deg",
          marginLeft: "-6px",
          width: "125px",
          minWidth: "125px",
        }}
      >
        <g fill='url(#myGradient2)'>
          <path d='m618.69 399.9v14.859h-29.074v-13.184h-212.13c-3.4336 0-6.1992 2.7773-6.1992 6.1875v55.863h-305.09c-3.4219 0-6.1992 2.7656-6.1992 6.1992v260.31c0 3.4336 2.7773 6.1992 6.1992 6.1992h305.09v55.406c0 3.4219 2.7656 6.1992 6.1992 6.1992h212.13v-11.156h29.086v13.324l116.8 0.36328c9.1172-3.3633 60.891-13.535 71.039-16.711 72.363-6.0586 191.33-8.6953 296.73-32.496 2.2969-0.51562 4.5117-1.1133 6.6914-1.7461 10.477-1.5938 19.301-6.8438 24.633-14.074 3.3398-4.0312 5.4023-8.7539 5.4023-14.402l-0.046875-0.83203c0-0.12891 0.046875-0.23438 0.046875-0.36328v-241.79c0-16.688-16.934-25.746-36.727-30.223-107.94-24.375-229.96-26.578-301.76-32.941-16.523-4.0898-57.938-12.387-66.023-15.363zm-546.45 324.2v-248.24h299.04v86.344h-45.082c-0.44531 0-0.82031 0.55078-0.82031 1.2305v75.809c0 0.67969 0.375 1.2305 0.82031 1.2305h45.082v83.625zm563.79-66.75c-1.4883 0.64453-2.9883 1.2773-4.4883 1.8984-0.55078 0.23438-1.0898 0.46875-1.6289 0.69141l-0.011719-119.32h0.023438c2.0742 0.82031 4.0781 1.6641 6.0938 2.5195zm24.469-101.64c0.046875 0.035156 0.09375 0.070312 0.11719 0.09375 2.0859 1.3008 4.0664 2.625 5.9648 3.9727 0.023437 0.011719 0.023437 0.023438 0.046874 0.035156l0.011719 80.859c-1.9805 1.3828-4.0078 2.7422-6.1289 4.0664zm-55.078 112.95c-2.0859 0.65625-4.1133 1.2656-6.1172 1.875v-140.23c2.0508 0.59766 4.1016 1.1953 6.1172 1.8164zm-30.609 8.3086c-1.9922 0.48047-4.1016 0.84375-6.1172 1.2891v-155.48c2.0039 0.42187 4.1367 0.77344 6.1172 1.2305zm-30.609-159.15v165.63c-2.0391 0.38672-4.0664 0.75-6.1172 1.125v-167.8c2.0508 0.33984 4.0898 0.67969 6.1172 1.043zm-30.598 170.71c-2.0508 0.30469-4.0781 0.71484-6.1289 0.99609v-177.41c2.0625 0.26953 4.0664 0.64453 6.1289 0.92578zm-88.055-183.49c0.058593 0 0.11719 0 0.17578 0.011719 22.406 0.98438 45.996 2.8242 69.516 5.5547v180.59c-0.023438 0-0.046875 0.011718-0.070313 0.011718-24.352 3.0352-48.082 5.0273-69.469 6.1523-0.57422 0.023438-1.1953 0.070313-1.7578 0.09375-7.2305 0.35156-14.168 0.62109-20.754 0.78516-9.375-29.672-14.309-62.719-14.309-96.176 0-34.066 5.1094-67.664 14.812-97.734 7.125 0.14062 14.426 0.375 21.855 0.71484zm151.83 280.66h-193.85v-115.96c1.3945 6.9492 2.9062 13.805 4.6992 20.426 1.8398 7.0312 3.8789 13.898 6.1992 20.473 3.8203-0.046875 7.7695-0.14062 11.801-0.23438 0.9375-0.023438 1.9102-0.082032 2.8594-0.10547 3.2109-0.10547 6.4805-0.21094 9.7969-0.35156 0.97266-0.046874 1.9453-0.09375 2.918-0.14062 3.5039-0.16406 7.0664-0.33984 10.688-0.55078 0.75-0.046875 1.5-0.10547 2.2617-0.14062 4.2305-0.24609 8.5078-0.52734 12.844-0.84375 0.12891-0.023437 0.26953-0.023437 0.39844-0.035156 41.449-3.0703 87.656-9.1758 129.39-19.16zm12.234-11.156v-88.57c-0.15234 0.046875-0.30469 0.082031-0.46875 0.12891 10.254-2.707 20.133-5.6836 29.555-8.918v97.359zm263.38-343.65c2.5547 0.17578 5.0859 0.33984 7.7227 0.50391 70.84 4.5117 159 10.125 239.85 28.383 10.16 2.2969 27.188 7.7109 27.188 18.281l-0.046875 242.51 0.070313 1.1836c-0.023438 1.6992-0.80859 3.7266-2.6016 5.8828-3.9727 5.3555-10.02 8.707-17.051 9.7734l-0.80859 0.12891-0.79688 0.23438c-1.9336 0.57422-3.9141 1.1016-5.9297 1.5469-80.871 18.258-169.03 23.883-239.87 28.383-1.4414 0.10547-2.7305 0.1875-4.1367 0.28125-0.09375 0.023438-0.19922 0.058594-0.29297 0.082032 39.047-12.352 56.355-20.109 56.355-43.195 0-0.09375-0.070312-0.16406-0.070312-0.23438 0-0.058594 0.070312-0.12891 0.070312-0.21094 0-20.344-40.91-31.277-111.14-65.473-45.316-22.078-62.812-46.664-69.668-58.945 6.8555-12.27 24.34-36.867 69.656-58.934 70.242-34.207 111.15-45.141 111.15-65.484 0-0.082031-0.070312-0.14062-0.070312-0.19922 0-0.082031 0.070312-0.15234 0.070312-0.24609 0-24.867-20.109-31.969-65.848-46.172 2.0859 0.64453 4.207 1.3008 6.1992 1.9219zm-234.3-3.8789v96.258c-9.2695-3.1289-18.984-5.9883-29.074-8.5664v-87.691zm-41.309 84.715c-0.035156 0-0.058593-0.011718-0.082031-0.011718-41.402-9.5273-87.281-15.012-128.68-17.707-0.21094-0.011718-0.43359-0.023437-0.65625-0.035156-9.0234-0.58594-17.812-1.0312-26.309-1.3594-0.62109-0.023437-1.2305-0.046875-1.8398-0.070313-8.625-0.31641-16.957-0.52734-24.82-0.60937-2.4258 6.75-4.5586 13.793-6.4922 21.035-1.8984 6.9258-3.4922 14.086-4.957 21.375-0.011719 0.011718-0.011719 0.023437-0.011719 0.035156v-120.55h193.85z' />
          <path d='m518.71 739.78c-17.473 17.473-40.676 29.812-40.676 29.812s-21.434-14.895-38.133-31.605c-9.0586-9.0586 90.023-9.4453 78.809 1.793z' />
          <path d='m507.86 462.93c-12.621-12.645-29.402-21.562-29.402-21.562s-15.48 10.758-27.562 22.84c-6.5391 6.5508 65.074 6.8203 56.965-1.2773z' />
          <path d='m409.55 546.96c33.094 30.223 40.172 53.555 40.172 53.555s-9.1875 27.363-40.172 53.566c-10.02 8.4727-9.3984-115.7 0-107.12z' />
        </g>
      </svg>
    </div>
  );
}
