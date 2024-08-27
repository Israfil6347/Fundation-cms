import PublicTemplateLayout from "@/Layouts/PublicTemplateLayout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

function History({ auth }) {
  return (
    <div>
      <PublicTemplateLayout auth={auth}>
        <Head title="History" />
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
                      Our History
                    </div>
                    <div className="text-3xl text-primary">
                      History of{" "}
                      <strong className="font-extrabold">
                        Father Charles Joseph Young Foundation
                      </strong>
                    </div>
                    <div className=""></div>
                  </div>
                  <section className="space-y-6">
                    <p>
                      Rev. Father Charles Joseph Young, CSC (1904-1988) who is
                      the pioneer of the credit union movement in Bangladesh and
                      the founder of The Christian Co-operative Credit Union
                      Ltd, Dhaka (CCCUL), now popularly known as the “Dhaka
                      Credit”.
                    </p>
                    <p>
                      Father Charles came to Bangladesh in 1933 worked in Dhaka
                      and Mymensingh in several roles. He was shocked to see the
                      financial condition of community in Bangladesh. They used
                      to borrow money from Kabuliwalas which could not be repaid
                      properly. Seeing this situation, he was very upset and
                      dreamed of a society which free from hunger and poverty.
                    </p>
                    <p>
                      The vision has come into reality through establishing The
                      Christian Co-operative Credit Union ltd, Dhaka in 1955
                      with 50 members only. In 2024, the number of the Members
                      of the Dhaka Credit is around 46,000. The Christian
                      Co-operative Credit Union ltd, Dhaka is operating its
                      activities among the Christian community as per its
                      bye-laws in Dhaka, Gazipur, Narayanganj and Munshiganj
                      districts for improving the standard of living. It is
                      realized that, Dhaka Credit could not reach with its
                      activities beyond the Christian community under
                      jurisdiction of its working area though there are many
                      people are facing same sufferings for their livelihood.
                    </p>
                    <p>
                      In 2019, the then Executive Committee of The Christian
                      Cooperative Credit Union Limited, Dhaka led by its
                      President Mr. Babu Markus Gomes, decided to establish a
                      Foundation in remembrance of Fr. Charles J. Young, CSC to
                      spread out the development initiatives irrespective of
                      caste, creed and religion under jurisdiction of its
                      working area.
                    </p>
                    <p>
                      On August 17,2019, the “Fr. Charles J. Young Foundation”
                      was established to fulfill the dream of Rev. Father
                      Charles J. Young, CSC through conduct research on
                      co-operative, educational supports to poor & meritorious
                      students for higher education, provide technical
                      vocational education, women empowerment and youth
                      development.
                    </p>
                    <p>
                      The First Executive Board of the “Fr. Charles J. Young
                      Foundation” consists of Mr. Babu Markus Gomes as Chairman,
                      Mr. Lintu Christopher Gomes as Secretary and Mr. Shiran
                      Sylvester Gomes, Mr. Pankaj Gilbert Costa, Mr. Bipul
                      Lawrence Gomes, Mrs. Papia Rebeiro and Mr. Peter Raton
                      Corraya as members. Rev. Father Frank Quinlivan,
                      Development Director of Notre Dame University Bangladesh
                      officially announced the establishment the Foundation. The
                      Chairman of the Foundation and President of Dhaka Credit
                      Mr. Babu Markus Gomes chaired the event. Among others,
                      former President of Dhaka Credit, Mr. Pankaj Gilbert
                      Costa, Mr. Nirmal Rozario, Executive Board Members and
                      high officials of Dhaka Credit were present.
                    </p>
                    <p>
                      The First Executive Committee of the Foundation has
                      initiated the registration process with Registrar of Joint
                      Stock of Company according to the Memorandum of
                      Association and Articles of Association. As per the rules
                      and regulation, the president of Dhaka Credit will hold
                      the position as Chairman of the Foundation while CEO of
                      Dhaka Credit will be the Secretary. In accordance with
                      that, president of Dhaka Credit Pankaj Gilbert Costa is
                      the Chairman of second Executive Committee of the
                      Foundation, Mr. Babu Markus Gomes was the Vice- Chairman,
                      Mr. Liton Tomas Rozario was the Secretary, Mr. Albert
                      Asish Biswas was the Treasurer and Mr. Ignatious Hemanta
                      Corraya, Mr. Peter Raton Corraya and Mrs. Papia Rebeiro
                      were the Executive Board Members. By the enormous effort
                      of this Board, the Foundation achieved the registration on
                      7th December 2020, under the Registrar of joint Stock
                      Companies and Firms Act 1860 of Bangladesh Government. It
                      is realized that, there is limited scope to take
                      development initiatives in the area of its working area.
                      So, the Executive Committee has taken initiatives to get
                      registration with NGO Affairs Bureau of Bangladesh. The
                      Committee processed for registration with NGOAB. The 3rd
                      Executive Committee of the Foundation obtained NGO Affairs
                      Bureau registration in 2023. Obtaining the NGO AB
                      registration, it opens new window to work in the community
                      through foreign donation. The 3rd Executive Committees are
                      Mr. Ignatious Hemanta Corraya is the Chairman, Mr. Babu
                      Markus Gomes is the Vice- Chairman, Mr. Liton Tomas
                      Rozario is the Secretary, Mr. Albert Asish Biswas is the
                      Treasurer and Mr. Pankaj Gilbert Costa, Mr. Albert Asish
                      Biswas, Mr. Peter Raton Corraya and Mrs. Papia Rebeiro,
                      Mr. Michael John Gomes are the Members.
                    </p>
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

export default History;
