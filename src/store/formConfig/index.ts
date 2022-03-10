import { StoreonModule } from 'storeon'
import * as t from 'io-ts'

export enum FormConfigActions {
  init = '@init',
  set = 'formConfig/set',
}

export enum InputPropsEnum {
  name = 'name',
  label = 'label',
  placeholder = 'placeholder',
  type = 'type',
  items = 'items',
  id = 'id',
  checked = 'checked',
}

export const InputPropsCodec = t.exact(
  t.type({
    [InputPropsEnum.name]: t.string,
    [InputPropsEnum.label]: t.string,
    [InputPropsEnum.placeholder]: t.string,
    [InputPropsEnum.type]: t.union([
      t.literal('numberfield'),
      t.literal('textfield'),
      t.literal('textarea'),
      t.literal('checkbox'),
      t.literal('dateflied'),
    ]),
  }),
)

export const RadioPropsCodec = t.exact(
  t.type({
    [InputPropsEnum.name]: t.string,
    [InputPropsEnum.placeholder]: t.string,
    [InputPropsEnum.type]: t.literal('radio'),
    [InputPropsEnum.items]: t.array(
      t.intersection([
        t.type({
          [InputPropsEnum.label]: t.string,
          [InputPropsEnum.id]: t.string,
        }),
        t.partial({
          [InputPropsEnum.checked]: t.boolean,
        }),
      ]),
    ),
  }),
)

export const FormConfigCodec = t.type({
  items: t.array(t.union([InputPropsCodec, RadioPropsCodec])),
})

export type FormConfig = t.TypeOf<typeof FormConfigCodec>

export type FormConfigState = {
  formConfig: FormConfig | null
}

export type FormConfigEvents = {
  [FormConfigActions.set]: FormConfig
}

type FormConfigModule = StoreonModule<FormConfigState | null, FormConfigEvents>

export const formConfig: FormConfigModule = (store) => {
  store.on(FormConfigActions.init, () => ({
    formConfig: null,
  }))

  store.on(FormConfigActions.set, (_state, payload) => {
    return { formConfig: { ...payload } }
  })
}
