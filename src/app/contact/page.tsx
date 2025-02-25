import QuoteForm from "@/components/quote-form";
import Socials from "./_components/socials";
import { Metadata } from "next";
import AnimatedInView from "@/components/animations";

export const metadata: Metadata = {
  title: "Contact Us",
};

const ContactPage = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4">
      <AnimatedInView x={-20} className="mt-32 mb-16 ">
        <h3>
          Ready to <span className="text-color-orange">Strengthen</span> Your
          Team?
        </h3>
        <h3>Get a Quote Today.</h3>
      </AnimatedInView>
      <AnimatedInView delay={0.2} y={20}>
        Organizing an ideal team bonding event for your team is simpler than you
        imagine. Please take a moment to provide us with some information, so we
        can serve you better. One of our team members will reach out to you
        promptly.
      </AnimatedInView>

      <div className="flex gap-10 py-20 flex-col md:flex-row ">
        <AnimatedInView x={-20} className="flex-1 shrink-0">
          <h3 className="text-3xl mb-8">Contact Us</h3>
          <div className="md:pl-6 text-[18px]">
            <p className="mb-6">Address:</p>
            <p>
              Office HQ <br />
              22, Primate Adejobi Street,
              <br /> Mende, Anthony, Ikeja, Lagos. <br /> Nigeria
            </p>
            <p className="mt-10">
              Contact Us: <br />
              Phone:{" "}
              <a className="hover:underline" href="tel:+2348032622079">
                +2348032622079
              </a>{" "}
              <br /> Email:{" "}
              <a
                className="hover:underline"
                href="mailto:booking@teambondingnigeria.com"
              >
                booking@teambondingnigeria.com
              </a>{" "}
            </p>
            <div className="my-10 flex gap-4 items-center">
              <p>Follow us:</p>
              <Socials />
            </div>
            <p>Let&apos;s build stronger teams together!</p>
          </div>
        </AnimatedInView>
        <AnimatedInView x={20} className="flex-1 shrink-0 -order-1 md:order-1">
          <QuoteForm />
        </AnimatedInView>
      </div>
    </div>
  );
};

export default ContactPage;
