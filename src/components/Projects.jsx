const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article id="projects" className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group flex items-center justify-center ml-12">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex flex-col items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Preview
            </button>
          </a>
        </figure>

        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbhPGVU29iuNjgUEjefkdUPomqpd4IM59Xsl4wZmFbZhAYTwNhyhhToA3jSZzOllJcHg&usqp=CAU",
      title: "Food Delivery App",
      description: "An app to order food online with real-time tracking.",
      link: "https://food-delivery-app-tau-eosin.vercel.app/"
    },
    {
      image:
        "https://dianapps.com/blog/wp-content/uploads/2023/09/Untitled-design-3-1.png",
      title: "Social Media App",
      description:
        "A social media platform with real-time chat and video calls.",
      link:"https://social-media-app-with-context-api-on-reactjs.vercel.app/",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/001/266/865/non_2x/booking-flight-on-a-mobile-app-vector.jpg",
      title: "Airline Reservation System",
      description: "A web app to book and manage airline tickets.",
      link: "https://example.com/airline-reservation",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQH21Aqf0JgKAg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714862944544?e=2147483647&v=beta&t=r55jHd6OAUfkFLKZt-Iyx-5Gtep3PyNWV8gMiBO2a4k",
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase projects and skills.",
      link: "https://example.com/portfolio",
    },
    {
        image:
          "https://res.cloudinary.com/dz209s6jk/image/upload/v1606414077/Challenges/llcq9eiv3ney5tkxgdtu.jpg",
        title: "Todo-list App",
        description:
          "A to-do list app is a digital application that allows users to create, organize, and track a list of tasks they need to complete",
        link: "https://my-todo-app-rosy.vercel.app/",
      },
  ];

  return (
    <main className="p-4">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, sunt.
          </p>
        </header>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
