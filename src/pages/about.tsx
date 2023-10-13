import React from 'react'
import { Card } from '@/components/Card'

const About = () => {
  const values = {
    title : "About Me",
    h2 : "Things To Know...",
    p1: "Hello, my name is Joyce Lee, and I am a (self-proclaimed) professional dog whisperer/cuddler and an (at-home) baker. 🐶",
    p2: "Ever since I was young, I've had a sweet tooth. Nowadays, in my spare time, I love to bake cookies and other types of sweets for my friends and family. Recently, my parents bought a waffle maker, and I've been experimenting with different recipes. (Next up are Belgian Waffles!) 🧇",
    p3: "Before college, I dabbled in front-end design using only HTML and CSS and marveled at how cool it was (still is) to create designs and layouts from scratch. Intrigued by this newfound interest, my sister encouraged me to major in Computer Science in college. I attended the University at Buffalo to obtain my Bachelor’s in Computer Science and graduated in the spring of 2022.",
    p8: "My current main focus is on front-end development and some backend work. During my time at my previous company, I gained experience in full-stack and mobile development - specifically Android development.",
    p4: "Besides baking, this year I started playing FPS games (specifically Valorant). Although I'm not a Valorant pro, I'm proud to say that I've recently reached Bronze III (almost Silver I) within the Valorant ranking system. I also enjoy playing Pokemon and exploring various ROMs, with Blaze Black 2 by Drayano being one of my favorite Pokemon ROM hacks. In addition, I've been crocheting in my spare time, although not as much recently. I mostly create small, soft plushies for my family and friends. One of my most notable creations was two large whales that I crocheted for my niece and nephew. Aside from these hobbies, I spend the rest of my time on TikTok or binge-watching Korean dramas.",
    p5: "Feel free to contact me with any questions or comments; all my contact info is at the footer!",
    p6: "Have a wonderful day! ~",
    p7: "Fun fact: When I was 16, I was really into anime, especially Naruto, and I ran an Instagram fan page account that garnered over 10k followers. I also made AMVs (anime music videos) using Sony Vegas Pro and iMovie. 😂"
  }
  
  return (
    <Card title={values.title} h2={values.h2} p1={values.p1} p8={values.p8}  p2={values.p2} p3={values.p3} p4={values.p4} p5={values.p5} p6={values.p6} p7={values.p7} />
  )
}

export default About