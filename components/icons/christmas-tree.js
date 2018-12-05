import React from 'react';
import styled, { keyframes } from 'styled-components';

const ChristmasTree = props => (
  <svg viewBox="0 0 511.999 511.999" {...props}>
    <path
      d="M470.954 500.532L372.59 332.53H139.416L41.068 500.532a7.49 7.49 0 0 0 0 7.651c1.371 2.355 3.919 3.816 6.694 3.816h416.469a7.824 7.824 0 0 0 6.723-3.816 7.63 7.63 0 0 0 0-7.651z"
      fill="#00997c"
    />
    <path
      d="M97.522 508.184a7.49 7.49 0 0 1 0-7.651l98.347-168.002h-56.453L41.068 500.532a7.49 7.49 0 0 0 0 7.651c1.371 2.355 3.919 3.816 6.694 3.816h56.454c-2.776.001-5.324-1.46-6.694-3.815z"
      fill="#414042"
      opacity=".2"
    />
    <path
      d="M403.179 342.598l-80.367-137.259H189.179l-80.366 137.259a7.63 7.63 0 0 0 0 7.653 7.83 7.83 0 0 0 6.723 3.817h280.922c2.77 0 5.32-1.464 6.724-3.817a7.66 7.66 0 0 0-.003-7.653z"
      fill="#00b494"
    />
    <path
      d="M163.251 350.251a7.63 7.63 0 0 1 0-7.653l80.366-137.259h-54.439l-80.366 137.259a7.63 7.63 0 0 0 0 7.653 7.83 7.83 0 0 0 6.723 3.817h54.44a7.832 7.832 0 0 1-6.724-3.817z"
      fill="#414042"
      opacity=".2"
    />
    <path
      d="M163.461 224.743c-2.807 0-5.354-1.465-6.724-3.818a7.48 7.48 0 0 1 0-7.653L249.27 55.181a7.791 7.791 0 0 1 6.725-3.818 7.788 7.788 0 0 1 6.725 3.818l92.535 158.091a7.502 7.502 0 0 1 0 7.653c-1.372 2.353-3.953 3.818-6.725 3.818H163.461z"
      fill="#00997c"
    />
    <path
      d="M201.95 220.925a7.48 7.48 0 0 1 0-7.653L278.6 82.315l-15.881-27.134a7.787 7.787 0 0 0-6.725-3.818 7.793 7.793 0 0 0-6.725 3.818l-92.533 158.091a7.48 7.48 0 0 0 0 7.653c1.37 2.353 3.917 3.818 6.724 3.818h45.213c-2.806 0-5.353-1.465-6.723-3.818z"
      fill="#414042"
      opacity=".2"
    />
    <g fill="#f0d355">
      <path d="M282.857 101.558a9.297 9.297 0 0 1-3.043-.511l-24.067-8.299-24.074 8.299a9.34 9.34 0 0 1-8.52-1.257 9.25 9.25 0 0 1-3.832-7.676l.489-25.34-15.37-20.203a9.216 9.216 0 0 1-1.43-8.45 9.324 9.324 0 0 1 6.144-6.008l24.381-7.354 14.573-20.791A9.325 9.325 0 0 1 255.748 0a9.302 9.302 0 0 1 7.619 3.967l14.583 20.791 24.373 7.354a9.282 9.282 0 0 1 6.144 6.008 9.228 9.228 0 0 1-1.431 8.45l-15.358 20.203.487 25.34a9.262 9.262 0 0 1-3.837 7.676 9.397 9.397 0 0 1-5.471 1.769z" />
      <circle cx="226.356" cy="189.168" r="12.935" />
    </g>
    <g className="white-bulbs">
      <circle cx="285.643" cy="189.168" r="12.935" fill="#fff" />
      <circle cx="225.823" cy="320.669" r="12.935" fill="#fff" />
      <circle cx="346.54" cy="320.669" r="12.935" fill="#fff" />
      <circle cx="165.459" cy="474.812" r="12.935" fill="#fff" />
      <circle cx="286.176" cy="474.812" r="12.935" fill="#fff" />
      <circle cx="406.904" cy="474.812" r="12.935" fill="#fff" />
    </g>
    <g className="yellow-bulbs">
      <circle cx="165.459" cy="320.669" r="12.935" fill="#f0d355" />
      <circle cx="286.176" cy="320.669" r="12.935" fill="#f0d355" />
      <circle cx="105.095" cy="474.812" r="12.935" fill="#f0d355" />
      <circle cx="225.823" cy="474.812" r="12.935" fill="#f0d355" />
      <circle cx="346.54" cy="474.812" r="12.935" fill="#f0d355" />
    </g>
    <path
      d="M241.502 61.925c-10.238-10.238-16.719-22.35-19.033-33.828l-13.316 4.017a9.324 9.324 0 0 0-6.144 6.008 9.222 9.222 0 0 0 1.43 8.45l15.369 20.203-.489 25.34a9.25 9.25 0 0 0 3.832 7.676 9.344 9.344 0 0 0 8.52 1.257l24.074-8.299 24.067 8.299c.986.341 2.01.511 3.043.511a9.392 9.392 0 0 0 5.469-1.768 9.26 9.26 0 0 0 3.837-7.676l-.21-10.916c-15.346 3.067-35.025-3.851-50.449-19.274z"
      fill="#414042"
      opacity=".1"
    />
  </svg>
);

const blink = keyframes`
  from {
    opacity: .2;
  }
  to {
    opacity: 1;
    transform: scale(1.15);
  }
`;

const swing = keyframes`
  0% { transform: rotate(0deg); }
  30% { transform: rotate(-30deg) scale(1.1); }
  60% { transform: rotate(30deg) scale(1.3); }
  100% { transform: rotate(0deg) scale(1.5); }
`;

const StyledChristmasTree = styled(ChristmasTree)`
  circle {
    transform-origin: center bottom;
  }
  .yellow-bulbs circle:nth-of-type(2n) {
    animation: 1s ease 1s alternate infinite ${blink};
  }

  .yellow-bulbs circle:nth-of-type(2n + 1) {
    animation: 2s ease 2s alternate infinite ${blink};
  }

  .white-bulbs circle:nth-of-type(2n) {
    animation: 1s ease alternate infinite ${blink};
  }

  .white-bulbs circle:nth-of-type(2n + 1) {
    animation: 2s ease 2s alternate infinite ${blink};
  }

  transition: all .1s ease;

  &:hover {
    animation: 1s ease-out alternate infinite ${swing};
  }
`;

export default StyledChristmasTree;
