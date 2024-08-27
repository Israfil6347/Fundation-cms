import { Head } from "@inertiajs/react";

import PublicTemplateLayout from "@/Layouts/PublicTemplateLayout";
import { useState } from "react";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const [donateSectionVisibility, setDonateSectionVisibility] = useState(false);
  return (
    <>
    
      <Head title="Fr. Charles J. Young Foundation" />
      <PublicTemplateLayout auth={auth}>
        <div className="flex flex-col gap-10">
          <div className="container mx-auto">
            <div className="border border-dashed border-secondary bg-surface text-onSurface">
              <div className="px-4 py-10 md:px-6 lg:py-20 lg:px-10">
                <div className="container mx-auto">
                  <div className="mb-20 text-center">
                    <div className="font-semibold uppercase">About Us</div>
                    <div className="text-3xl font-extrabold">
                      Father Charles Joseph Young Foundation
                    </div>
                  </div>
                  <section className="space-y-6">
                    <div
                      className="max-w-full prose"
                      // dangerouslySetInnerHTML={{
                      //     __html: homePagesData?.data?.content ?? '',
                      // }}
                    >
                      Fr. Charles J. Young Foundation is a non-political,
                      non-profit social service organization, which aims at
                      humanitarian service and progress of society through
                      co-operative research, provide support in general and
                      higher education, provide health services, technical
                      vocational education, training assistance, support to
                      children and youth programs and cultural programs to
                      backward communities especially; tribals, riverine,
                      floating, slum dwellers and other general population.
                      Today's children are the leaders of tomorrow. By providing
                      quality education, we can build a strong nation.
                      Unfortunately, many families lack access to quality
                      education for their children due to economic hardships and
                      lack of awareness. You have the power to create
                      opportunities for these children to receive a quality
                      education and transform their lives. You can proudly
                      contribute to changing a child's life. Sponsor a child
                      now!
                    </div>
                  </section>

                  <div className="flex items-center justify-center mt-4 mb-6">
                    <div
                      className="px-5 py-3 text-white border border-gray-600 rounded-md bg-primary hover:cursor-pointer hover:bg-primaryVariant"
                      onClick={() => {
                        setDonateSectionVisibility(!donateSectionVisibility);
                      }}
                    >
                      Donate Now
                    </div>
                  </div>
                  <section
                    className={`flex
                                        ${
                                          donateSectionVisibility
                                            ? "translate-x-0"
                                            : "translate-x-[-9999px]"
                                        }
                                        flex-col items-center justify-center gap-4 transition-all md:flex-row`}
                  >
                    <div className="flex items-center justify-center h-40 p-6 border rounded border-secondary">
                      <div className="">
                        <div className="">
                          <strong>Accounts Name: </strong> Fr. Charles J. Young
                          Foundation Accounts
                        </div>
                        <div className="">
                          <strong>Number: </strong> 00736000877
                        </div>
                        <div className="">
                          <strong>Bank Name: </strong> Bank Asia Ltd.
                        </div>
                        <div className="">
                          <strong>Branch: </strong> Scotia Branch (070276130)
                        </div>
                      </div>
                    </div>

                    <p className="text-center">OR</p>

                    <div className="flex items-center justify-center h-40 p-6 border rounded border-secondary">
                      <div className="">
                        <div className="font-extrabold">
                          “Dhaka Credit Savings Account”
                        </div>
                        <div className="">
                          <strong>Accounts Name: </strong> Fr. Charles J. Young
                          Foundation
                        </div>
                        <div className="">
                          <strong>Number: </strong> T-0065428
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PublicTemplateLayout>
    </>
  );
}
