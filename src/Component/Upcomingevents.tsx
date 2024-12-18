'use client'
import Link from "next/link"
import { HoverEffect } from "./Ui/card-hover-effect";

const Upcomingevents = () => {
    const Events= [
        {
            title: 'Blockchain & Decentralized Tech Summit 2025',
            description: 'Dive deep into blockchain technology, smart contracts, and decentralized applications with thought leaders from the industry.',
            slug: 'blockchain-decentralized-tech-summit-2025',
            isFeatured: true,
          },
          {
            title: 'DevOps & CI/CD Innovation 2025',
            description: 'Explore the latest trends and tools in DevOps, Continuous Integration, and Continuous Deployment to improve software development workflows.',
            slug: 'devops-ci-cd-innovation-2025',
            isFeatured: false,
          },
          {
            title: 'Virtual Reality (VR) and Augmented Reality (AR) Conference 2025',
            description: 'A conference focused on the evolution of VR and AR technologies, exploring their applications across industries like gaming, healthcare, and education.',
            slug: 'vr-ar-conference-2025',
            isFeatured: true,
          },
          {
            title: 'Quantum Computing Breakthroughs 2025',
            description: 'Join leading experts as they discuss the latest advancements in quantum computing and its potential impact on software development.',
            slug: 'quantum-computing-breakthroughs-2025',
            isFeatured: false,
          },
          {
            title: 'SaaS & Cloud Platforms Expo 2025',
            description: 'Learn about the innovations in SaaS (Software as a Service) and cloud platforms, with case studies and live demos from industry giants.',
            slug: 'saas-cloud-platforms-expo-2025',
            isFeatured: true,
          },
          {
            title: 'Tech Leadership & Innovation Forum 2025',
            description: 'A gathering of tech leaders to discuss innovation, leadership, and the future of the software development landscape.',
            slug: 'tech-leadership-innovation-forum-2025',
            isFeatured: false,
          },
          {
            title: '5G and IoT Technology Summit 2025',
            description: 'An in-depth exploration of 5G technology and its integration with IoT (Internet of Things), including use cases in smart cities and industry automation.',
            slug: '5g-iot-technology-summit-2025',
            isFeatured: true,
          },
          {
            title: 'Artificial Intelligence in Healthcare Conference 2025',
            description: 'Discover how AI is revolutionizing healthcare with machine learning algorithms, data-driven insights, and AI-driven diagnostics.',
            slug: 'ai-in-healthcare-conference-2025',
            isFeatured: false,
          },
          {
            title: 'Software Testing & QA Expo 2025',
            description: 'This event highlights the latest trends in software testing, automation, and quality assurance, with a focus on improving development cycles.',
            slug: 'software-testing-qa-expo-2025',
            isFeatured: true,
          }
          
    ]

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
          <HoverEffect
          items={Events.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: `/events/${webinar.slug}`,  // Corrected link generation
              key: webinar.slug, 
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>

    
  )
}

export default Upcomingevents