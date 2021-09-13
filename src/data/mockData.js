const mockDirectedLearningResponse = {
  "time_entries": [
      {
          "id": 1591671816,
          "spent_date": "2021-09-09",
          "hours": 1.0,
          "hours_without_timer": 1.0,
          "rounded_hours": 1.0,
          "notes": null,
          "is_locked": false,
          "locked_reason": null,
          "is_closed": false,
          "is_billed": false,
          "timer_started_at": null,
          "started_time": null,
          "ended_time": null,
          "is_running": false,
          "billable": false,
          "budgeted": false,
          "billable_rate": null,
          "cost_rate": null,
          "created_at": "2021-09-10T02:13:32Z",
          "updated_at": "2021-09-10T02:13:32Z",
          "user": {
              "id": 3855900,
              "name": "Angus Chang"
          },
          "client": {
              "id": 1446704,
              "name": "Sparkbox Apprentice",
              "currency": "USD"
          },
          "project": {
              "id": 3073688,
              "name": "APP - Directed Learning",
              "code": ""
          },
          "task": {
              "id": 1819355,
              "name": "CodeSchool"
          },
          "user_assignment": {
              "id": 295842860,
              "is_project_manager": false,
              "is_active": true,
              "use_default_rates": true,
              "budget": null,
              "created_at": "2021-07-08T19:02:55Z",
              "updated_at": "2021-07-08T19:02:55Z",
              "hourly_rate": null
          },
          "task_assignment": {
              "id": 31945649,
              "billable": false,
              "is_active": true,
              "created_at": "2013-01-15T20:36:58Z",
              "updated_at": "2013-01-15T20:36:58Z",
              "hourly_rate": null,
              "budget": null
          },
          "invoice": null,
          "external_reference": null
      }
  ],
  "per_page": 1,
  "total_pages": 19,
  "total_entries": 19,
  "next_page": 2,
  "previous_page": null,
  "page": 1,
  "links": {
      "first": "https://api.harvestapp.com/v2/time_entries?page=1&per_page=1&project_id=3073688&ref=first",
      "next": "https://api.harvestapp.com/v2/time_entries?page=2&per_page=1&project_id=3073688&ref=next",
      "previous": null,
      "last": "https://api.harvestapp.com/v2/time_entries?page=19&per_page=1&project_id=3073688&ref=last"
  }
}

mockPairingResponse = {
  "time_entries": [
      {
          "id": 1591671854,
          "spent_date": "2021-09-09",
          "hours": 2.0,
          "hours_without_timer": 2.0,
          "rounded_hours": 2.0,
          "notes": "Paired with:\nSheridan - Semantic HTML, Accessibility \nNatalie - Demo/presentation prep\nTravis - SVG troubleshooting and styles \nJordan - Orthogonality, breakdown of xbar, and next steps for the applet ",
          "is_locked": false,
          "locked_reason": null,
          "is_closed": false,
          "is_billed": false,
          "timer_started_at": null,
          "started_time": null,
          "ended_time": null,
          "is_running": false,
          "billable": false,
          "budgeted": false,
          "billable_rate": null,
          "cost_rate": null,
          "created_at": "2021-09-10T02:13:39Z",
          "updated_at": "2021-09-10T02:16:26Z",
          "user": {
              "id": 3855900,
              "name": "Angus Chang"
          },
          "client": {
              "id": 1446704,
              "name": "Sparkbox Apprentice",
              "currency": "USD"
          },
          "project": {
              "id": 3073697,
              "name": "APP - Pairing",
              "code": ""
          },
          "task": {
              "id": 1629017,
              "name": "Development"
          },
          "user_assignment": {
              "id": 295842862,
              "is_project_manager": false,
              "is_active": true,
              "use_default_rates": true,
              "budget": null,
              "created_at": "2021-07-08T19:02:55Z",
              "updated_at": "2021-07-08T19:02:55Z",
              "hourly_rate": null
          },
          "task_assignment": {
              "id": 31935356,
              "billable": false,
              "is_active": true,
              "created_at": "2013-01-15T18:10:34Z",
              "updated_at": "2013-01-15T18:10:52Z",
              "hourly_rate": null,
              "budget": null
          },
          "invoice": null,
          "external_reference": null
      }
  ],
  "per_page": 1,
  "total_pages": 33,
  "total_entries": 33,
  "next_page": 2,
  "previous_page": null,
  "page": 1,
  "links": {
      "first": "https://api.harvestapp.com/v2/time_entries?page=1&per_page=1&project_id=3073697&ref=first",
      "next": "https://api.harvestapp.com/v2/time_entries?page=2&per_page=1&project_id=3073697&ref=next",
      "previous": null,
      "last": "https://api.harvestapp.com/v2/time_entries?page=33&per_page=1&project_id=3073697&ref=last"
  }
}

const mockGeneralResponse = {
  "time_entries": [
      {
          "id": 1591671852,
          "spent_date": "2021-09-09",
          "hours": 5.0,
          "hours_without_timer": 5.0,
          "rounded_hours": 5.0,
          "notes": null,
          "is_locked": false,
          "locked_reason": null,
          "is_closed": false,
          "is_billed": false,
          "timer_started_at": null,
          "started_time": null,
          "ended_time": null,
          "is_running": false,
          "billable": false,
          "budgeted": false,
          "billable_rate": null,
          "cost_rate": null,
          "created_at": "2021-09-10T02:13:39Z",
          "updated_at": "2021-09-10T02:13:39Z",
          "user": {
              "id": 3855900,
              "name": "Angus Chang"
          },
          "client": {
              "id": 1446704,
              "name": "Sparkbox Apprentice",
              "currency": "USD"
          },
          "project": {
              "id": 3073665,
              "name": "APP - General Time",
              "code": ""
          },
          "task": {
              "id": 1819358,
              "name": "Other"
          },
          "user_assignment": {
              "id": 295842861,
              "is_project_manager": false,
              "is_active": true,
              "use_default_rates": true,
              "budget": null,
              "created_at": "2021-07-08T19:02:55Z",
              "updated_at": "2021-07-08T19:02:55Z",
              "hourly_rate": null
          },
          "task_assignment": {
              "id": 31945816,
              "billable": false,
              "is_active": true,
              "created_at": "2013-01-15T20:40:53Z",
              "updated_at": "2013-01-15T20:40:53Z",
              "hourly_rate": null,
              "budget": null
          },
          "invoice": null,
          "external_reference": null
      }
  ],
  "per_page": 1,
  "total_pages": 44,
  "total_entries": 44,
  "next_page": 2,
  "previous_page": null,
  "page": 1,
  "links": {
      "first": "https://api.harvestapp.com/v2/time_entries?page=1&per_page=1&project_id=3073665&ref=first",
      "next": "https://api.harvestapp.com/v2/time_entries?page=2&per_page=1&project_id=3073665&ref=next",
      "previous": null,
      "last": "https://api.harvestapp.com/v2/time_entries?page=44&per_page=1&project_id=3073665&ref=last"
  }
}

module.exports = {
  mockDirectedLearningResponse,
  mockPairingResponse,
  mockGeneralResponse
}