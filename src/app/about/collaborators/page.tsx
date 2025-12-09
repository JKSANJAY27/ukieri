export default function Collaborators() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-ukieri-blue">Collaborators</h1>

            <div className="grid md:grid-cols-2 gap-12">
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-4 text-ukieri-red">VIT (Vellore Institute of Technology)</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        VIT was established with the aim of providing quality higher education on par with international standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis.
                    </p>
                    {/* Placeholder for VIT specific role in program */}
                    <p className="text-gray-600 font-medium">
                        Role: Lead Indian Institution
                    </p>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-800">Heriot-Watt University</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Heriot-Watt University is a public research university based in Edinburgh, Scotland. It was established in 1821 as the School of Arts of Edinburgh, the world's first mechanics' institute.
                    </p>
                    {/* Placeholder for HWU specific role in program */}
                    <p className="text-gray-600 font-medium">
                        Role: Lead UK Partner Institution
                    </p>
                </section>
            </div>
        </div>
    );
}
