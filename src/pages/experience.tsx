import { Card } from '@/components/Card'
import React from 'react'


const Experience = () => {
  const values = {
    title : "My Experience",
    h2 : "Cognizant",
    p1: "August 2022 - October 2023",
    p2: "Full Stack Software Developer"
  }
  
  return (
    <Card title={values.title} h2={values.h2} p1={values.p1} p2={values.p2}/>
  )
}

export default Experience