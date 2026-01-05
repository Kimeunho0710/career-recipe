import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages-css/JobSelectPage.css';

function JobSelectPage() {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState('');

  const jobList = [
    { jobId: 'JOB001', jobName: '백엔드 개발자' },
    { jobId: 'JOB002', jobName: '프론트엔드 개발자' },
    { jobId: 'JOB003', jobName: '게임 개발자' },
    { jobId: 'JOB004', jobName: '임베디드 개발자' },
    { jobId: 'JOB005', jobName: '정보보안 전문가' },
    { jobId: 'JOB006', jobName: '네트워크 및 시스템 엔지니어' },
    { jobId: 'JOB007', jobName: '데이터 엔지니어' },
    { jobId: 'JOB008', jobName: '데이터 분석가' },
    { jobId: 'JOB009', jobName: 'AI 엔지니어' },
    { jobId: 'JOB010', jobName: '데이터 사이언티스트' },
    { jobId: 'JOB011', jobName: '클라우드 엔지니어' },
    { jobId: 'JOB012', jobName: 'UI/UX 디자이너' },
    { jobId: 'JOB013', jobName: '빅데이터 엔지니어' },
  ];

  const handleJobClick = (job) => {
    setSelectedJob(job.jobName);
    navigate('/job-detail', {
      state: {
        job: {
          jobId: job.jobId,
          name: job.jobName,
        },
      },
    });
  };

  return (
    <div className="JobSelectPage">
      <div className="JobSelect-top">
        <div className="JobSelect-category">직업 목록</div>
      </div>

      <div className="JobSelect-list">
        {jobList.map((job, index) => (
          <button
            key={index}
            className={`JobSelect-button ${
              selectedJob === job.jobName ? 'selected' : ''
            }`}
            onClick={() => handleJobClick(job)}
          >
            {job.jobName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JobSelectPage;