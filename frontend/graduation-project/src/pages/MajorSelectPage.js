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

    const departments = ['전체', '컴퓨터SW', '미디어SW', '정보통신', '정보보호', '데이터과학부'];
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
            .then((res) => {
                setSubjects(res.data);
                fetchFavorites(res.data); // 즐겨찾기 상태 동기화
            })
            .catch((err) => console.error('전공 과목 추천 조회 실패:', err));
    }, [jobId, selectedDept, selectedGrade, selectedSemester]);

    const fetchFavorites = async (subjectList) => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo) return;

        try {
            const res = await axios.get(`/api/favorites/${userInfo.userId}`);
            const favSet = {};
            res.data.forEach((fav) => {
                subjectList.forEach((subject, idx) => {
                    if (
                        subject.subjectId === fav.subjectId &&
                        subject.department === fav.department
                    ) {
                        favSet[idx] = true;
                    }
                });
            });
            setFavorites(favSet);
        } catch (err) {
            console.error("즐겨찾기 목록 불러오기 실패:", err);
        }
    };


    const addFavorite = async (subject) => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo) return;

        const subjectId = subject.subject_id;
        const department = subject.department;
        console.log("department:", subject.department);

        try {
            await axios.post(`/api/favorites`, {
                userId: userInfo.userId,
                subjectId,
                department,
            });
            console.log("즐겨찾기 등록 성공");
        } catch (err) {
            console.error("즐겨찾기 등록 실패", err.response?.data || err.message);
        }
    };


    const removeFavorite = async (subject) => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo) return;

        const subjectId = subject.subject_id; // 또는 subject.subject_id.subjectId
        const department = subject.department;

        console.log("삭제 요청 ID:", subjectId);
        console.log("삭제 요청 Dept:", department);

        try {
            await axios.delete(`/api/favorites`, {
                data: {
                    userId: userInfo.userId,
                    subjectId,
                    department,
                },
            });
            console.log("즐겨찾기 해제 성공");
        } catch (err) {
            console.error("즐겨찾기 해제 실패", err.response?.data || err.message);
        }
    };





    const toggleFavorite = async (index) => {
        const subject = subjects[index];
        console.log("subject 객체 확인:", subject);
        const isFavorited = favorites[index];

        if (isFavorited) {
            await removeFavorite(subject);
        } else {
            await addFavorite(subject);
        }

        setFavorites((prev) => ({ ...prev, [index]: !prev[index] }));
    };

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

    return (
        <div className="MajorSelectPage">
            <div className="JobDetail-top">
                <div className="SelectedJob">{jobName}</div>
            </div>

            <div className="FilterBar">
                {[{ label: selectedDept, list: departments, handler: handleDeptSelect, toggle: () => setShowDeptList(!showDeptList), show: showDeptList },
                { label: selectedGrade, list: grades, handler: handleGradeSelect, toggle: () => setShowGradeList(!showGradeList), show: showGradeList },
                { label: selectedSemester, list: semesters, handler: handleSemesterSelect, toggle: () => setShowSemesterList(!showSemesterList), show: showSemesterList }
                ].map(({ label, list, handler, toggle, show }, idx) => (
                    <div className="FilterDropdown" key={idx}>
                        <button className="FilterButton" onClick={toggle}>
                            <div>{label}</div>
                            <div>⬇</div>
                        </button>
                        {show && (
                            <div className="Dropdown">
                                {list.map((item, i) => (
                                    <div className="DropdownItem" key={i} onClick={() => handler(item)}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
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
