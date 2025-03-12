import {
    MailOpenIcon,
    ShieldCheckIcon,
    MailIcon,
    AtSymbolIcon,
    GlobeAltIcon,
    CheckCircleIcon,
    IdentificationIcon,
    CodeIcon,
    CogIcon,
    ClockIcon,
    ViewGridAddIcon,
    ViewGridIcon
} from '@heroicons/react/outline';

export default function FourthPage() {
    return (
        <div className="w-full max-w-screen-xl px-10 bg-[#1A0B2E] text-white py-10">
            <div className="flex flex-col md:flex-row items-start justify-between">

                <div className="md:w-1/3 mb-10 md:mb-0 text-left">
                    <h1 className="text-6xl mb-6">Rock solid email verification</h1>
                    <p className="text-xl text-gray-300 mb-8">Clean, optimize, and <br />supercharge your email lists.</p>
                    <button className="bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg transition-all font-semibold glow-button">
                        Dive In!
                    </button>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: MailOpenIcon,
                            title: "Disposable email detection",
                            desc: "Verifier detects & removes temp emails for a clean, reliable list."
                        },
                        {
                            icon: ShieldCheckIcon,
                            title: "Hard bounce prevention",
                            desc: "Efficiently eliminate undeliverable emails due to non-existent addresses."
                        },
                        {
                            icon: MailIcon,
                            title: "Soft bounce prevention",
                            desc: "Verifier spots soft bounce issues for successful email delivery."
                        },
                        {
                            icon: AtSymbolIcon,
                            title: "Email verification API",
                            desc: "Integrate our email verification software to remove inaccurate data."
                        },
                        {
                            icon: GlobeAltIcon,
                            title: "Catch-All email detection",
                            desc: "Detect and remove catch-all domains to assess your email risk."
                        },
                        {
                            icon: CheckCircleIcon,
                            title: "MX record validation",
                            desc: "Validate email authenticity with advanced MX record checks."
                        },
                        {
                            icon: IdentificationIcon,
                            title: "SMTP provider identification",
                            desc: "Automatically identify email providers to enhance targeting."
                        },
                        {
                            icon: CodeIcon,
                            title: "Email syntax validation",
                            desc: "Syntax check ensures only RFC-compliant emails remain."
                        },
                        {
                            icon: CogIcon,
                            title: "Email domain validation",
                            desc: "Confirm domain functionality with our verification process."
                        },
                        {
                            icon: ClockIcon,
                            title: "SMTP verification",
                            desc: "Evaluate and analyze email deliverability for valuable insights."
                        },
                        {
                            icon: ViewGridAddIcon,
                            title: "Anti-greylisting technology",
                            desc: "Trust Verifier for accurate email verification with anti-greylisting tech."
                        },
                        {
                            icon: ViewGridIcon,
                            title: "Real-time results",
                            desc: "Track the real-time results of your email verification as we process the list."
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="relative bg-[#12102D] border border-blue-500/10 rounded-xl p-6 hover:border-blue-500/30 transition-all group glow-card"
                        >
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 group-hover:opacity-40 transition-opacity"></div>

                            <div className="mb-4">
                                <feature.icon className="h-12 w-12 text-blue-400 p-2.5 rounded-lg bg-blue-900/20" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}