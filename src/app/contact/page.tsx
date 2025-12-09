import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-12 text-ukieri-blue text-center">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
                {/* India Contact */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 text-ukieri-red border-b border-gray-100 pb-4">India Office (VIT)</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-ukieri-red mt-1" />
                            <div>
                                <p className="font-semibold text-gray-800">Vellore Institute of Technology</p>
                                <p className="text-gray-600">Vellore - 632 014<br />Tamil Nadu, India</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-ukieri-red" />
                            <p className="text-gray-600">+91 12345 67890</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-ukieri-red" />
                            <p className="text-gray-600">contact.india@vit.ac.in</p>
                        </div>
                    </div>
                </div>

                {/* UK Contact */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b border-gray-100 pb-4">UK Office (Heriot-Watt)</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-blue-800 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-800">Heriot-Watt University</p>
                                <p className="text-gray-600">Edinburgh<br />Scotland, UK</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-blue-800" />
                            <p className="text-gray-600">+44 1234 567890</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-blue-800" />
                            <p className="text-gray-600">contact.uk@hw.ac.uk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
