import PublicTemplateLayout from "@/Layouts/PublicTemplateLayout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
function Index({ auth }) {
  return (
    <>
      <PublicTemplateLayout auth={auth}>
          <Head title="FAQ" />
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
                <div className="">
                  <div className="mb-20 text-center">
                    <div className="font-semibold uppercase text-secondary">
                      FAQ
                    </div>
                    <div className="text-3xl font-extrabold text-primary">
                      Frequently Asked Questions
                    </div>
                    <div className="">
                      Father Charles Joseph Young is popularly known as Fr.
                      Charles J. Young who is pioneer of the Credit Union
                      movement in Bangladesh and established ‘The Christian
                      Cooperative Credit Union Limited’ in Dhaka, Bangladesh.
                    </div>
                  </div>
                  <section className="space-y-6">
                    <div className="">
                      <h2 className="font-bold">
                        1. What is Fr. Charles J. Young Foundation?
                      </h2>
                      <p>
                        Answer: Fr. Charles J. Young Foundation is an
                        Bangladeshi National NGO like any other NGOs working in
                        Bangladesh. It established on August 17, 2019 that is a
                        non-political, non-profit & charitable organization that
                        founded with honor of Fr. Charles J. Young, CSC the
                        visionary behind Dhaka Credit.
                      </p>
                    </div>
                    <div className="">
                      <h2 className="font-bold">
                        2. What do you mean by Fr. and J. from Fr. Charles J.
                        Young Foundation?
                      </h2>
                      <p>
                        Answer: “Fr.” means “Father” and “J.” means “Joseph”.
                      </p>
                    </div>
                    <div className="">
                      <h2 className="font-bold">
                        3. Does Fr. Charles J. Young Foundation is an NGO?
                      </h2>
                      <p>
                        Answer: Yes, it is an NGO as well as it has registered
                        under joint stock company. Registration numbers RJSC
                        S-13463/2020 and NGOAB 3382/18-10-2023.
                      </p>
                    </div>
                    <div className="">
                      <h2 className="font-bold">
                        4. Why was Fr. Charles J. Young Foundation established?
                      </h2>
                      <p>
                        Answer: Father Charles J. Young Foundation was
                        established for community development and poverty
                        elimination in Bangladesh.
                      </p>
                    </div>
                    <div className="">
                      <h2 className="font-bold">
                        5. Who is the owner of Fr. Charles J. Young Foundation?
                      </h2>
                      <p>
                        Answer: No individual / person is the owner of the
                        Foundation. This foundation is operated by an Executive
                        Board. This Foundation was established by the Christian
                        Cooperative Credit Union Ltd (CCCUL), popularly known as
                        the “Dhaka Credit”.
                      </p>
                    </div>
                    <div className="">
                      <h2 className="font-bold">
                        6. Does anybody give donation to Fr. Charles J. Young
                        Foundation and what is the minimum amount?
                      </h2>
                      <p>
                        Answer: Yes, anybody can give donation to Fr. Charles J.
                        Young Foundation. You can give any amount monthly or at
                        a time.
                      </p>
                    </div>
                    <div className="">
                      <h2 className="font-bold">
                        7. Is there any bank account operate for Fr. Charles J.
                        Young Foundation?
                      </h2>
                      <p>
                        Answer: Yes, account name is Fr. Charles J. Young
                        Foundation at Bank Asia Ltd (Scotia Branch). To donate,
                        please click on “Donate Now” button.
                      </p>
                    </div>
                    <div className="">
                      <h2 className="font-bold">
                        8. Do external audit complete for Fr. Charles J. Young
                        Foundation?
                      </h2>
                      <p>
                        Answer: Yes, Chartered Accounting Firm complete the
                        audit by yearly basis.
                      </p>
                    </div>
                    <div>
                      <h2 className="font-bold">
                        9. How the administration costs for Father Charles J.
                        Young Foundation are maintained now?
                      </h2>
                      <p>
                        Answer: Local donations are being collected. We have a
                        few good wishers who provided the ‘seed money’ by
                        generating income from the ‘seed money’ the
                        administration costs are meet. The Foundation is trying
                        to get foreign donation. Hope after getting the fund
                        from the donor(s), the management cost will be covered.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </PublicTemplateLayout>
    </>
  );
}

export default Index;
