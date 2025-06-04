import React from 'react';
import { useLocation } from 'react-router-dom';
import '../pages-css/JobDetailPage.css';
import '../pages-css/JobDescriptionPage.css';
import { jobDescriptions } from '../data/jobDescriptions';

function JobDescriptionPage() {
  const location = useLocation();
  const jobId = location.state?.jobId;
  const jobName = location.state?.jobName || '직업 미지정';

  const data = jobDescriptions[jobId];

  return (
    <div className="JobDescriptionPage">
      <div className="JobDetail-top">
        <div className="SelectedJob">{jobName}</div>
      </div>

      {data ? (
        <>
          <div className="DescriptionCard">
            <div className="sub-title">직무 개요</div>
            <p>{data.summary}</p>
          </div>

          <div className="DescriptionCard">
            <div className="sub-title">주요 수행 업무</div>
            <ul>
              {data.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>

          <div className="DescriptionCard">
            <div className="sub-title">평균 연봉 및 전망</div>
            <ul>
              {data.salary.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>{data.outlook}</p>
          </div>
        </>
      ) : (
        <div className="DescriptionCard">
          <p>직업 정보가 없습니다.</p>
        </div>
      )}
    </div>
  );
}

export default JobDescriptionPage;