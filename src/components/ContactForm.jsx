const ContactForm = () => {
  return (
    <div className="flex-center">
      <form className="w-full text[#a7a7a7] flex flex-col gap-7">
        <div claasName="">
          <label className="label" htmlfor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Tommy"
            className="bg-black-300 w-full px-4 py-4 font-light
            md:text-base text-sm placeholder:text-[#fafafa50] rounded-md"
          />
        </div>
        <div claasName="">
          <label className="label" htmlfor="email">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            placeholder="tommy@gmail.com"
            className="input"
          />
        </div>
        <div claasName="">
          <label className="label" htmlfor="subject">
            Subject
          </label>
          <input
            type="text"
            id="Subject"
            placeholder="Tommy"
            className="input"
          />
        </div>
        <div claasName="">
          <label className="label" htmlfor="message">
            Message
          </label>
          <textarea
            type="text"
            id="name"
            placeholder="How can I help you?"
            rows={"5"}
            className="input"
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer py-4 bg-blue-50 text-white-50 
          font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
