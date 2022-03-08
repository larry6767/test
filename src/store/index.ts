import { createContext } from 'react'
import { createStoreon } from 'storeon'
import { customContext } from 'storeon/react'
import { storeonLogger } from 'storeon/devtools'
// local libs
import { formConfig } from './formConfig'

import { FormConfigState, FormConfigEvents } from './formConfig'

type State = FormConfigState

export type Events = FormConfigEvents

export const store = createStoreon<State, Events>([
  formConfig,
  process.env.NODE_ENV !== 'production' && storeonLogger,
])

export const StoreonCustomContext = createContext(store)

export const useStoreon = customContext(StoreonCustomContext)
