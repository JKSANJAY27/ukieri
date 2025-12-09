import Image from "next/image";

const students = [
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "" },
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "" },
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "" },
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "" },
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "" },
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "" },
];

export default function ResearchStudents() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-12 text-ukieri-blue">Research Students</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {students.map((student, index) => (
                    <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-40 h-40 bg-gray-200 rounded-lg mb-6 overflow-hidden relative">
                            {/* 
               <Image src={student.image} alt={student.name} fill className="object-cover" />
               */}
                            <div className="flex items-center justify-center h-full text-gray-400">
                                Photo
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 text-center">{student.name}</h3>
                        <p className="text-gray-500 text-sm text-center mt-1">{student.role}</p>
                        <p className="text-gray-400 text-xs text-center">{student.institution}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
