curl "https://api.harvestapp.com/v2/time_entries/$1/stop" \
  -H "Authorization: Bearer $2" \
  -H "Harvest-Account-Id: $3" \
  -H "User-Agent: MyApp (yourname@example.com)" \
  -X PATCH