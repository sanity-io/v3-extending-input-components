import React, { useState, useCallback, useEffect } from 'react'
import {Select} from '@sanity/ui'
import {StringInputProps, set, unset} from 'sanity/form'

export function PetBreedInput(props: StringInputProps) {
  const {onChange, value = '', id, focusRef, onBlur, onFocus, readOnly } = props


  const fwdProps = {id, ref: focusRef, onBlur, onFocus, readOnly};

  const [options, setOptions] = useState<string[]>([])

  const handleChange = useCallback(
    (event) =>
      onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()),
    [onChange]
  )

  useEffect(() => {
    const getOptions = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const result = await response.json()
        const breeds = Object.keys(result.message)
        setOptions(breeds)
    }
    getOptions()
  }, [])

  return (
    <Select {...fwdProps} onChange={handleChange} value={value}>
        {options.map(option => <option key={option}>{option}</option>)}
    </Select>
  )
}