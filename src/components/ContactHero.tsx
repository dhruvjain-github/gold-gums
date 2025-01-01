interface ContactHeroProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
  id?:string
}

const ContactHero: React.FC<ContactHeroProps> = ({ backgroundcolor, headingcolor, textcolor, boxcolor }) => {
  return (
    <section className={`md:py-20 flex items-center justify-center ${backgroundcolor} border-t border-b border-orange-900 md:border-0`}>
      <div className={`rounded-md px-8 py-6 shadow-lg max-w-4xl text-center ${boxcolor}`}>
        <h1 className={`text-3xl font-bold mb-4 ${headingcolor}`}>Get in Touch</h1>
        <p className={`text-base font-semibold ${textcolor}`}>
          We're here to assist you with inquiries, support, and product information. Reach out today!
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
