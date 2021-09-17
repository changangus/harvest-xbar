curl "https://api.harvestapp.com/v2/time_entries" \
  -H "Authorization: Bearer 2719680.pt.8S1Yry48sFx_5qPZ4_a650DfG2Z4-_mwykp-uQTpWTVDttVS0CWxYah1wM_-mOdLNOdUpJ9QbdZFmap1UjgI_Q" \
  -H "Harvest-Account-Id: 266954" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"user_id":3855900,"project_id":3073688,"task_id":1819355,"spent_date": "'$TODAY'","hours":1.0}'