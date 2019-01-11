import request from 'supertest'
import app from '../src/app'

describe('GET root', () => {
  test('Should respond to the GET root method', () => {
    return request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          message: 'Welcome to the Ready to rock Barcelona API'
        })
      })
  })
})

describe('GET Bands method', () => {
  test('Should respond to the GET bands method', () => {
    return request(app)
      .get('/bands')
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})

describe('GET Band by ID method', () => {
  test('It should respond with an existing band', () => {
    const id = 3995
    return request(app)
      .get(`/bands/${id}`)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
  test('It should respond with a non-existent band', () => {
    const id = 9999
    return request(app)
      .get(`/bands/${id}`)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          message: `No band matching with id=${id}`
        })
      })
  })
  test('It should respond with a not-a-number id', () => {
    const id = 'a'
    return request(app)
      .get(`/bands/${id}`)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          message: 'No band matching with id=NaN'
        })
      })
  })
})

describe('GET Bands Search Term method', () => {
  test('It should respond with a contained term', () => {
    return request(app)
      .get('/bands?q=amazon')
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
  test('It should respond with an unknown term', () => {
    return request(app)
      .get('/bands?q=dasdasdasdasdasdasd')
      .expect('Content-Type', /json/)
      .then(response => {
        const emptyResults = []
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(emptyResults)
      })
  })
})
