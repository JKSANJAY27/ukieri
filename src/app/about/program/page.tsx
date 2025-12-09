export default function AboutProgram() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-ukieri-blue">About the Program</h1>

            <div className="prose max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                    The UK-India Hands-on Training Program on Catalyst Validation: From Laboratory Research to Prototype Demonstration for Electrolytic Hydrogen Generation is a collaborative initiative designed to bridge the gap between academic research and industrial application.
                </p>
                <p className="leading-relaxed mb-6">
                    This program focuses on providing hands-on training to students and researchers in area of green hydrogen production. Participants gain experience in:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Synthesizing and characterizing advanced catalysts.</li>
                    <li>Fabricating and testing membrane electrode assemblies (MEAs).</li>
                    <li>Validating catalyst performance in prototype electrolyzers.</li>
                    <li>Understanding the scale-up challenges from lab to prototype.</li>
                </ul>
            </div>
        </div>
    );
}
