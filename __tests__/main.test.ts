import {checks} from '../src/checks'
import * as fs from 'fs'

test('Parses markdown', () => {
  const data = fs.readFileSync('__tests__/example.markdown', {
    encoding: 'utf8',
    flag: 'r'
  })
  const checked = checks(data)
  expect(checked).not.toBeNull()
  expect(Object.keys(checked).length).toBe(4)
  expect(Object.values(checked)[0]).toBe(true)
  expect(Object.values(checked)[3]).toBe(false)
  expect(checked['META']).toBe(true)
  expect(checked['check2']).toBe(false)
  expect(checked['META']).toBe(true)
  expect(checked['check1']).toBe(true)
  expect(checked['check3']).toBe(false)
})
