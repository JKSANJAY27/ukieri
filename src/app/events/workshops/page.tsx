import { ImageCard } from "@/components/ImageCard";

export default function WorkshopsPage() {
    const workshops = [
        {
            src: "/workshop1.png",
            title: "Workshop Session 1",
            content: "Workshop for the UG/PG students from HWU, UK and the students from VIT, Vellore, India"
        },
        {
            src: "/workshop2.png",
            title: "Workshop Session 2",
            content: "Workshop for the UG/PG students from HWU, UK and the students from VIT, Vellore, India"
        },
        {
            src: "/workshop3.png",
            title: "Workshop Session 3",
            content: "Workshop for the UG/PG students from HWU, UK and the students from VIT, Vellore, India"
        },
        {
            src: "/workshop4.png",
            title: "Workshop Session 4",
            content: "Workshop for the UG/PG students from HWU, UK and the students from VIT, Vellore, India"
        },
        {
            src: "/workshop5.png",
            title: "Hybrid Workshop",
            content: "Workshop for the UG/PG students from HWU, UK (Online) and the students from VIT, Vellore (Class room/ Offline), India (Date of the Event: 09.01.2025)"
        },
        {
            src: "/workshop6.png",
            title: "Hybrid Workshop Session",
            content: "Workshop for the UG/PG students from HWU, UK (Online) and the students from VIT, Vellore (Class room/ Offline), India (Date of the Event: 09.01.2025)"
        }
    ];

    const trainingEquipment = [
        { src: "/laser1.jpg", title: "Lased Powder Bed Fusion 3D Printer", content: "Advanced 3D Printing Technology" },
        { src: "/laser2.jpg", title: "Lased Powder Bed Fusion 3D Printer", content: "Detailed view of the printing bed" },
        { src: "/selectivelaser.jpg", title: "Selective Laser Melting – EP – M100T", content: "High precision metal 3D printing" },
        { src: "/tribo.jpg", title: "Tribo Nano Indenter", content: "Material hardness and properties testing at nano scale" },
        { src: "/coating1.jpg", title: "Coating Technologies", content: "Advanced coating technologies for Hydrogen storage applications" },
        { src: "/coating2.jpg", title: "Coating Technologies", content: "Research on protective coatings" },
        { src: "/xray.jpg", title: "X-Ray Diffractometer", content: "Crystallographic structure analysis" },
        { src: "/nano.jpg", title: "Centre for Nano Technological Research", content: "Advanced nanomaterials research facility" },
        { src: "/biomass1.jpg", title: "Biomass Trigeneration System", content: "Visit to Biomass driven Trigeneration System installed at Athanavur, Yelagiri hills" },
        { src: "/biomass2.jpg", title: "Biomass Trigeneration System", content: "Field visit to Yelagiri hills facility" },
        { src: "/sieverts.jpg", title: "Sieverts Apparatus", content: "Hydrogen storage capacity measurement" },
        { src: "/microct.jpg", title: "Micro CT Scan", content: "Non-destructive internal structure analysis" },
        { src: "/co2.jpg", title: "CO2 Research Centre", content: "CO2 Research and Green Technologies Centre facilities" },
        { src: "/gasification.jpg", title: "Biomass Gasification", content: "Biomass Gasification Power Generation System" },
        { src: "/plasma.jpg", title: "ICP-MS", content: "Inductively Coupled Plasma Mass Spectrometry for elemental analysis" },
        { src: "/xray-photoelectron.jpg", title: "XPS", content: "X-Ray Photoelectron Spectrometer for surface analysis" },
    ];

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
                Workshops & Hands-on Training
            </h1>

            <div className="mb-16">
                <div className="bg-blue-50 border-l-4 border-ukieri-blue p-6 rounded-r-xl max-w-4xl mx-auto mb-10">
                    <h3 className="text-xl font-bold text-ukieri-blue mb-2">Program Highlight</h3>
                    <p className="text-gray-700 font-medium">
                        UK students visit to VIT, India: Participation in Workshops, involvement in Laboratory Research and Field visits.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workshops.map((item, index) => (
                        <ImageCard
                            key={index}
                            src={item.src}
                            alt={item.title}
                            title={item.title}
                            description={item.content}
                        />
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-200 pt-16">
                <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
                    Hands-on Training
                </h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                    In PURSE sponsored Smart Manufacturing Lab & Advanced Research Centres
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trainingEquipment.map((item, index) => (
                        <ImageCard
                            key={index}
                            src={item.src}
                            alt={item.title}
                            title={item.title}
                            description={item.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
