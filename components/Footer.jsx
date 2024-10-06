const Footer = () => {
  return (
    <footer className="bg-[#022D42]">
      <div className="container mx-auto border-b px-4 lg:px-0 border-solid border-white pb-12">
        <div className="flex justify-between flex-row flex-wrap gap-8 flex-1 py-20 sm:w-4/5 ml-0">
          <ul className="flex flex-col space-y-4">
            <li className="mb-2">
              <a className="text-footer-heading" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Company Overview
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Press & Media
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Testimonials
              </a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-4">
            <li className="mb-2">
              <a className="text-footer-heading" href="#">
                Resources
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Webinars & Events
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Case Studies
              </a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-4">
            <li className="mb-2">
              <a className="text-footer-heading" href="#">
                Support & Contact
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Technical Support
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Feedback
              </a>
            </li>
            <li>
              <a className="text-footer-text hover:text-gray-800" href="#">
                Community Forum
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex md:justify-between space-y-3 items-center flex-col md:flex-row pt-4 pb-16">
          <p className="text-[#838B7F] text-sm font-normal">
            ©2023 NIMBUS · All rights reserved.
          </p>
          <ul className="flex flex-row space-x-4">
            <li>
              <a
                className="text-[#656B61] hover:text-gray-800 text-sm font-medium"
                href="#"
              >
                Term of use
              </a>
            </li>
            <li>
              <a
                className="text-[#656B61] hover:text-gray-800 text-sm font-medium"
                href="#"
              >
                Privacy policy
              </a>
            </li>
            <li>
              <a
                className="text-[#656B61] hover:text-gray-800 text-sm font-medium"
                href="#"
              >
                Security
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
