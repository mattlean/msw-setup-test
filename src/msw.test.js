import { server } from './mocks/node'
 
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('MSW returns expected JSON response', async () => {
  const res = await fetch('/pets')
  const data = await res.json()

  expect(data).toEqual(['Tom', 'Jerry', 'Spike'])
})
