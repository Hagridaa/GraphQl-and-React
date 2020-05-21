module.exports = {
    "development": {
      "username": "root",
      "password": "root",
      "database": "graphbook_dev",
      "host": "localhost",
      "dialect": "mysql",
      "operatorsAliases": false,
      "pool": {
        "max": 5,
        "min": 0,
        "acquire": 30000,
        "idle": 10000
      }
    },
    "production": {
      "host": "graphbookdb",
      "username": "root",
      "password": "root",
      "database": "graphbook_dev",
      "logging": false,
      "dialect": "mysql",
      "operatorsAliases": false,
      "pool": {
          "max": 5,
          "min": 0,
          "acquire": 30000,
          "idle": 10000
      }
    }
  }