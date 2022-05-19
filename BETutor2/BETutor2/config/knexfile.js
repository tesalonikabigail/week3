module.exports = {
  development: {
      client: 'mysql',
      connection: {
      host: '127.0.0.1', //localhost
      user: 'root', // replace with your mysql username
      password: 'immanuel245', // replace with your mysql password
      database: 'be2-tutorial'
    },
    debug: true,
    pool: {
      min: 2,
      max: 5
    }
  }
};