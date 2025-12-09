export default function Publications() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-ukieri-blue">Publications & Patents</h1>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Publications</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <ul className="space-y-4">
                            <li className="p-4 bg-gray-50 rounded-lg">
                                <p className="font-semibold">Paper Title 1</p>
                                <p className="text-sm text-gray-600">Authors, Journal, Year</p>
                            </li>
                            <li className="p-4 bg-gray-50 rounded-lg">
                                <p className="font-semibold">Paper Title 2</p>
                                <p className="text-sm text-gray-600">Authors, Journal, Year</p>
                            </li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Patents</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <ul className="space-y-4">
                            <li className="p-4 bg-gray-50 rounded-lg">
                                <p className="font-semibold">Patent Title 1</p>
                                <p className="text-sm text-gray-600">Status: Filed/Granted</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
