import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../pages-css/JobDetailPage.css';
import '../pages-css/RoadmapPage.css';

function RoadmapPage() {
  const location = useLocation();
  const jobId = location.state?.jobId || 'JOB001';
  const jobName = location.state?.jobName || '직업 미지정';

  const imageUrl = `${process.env.PUBLIC_URL}/img/roadmap-${jobId}.png`;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="RoadmapPage">
      <div className="JobDetail-top">
        <div className="SelectedJob">{jobName}</div>
      </div>

      <div className="RoadmapCard">
        <img
          src={imageUrl}
          alt="로드맵 이미지"
          className="roadmap-image"
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: 'zoom-in' }}
        />
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <img
            src={imageUrl}
            alt="확대된 로드맵 이미지"
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
}

export default RoadmapPage;