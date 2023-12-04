import { setupServer } from 'msw/node'
import { handlers } from './handlers'
 
export const server = setupServer(...handlers)

server.events.on('request:start', ({ request }) => {
  console.log('MSW - request:start event triggered', request.method, request.url)
})

server.events.on('request:match', () => {
  console.log('MSW - request:match event triggered')
})

server.events.on('request:unhandled', () => {
  console.log('MSW - request:unhandled event triggered')
})

server.events.on('request:end', () => {
  console.log('MSW - request:end event triggered')
})

server.events.on('response:mocked', () => {
  console.log('MSW - response:mocked event triggered')
})

server.events.on('response:bypass', () => {
  console.log('MSW - response:bypass event triggered')
})
