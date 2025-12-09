import Image from "next/image";

const investigators = [
    { name: "Dr. Name Surname", role: "Principal Investigator (India)", institution: "VIT", image: "" },
    { name: "Dr. Name Surname", role: "Principal Investigator (UK)", institution: "Heriot-Watt", image: "" },
    { name: "Dr. Name Surname", role: "Co-Investigator", institution: "VIT", image: "" },
    { name: "Dr. Name Surname", role: "Co-Investigator", institution: "Heriot-Watt", image: "" },
];

export default function Investigators() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-12 text-ukieri-blue">Investigators</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {investigators.map((person, index) => (
                    <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-48 h-48 bg-gray-200 rounded-full mb-6 overflow-hidden relative">
                            {/* 
               <Image src={person.image} alt={person.name} fill className="object-cover" />
               */}
                            <div className="flex items-center justify-center h-full text-gray-400 text-4xl">
                                User
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 text-center">{person.name}</h3>
                        <p className="text-ukieri-red font-medium text-center text-sm mt-1">{person.role}</p>
                        <p className="text-gray-500 text-sm text-center mt-1">{person.institution}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
