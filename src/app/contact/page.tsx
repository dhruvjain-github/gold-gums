import ContactFAQs from "@/components/ContactFAQs";
import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import ContactLocation from "@/components/ContactLocation";


const backgroundcolor = "bg-orange-100";
const headingcolor = "text-orange-950";
const textcolor = "text-gray-800";
const iconcolor = "text-red-800";
const boxcolor = "bg-orange-200";

export default function ContactPage() {
    return (
        <div>
            <ContactHero
                backgroundcolor={backgroundcolor}
                headingcolor={headingcolor}
                textcolor={textcolor}
                boxcolor={boxcolor}
            />
            <ContactLocation
                backgroundcolor={backgroundcolor}
                headingcolor={headingcolor}
                textcolor={textcolor}
                iconcolor={iconcolor}
                boxcolor={boxcolor}
            />
            <ContactForm
                backgroundcolor={backgroundcolor}
                headingcolor={headingcolor}
                textcolor={textcolor}
                iconcolor={iconcolor}
                boxcolor={boxcolor}
            />
            <ContactFAQs
                backgroundcolor={backgroundcolor}
                headingcolor={headingcolor}
                textcolor={textcolor}
                iconcolor={iconcolor}
                boxcolor={boxcolor}
            />
        </div>
    );
}
