import PublicTemplateLayout from "@/Layouts/PublicTemplateLayout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

function Activities({ auth }) {
  return (
    <div>
      <PublicTemplateLayout auth={auth}>
         <Head title="Activities" />
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
            <div className="border border-dashed border-secondary bg-surface text-onSurface">
              <div className="px-4 py-10 md:px-6 lg:py-20 lg:px-10">
                <div className="container mx-auto">
                  <div className="mb-20 text-center">
                    <div className="font-semibold uppercase text-secondary">
                      WHAT WE DO
                    </div>
                    <div className="text-3xl font-extrabold text-primary">
                      Did we meet your expectations?
                    </div>
                    <div className="">
                      From sponsoring scholarships and stipends for deserving
                      students to promoting research in the Credit Union
                      movement, the foundation is committed to academic
                      excellence and the advancement of cooperative principles.
                    </div>
                  </div>
                  <section className="space-y-6">
                    <p>
                      The foundation’s core objectives encompass a spectrum of
                      benevolent activities. From sponsoring scholarships and
                      stipends for deserving students to promoting research in
                      the Credit Union movement, the foundation is committed to
                      academic excellence and the advancement of cooperative
                      principles. Additionally, its humanitarian endeavors
                      extend to providing essential medical treatment to the
                      underprivileged, imparting vocational training to those in
                      need, and supporting nation-building, cultural, and sports
                      activities. Emphasizing inclusivity, the foundation is
                      dedicated to empowering children, youth, and women while
                      extending support to educational and vocational
                      institutions. With a broad vision of compassionate
                      benevolence. Fr. Charles J. Young Foundation serves as a
                      beacon of compassion and social progress, guided by its
                      commitment to the well-being and development of
                      individuals and society as a whole.
                    </p>
                    <div className="space-y-6">
                      <div className="">
                        <h4 className="text-xl font-bold">Focuses Area</h4>
                        <p>
                          <strong>Education</strong>- different program, photo,
                          impact story
                        </p>
                        <ul className="ml-6 list-disc">
                          <li>Stipend</li>
                          <li>Education materials</li>
                          <li>Early childhood care and development</li>
                          <li>Awareness on social safety & security</li>
                          <li>
                            Assist to establish educational and technical
                            institute
                          </li>
                          <li>
                            Technical and Vocational Education and training
                          </li>
                          <li>
                            Protect children and empowering young and women
                            Health
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <h4 className="text-xl font-bold">Health</h4>
                        <ul className="ml-6 list-disc">
                          <li>Emergency treatment support</li>
                          <li>Medical Check up</li>
                          <li>Awareness on health and nutrition</li>
                          <li>
                            Awareness on different issues Youth Development
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <h4 className="text-xl font-bold">Youth Development</h4>
                        <ul className="ml-6 list-disc">
                          <li>Assist to select right career</li>
                          <li>Linkage with financial institute</li>
                          <li>Uphold moral values</li>
                          <li>Cultural practice</li>
                          <li>Seminar on freelancing</li>
                          <li>Essay and debate completion</li>
                          <li>Seminar for nursing admission</li>
                        </ul>
                      </div>
                      <div className="">
                        <h4 className="text-xl font-bold">
                          Cooperative Centered Research
                        </h4>
                        <ul className="ml-6 list-disc">
                          <li>Socio-Economic Baseline Survey</li>
                          <li>
                            Cooperative Research and promoting Credit Union
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <h4 className="text-xl font-bold">Emergency Support</h4>
                        <p>Food support in COVID period</p>
                        <p>Mosquito net support in Dengue Crisis – 2023</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </PublicTemplateLayout>
    </div>
  );
}

export default Activities;
