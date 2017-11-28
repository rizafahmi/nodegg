const app = require('./app')
const request = require('supertest')

test('/api/B 123 CD returns object', async () => {
  const response = await request(app).get('/api/B 123 CD')
  expect(response.body).toEqual({ number: 123 })
})
