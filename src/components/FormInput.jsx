import React from 'react'

function FormInput({type,name,defaultValue,label}) {
  return (
    <fieldset className="fieldset">
  <legend className="fieldset-legend capitalize">{label}</legend>
  <input type={type} className="input" name={name} defaultValue={defaultValue} />
</fieldset>
  )
}

export default FormInput