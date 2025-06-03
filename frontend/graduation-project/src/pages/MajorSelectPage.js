import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../pages-css/MajorSelectPage.css';
import '../pages-css/JobDetailPage.css';

function MajorSelectPage() {
  const location = useLocation();
  const jobId = location.state?.jobId;
  const jobName = location.state?.jobName || '직업 미지정';

  const [showDeptList, setShowDeptList] = useState(false);
  const [showGradeList, setShowGradeList] = useState(false);
  const [showSemesterList, setShowSemesterList] = useState(false);
  const [selectedDept, setSelectedDept] = useState('전체');
  const [selectedGrade, setSelectedGrade] = useState('전체');
  const [selectedSemester, setSelectedSemester] = useState('전체');
  const [subjects, setSubjects] = useState([]);
  const [favorites, setFavorites] = useState({});

  const departments = [
    '전체',
    '컴퓨터SW',
    '미디어SW',
    '정보통신',
    '정보보호',
    '데이터과학부',
  ];

  const grades = ['전체', '1학년', '2학년', '3학년', '4학년'];
  const semesters = ['전체', '1학기', '2학기'];

  useEffect(() => {
    if (!jobId) return;

    const department = selectedDept === '전체' ? '' : selectedDept;
    const grade = selectedGrade === '전체' ? '' : parseInt(selectedGrade.charAt(0));
    const semester_id = selectedSemester === '전체' ? '' : parseInt(selectedSemester.charAt(0));

    axios
      .get(`/api/jobs/${jobId}/subjects`, {
        params: { department, grade, semester_id },
      })
      .then((res) => setSubjects(res.data))
      .catch((err) => console.error('전공 과목 추천 조회 실패:', err));
  }, [jobId, selectedDept, selectedGrade, selectedSemester]);

  const handleDeptSelect = (dept) => {
    setSelectedDept(dept);
    setShowDeptList(false);
  };

  const handleGradeSelect = (grade) => {
    setSelectedGrade(grade);
    setShowGradeList(false);
  };

  const handleSemesterSelect = (sem) => {
    setSelectedSemester(sem);
    setShowSemesterList(false);
  };

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="MajorSelectPage">
      <div className="JobDetail-top">
        <div className="SelectedJob">{jobName}</div>
      </div>

      <div className="FilterBar">
        <div className="FilterDropdown">
          <button className="FilterButton" onClick={() => setShowDeptList(!showDeptList)}>
            <div>{selectedDept}</div>
            <div>⬇</div>
          </button>
          {showDeptList && (
            <div className="Dropdown">
              {departments.map((dept, i) => (
                <div className="DropdownItem" key={i} onClick={() => handleDeptSelect(dept)}>
                  {dept}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="FilterDropdown">
          <button className="FilterButton" onClick={() => setShowGradeList(!showGradeList)}>
            <div>{selectedGrade}</div>
            <div>⬇</div>
          </button>
          {showGradeList && (
            <div className="Dropdown">
              {grades.map((grade, i) => (
                <div className="DropdownItem" key={i} onClick={() => handleGradeSelect(grade)}>
                  {grade}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="FilterDropdown">
          <button className="FilterButton" onClick={() => setShowSemesterList(!showSemesterList)}>
            <div>{selectedSemester}</div>
            <div>⬇</div>
          </button>
          {showSemesterList && (
            <div className="Dropdown">
              {semesters.map((sem, i) => (
                <div className="DropdownItem" key={i} onClick={() => handleSemesterSelect(sem)}>
                  {sem}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="SubjectList">
        {subjects.length === 0 ? (
          <div className="NoSubjects">추천 과목이 없습니다.</div>
        ) : (
          subjects.map((subject, index) => (
            <div className="SubjectItem" key={index}>
              <div className="SubjectInfo">{subject.subject_name}</div>
              <div className="Star" onClick={() => toggleFavorite(index)}>
                <img
                  src={favorites[index] ? '/star_full.png' : '/star.png'}
                  alt="즐겨찾기"
                  className="StarImage"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MajorSelectPage;