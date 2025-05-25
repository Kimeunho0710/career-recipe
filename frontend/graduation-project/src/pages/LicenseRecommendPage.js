import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../pages-css/LicenseRecommendPage.css';
import '../pages-css/JobDetailPage.css';

function LicenseRecommendPage() {
  const location = useLocation();
  const jobId = location.state?.jobId || 'JOB001';
  const jobName = location.state?.jobName || '직업 미지정';

  const cleanJobId = jobId.replace('.png', '');
  const imageUrl = `${process.env.PUBLIC_URL}/img/${cleanJobId}.png`;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="LicenseRecommendPage">
      <div className="JobDetail-top">
        <div className="SelectedJob">{jobName}</div>
      </div>

      <div className="LicenseCard">
        <img
          src={imageUrl}
          alt="자격증 이미지"
          className="license-image"
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: 'zoom-in' }}
        />
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <img src={imageUrl} alt="확대된 자격증 이미지" className="modal-image" />
        </div>
      )}
    </div>
  );
}

export default LicenseRecommendPage;
