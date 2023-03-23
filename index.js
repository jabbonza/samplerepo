import express from 'express';

const app = express();

// Do not forget these codes
app.use(express.urlencoded({extended:true}));
app.use(express.json());         

import router from './router.js';
router(app);
console.log("Server is now running on port 3000")
app.listen(3000);