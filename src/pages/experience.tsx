import { Card } from '@/components/Card'
import React from 'react'


const Experience = () => {
  const values = {
    h3one : "Cognizant",
    p1: "August 2022 - October 2023",
    p2: "Full Stack Software Developer",
  }
  
  return (
    <Card h3one={values.h3one} p1={values.p1} p2={values.p2}/>
  )
}

export default Experience