import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get(
    // The "/pets" string is a path predicate.
    // Only the GET requests whose path matches
    // the "/pets" string will be intercepted.
    'http://localhost:8080/pets',
    // The function below is a "resolver" function.
    // It accepts a bunch of information about the
    // intercepted request, and decides how to handle it.
    ({ request, params, cookies }) => {
      console.log('Handler for /pets was reached.')
      return HttpResponse.json(['Tom', 'Jerry', 'Spike'])
    }
  )
]
