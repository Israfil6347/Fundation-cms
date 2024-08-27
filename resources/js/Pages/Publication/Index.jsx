import PublicTemplateLayout from "@/Layouts/PublicTemplateLayout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

function Index({ auth }) {
  return (
    <>
      <PublicTemplateLayout auth={auth}>
        <Head title="Publication" />
        <motion.div>
          <div className="container flex flex-col gap-6 mx-auto text-left md:text-justify lg:text-justify">
            <div className="mb-10 text-center">
              <div className="font-semibold uppercase text-secondary">
                PUBLICATIONS
              </div>
              <div className="text-3xl font-extrabold text-primary ">
                Our latest publications
              </div>
              <div className=""></div>
            </div>
            <section className="border border-dashed border-secondary bg-surface text-onSurface">
              <div className="container mx-auto">
                <div className="py-16 border border-gray-300 border-dashed bg-blue-gray-50 text-onSurface">
                  <div className="text-center">
                    <h1 className="text-3xl font-extrabold md:text-5xl lg:text-7xl">
                      Publications
                    </h1>
                    <p>No publications has been published yet.</p>
                  </div>
                </div>
              </div>
            </section>
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial="offScreen"
            animate="onScreen"
            className="flex gap-4 px-6 py-4 divide-x rounded shadow-sm group bg-surface text-onSurface hover:cursor-pointer hover:shadow "
          >
            <div className="flex items-center justify-center">
              <i className="text-3xl fa-solid fa-file-pdf text-primary "></i>
            </div>
            <div className="px-4 divide-y">
              <div className="">
                <p className="font-bold text-primary ">
                  title
                </p>
              </div>
              <div className="pt-1 text-xs group-hover:cursor-pointer">
                <a
                  download
                  href="http:://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light hover:underline "
                >
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>
        </div> */}
          </div>
        </motion.div>
      </PublicTemplateLayout>
    </>
  );
}

export default Index;
