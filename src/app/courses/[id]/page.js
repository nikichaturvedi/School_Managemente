import { notFound } from "next/navigation";
import { courses } from "@/app/data/courses";
import {
  HiOutlineBookOpen,
  HiBuildingLibrary,
  HiMapPin,
  HiAcademicCap,
  HiUser,
  HiCalendar,
  HiCpuChip,
  HiPuzzlePiece
} from 'react-icons/hi2';

export default async function CourseDetail({ params }) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) return notFound();

  return (
   <div className="max-w-6xl mx-auto px-6 py-12">
  <h1 className="text-3xl font-bold text-[#5f7196] mb-8 text-center">
    {course.title}
  </h1>

  <div className="grid md:grid-cols-2 gap-10 bg-white border border-gray-100 rounded-lg shadow-md p-6">
    
    {/* Image on Left */}
    <div className="col-span-1">
      <img
        src={course.img}
        alt={course.title}
        className="rounded-lg shadow-lg w-full h-64 sm:h-80 object-cover"
      />
    </div>

    {/* Course Info on Right */}
    <div className="space-y-4 text-gray-800 text-base">
      <p className="flex items-center gap-2">
        <HiOutlineBookOpen className="text-[#163269]" />
        <strong>Code:</strong> {course.id}
      </p>
      <p className="flex items-center gap-2">
        <HiBuildingLibrary className="text-[#163269]" />
        <strong>Department:</strong> {course.department}
      </p>
      <p className="flex items-center gap-2">
        <HiMapPin className="text-[#163269]" />
        <strong>Campus:</strong> {course.campus}
      </p>
      <p className="flex items-center gap-2">
        <HiAcademicCap className="text-[#163269]" />
        <strong>Level:</strong> {course.level}
      </p>
      <p className="flex items-center gap-2">
        <HiUser className="text-[#163269]" />
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p className="flex items-center gap-2">
        <HiCalendar className="text-[#163269]" />
        <strong>Semester:</strong> {course.semester}
      </p>
      <p className="flex items-center gap-2">
        <HiCpuChip className="text-[#163269]" />
        <strong>Credit:</strong> {course.credit}
      </p>
      <p className="flex items-center gap-2">
        <HiPuzzlePiece className="text-[#163269]" />
        <strong>Method:</strong> {course.method}
      </p>
    </div>

    <div className="md:col-span-2 pt-1">
      <h2 className="text-2xl font-semibold mb-2 text-[#279989]">Course Description</h2>
      <p className="text-gray-700 leading-relaxed text-justify">{course.description}</p>
    </div>
  </div>
</div>

  );
}


