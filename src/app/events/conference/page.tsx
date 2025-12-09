import { ImageCard } from "@/components/ImageCard";

export default function ConferencePage() {
    const images = [
        {
            src: "/ic1.jpg",
            alt: "International Conference Session",
            description: "A special workshop followed by poster presentation has been conducted for the rural students and the selected students from VIT, Vellore were also participated and presented their research and shared their knowledge with the other students."
        },
        {
            src: "/ic2.jpg",
            alt: "Conference Speakers",
            description: "International Conference on Advanced Nanomaterials for Energy, Environment, and Healthcare (ANEH 2024) & UK-India Workshop on Hydrogen Generation and Storage."
        },
        {
            src: "/ic3.jpg",
            alt: "Attendees",
            description: "Organised jointly by Heriot-Watt University, UK and VIT, India. (21-23, August 2024)"
        },
        {
            src: "/ic4.jpg",
            alt: "Group Photo",
            description: "Outcomes: 300+ students across India (62% Women, 38% Men) with 40+ invited speakers."
        }
    ];

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                    International Conference
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    <span className="font-bold text-ukieri-blue">International Conference on Advanced Nanomaterials for Energy, Environment, and Healthcare (ANEH 2024)</span> <br />
                    & <br />
                    <span className="font-bold text-ukieri-red">UK-India Workshop on Hydrogen Generation and Storage</span><br />
                    (UKIERI – SPARC & British Council)
                </p>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 inline-block">
                    <p className="font-medium text-gray-800">Organised jointly by Heriot-Watt University, UK and VIT, India</p>
                    <p className="text-ukieri-blue font-bold mt-2">21-23, August 2024</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {images.map((img, index) => (
                    <ImageCard
                        key={index}
                        src={img.src}
                        alt={img.alt}
                        description={img.description}
                        title={`Conference Highlight ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
