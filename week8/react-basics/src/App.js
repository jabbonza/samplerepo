import { useState } from 'react';
import SubjectList from "./SubjectList";
import './assets/styles/stylesheet.css';


function App(){


    const [CMSCSubjects, setCMSCSubjects] = useState([
        { code: "CMSC100", description: "Web Programming", id: 1 },
        { code: "CMSC150", description: "Scientific Computation", id: 2 },
        { code: "CMSC22", description: "Object-oriented Programming", id: 3 },
    ]);


    const [CHEMSubjects, setCHEMSubjects] = useState([
        { code: "CMSC100", description: "Web Programming", id: 1 },
        { code: "CMSC150", description: "Scientific Computation", id: 2 },
        { code: "CMSC22", description: "Object-oriented Programming", id: 3 },
    ]);




    function eventHandler(){
        var courseCode = document.getElementById("courseCode").value;
        var courseDesc = document.getElementById("courseDesc").value;
        var courseId = document.getElementById("courseId").value;
        var CScourseCategory = document.getElementById('CScourseCategory');
        var CHcourseCategory = document.getElementById('CHcourseCategory');


        var newSubjects = {
            "code": courseCode,
            "description": courseDesc,
            "id": courseId,
        }
        if(CScourseCategory.checked){
            // console.log(CScourseCategory.value);
            setCMSCSubjects([...CMSCSubjects, newSubjects]);
        }else if(CHcourseCategory.checked){
            // console.log(CHcourseCategory.value);
            setCHEMSubjects([...CHEMSubjects, newSubjects]);
        }


       
    }


    return(
        <div className="wrapper">
            <h1 className="title">List of Courses</h1>
            {/* forms */}
            <div className="form">
                <label htmlFor="courseCode">Course Code: </label>
                <input type="text" placeholder="Course Code" id="courseCode"/> <br />
                <label htmlFor="courseDesc">Description: </label>
                <input type="text" placeholder="Course Description" id="courseDesc"/> <br />
                <label htmlFor="courseId">Course ID: </label>
                <input type="text" placeholder="ID" id="courseId"/><br />
                <label htmlFor="courseCategory">Category: </label>
                <input type="radio" name="category" id="CScourseCategory" value="CMSC"/><label>Computer Science</label>
                <input type="radio" name="category" id="CHcourseCategory" value="CHEM"/><label>Chemistry</label>
                <br />
                <button onClick= {() => eventHandler()}>ADD THIS COURSE</button>
            </div>
            {/* forms */}
            <SubjectList className="list" data={CMSCSubjects} title={'Computer Science Subjects'}/>
            <SubjectList className="list" data={CHEMSubjects} title={'Chemistry Subjects'}/>
        </div>
    );
}


export default App;


