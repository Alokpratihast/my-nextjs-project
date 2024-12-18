
"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import Image from "next/image";

const WhyChooseus = () => {
    const Content = [
        {
          title: "Interactive Lessons",
          description:
            "Engage in immersive and interactive lessons designed to make language learning fun and effective. Our platform uses real-life scenarios, quizzes, and exercises to help you master your chosen language quickly and confidently.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
              Interactive Lessons
            </div>
          ),
        },
        {
          title: "Real-time Practice",
          description:
            "Practice your language skills in real-time with our AI-powered conversation tool and native speakers. Get instant feedback, correct mistakes as you go, and build your fluency with confidence.",
          content: (
            <div className="h-full w-full flex items-center justify-center text-white">
              <Image
                src="/realtime-practice.webp"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="real-time practice demo"
              />
            </div>
          ),
        },
        {
          title: "Progress Tracking",
          description:
            "Stay motivated by tracking your progress. Our platform provides personalized insights, detailed reports, and milestones to help you measure your achievements and stay on track.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-500))] flex items-center justify-center text-white">
              Progress Tracking
            </div>
          ),
        },
        {
          title: "Collaborative Learning",
          description:
            "Learn together with peers, share knowledge, and improve faster. Join group activities, participate in discussions, and connect with other learners to make language learning a collaborative and enjoyable experience.",
          content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
              Collaborative Learning
            </div>
          ),
        },
      ];
      
  return (
    <div className='text-yellow-400'>
        <StickyScroll content={Content}/>

        
    </div>
  )
}

export default WhyChooseus