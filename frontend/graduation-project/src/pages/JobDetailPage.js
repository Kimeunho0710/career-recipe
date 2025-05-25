import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../pages-css/JobDetailPage.css';

function JobDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedJob = location.state?.job || { jobId: '', name: '직업 미지정' };

  const handleSubjectClick = () => {
    navigate('/major-select', {
      state: {
        jobId: selectedJob.jobId,
        jobName: selectedJob.name,
      },
    });
  };

  const handleLicenseClick = () => {
    navigate('/license-recommend', {
      state: {
        jobId: selectedJob.jobId,
        jobName: selectedJob.name, 
      },
    });
  };

  return (
    <div className="JobDetailPage">
      <div className="JobDetail-top">
        <div className="SelectedJob">{selectedJob.name}</div>
      </div>

      <div className="ButtonList">
        <button className="JobDetailButton" onClick={handleSubjectClick}>
          전공(선택) 추천
        </button>
        <button className="JobDetailButton">로드맵</button>
        <button className="JobDetailButton" onClick={handleLicenseClick}>
          자격증 추천
        </button>
        <button className="JobDetailButton">직업 상세 설명</button>
      </div>
    </div>
  );
}

export default JobDetailPage;