export default (ts) =>
  ts
    ? [
        {
          fileName: 'app/operations.ts',
          code: `
import { Operation } from 'overmind'

export const trackSubmitForm: Operation.Run = ({ track }) =>
  track.interaction('submitForm')
    `,
        },
        {
          fileName: 'app/actions.ts',
          code: `
import { Action } from 'overmind'

export const doThis: Action = action =>
  action
    .run(operations.trackSubmitForm)
  `,
        },
      ]
    : [
        {
          fileName: 'app/operations.js',
          code: `
export const trackSubmitForm = ({ track }) =>
  track.interaction('submitForm')    
    `,
        },
        {
          fileName: 'app/actions.js',
          code: `
export const doThis = action =>
  action
    .run(operations.trackSubmitForm)
  `,
        },
      ]
