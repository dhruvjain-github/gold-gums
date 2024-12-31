interface AboutusHeroProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
}

const AboutusHero: React.FC<AboutusHeroProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  boxcolor,
}) => {
  return (
    <section className={`md:py-20 flex items-center justify-center ${backgroundcolor} border-t border-b border-orange-900 md:border-0 `}>
      <div className={`${boxcolor} rounded-md px-8 py-6 shadow-lg max-w-4xl text-center`}>
        <h1 className={`text-3xl font-bold mb-4 ${headingcolor}`}>
          Welcome to Gold Gums
        </h1>
        <p className={`text-base font-semibold ${textcolor}`}>
          Founded in 1999, Gold Gums has established itself as Central India's premier manufacturer of industrial adhesives. Our mission is to deliver innovative and reliable bonding solutions while upholding values of quality and commitment to our customers.
        </p>
      </div>
    </section>
  );
};

export default AboutusHero;
