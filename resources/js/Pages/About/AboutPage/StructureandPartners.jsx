import PublicTemplateLayout from "@/Layouts/PublicTemplateLayout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

function StructureandPartners({ auth }) {
  return (
    <div>
      <PublicTemplateLayout auth={auth}>
        <Head title="Structure and Partners" />
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
                      Who We Are
                    </div>
                    <div className="text-3xl font-extrabold text-primary">
                      Structure and Partners
                    </div>
                    <div className=""></div>
                  </div>
                  <section className="space-y-6">
                    <p>
                      The Foundation has 9 members of Executive Committee that
                      is providing strategic directions, instructions and
                      approval for policy & decision making which guide to
                      implement the planned interventions in the community.
                    </p>
                    <p>
                      The Foundation has workforce to implement the day-to-day
                      activities with effectively. There are; Executive
                      Director, Operations Director, Program Coordinator, Youth
                      Coordinator, Finance & Admin Officer and volunteer(s). In
                      addition, the Foundation deploy other staffs based on
                      project/ specific objectives.
                    </p>
                    <p>
                      The Foundation is following partnering approach to
                      implement the activities aiming to create ownership in the
                      community. The partners are the community, elite persons,
                      teachers, schools, different youth organizations,
                      different cooperatives and NGOs. The Dhaka Credit is
                      playing key role as partner and donor as well.
                    </p>
                    <p>
                      The main office of the “Dhaka Credit” at Dhaka and 12
                      branch offices are located at strategic points in four
                      districts of Dhaka Division. It provides venue for
                      meeting/training to its hall rooms. The Foundation
                      implements the planned activities in the working area
                      through collaborating with different youth organizations,
                      cooperatives.
                    </p>

                    <div className="">
                      <h4 className="text-xl font-bold">Donors</h4>
                      <p>
                        <strong>CCCUL: </strong> The Christian Cooperative
                        Credit Union Limited, Dhaka is popularly known Dhaka
                        Credit has established Fr. Charles J. Young Foundation
                        (FCJYF) in 2019. Dhaka Credit donated obligatory fund to
                        the Fr. Charles J. Young Foundation. The Foundation is
                        continuing its planned interventions through this fund
                        and Individual & personal sponsorship.
                      </p>
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

export default StructureandPartners;
