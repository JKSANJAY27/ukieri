export default function MoU() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-ukieri-blue">Memorandum of Understanding (MoU)</h1>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-600 text-lg mb-6">
                    Information regarding MoUs signed between partner institutions will be displayed here.
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                    <li><strong>VIT & Heriot-Watt University</strong>: Joint research and student exchange program.</li>
                    {/* Add more MoUs */}
                </ul>
                <div className="mt-8 h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                    MoU Signing Photo Placeholder
                </div>
            </div>
        </div>
    );
}
