import Link from "next/link";
import contact from "@/public/contact.svg";
import Image from "next/image";

const Header = () => {
  const links = [
    { path: "/", name: "Home" },
    { path: "/ats-checker", name: "ATS Checker" },
    { path: "/resume-templates", name: "Resume Templates" },
  ];

  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-5">
          <div>
            <h2 className="text-4xl font-bold text-[#093042]">Logo</h2>
          </div>
          <ul class="flex space-x-8 text-lg font-medium p-0">
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path} class="hover:text-gray-700">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center space-x-2">
            <a className="flex gap-[8px]" href="#">
              <Image className="w-[25px]" src={contact} alt="" />
              <span className="font-medium text-lg">HR Login</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
