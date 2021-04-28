/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-typos */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddReviewForm from './Add-Review-Form.jsx';

const AddReview = ({
  productId, reviewData, setReviewData, reviewMetaData, setReviewMetaData,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        Add Review
      </button>

      {(showModal)
        ? (
          <AddReviewForm
            productId={productId}
            reviewData={reviewData}
            setReviewData={setReviewData}
            reviewMetaData={reviewMetaData}
            setReviewMetaData={setReviewMetaData}
          />
        ) : null}
    </div>
  );
};

AddReview.propTypes = {
  productId: PropTypes.string.isRequired,
  reviewData: PropTypes.object.isRequired,
  setReviewData: PropTypes.func.isRequired,
  reviewMetaData: PropTypes.object.isRequired,
  setReviewMetaData: PropTypes.func.isRequired,
};

export default AddReview;
