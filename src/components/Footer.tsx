import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-200 text-orange-900 px-4 md:px-10">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between py-8 border-t border-orange-300">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row space-x-12">
          {/* Address and Contact */}
          <div className="space-y-4">
            {/* Address */}
            <div>
              <p className="font-bold text-black">Address:</p>
              <div className="flex items-center gap-2">
                <i className="ri-building-fill text-orange-950"></i>
                <p className="font-semibold">Lahdara Bhopal road Sagar, MP (470001)</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-home-office-fill text-orange-950"></i>
                <p className="font-semibold">Chameli Chouk Sagar, MP (470002)</p>
              </div>
            </div>
            {/* Contact */}
            <div>
              <p className="font-bold text-black">Contact:</p>
              <div className="flex items-center gap-2">
                <i className="ri-phone-fill text-orange-950 font-semibold text-sm"></i>
                <p className="text-sm font-semibold text-orange-900">9826070900</p>
              </div>

              <div className="flex items-center gap-2">
                <i className="ri-phone-fill text-orange-950 font-semibold text-sm"></i>
                <p className="text-sm font-semibold text-orange-900">8770822124</p>
              </div>
            
              <div className="flex items-center gap-2 mt-3 -mb-4">
                <i className="ri-mail-line text-orange-950 font-semibold text-sm"></i>
                <p className=" text-xs font-semibold text-orange-600 ">
                goldgums.sales@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <i className="ri-mail-line text-orange-950 font-semibold text-sm"></i>
                <p className=" text-xs font-semibold text-orange-600 my-1">
                  abhi_m7@yahoo.com
                </p>
              </div>
              <div className="flex items-center gap-2 -mt-2">
                <i className="ri-mail-line text-orange-950 font-semibold text-sm"></i>
                <p className="text-xs font-semibold text-orange-600 my-1">
                  dkjkin@gmail.com.com
                </p>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {/* Facebook */}
              {/* <Link
                href="https://www.facebook.com/profile.php?id=100001766817110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-box-fill text-2xl text-orange-950"></i>
              </Link> */}

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/abhishek-jain-39393255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-box-fill text-2xl text-orange-950"></i>
              </Link>

              {/* WhatsApp */}
              <Link
  href="https://wa.me/919826070900"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
>
  <i className="ri-whatsapp-line text-2xl text-orange-950"></i>
</Link>

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap justify-between gap-8 p-3 bg-orange-200 rounded-sm md:py-16 mt-5 font-semibold">
          {/* Left Column */}
          <div className="flex flex-col space-y-3">
            <Link href="/adhesive-product" className="block underline text-orange-700">
              Adhesive Products
            </Link>
            <Link href="/food-product" className="block underline text-orange-700">
              Food Adhesives
            </Link>
            <Link href="/contact" className="block underline text-orange-700">
              Contact Us
            </Link>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-3">
            <Link href="/contact" className="block underline text-orange-700">
              Testimonials
            </Link>
            <Link href="/contact" className="block underline text-orange-700">
              FAQs
            </Link>
            <Link href="/about" className="block underline text-orange-700">
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-orange-300 pt-4">
        <p className="text-orange-900 font-semibold">© 2024 Gold Gums. All rights reserved.</p>
        {/* <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/product" className="block text-orange-900">
            Privacy Policy
          </Link>
          <Link href="/product" className="block text-orange-900">
            Terms of Service
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
