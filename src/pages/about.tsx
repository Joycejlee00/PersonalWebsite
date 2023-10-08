import React from 'react'
import { Card } from '@/components/Card'

const About = () => {
  const values = {
    title : "About Me",
    h2 : "Things To Know...",
    p1: "My name is Joyce Lee and I am a Software Developer!",
    p2: "Welcome to my personal website!"
  }
  
  return (
    <Card title={values.title} h2={values.h2} p1={values.p1}/>
  )
}

export default About