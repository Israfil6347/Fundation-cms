import PublicTemplateLayout from "@/Layouts/PublicTemplateLayout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

function Mission({ auth }) {
  return (
    <div>
      <PublicTemplateLayout auth={auth}>
        <Head title="Mission" />
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
                      Our Mission and Vision
                    </div>
                    <div className="text-3xl font-extrabold text-primary">
                      What we are aiming for?
                    </div>
                    <div className=""></div>
                  </div>
                  <section className="space-y-6">
                    <div className="">
                      <h4 className="text-xl font-bold">Vision Statement:</h4>
                      Empowering individuals and communities to achieve their
                      fullest potential building an inclusive and empowered
                      community for sustainable growth and development.
                    </div>
                    <div className="">
                      <h4 className="text-xl font-bold">Mission</h4>
                      Fr. Charles J. Young Foundation is a non-political,
                      non-profit organization which aims to empower the
                      community through providing assistance for education,
                      health, technical vocational education, skill development
                      training, cultural programs, co-operative research and
                      especially youth development of backward & unaware
                      communities including tribals, riverine, floating, slum
                      dwellers irrespective of caste, creed & religion.
                      <h3 className="py-2 font-bold">
                        We will fulfill our mission through;
                      </h3>
                      <ul className="ml-6 list-disc">
                        <li>Support to the poor and oppressed</li>
                        <li>Build awareness</li>
                        <li>Child and Youth development</li>
                        <li>Skill development initiatives</li>
                        <li>Gender equality/empowerment</li>
                      </ul>
                    </div>
                    <div className="">
                      <h4 className="text-xl font-bold">Values</h4>
                      Values are the beliefs and principles that move forward
                      upto the results.Fr. Charles J. Young Foundation believes,
                      keeps it in mind to achieving its goals through;
                      <ul className="ml-6 list-disc">
                        <li>Humility</li>
                        <li>Respect</li>
                        <li>Integrity</li>
                        <li>Commitment</li>
                        <li>Results oriented</li>
                      </ul>
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

export default Mission;
