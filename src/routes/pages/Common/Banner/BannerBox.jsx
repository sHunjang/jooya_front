import React from "react";
import './BannerBox.css';

export const BannerBox = ({

    bannerClick,

}) => {
    return (
        <div className="register-banner-box" onClick={bannerClick}>지금 가입하고,
            <span style={{ color: '#fa709a', fontWeight: '700' }}>
                1만코인
            </span>
            받으세요!
        </div>
    )
}