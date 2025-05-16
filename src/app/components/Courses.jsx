"use client";

import Link from "next/link";
import { courses } from "@/app/data/courses"; 
export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-2xl  text-[#506691] text-left pb-2">Find course that suit you</p>
      <h1 className="text-4xl font-bold text-[#163269] text-left pb-8"> Course Search</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-[#163269] mb-3">
               {course.title}
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Department:</strong> {course.department}</li>
              <li><strong>Campus:</strong> {course.campus}</li>
              <li><strong>Level:</strong> {course.level}</li>
              <li><strong>Instructor:</strong> {course.instructor}</li>
              <li><strong>Semester:</strong> {course.semester}</li>
              <li><strong>Credit:</strong> {course.credit}</li>
              <li><strong>Method:</strong> {course.method}</li>
            </ul>
            <div className="mt-6 text-right">
              <Link
                 href={`/courses/${course.id}`} 
                
                className="text-[#7ca55d] font-semibold hover:underline"
              >
                More Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
