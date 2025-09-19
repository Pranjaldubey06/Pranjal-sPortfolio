import ProfileMain from "../assets/ProfileMain.png";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8e2ba573-9176-4aad-b8b2-3b863cc31203");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Form Submitted Successfully!");
      event.target.reset();
    } else {
      alert("Failed to submit form. Please try again.");
    } 
};
    
  return (
    <section
      id="Contact"
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-20 bg-gray-900"
    >
      <aside className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="absolute z-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] rounded-full blur-3xl opacity-50"></div>
        <img
          src={ProfileMain}
          className="relative z-10 w-72 sm:w-80 md:w-[300px] lg:w-[400px] xl:w-[500px] object-contain"
          alt="Robot Illustration"
        />
      </aside>

      <article className="w-full md:w-1/2 max-w-lg bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
          Contact <span className="text-purple-400">Me</span>
        </h2>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            Send Message
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
