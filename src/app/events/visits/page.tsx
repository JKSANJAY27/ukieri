import { ImageCard } from "@/components/ImageCard";

export default function VisitsPage() {
    const indiaVisit = [
        {
            src: "/indiavisit1.jpg",
            content: "Dr. G. Viswanathan, the honourable Chancellor of Vellore Institute of Technology, Vellore and Dr. Sudhagar Pitchaimuthu (PI, UK) from Heriot-Watt University Scotland, UK signing a MoU during the Visit of UK Principal Investigator to India"
        },
        {
            src: "/indiavisit2.jpg",
            content: "Introductory meeting of Prof. Sudhagar (PI, UK) and UG/PG students from HWU, Scotland, UK with the honourable Chancellor, respected Vice Chancellor and Pro-Vice Chancellor of Vellore Institute of Technology, Vellore"
        },
        {
            src: "/indiavisit3.jpg",
            content: "Meeting of Prof. Sudhagar (PI, UK) and UG/PG students from HWU with the Dean – School of Mechanical Engineering (SMEC) and the Director – Sponsored Research and Industrial Consultancy (SpoRIC) of Vellore Institute of Technology, Vellore"
        },
        {
            src: "/indiavisit4.jpg",
            content: "Meeting of Prof. Sudhagar (PI, UK) and UG/PG students from HWU with the Director – International Relations of Vellore Institute of Technology, Vellore"
        }
    ];

    const ukVisit = [
        { id: 1, content: "Indian Investigators Dr. D. Sakthivadivel (PI), Dr. R. Vasudevan (Co-PI) and Prof. Sudhagar (PI, UK) Meeting with Prof. Igor Guz, Dean of School of Engineering & Physical Sciences" },
        { id: 2, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI) visited various research labs of School of Engineering & Physical Sciences" },
        { id: 3, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI) with Dr. Sudhagar Pitchaimuthu infront of Heriot-Watt University, UK" },
        { id: 4, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI) with other researchers infront of Heriot-Watt University, UK" },
        { id: 5, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI) with Dr. Sudhagar Pitchaimuthu and a Senior Professor from HWU, UK" },
        { id: 6, content: "Indian Investigators Dr. D. Sakthivadivel (PI), Dr. R. Vasudevan (Co-PI) and Prof. Sudhagar (PI, UK) with Mr. David, CEO of Plus Zero Company (Hydrogen production using electrolysis and supplied to IC engine for power production in shipyard applications)" },
        { id: 7, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI), Dr. Sudhagar Pitchaimuthu (PI, UK) with Mr. David, CEO of Plus Zero Company (Hydrogen production using electrolysis and supplied to IC engine for power production in shipyard applications)" },
        { id: 8, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI), Dr. Sudhagar Pitchaimuthu (PI, UK) visited Forth Ports, Edinburgh, United Kingdom" },
        { id: 9, content: "Indian Investigators Dr. D. Sakthivadivel (PI), Dr. R. Vasudevan (Co-PI) and Dr. Sudhagar (PI, UK) Meeting with Prof. Jonathan Swingler, and Prof. Stephen Gibson, Associate Dean of School of Engineering & Physical Sciences" },
        { id: 10, content: "Indian Investigators Dr. D. Sakthivadivel (PI), Dr. R. Vasudevan (Co-PI) and Dr. Sudhagar (PI, UK) Meeting with Prof. Jonathan Swingler, and Prof. Stephen Gibson, Associate Dean of School of Engineering & Physical Sciences" }, // 9 & 10 same content in prompt
        { id: 11, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI), Dr. Sudhagar Pitchaimuthu (PI, UK) with Mr. David, CEO of Plus Zero Company (Hydrogen production and IC engine power production facility)" },
        { id: 12, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI) along with Dr. Sudhagar Pitchaimuthu (PI, UK) visited various research labs of School of Engineering & Physical Sciences" },
        { id: 13, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI) along with Dr. Sudhagar Pitchaimuthu (PI, UK) visited various research labs of School of Engineering & Physical Sciences" },
        { id: 14, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI) Meeting with Prof. Fairouz Dib Kamareddine, the Director-International Relations, HWU, UK" },
        { id: 15, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI) Meeting with Prof. Prof P.A. Muhammed Basheer, Executive Dean - Energy, Geoscience, Infrastructure & Society, HWU, UK" },
        { id: 16, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI) visited The National Robotarium at the HWU, Scotland, UK" },
        { id: 17, content: "Indian Investigators Dr. D. Sakthivadivel (PI) and Dr. R. Vasudevan (Co-PI) with Dr. Sudhagar Pitchaimuthu (PI, UK) visited The National Robotarium at the HWU, Scotland, UK" },
        { id: 18, content: "Functions of the Robots and its Applications in Households were briefed by the Scientist at the National Robotarium at the HWU, Scotland, UK" }
    ];

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
                Exchange Visits
            </h1>

            {/* Visit to India Section */}
            <section className="mb-20">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl max-w-4xl mx-auto mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">UK Principal Investigator Visit to India</h2>
                    <p className="text-gray-700 font-medium">
                        Research Team comprising of UG/PG students and Dr. Sudhagar Pitchaimuthu, Professor (PI, UK) from the Heriot-Watt University, UK visit to VIT, India to attend SPARC Workshop
                    </p>
                    <p className="text-sm text-gray-500 mt-2 font-semibold">11-23, December 2024</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {indiaVisit.map((item, index) => (
                        <ImageCard
                            key={index}
                            src={item.src}
                            alt="Visit to India"
                            title={`India Visit Highlight ${index + 1}`}
                            description={item.content}
                        />
                    ))}
                </div>
            </section>

            {/* Visit to UK Section */}
            <section>
                <div className="bg-blue-50 border-l-4 border-ukieri-blue p-6 rounded-r-xl max-w-4xl mx-auto mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Indian Investigators Visit to HWU, UK</h2>
                    <p className="text-gray-700 font-medium">
                        Indian Investigators visit to HWU, UK to meet the officials on the preparatory activities for UG students visit during JUNE 2025
                    </p>
                    <p className="text-sm text-gray-500 mt-2 font-semibold">15-22, March 2025</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ukVisit.map((item) => (
                        <ImageCard
                            key={item.id}
                            src={`/ukvisit${item.id}.jpg`}
                            alt={`UK Visit ${item.id}`}
                            title={`UK Visit - Interaction ${item.id}`}
                            description={item.content}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
