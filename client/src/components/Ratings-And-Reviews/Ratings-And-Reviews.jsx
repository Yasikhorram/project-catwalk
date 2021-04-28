/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import RatingBreakdown from './Rating-Breakdown/Rating-Breakdown.jsx';
import SortReviews from './Sort-Reviews/Sort-Reviews.jsx';
import ReviewList from './Review-List/Review-List.jsx';
import Buttons from './Buttons/Buttons.jsx';

const RatingsAndReviews = ({ productId }) => {
  // pass down from App
  // productId = '23718';

  productId = '23146';
  // productId = '23156';

  const [reviewData, setReviewData] = useState(undefined);
  const [reviewMetaData, setReviewMetaData] = useState(undefined);
  const [displayReviewCount, setDisplayReviewCount] = useState(2);

  useEffect(() => {
    axios({
      url: `api/reviews?product_id=${productId}&count=20`,
      method: 'get',
    })
      .then(({ data }) => setReviewData(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    axios({
      url: `api/reviews/meta?product_id=${productId}`,
      method: 'get',
    })
      .then(({ data }) => setReviewMetaData(data))
      .catch(() => {});
  }, []);

  const renderComponents = () => (
    <div className="rr-container" key="rr-container">
      <div className="rr-product-breakdown">
        <RatingBreakdown
          className="rr-product-breakdown"
          reviewMetaData={reviewMetaData}
        />
      </div>
      <div className="rr-sort-buttons">
        <SortReviews
          displayReviewCount={displayReviewCount}
          reviewData={reviewData}
          setReviewData={setReviewData}
        />
      </div>
      <div className="rr-review-list">
        <ReviewList
          reviewData={reviewData}
          displayReviewCount={displayReviewCount}
        />
      </div>
      <div className="rr-buttons">
        <Buttons
          productId={productId}
          setReviewData={setReviewData}
          setReviewMetaData={setReviewMetaData}
          displayReviewCount={displayReviewCount}
          setDisplayReviewCount={setDisplayReviewCount}
        />
      </div>
    </div>
  );

  return (
    (reviewData, reviewMetaData) ? renderComponents() : null
  );
};

RatingsAndReviews.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default RatingsAndReviews;
