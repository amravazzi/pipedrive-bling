// Update with your config settings.

module.exports = {
  defaultEnv: process.env.NODE_ENV,
  dev: {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    seeds: {
      directory: '../database/seeds'
    },
    migrations: {
      client: 'mysql',
      directory: '../database/migrations'
    }
  },

  test: {
    client: 'mysql',
  	connection: {
  	    host: process.env.DB_HOST,
  	    user: process.env.DB_USERNAME,
  	    password: process.env.DB_PASSWORD,
  	    database: process.env.DB_DATABASE_TEST
  	},
    seeds: {
      directory: '../tests/seeds'
    },
    migrations: {
      client: 'mysql',
      directory: '../database/migrations'
    }
  }
};
