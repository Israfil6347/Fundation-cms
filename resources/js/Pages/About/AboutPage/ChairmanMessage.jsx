import PublicTemplateLayout from "@/Layouts/PublicTemplateLayout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

function ChairmanMessage({ auth }) {
  return (
    <div>
      <PublicTemplateLayout auth={auth}>
         <Head title="Chairman Message" />
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
                      Message from the Chairman
                    </div>
                    <div className="text-3xl font-extrabold text-primary"></div>
                    <div className=""></div>
                  </div>
                  <section className="space-y-6">
                    <p>
                      This is my immense pleasure to inform you that I am
                      nominated as Chairman of Fr. Charles J. Young Foundation
                      as per Memorandum of Association and Articles of
                      Association. The Christian Cooperative Credit Union
                      Limited, Dhaka established Fr. Charles J. Young Foundation
                      in 2019 to come into reality of vision of Rev. Fr. Charles
                      J. Young, CSC who is pioneer of Credit Union Movement in
                      Bangladesh and the Founder of The Christian Cooperative
                      Credit Union Limited, Dhaka which is popularly known Dhaka
                      Credit. The vision of late Fr. Charles J. Young, CSC was
                      to poverty free community in Bangladesh. But due to legal
                      compelling reason, Dhaka Credit could not reach who are
                      suffering from different crisis. So, Dhaka Credit
                      established separate entity for development works in
                      different locations irrespective of caste, creed, religion
                      of the community. The Foundation obtained registration
                      from Registrar of Joint Stock Company in 2020 and NGO
                      Affairs Bureau, Government of Bangladesh in 2023. Now it
                      opens all the windows to implement development
                      interventions with foreign donations in its working area.
                      It is mentioned that, Dhaka Credit donated obligatory fund
                      to its sister concern and continue its program at Dhaka,
                      Gazipur, Narayanganj & Munshiganj Districts. At the
                      moment, Foundation has taken special initiative to make
                      strategic relationship with various institutions and
                      organizations. We are implementing education, health,
                      youth development, assistance for technical & vocational
                      education, cultural programs. The Foundation already
                      completed Socio-economic Baseline survey in four
                      districts. And also planning for research program.
                    </p>
                    <p>
                      We trust that the Foundation will be able to continue its
                      development efforts directive irrespective of caste creed
                      and religion.
                    </p>
                    <p>
                      We accept donations from individual & corporate to provide
                      education assistance for the poor and meritorious
                      students.
                    </p>
                    <p>
                      May all of you be happy, healthy and prosperous in your
                      day-to-day life.
                    </p>
                    <div>
                      <p>With thanks and best regards.</p>
                      <p>Ignatious Hemanta Corraya</p>
                      <p>Chairman, Fr. Charles J. Young Foundation</p>
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

export default ChairmanMessage;
