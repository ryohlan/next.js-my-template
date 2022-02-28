import React from 'react'
import { Text } from '../bases/Text'

type Props = {
  onChangeChecked: (checked: boolean) => void
}

export const Checkbox: React.FC<Props> = ({ children, onChangeChecked }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox rounded-sm"
        onChange={(event) => onChangeChecked(event.target.checked)}
      />
      <Text className="ml-4">{children}</Text>
    </label>
  )
}
