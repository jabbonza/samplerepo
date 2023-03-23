import {homepage, findStudents, findStudentsPost, addStudents} from './controller.js';

const router = ( app ) => {
    app.get('/', homepage);
    app.get('/find-students', findStudents);
    app.post('/find-students-post', findStudentsPost);
    app.post('/add-students', addStudents);
}

export default router;