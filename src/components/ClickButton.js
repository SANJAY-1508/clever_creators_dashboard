import React from 'react'
import { Button } from 'react-bootstrap'

const ClickButton = ({ label, onClick }) => {
  return (
    <>
      <Button className='create-btn' onClick={onClick}>{label} </Button>
    </>
  )
}
const InstantCreate = ({ label, onClick }) => {
  return (
    <>
      <Button className='instant-add' onClick={onClick}>{label} </Button>
    </>
  )
}


export { ClickButton, InstantCreate } 