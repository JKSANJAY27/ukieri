import { ImageCard } from "@/components/ImageCard";

export default function VAPPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900">
                Value Added Program & Sessions
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <ImageCard
                    src="/intro1.jpg"
                    alt="Introductory Session"
                    title="Introductory Session for Selected Students"
                    date="16 August 2024"
                    description="Introductory session to VIT students who have been selected for the visit to HWU, UK by Prof. Sudhagar (PI, UK)."
                />

                <ImageCard
                    src="/intro2.jpg"
                    alt="Technical Session"
                    title="Technical Session: Renewable Energy Systems"
                    date="16 August 2024"
                    description="Technical session to the class students of Renewable Energy Systems at VIT, Vellore by Prof. Sudhagar (PI, UK)."
                />
            </div>
        </div>
    );
}
