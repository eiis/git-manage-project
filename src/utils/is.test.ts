import { describe, expect, it } from 'vitest'
import {
  isArray,
  isIntegerKey,
  isMap,
  isPlainObject,
  isPromise,
  toRawType,
} from './is'

describe('utility Functions', () => {
  it('toRawType', () => {
    expect(toRawType({})).toBe('Object')
    expect(toRawType([])).toBe('Array')
    expect(toRawType(new Date())).toBe('Date')
  })

  it('isArray', () => {
    expect(isArray([])).toBe(true)
    expect(isArray({})).toBe(false)
  })

  it('isMap', () => {
    expect(isMap(new Map())).toBe(true)
    expect(isMap(new Set())).toBe(false)
  })

  // ... similar tests for other utility functions

  it('isPromise', () => {
    expect(isPromise(Promise.resolve())).toBe(true)
    expect(isPromise({})).toBe(false)
  })

  it('isPlainObject', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject(new Map())).toBe(false)
  })

  it('isIntegerKey', () => {
    expect(isIntegerKey('123')).toBe(true)
    expect(isIntegerKey('NaN')).toBe(false)
    expect(isIntegerKey('-123')).toBe(false)
  })
})
