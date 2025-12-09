export default function Monograph() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-ukieri-blue">Monograph</h1>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="h-64 w-48 bg-gray-200 rounded shadow-md mb-6 flex items-center justify-center text-gray-400">
                    Book Cover Placeholder
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">Monograph Title</h2>
                <p className="text-gray-600 max-w-2xl mb-6">
                    A comprehensive monograph detailing the research findings, methodologies, and outcomes of the UKIERI-VIT collaborative program.
                </p>
                <button className="px-6 py-3 bg-ukieri-blue text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Download / View PDF
                </button>
            </div>
        </div>
    );
}
