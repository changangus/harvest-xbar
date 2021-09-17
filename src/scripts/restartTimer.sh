curl "https://api.harvestapp.com/v2/time_entries/$TASK_ID/restart" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Harvest-Account-Id: $ACCOUNT_ID" \
  -H "User-Agent: MyApp (yourname@example.com)" \
  -X PATCH