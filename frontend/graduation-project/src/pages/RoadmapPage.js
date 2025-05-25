import React from 'react';
import { useLocation } from 'react-router-dom';
import '../pages-css/JobDetailPage.css';
import '../pages-css/RoadmapPage.css';

function RoadmapPage() {
  const location = useLocation();
  const jobId = location.state?.jobId || 'JOB001';
  const jobName = location.state?.jobName || '직업 미지정';

  const imageUrl = `${process.env.PUBLIC_URL}/img/roadmap-${jobId}.png`;

  return (
    <div className="RoadmapPage">
      <div className="JobDetail-top">
        <div className="SelectedJob">{jobName}</div>
      </div>

      <div className="RoadmapCard">
        <img src={imageUrl} alt="로드맵 이미지" className="roadmap-image" />
      </div>
    </div>
  );
}

export default RoadmapPage;
