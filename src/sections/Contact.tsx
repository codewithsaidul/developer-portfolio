import ContactForm from "@/components/contact/ContactForm"
import SectionHeading from "@/components/SectionHeading/SectionHeading"


const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full relative min-h-[calc(100vh-100px)]"
    >
      {/* ========== Section Heading =================== */}
      <SectionHeading
        title="Let’s Connect"
        desc={`Whether you have a project in mind, want to collaborate, or just want to say hi — I’m always open to meaningful conversations. Feel free to reach out and let’s build something awesome together!`}
      />
      {/* ========== Section Heading =================== */}


      <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto mt-20">
        <ContactForm />
      </div>

    </section>
  )
}

export default Contact