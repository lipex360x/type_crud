import app from './app'

const apiServer = app.listen(process.env.API_PORT, () => {
  console.log(`\nš API Started on port ${process.env.API_PORT} \nš Check Hello Message at ${process.env.API_URL}:${process.env.API_PORT}/hello`)
})

process.on('SIGINT', () => {
  console.log('\n\nā API Stopped')
  apiServer.close()
  process.exit()
})
