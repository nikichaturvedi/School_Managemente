import { FaRegEdit, FaFileUpload, FaCreditCard, FaCheckCircle } from 'react-icons/fa';

const steps = [
    {
        title: 'Complete Application Form',
        description:
            'Start by filling out our secure online application form with your personal, academic, and contact information.',
        icon: <FaRegEdit className="text-[#279989] w-10 h-10" />,
    },
    {
        title: 'Upload Required Documents',
        description:
            'Submit scanned copies of your transcripts, ID, recommendation letters, and any other required documents.',
        icon: <FaFileUpload className="text-[#1564ad] w-10 h-10" />,
    },
    {
        title: 'Pay the Application Fee',
        description:
            'Make a secure online payment using your preferred method. A receipt will be sent to your email.',
        icon: <FaCreditCard className="text-yellow-600 w-10 h-10" />,
    },
    {
        title: 'Receive Confirmation',
        description:
            'After review, you’ll receive a confirmation email with next steps and how to track your application.',
        icon: <FaCheckCircle className="text-purple-600 w-10 h-10" />,
    },
];

export default function OnlineData() {
    return (
        <section className="bg-gray-100 ">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-[#435370] pt-8 pb-12">
                    Apply Online in 4 Easy Steps
                </h2>
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="flex justify-center mb-4">{step.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                            <span className="inline-block mt-4 text-sm text-gray-400">Step {index + 1}</span>
                        </div>
                    ))}
                </div>
                <div className="text-center pt-16">
                    <a
                        href="/contact-us"
                        className="inline-block px-6 py-3 bg-[#5c6f94] text-white font-semibold shadow-md hover:bg-[#435370] transition duration-300 rounded"
                    >
                        Request Information
                    </a>
                </div>

            </div>


        </section>
    );
}
