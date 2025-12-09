export default function Product() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-ukieri-blue">Product / Proof of Concept</h1>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Developed Prototypes</h2>
                <p className="text-gray-600 mb-8">
                    Details of the products or proof of concepts developed under this program.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="border border-gray-200 rounded-xl p-4">
                        <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">Prototype Image</div>
                        <h3 className="text-xl font-semibold mb-2">Prototype 1</h3>
                        <p className="text-gray-600">Description of the prototype and its application.</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-4">
                        <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">Prototype Image</div>
                        <h3 className="text-xl font-semibold mb-2">Prototype 2</h3>
                        <p className="text-gray-600">Description of the prototype and its application.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
