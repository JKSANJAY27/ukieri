export default function FundingAgencies() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-ukieri-blue">Funding Agencies</h1>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">UKIERI</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The UK-India Education and Research Initiative (UKIERI) started in April 2006 with the aim of enhancing educational links between India and the UK. It has been a successful partnership between the two countries, promoting collaboration in research, education, and skill development.
                        {/* Add more content extracted from doc or general knowledge */}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">SPARC</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Scheme for Promotion of Academic and Research Collaboration (SPARC) aims at improving the research ecosystem of India’s Higher Educational Institutions by facilitating academic and research collaborations between Indian institutions and the best institutions in the world.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">British Council</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The British Council is the UK’s international organisation for cultural relations and educational opportunities. It works with over 100 countries in the fields of arts and culture, English language, education and civil society.
                    </p>
                </section>
            </div>
        </div>
    );
}
