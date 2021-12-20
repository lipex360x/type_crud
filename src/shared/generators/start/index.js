module.exports = {
  description: 'Start Project (Just once)',
  prompts: [
    {
      type: 'input',
      name: 'projectName',
      message: 'Project Name',
      validate: value => {
        if (!value) {
          return 'Project Name is required'
        }
        return true
      }
    },

    {
      type: 'input',
      name: 'dbUser',
      message: 'Postgres user name',
      validate: value => {
        if (!value) {
          return 'Postgres user name is required'
        }
        return true
      }
    },

    {
      type: 'input',
      name: 'dbPass',
      message: 'Postgres password',
      validate: value => {
        if (!value) {
          return 'Postgres password is required'
        }
        return true
      }
    },

    {
      type: 'input',
      name: 'dbTable',
      message: 'Postgres database name',
      validate: value => {
        if (!value) {
          return 'Postgres database name is required'
        }
        return true
      }
    },

    {
      type: 'input',
      name: 'jwtToken',
      message: 'Token JWT',
      validate: value => {
        if (!value) {
          return 'Token JWT is required'
        }
        return true
      }
    },

    {
      type: 'input',
      name: 'jwtExpires',
      message: 'Token JWT Expire Time',
      default: '7d',
      validate: value => {
        if (!value) {
          return 'Token JWT is required'
        }
        return true
      }
    }
  ],

  actions: data => {
    let action = [
      {
        type: 'add',
        path: '../../../.env',
        templateFile: './start/templates/env.hbs'
      },

      {
        type: 'add',
        path: '../../../ormconfig.json',
        templateFile: './start/templates/ormconfig.hbs'
      },
      {
        type: 'add',
        path: '../../../docker-compose.yml',
        templateFile: './start/templates/docker-compose.hbs'
      }

    ]

    return action
  }
}
