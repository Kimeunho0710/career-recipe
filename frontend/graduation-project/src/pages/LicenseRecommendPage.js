import React from 'react';
import { useLocation } from 'react-router-dom';
import '../pages-css/LicenseRecommendPage.css';
import '../pages-css/JobDetailPage.css'; // JobDetail-top, SelectedJob 스타일 재사용

function LicenseRecommendPage() {
  const location = useLocation();

  const jobId = location.state?.jobId || 'JOB001';
  const jobName = location.state?.jobName || '직업 미지정';

  const cleanJobId = jobId.replace('.png', '');
  const imageUrl = `${process.env.PUBLIC_URL}/img/${cleanJobId}.png`;

  console.log("jobId:", jobId);
  console.log("jobName:", jobName);
  console.log("imageUrl:", imageUrl);

  return (
    <div className="LicenseRecommendPage">
      <div className="JobDetail-top">
        <div className="SelectedJob">{jobName}</div>
      </div>

      <div className="LicenseCard">
        <img src={imageUrl} alt="자격증 이미지" className="license-image" />
      </div>
    </div>
  );
}

export default LicenseRecommendPage;