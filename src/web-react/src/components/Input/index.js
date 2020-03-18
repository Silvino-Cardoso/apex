import React from 'react'
import {FormGroup, Label, Input, FormText, size} from 'reactstrap'

function radomId (){
    return Math.floor(Math.random()*1000) + 1
}

function LabelInput ({ label = "Sem label", id, helptext,type = "text", size}) {
    const newID = id ? id : radomId()
    console.log({newID})
    
    return (
      <FormGroup>
          <Label for={id}>{label}</Label>
          <Input type={type} id={newID} size={size}></Input>
          {helptext ? <FormText  id={`small-${id}`}>{helptext}</FormText> : null }
      </FormGroup>
    )
}

export  { LabelInput}