import Fuzzysearch from 'fuzzy-search'
import { gemoji } from 'gemoji'

export const fuzzysearch = new Fuzzysearch(gemoji, ['names', 'tags', 'descriptions'], {
  sort: true,
})
