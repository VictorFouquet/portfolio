import React from "react";
import "./jumbotron.css";
import bgIllu from "../../assets/bgIllu.png";

class Jumbotron extends React.Component {
  render() {
    return (
      <div id="jumbotron">
        <div id="jumbotron-wrapper">
          <div id="jumbotron-bg-img">
            <img id="jumbotron-illu" src={bgIllu} alt="ça marche ap"></img>
          </div>
          <div id="jumbotron-content">
            <svg
              id="logo"
              width="900"
              height="300"
              viewBox="0 0 1300 198"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67.816 1.99198L43.24 69H26.92L2.34399 1.99198H16.744L35.176 55.272L53.512 1.99198H67.816Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M89.314 1.99198V69H75.874V1.99198H89.314Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M99.3287 35.4C99.3287 28.808 100.801 22.92 103.745 17.736C106.753 12.488 110.817 8.42398 115.937 5.54398C121.121 2.59998 126.913 1.12798 133.313 1.12798C140.801 1.12798 147.361 3.04799 152.993 6.88799C158.625 10.728 162.561 16.04 164.801 22.824H149.345C147.809 19.624 145.633 17.224 142.817 15.624C140.065 14.024 136.865 13.224 133.217 13.224C129.313 13.224 125.825 14.152 122.753 16.008C119.745 17.8 117.377 20.36 115.649 23.688C113.985 27.016 113.153 30.92 113.153 35.4C113.153 39.816 113.985 43.72 115.649 47.112C117.377 50.44 119.745 53.032 122.753 54.888C125.825 56.68 129.313 57.576 133.217 57.576C136.865 57.576 140.065 56.776 142.817 55.176C145.633 53.512 147.809 51.08 149.345 47.88H164.801C162.561 54.728 158.625 60.072 152.993 63.912C147.425 67.688 140.865 69.576 133.313 69.576C126.913 69.576 121.121 68.136 115.937 65.256C110.817 62.312 106.753 58.248 103.745 53.064C100.801 47.88 99.3287 41.992 99.3287 35.4Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M221.88 1.99198V12.84H204.024V69H190.584V12.84H172.728V1.99198H221.88Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M262.79 69.672C256.518 69.672 250.758 68.2 245.51 65.256C240.262 62.312 236.103 58.248 233.031 53.064C229.959 47.816 228.423 41.896 228.423 35.304C228.423 28.776 229.959 22.92 233.031 17.736C236.103 12.488 240.262 8.39198 245.51 5.44798C250.758 2.50398 256.518 1.03198 262.79 1.03198C269.126 1.03198 274.886 2.50398 280.07 5.44798C285.318 8.39198 289.446 12.488 292.454 17.736C295.527 22.92 297.062 28.776 297.062 35.304C297.062 41.896 295.527 47.816 292.454 53.064C289.446 58.248 285.318 62.312 280.07 65.256C274.822 68.2 269.062 69.672 262.79 69.672ZM262.79 57.672C266.822 57.672 270.375 56.776 273.447 54.984C276.519 53.128 278.919 50.504 280.647 47.112C282.375 43.72 283.238 39.784 283.238 35.304C283.238 30.824 282.375 26.92 280.647 23.592C278.919 20.2 276.519 17.608 273.447 15.816C270.375 14.024 266.822 13.128 262.79 13.128C258.758 13.128 255.174 14.024 252.038 15.816C248.966 17.608 246.567 20.2 244.839 23.592C243.111 26.92 242.247 30.824 242.247 35.304C242.247 39.784 243.111 43.72 244.839 47.112C246.567 50.504 248.966 53.128 252.038 54.984C255.174 56.776 258.758 57.672 262.79 57.672Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M341.621 69L326.837 42.888H320.501V69H307.061V1.99198H332.214C337.398 1.99198 341.813 2.91998 345.461 4.77598C349.109 6.56798 351.829 9.03198 353.621 12.168C355.477 15.24 356.405 18.696 356.405 22.536C356.405 26.952 355.125 30.952 352.565 34.536C350.005 38.056 346.198 40.488 341.142 41.832L357.173 69H341.621ZM320.501 32.808H331.733C335.381 32.808 338.101 31.944 339.893 30.216C341.685 28.424 342.582 25.96 342.582 22.824C342.582 19.752 341.685 17.384 339.893 15.72C338.101 13.992 335.381 13.128 331.733 13.128H320.501V32.808Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M432.812 1.99198V12.84H404.876V30.024H426.285V40.68H404.876V69H391.436V1.99198H432.812Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M473.447 69.672C467.175 69.672 461.415 68.2 456.167 65.256C450.919 62.312 446.759 58.248 443.687 53.064C440.615 47.816 439.079 41.896 439.079 35.304C439.079 28.776 440.615 22.92 443.687 17.736C446.759 12.488 450.919 8.39198 456.167 5.44798C461.415 2.50398 467.175 1.03198 473.447 1.03198C479.783 1.03198 485.543 2.50398 490.727 5.44798C495.975 8.39198 500.103 12.488 503.111 17.736C506.183 22.92 507.719 28.776 507.719 35.304C507.719 41.896 506.183 47.816 503.111 53.064C500.103 58.248 495.975 62.312 490.727 65.256C485.479 68.2 479.719 69.672 473.447 69.672ZM473.447 57.672C477.479 57.672 481.031 56.776 484.103 54.984C487.175 53.128 489.575 50.504 491.303 47.112C493.031 43.72 493.895 39.784 493.895 35.304C493.895 30.824 493.031 26.92 491.303 23.592C489.575 20.2 487.175 17.608 484.103 15.816C481.031 14.024 477.479 13.128 473.447 13.128C469.415 13.128 465.831 14.024 462.695 15.816C459.623 17.608 457.223 20.2 455.495 23.592C453.767 26.92 452.903 30.824 452.903 35.304C452.903 39.784 453.767 43.72 455.495 47.112C457.223 50.504 459.623 53.128 462.695 54.984C465.831 56.776 469.415 57.672 473.447 57.672Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M530.966 1.99198V43.464C530.966 48.008 532.15 51.496 534.518 53.928C536.886 56.296 540.214 57.48 544.502 57.48C548.854 57.48 552.214 56.296 554.582 53.928C556.95 51.496 558.134 48.008 558.134 43.464V1.99198H571.67V43.368C571.67 49.064 570.422 53.896 567.926 57.864C565.494 61.768 562.198 64.712 558.038 66.696C553.942 68.68 549.366 69.672 544.31 69.672C539.318 69.672 534.774 68.68 530.678 66.696C526.646 64.712 523.446 61.768 521.078 57.864C518.71 53.896 517.526 49.064 517.526 43.368V1.99198H530.966Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M634.575 80.808L624.399 68.616C621.583 69.32 618.703 69.672 615.759 69.672C609.487 69.672 603.727 68.2 598.479 65.256C593.231 62.312 589.071 58.248 585.999 53.064C582.927 47.816 581.391 41.896 581.391 35.304C581.391 28.776 582.927 22.92 585.999 17.736C589.071 12.488 593.231 8.39198 598.479 5.44798C603.727 2.50398 609.487 1.03198 615.759 1.03198C622.095 1.03198 627.855 2.50398 633.039 5.44798C638.287 8.39198 642.415 12.488 645.423 17.736C648.495 22.92 650.031 28.776 650.031 35.304C650.031 41.256 648.751 46.696 646.191 51.624C643.695 56.488 640.271 60.456 635.919 63.528L651.279 80.808H634.575ZM595.215 35.304C595.215 39.784 596.079 43.72 597.807 47.112C599.535 50.504 601.935 53.128 605.007 54.984C608.143 56.776 611.727 57.672 615.759 57.672C619.791 57.672 623.343 56.776 626.415 54.984C629.487 53.128 631.887 50.504 633.615 47.112C635.343 43.72 636.207 39.784 636.207 35.304C636.207 30.824 635.343 26.92 633.615 23.592C631.887 20.2 629.487 17.608 626.415 15.816C623.343 14.024 619.791 13.128 615.759 13.128C611.727 13.128 608.143 14.024 605.007 15.816C601.935 17.608 599.535 20.2 597.807 23.592C596.079 26.92 595.215 30.824 595.215 35.304Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M673.466 1.99198V43.464C673.466 48.008 674.65 51.496 677.018 53.928C679.386 56.296 682.714 57.48 687.002 57.48C691.354 57.48 694.714 56.296 697.082 53.928C699.45 51.496 700.634 48.008 700.634 43.464V1.99198H714.17V43.368C714.17 49.064 712.922 53.896 710.426 57.864C707.994 61.768 704.698 64.712 700.538 66.696C696.442 68.68 691.866 69.672 686.81 69.672C681.818 69.672 677.274 68.68 673.178 66.696C669.146 64.712 665.946 61.768 663.578 57.864C661.21 53.896 660.026 49.064 660.026 43.368V1.99198H673.466Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M740.595 12.84V29.64H763.155V40.296H740.595V58.056H766.035V69H727.155V1.89598H766.035V12.84H740.595Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M823.849 1.99198V12.84H805.993V69H792.553V12.84H774.697V1.99198H823.849Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M73.144 126.744L59.104 177H47.224L37.792 141.216L27.928 177L16.12 177.072L2.58399 126.744H13.384L22.24 165.768L32.464 126.744H43.696L53.344 165.552L62.272 126.744H73.144Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M116.806 156.192C116.806 157.632 116.71 158.928 116.518 160.08H87.3578C87.5978 162.96 88.6058 165.216 90.3818 166.848C92.1578 168.48 94.3418 169.296 96.9338 169.296C100.678 169.296 103.342 167.688 104.926 164.472H115.798C114.646 168.312 112.438 171.48 109.174 173.976C105.91 176.424 101.902 177.648 97.1498 177.648C93.3098 177.648 89.8538 176.808 86.7818 175.128C83.7578 173.4 81.3818 170.976 79.6538 167.856C77.9738 164.736 77.1338 161.136 77.1338 157.056C77.1338 152.928 77.9738 149.304 79.6538 146.184C81.3338 143.064 83.6858 140.664 86.7098 138.984C89.7338 137.304 93.2138 136.464 97.1498 136.464C100.942 136.464 104.326 137.28 107.302 138.912C110.326 140.544 112.654 142.872 114.286 145.896C115.966 148.872 116.806 152.304 116.806 156.192ZM106.366 153.312C106.318 150.72 105.382 148.656 103.558 147.12C101.734 145.536 99.5018 144.744 96.8618 144.744C94.3658 144.744 92.2538 145.512 90.5258 147.048C88.8458 148.536 87.8138 150.624 87.4298 153.312H106.366Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M134.243 142.944C135.539 141.024 137.315 139.464 139.571 138.264C141.875 137.064 144.491 136.464 147.419 136.464C150.827 136.464 153.899 137.304 156.635 138.984C159.419 140.664 161.603 143.064 163.187 146.184C164.819 149.256 165.635 152.832 165.635 156.912C165.635 160.992 164.819 164.616 163.187 167.784C161.603 170.904 159.419 173.328 156.635 175.056C153.899 176.784 150.827 177.648 147.419 177.648C144.443 177.648 141.827 177.072 139.571 175.92C137.363 174.72 135.587 173.184 134.243 171.312V177H124.163V123.72H134.243V142.944ZM155.339 156.912C155.339 154.512 154.835 152.448 153.827 150.72C152.867 148.944 151.571 147.6 149.939 146.688C148.355 145.776 146.627 145.32 144.755 145.32C142.931 145.32 141.203 145.8 139.571 146.76C137.987 147.672 136.691 149.016 135.683 150.792C134.723 152.568 134.243 154.656 134.243 157.056C134.243 159.456 134.723 161.544 135.683 163.32C136.691 165.096 137.987 166.464 139.571 167.424C141.203 168.336 142.931 168.792 144.755 168.792C146.627 168.792 148.355 168.312 149.939 167.352C151.571 166.392 152.867 165.024 153.827 163.248C154.835 161.472 155.339 159.36 155.339 156.912Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M207.684 126.744C212.964 126.744 217.596 127.776 221.58 129.84C225.612 131.904 228.708 134.856 230.868 138.696C233.076 142.488 234.18 146.904 234.18 151.944C234.18 156.984 233.076 161.4 230.868 165.192C228.708 168.936 225.612 171.84 221.58 173.904C217.596 175.968 212.964 177 207.684 177H190.116V126.744H207.684ZM207.324 168.432C212.604 168.432 216.684 166.992 219.564 164.112C222.444 161.232 223.884 157.176 223.884 151.944C223.884 146.712 222.444 142.632 219.564 139.704C216.684 136.728 212.604 135.24 207.324 135.24H200.196V168.432H207.324Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M278.806 156.192C278.806 157.632 278.71 158.928 278.518 160.08H249.358C249.598 162.96 250.606 165.216 252.382 166.848C254.158 168.48 256.342 169.296 258.934 169.296C262.678 169.296 265.342 167.688 266.926 164.472H277.798C276.646 168.312 274.438 171.48 271.174 173.976C267.91 176.424 263.902 177.648 259.15 177.648C255.31 177.648 251.854 176.808 248.782 175.128C245.758 173.4 243.382 170.976 241.654 167.856C239.974 164.736 239.134 161.136 239.134 157.056C239.134 152.928 239.974 149.304 241.654 146.184C243.334 143.064 245.686 140.664 248.71 138.984C251.734 137.304 255.214 136.464 259.15 136.464C262.942 136.464 266.326 137.28 269.302 138.912C272.326 140.544 274.654 142.872 276.286 145.896C277.966 148.872 278.806 152.304 278.806 156.192ZM268.366 153.312C268.318 150.72 267.382 148.656 265.558 147.12C263.734 145.536 261.502 144.744 258.862 144.744C256.366 144.744 254.254 145.512 252.526 147.048C250.846 148.536 249.814 150.624 249.43 153.312H268.366Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M302.795 167.712L312.875 137.112H323.603L308.843 177H296.603L281.915 137.112H292.715L302.795 167.712Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M366.345 156.192C366.345 157.632 366.249 158.928 366.057 160.08H336.897C337.137 162.96 338.145 165.216 339.921 166.848C341.697 168.48 343.881 169.296 346.473 169.296C350.217 169.296 352.881 167.688 354.465 164.472H365.337C364.185 168.312 361.977 171.48 358.713 173.976C355.449 176.424 351.441 177.648 346.689 177.648C342.849 177.648 339.393 176.808 336.321 175.128C333.297 173.4 330.921 170.976 329.193 167.856C327.513 164.736 326.673 161.136 326.673 157.056C326.673 152.928 327.513 149.304 329.193 146.184C330.873 143.064 333.225 140.664 336.249 138.984C339.273 137.304 342.753 136.464 346.689 136.464C350.481 136.464 353.865 137.28 356.841 138.912C359.865 140.544 362.193 142.872 363.825 145.896C365.505 148.872 366.345 152.304 366.345 156.192ZM355.905 153.312C355.857 150.72 354.921 148.656 353.097 147.12C351.273 145.536 349.041 144.744 346.401 144.744C343.905 144.744 341.793 145.512 340.065 147.048C338.385 148.536 337.353 150.624 336.969 153.312H355.905Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M383.782 123.72V177H373.702V123.72H383.782Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M411.453 177.648C407.613 177.648 404.157 176.808 401.085 175.128C398.013 173.4 395.589 170.976 393.813 167.856C392.085 164.736 391.221 161.136 391.221 157.056C391.221 152.976 392.109 149.376 393.885 146.256C395.709 143.136 398.181 140.736 401.301 139.056C404.421 137.328 407.901 136.464 411.741 136.464C415.581 136.464 419.061 137.328 422.181 139.056C425.301 140.736 427.749 143.136 429.525 146.256C431.349 149.376 432.261 152.976 432.261 157.056C432.261 161.136 431.325 164.736 429.453 167.856C427.629 170.976 425.133 173.4 421.965 175.128C418.845 176.808 415.341 177.648 411.453 177.648ZM411.453 168.864C413.277 168.864 414.981 168.432 416.565 167.568C418.197 166.656 419.493 165.312 420.453 163.536C421.413 161.76 421.893 159.6 421.893 157.056C421.893 153.264 420.885 150.36 418.869 148.344C416.901 146.28 414.477 145.248 411.597 145.248C408.717 145.248 406.293 146.28 404.325 148.344C402.405 150.36 401.445 153.264 401.445 157.056C401.445 160.848 402.381 163.776 404.253 165.84C406.173 167.856 408.573 168.864 411.453 168.864Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M449.736 142.872C451.032 141.048 452.808 139.536 455.064 138.336C457.368 137.088 459.983 136.464 462.911 136.464C466.319 136.464 469.392 137.304 472.128 138.984C474.912 140.664 477.096 143.064 478.68 146.184C480.312 149.256 481.128 152.832 481.128 156.912C481.128 160.992 480.312 164.616 478.68 167.784C477.096 170.904 474.912 173.328 472.128 175.056C469.392 176.784 466.319 177.648 462.911 177.648C459.983 177.648 457.391 177.048 455.135 175.848C452.927 174.648 451.128 173.136 449.736 171.312V196.008H439.655V137.112H449.736V142.872ZM470.832 156.912C470.832 154.512 470.327 152.448 469.319 150.72C468.359 148.944 467.063 147.6 465.431 146.688C463.847 145.776 462.119 145.32 460.247 145.32C458.423 145.32 456.696 145.8 455.064 146.76C453.48 147.672 452.184 149.016 451.176 150.792C450.216 152.568 449.736 154.656 449.736 157.056C449.736 159.456 450.216 161.544 451.176 163.32C452.184 165.096 453.48 166.464 455.064 167.424C456.696 168.336 458.423 168.792 460.247 168.792C462.119 168.792 463.847 168.312 465.431 167.352C467.063 166.392 468.359 165.024 469.319 163.248C470.327 161.472 470.832 159.36 470.832 156.912Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M525.532 156.192C525.532 157.632 525.436 158.928 525.244 160.08H496.084C496.324 162.96 497.332 165.216 499.108 166.848C500.884 168.48 503.068 169.296 505.66 169.296C509.404 169.296 512.068 167.688 513.652 164.472H524.524C523.372 168.312 521.164 171.48 517.9 173.976C514.636 176.424 510.628 177.648 505.876 177.648C502.036 177.648 498.58 176.808 495.508 175.128C492.484 173.4 490.108 170.976 488.38 167.856C486.7 164.736 485.86 161.136 485.86 157.056C485.86 152.928 486.7 149.304 488.38 146.184C490.06 143.064 492.412 140.664 495.436 138.984C498.46 137.304 501.94 136.464 505.876 136.464C509.668 136.464 513.052 137.28 516.028 138.912C519.052 140.544 521.38 142.872 523.012 145.896C524.692 148.872 525.532 152.304 525.532 156.192ZM515.092 153.312C515.044 150.72 514.108 148.656 512.284 147.12C510.46 145.536 508.228 144.744 505.588 144.744C503.092 144.744 500.98 145.512 499.252 147.048C497.572 148.536 496.54 150.624 496.156 153.312H515.092Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
              <path
                d="M542.97 143.304C544.266 141.192 545.946 139.536 548.01 138.336C550.122 137.136 552.522 136.536 555.21 136.536V147.12H552.546C549.378 147.12 546.978 147.864 545.346 149.352C543.762 150.84 542.97 153.432 542.97 157.128V177H532.89V137.112H542.97V143.304Z"
                stroke="#d9e1d3"
                stroke-width="2"
              />
            </svg>
            <div id="text">
              <div className="subtitle">
                Fullstack Developer // Web Designer // Artist
              </div>
              <div className="subtitle">Based in Marseille </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
