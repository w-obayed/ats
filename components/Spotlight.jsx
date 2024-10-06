import sampleImage from "@/public/Thumbnail.png";
import { GrLinkUp } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

const Spotlight = () => {
  const articles = [
    {
      type: "Report",
      title: "The Rise of AI in Business Analytics: What You Need to Know",
      image: sampleImage,
      link: "#",
    },
    {
      type: "News",
      title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
      image: sampleImage,
      link: "#",
    },
    {
      type: "News",
      title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
      image: sampleImage,
      link: "#",
    },
    {
      type: "Report",
      title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
      image: sampleImage,
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-[#141513] text-[39px] font-bold leading-[45px] pb-4 text-center">
        In the spotlight
      </h1>

      <p className="text-gray-500 text-lg mb-6 w-[65%] text-center mx-auto">
        Stay updated with the latest trends, tips, and insights in business
        analytics. Explore our curated articles designed to empower your
        data-driven journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
        {articles.map((article, index) => (
          <div key={index} className="relative group">
            <div className="rounded-lg overflow-hidden mb-4 relative">
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={250}
                objectFit="cover"
                className="w-full"
              />
              <Link
                href={article.link}
                className="absolute h-12 w-12 rounded-full top-[10px] right-[20px]  bg-[#fff] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <GrLinkUp className="h-6 w-6 rotate-45 text-gray-700" />
              </Link>
            </div>
            <p className="text-sm text-gray-500">{article.type}</p>
            <h3 className="text-lg font-semibold mt-2 group-hover:text-green-900">
              {article.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spotlight;
