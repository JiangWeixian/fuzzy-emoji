import { fuzzysearch } from '../src'

describe('fuzzysearch', () => {
  test('search', () => {
    expect(fuzzysearch.search('love').slice(0, 10)).toMatchSnapshot()
  })
})
