
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm(
        "service_20o7hag", 
        "template_licpdu8", 
        e.target,
        "nUYxYwV-vQzVmuLJ_" 
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Message sent successfully!");
          e.target.reset(); 
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact-section" className="contact-section bg-[#f6f3fc] py-16">
      <div className="mx-auto w-[95%] lg:w-4/5 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#8750f7] to-[#2a1454] text-center mb-6 leading-tight">
          Contact Me
        </h2>

        <p className="text-[#2a1454] text-base md:text-lg leading-relaxed text-center mb-12 w-4/5 mx-auto">
          Feel free to reach out for collaborations, project inquiries, or just to say Hi, I’d love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          <div className="order-1 flex justify-center h-full">
            <img
              src="./get-in.jpg"
              alt="Contact Illustration"
              className="w-full h-full max-w-sm md:max-w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="order-2 bg-white rounded-lg shadow-lg p-4 lg:p-8 flex flex-col">
            <div className="section-header mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#8750f7] to-[#2a1454] text-transparent bg-clip-text leading-[2.5]">
                Let’s work together!
              </h2>
              <p className="text-base md:text-lg text-gray-700 mt-4">
                I design and code beautifully simple things and I love what I do. Just simple like that!
              </p>
            </div>

           
            <form className="space-y-6 " onSubmit={sendEmail}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from_name" 
                  placeholder="First Name"
                  className="w-full p-3 border bg-[#f6f3fc] border-gray-300 rounded focus:outline-none focus:border-[#8750f7]"
                  required
                />
                <input
                  type="email"
                  name="from_email" 
                  placeholder="Email Address"
                  className="w-full p-3 border bg-[#f6f3fc] border-gray-300 rounded focus:outline-none focus:border-[#8750f7]"
                  required
                />
              </div>

              <textarea
                name="message" 
                placeholder="Message"
                className="w-full p-3 bg-[#f6f3fc] border border-gray-300 rounded focus:outline-none focus:border-[#8750f7]"
                rows="5"
                required
              ></textarea>

              <button
                type="submit"
                className="mt-8 py-2 px-6 rounded-full font-bold text-white bg-linear-to-r from-[#8750f7] to-[#2a1454] hover:bg-linear-to-r hover:from-[#2a1454] hover:to-[#8750f7] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};