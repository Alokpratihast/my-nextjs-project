"use client";
 


import { InfiniteMovingCards } from "./Ui/infinite-moving-cards";
const testimonials = [
  {
    quote:
      "I never thought learning a new language could be this engaging and effective. The interactive lessons made it a breeze!",
    name: "Maria Gonzalez",
    title: "Spanish Learner",
  },
  {
    quote:
      "The real-time practice sessions gave me the confidence to speak in French fluently. Highly recommended!",
    name: "John Smith",
    title: "French Enthusiast",
  },
  {
    quote:
      "Progress tracking kept me motivated throughout my journey. I could see how far I'd come every step of the way!",
    name: "Aisha Khan",
    title: "Dedicated Learner",
  },
  {
    quote:
      "Collaborating with other learners made the experience even more enjoyable. I learned faster and made great friends!",
    name: "Liam Brown",
    title: "Community Learner",
  },
  {
    quote:
      "This platform changed how I approach language learning. It's simple, effective, and incredibly rewarding!",
    name: "Sofia Martinez",
    title: "Polyglot in Progress",
  },]
const Webcoursecard = () => {
   
  return (
   
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10 text-yellow-400">Hear Our Harmony: Voices Of Success</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
  />
        </div>
    </div>
</div>
  )
}

export default Webcoursecard