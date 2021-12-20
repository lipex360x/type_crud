import { createConnections } from 'typeorm'
import promiseRetry from '@shared/utils/promiseRetry'

class OrmConnect {
  async execute(): Promise<void> {
    try {
      const connect = await createConnections()
      const { database } = connect[0].options

      console.log(`Connected to database ${database}`)
    } catch (error) {
      return promiseRetry({
        maxAttempt: 5,
        terminalMessage: 'Trying to connect to database',
        timeToRetry: 2000,
        functionRetry: () => this.execute(),
      })
    }
  }
}

export default new OrmConnect().execute()
