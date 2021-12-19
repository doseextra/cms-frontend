import React from 'react';
import './style.scss';

export default function Folder(): React.ReactElement {
  return (
    <div className="folder-default">
      <i className="custom-icon">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <path d="M68.657 6.343L63 12H7a4 4 0 0 0-4 4v62a4 4 0 0 0 4 4h104a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H74.314a8 8 0 0 0-5.657 2.343z" id="b" />
            <filter x="-5.5%" y="-5.9%" width="111.1%" height="115.9%" filterUnits="objectBoundingBox" id="a">
              <feOffset dy=".3" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur stdDeviation=".45" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.108000002 0" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
              <feOffset dy="1.6" in="SourceAlpha" result="shadowOffsetOuter2" />
              <feGaussianBlur stdDeviation="1.8" in="shadowOffsetOuter2" result="shadowBlurOuter2" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.131999998 0" in="shadowBlurOuter2" result="shadowMatrixOuter2" />
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1" />
                <feMergeNode in="shadowMatrixOuter2" />
              </feMerge>
            </filter>
          </defs>
          <g transform="matrix(-1 0 0 1 118 0)" fill="none" fillRule="evenodd">
            <use fill="#000" filter="url(#a)" xlinkHref="#b" />
            <use fill="#FFB900" xlinkHref="#b" />
          </g>
        </svg>
      </i>
      <i className="custom-icon">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="44.291%" y1="0%" x2="44.291%" y2="100%" id="a">
              <stop stopColor="#FFF" stopOpacity="0" offset="0%" />
              <stop stopColor="#FFD75E" stopOpacity=".3" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <path d="M49.343 17.657L55 12h56a4 4 0 0 1 4 4v62a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V20h40.686a8 8 0 0 0 5.657-2.343z" fill="#FFD75E" fillRule="nonzero" />
            <path d="M65.657 5.657L60 0H4a4 4 0 0 0-4 4v62a4 4 0 0 0 4 4h104a4 4 0 0 0 4-4V8H71.314a8 8 0 0 1-5.657-2.343z" fill="url(#a)" fillRule="nonzero" style={{ mixBlendMode: 'multiply' }} transform="matrix(-1 0 0 1 115 12)" />
            <path d="M3 78h112H3zm111.299 2.263A3.996 3.996 0 0 1 111 82H7a3.996 3.996 0 0 1-3.3-1.738l1.295.484A4 4 0 0 0 6.397 81h105.211a4 4 0 0 0 1.405-.255l1.286-.482z" fill="#E67628" />
            <path d="M49.343 17.657L55 12h1.5l-6.364 6.364A9 9 0 0 1 43.772 21H3v-1h40.686a8 8 0 0 0 5.657-2.343z" fill="#FFF" fillRule="nonzero" opacity=".4" />
          </g>
        </svg>
      </i>
    </div>
  );
};
