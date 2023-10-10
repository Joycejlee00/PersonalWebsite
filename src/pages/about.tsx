import React from 'react'
import { Card } from '@/components/Card'

const About = () => {
  const values = {
    title : "About Me",
    h2 : "Things To Know...",
    p1: "My name is Joyce Lee, a professional dog whisperer/cuddler 🐶",
    p2: "I am 23 years old and I graduated from the ",
    p3: "with a Bachelor's in Computer Science May of 2022.",
    p4: "I am originally from Upstate New York (Syracuse) and recently moved to Georgia for my former company - Cognizant.",
  }
  
  return (
    <Card title={values.title} h2={values.h2} p1={values.p1}  p2={values.p2} p3={values.p3} p4={values.p4}/>
  )
}

export default About