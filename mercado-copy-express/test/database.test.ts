import * as NeDB from 'nedb'
import Nedb = require('nedb')

let database: Nedb<any>;

describe('Database', () => {
  const dummyObject = { dummy: "object" }

  beforeAll(() => {
    database = new NeDB('./data');
    database.loadDatabase();
  })

  describe('when inserting', () => {
    it('should return expected results', () => {
      database.insert(dummyObject, ( (err: any, document: any) => {
        expect(err).toBeUndefined()
        expect(document).toEqual(dummyObject)
      }))
    })
  })

  describe('when finding', () => {
    it('should return expected results', () => {
      database.find(dummyObject, ( (err: any, document: any) => {
        expect(err).toBeUndefined()
        expect(document).toEqual([dummyObject])
      }))
    })
  })

  describe('when removing', () => {
    it('should return expected results', () => {
      database.remove(dummyObject, ( (err: any, document: any) => {
        expect(err).toBeUndefined()
        expect(document).toEqual(1)
      }))
    })
  })
})