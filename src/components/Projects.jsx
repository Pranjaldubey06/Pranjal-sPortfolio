const ProjectCard = ({ image, title, description, link }) => {
  return (
   <article className="relative bg-gray-800 rounded overflow-hidden shadow-lg group flex flex-col items-center justify-between mx-auto w-full h-full">
  <div className="absolute z-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

  <div className="relative z-10 w-full flex flex-col h-full">
    <figure className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex flex-col items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
          Live Preview
        </button>
      </a>
    </figure>

    <div className="flex-grow px-4 py-4 flex flex-col justify-between">
      <h3 className="text-white font-bold text-lg sm:text-xl mb-2 text-center">{title}</h3>
      <p className="text-gray-200 text-sm sm:text-base text-center">{description}</p>
    </div>
  </div>
</article>

  );
};

export default function Projects() {
  const listProjects = [
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147704672/images/1adf4-eba4-a33c-774a-0c8b431df6f4_Food-Ordering-App-iOS-System-Design.png",
      title: "Food Delivery App",
      description: "An app to order food online with real-time tracking.",
      link: "https://food-delivery-app-tau-eosin.vercel.app/",
    },
    {
      image: "https://m.media-amazon.com/images/I/31JfJ6dXD9L.png",
      title: "NetFlix_Clone",
      description: "The Netflix clone project is a web application developed using Reactjs and TailwindCss, aiming to replicate the user interface and some features of the popular streaming service, Netflix.",
      link: "https://my-netflix-movie-86t59e85y-pranjal-dubeys-projects.vercel.app/",
    },
    {
      image: "https://multichannelmerchant.com/wp-content/uploads/2019/05/amazonsouq850.jpg",
      title: "E-commerce Amazon clone",
      description: "It is a e-commerce website looking like amazon and working like amazon",
      link: "https://vercel.com/pranjal-dubeys-projects/reduxwebsite",
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4E12AQH21Aqf0JgKAg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714862944544?e=2147483647&v=beta&t=r55jHd6OAUfkFLKZt-Iyx-5Gtep3PyNWV8gMiBO2a4k",
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      link: "https://example.com/portfolio",
    },
    {
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/v1606414077/Challenges/llcq9eiv3ney5tkxgdtu.jpg",
      title: "Todo-list App",
      description: "A to-do list app to create, organize, and track tasks.",
      link: "https://my-todo-app-rosy.vercel.app/",
    },
    {
      image: "https://www.shutterstock.com/image-photo/person-using-smartphone-interact-friendly-600nw-2482428287.jpg",
      title: "ChatBot_App",
      description: "AI Chat App which answers and reply your questions-answer ",
      link:"https://vercel.com/pranjal-dubeys-projects/chatbotapplication",
    },
  ];

  return (
    <main className="p-4">
      <section id="Projects" data-aos="fade-up" data-aos-delay="300" className="text-center">
         <div className="absolute z-0 w-72 h-24 -mt-48 sm:w-86 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>
        <h1 className="text-3xl text-white sm:text-4xl font-bold mb-4">
          My <span className="text-purple-400">Projects</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">These are my projects</p>
      </section>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {listProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </main>
  );
}
