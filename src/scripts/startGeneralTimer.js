const startTimer = require("../js/startTimer");

const data = {  
  "project_id": 3073665, 
  "task_id": 1819358, 
  "spent_date": new Date().toISOString().slice(0, 10), 
}

startTimer(data);