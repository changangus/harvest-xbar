curl "https://api.harvestapp.com/v2/time_entries" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Harvest-Account-Id: $ACCOUNT_ID" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"user_id": 3855900, "project_id": '$PROJECT_ID',"task_id": '$TASK_ID',"spent_date":'$(date '%Y-%m-%d')'}'
  