import { Card } from '@/components/Card'
import React from 'react'


const Experience = () => {
  const values = {
    title : "My Experience",
    c1 : "Cognizant",
    p1: "August 2022 - October 2023",
    p2: "Full Stack Software Developer",
    p3: "Collaborated with other associate developers within the company on creating an internal application to display cross-company metrics of various on-going projects.",
    p4: "Developed and maintained an android mobile application within a team of 3 for former stackholders."
  }
  
  return (
    <Card c1={values.c1} title={values.title} p1={values.p1} p2={values.p2} p3={values.p3} p4={values.p4}/>
  )
}

export default Experience