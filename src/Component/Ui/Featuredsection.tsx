'use client'
import Link from "next/link";
import courseData from'@/data/cousrse.json'
import { BackgroundGradient } from "./background-gradient";


interface Course{
  id: number,
  name: string,
  description: string,
  duration: string,
  difficulty: string,
  price: number,
  instructorId: number,
  
}


const FeaturedCourse = () => {
  const featuredCourses = courseData.courses.filter((course: Course) => course.name);


  
  return (
    <div className="y-12 bg-gray-900 ">
      <div>
        <div className="text-center text-yellow-400 uppercase font-semibold text-base">
          <h2>FEATURED COURSE</h2>
          <p className="font-extrabold text-center text-4xl text-yellow-400">
            Learn with best
          </p>
        </div>
      </div>

      <div className=' mt-10'>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {featuredCourses.map((course: Course) => (
           <BackgroundGradient
           key={course.id}
           containerClassName="rounded-lg shadow-lg transform transition-transform hover:scale-105"
           animate={true}
         >
          
              <div
              className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
              key={course.id}
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{course.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{course.description}</p>
              <p className="text-sm text-gray-400">Duration: {course.duration}</p>
              <p className="text-sm text-gray-400">Difficulty: {course.difficulty}</p>
              <p className="text-sm text-gray-400">Price: ${course.price}</p>
              <Link href={`/courses/${course.id}`}>
                 <p className="block mt-4 text-center bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-500"> 
                  View Details </p>
                 
                
              </Link>
            </div>
            </BackgroundGradient>
          ))}



      
        </div>
      </div>
      <div className="mt-20 text-center text-yellow-400">
        <Link href={"/cousrses"}>View all cousre</Link>
      </div>
    </div>
  );
};

export default FeaturedCourse;
