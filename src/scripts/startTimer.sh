curl "https://api.harvestapp.com/v2/time_entries" \
  -H "Authorization: Bearer $1" \
  -H "Harvest-Account-Id: $2" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"user_id": 3855900, "project_id": '$3',"task_id": '$4',"spent_date":"'$5'"}'
  
