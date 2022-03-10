import { InputTypeEnum } from 'src/store/formConfig'
import type { InputItem, RadioItem } from 'src/store/formConfig'

export const isNotCheckboxOrRadio = (
  x: InputItem | RadioItem,
): x is InputItem =>
  x.type !== InputTypeEnum.checkbox && x.type !== InputTypeEnum.radio

export const isRadio = (x: InputItem | RadioItem): x is RadioItem =>
  x.type === InputTypeEnum.radio
