import SectionHeading from "../ui/SectionHeading";

const NotSure = () => {
  return (
    <section className="section-padding">
      <div className="section-inner bg-white rounded-2xl p-8 sm:p-12 lg:p-16 grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          badge="Not sure where to start?"
          title="Describe the problem, not the solution"
          subtitle="Our team of experts is ready to guide you through the process and answer any questions you may have."
        />

        <div className="flex flex-col gap-4">
          <p className="text-lg leading-relaxed text-text-medium">
            Send a short description of what is not working — the manual job
            that eats a day a week, the system that cannot talk to the other
            system, the site that gets traffic but no enquiries. We will reply
            with what we think it would take to fix, roughly what it costs and
            whether it is worth doing at all.
          </p>

          <button className="btn btn-primary">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default NotSure;
