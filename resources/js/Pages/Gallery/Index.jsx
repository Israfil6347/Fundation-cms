import PublicTemplateLayout from "@/Layouts/PublicTemplateLayout";

import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";
import ph_01 from "../../../assets/images/banner-images/ph_01.jpg";
import ph_02 from "../../../assets/images/banner-images/ph_02.jpg";
import ph_03 from "../../../assets/images/banner-images/ph_03.jpg";
import ph_04 from "../../../assets/images/banner-images/ph_04.jpg";
import ph_05 from "../../../assets/images/banner-images/ph_05.jpg";
import ph_06 from "../../../assets/images/banner-images/ph_06.jpg";
import ph_07 from "../../../assets/images/banner-images/ph_07.jpg";
import ph_08 from "../../../assets/images/banner-images/ph_08.jpg";

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const data = [
  {
    url: ph_01,
    caption: "Health checks-up for students at Tejgaon Catholic High school",
    description: "",
  },
  {
    url: ph_02,
    caption: "Students of HSC, attending Career Visioning workshop",
    description: "",
  },
  {
    url: ph_03,
    caption: "Career path session in Youth Seminar",
    description: "",
  },
  {
    url: ph_04,
    caption: "Health checks-up a student in a school",
    description: "",
  },
  { url: ph_05, caption: "Stipend distribution event", description: "" },
  { url: ph_06, caption: "Stipend distribution event", description: "" },
  { url: ph_07, caption: "Nursing admission Seminar", description: "" },
  {
    url: ph_08,
    caption: "Educational materials distribution",
    description: "",
  },
];
console.log(data)

function Index({ auth }) {
  return (
      <PublicTemplateLayout auth={auth}>
        <div className="">
          <div className="container mx-auto">
            <div className="mb-10 text-center">
              <div className="font-semibold uppercase text-secondary">
                Our activities
              </div>
              <div className="text-3xl font-extrabold text-primary">
                Do you curious, how and where we work?
              </div>
              <div className="">
                We have a collaborative and supportive culture that encourages
                teamwork, innovation, and learning.
              </div>
            </div>
          </div>
          <motion.div
            className=""
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            exit={{
              opacity: 0,
              x: -window.innerWidth,
              transition: { duration: 0.3 },
            }}
            initial={{
              opacity: 0,
              x: -window.innerWidth,
            }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="container mx-auto">
              <div className="w-full" style={{ height: window.innerHeight - 360 }}>
                {/* <Carousel
                  className="rounded-xl w-full"
                  autoplayDelay={5000}
                  loop={true}
                >
                  {data.map((galleryImage, index) => {
                    return (
                      <div className="relative h-full w-full" key={index}>
                        <img
                          src={galleryImage.url}
                          alt={galleryImage?.caption}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 grid w-full h-full place-items-center bg-black/20">
                          <p className="text-xl font-bold text-white">
                            {galleryImage?.caption}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </Carousel> */}
                <PhotoProvider>
                    <div className=" mx-auto pt-8 grid gird-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
                   {data.map((galleryImage, index) => {
                    return (
                    <PhotoView src={galleryImage.url}>
                       <div className="overflow-hidden inline-block border-[.2rem] border-primary rounded-md ">
                         <img src={galleryImage.url} alt="" />
                       </div>
                     
                    </PhotoView>
                    )
                   })}
                   </div>
                </PhotoProvider>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <Section>
      <div className="md:w-[90%] mx-auto px-2 md:px-0">
        <h1 className="text-center text-3xl font-semibold">Photo Gallery</h1>
        <PhotoProvider>
          <div className="md:w-[90%] mx-auto pt-8 grid gird-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {imagePaths.map((item, index) => (
              <PhotoView src={item.replace("public/", "")} key={index}>
                <div className="overflow-hidden inline-block border-[.2rem] border-primary rounded-md ">
                  <img
                    src={item.replace("public/", "")}
                    alt="gallery"
                    key={index}
                    className="cursor-pointer shadow-md hover:scale-110 duration-500 transition-transform h-[300px] w-[400px]"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </Section> */}
      </PublicTemplateLayout>
  );
}

export default Index;
