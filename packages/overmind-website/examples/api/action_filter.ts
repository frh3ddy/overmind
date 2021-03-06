export default (ts) =>
  ts
    ? [
        {
          fileName: 'app/operations.ts',
          code: `
import { Operation } from 'overmind'

export const isOnline: Operation.Filter = ({ connection }) =>
  connection.isOnline()

export const isGreatherThan2: Operation.Filter<string> = ({ value }) =>
  value.length > 2
  `,
        },
        {
          fileName: 'app/actions.ts',
          code: `
import { Action } from 'overmind'

export const doThis: Action<string> = action =>
  action
    .filter(operations.isOnline)
    .filter(operations.isGreaterThan2)
  `,
        },
      ]
    : [
        {
          fileName: 'app/operations.js',
          code: `
export const isOnline = ({ connection }) =>
  connection.isOnline()

export const isGreaterThan2 = ({ value }) =>
  value.length > 2
  `,
        },
        {
          fileName: 'app/actions.js',
          code: `
export const doThis = action =>
  action
    .filter(operations.isOnline)
    .filter(operations.isGreaterThan2)
  `,
        },
      ]
