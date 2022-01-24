import React from 'react';
import MypageBox from "./mypageBox"

function myPageReviewBox({ reviewInfo }) {

    return (
        <div>
            <MypageBox 
                reviewInfo={reviewInfo}
            />
        </div>
    );
}

export default myPageReviewBox;