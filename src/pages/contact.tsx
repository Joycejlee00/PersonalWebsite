import React from 'react'
import { Card } from '@/components/Card'

const Contact = () => {
  const values = {
    title : "Contact Me",
    h2 : "blub blub",
    p1: "insert icons here",
    p2: "more icons here"
  }
  
  return (
    <Card title={values.title} h2={values.h2} p1={values.p1} p2={values.p2}/>
  )
}

export default Contact