import TitleHeader from "../components/TitleHeader";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="flex-center relative md:p-0 px-5"
    >

      <div className="w-full h-full container md:my-40 my-20">
         <TitleHeader
          title={"Contact Me"} 
          text={"Partner with me to craft sustainable, tailored solutions."}                                    
          number={"05"}   
        />

        <div className="mt-20">
          <div className="grid grid-col-12">
             <div className="md:col-span-5 col-span-12">
              <ContactForm />
            </div>
             <div className="md:col-span-7 col-span-12"></div>
          </div>
        </div>

      </div>
      
    </section>
  )
}

export default Contact
