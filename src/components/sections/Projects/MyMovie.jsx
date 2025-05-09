export const MyMovie = () => {
  const DUTechStack = [
    "Javascript",
    "React",
    "Jest",
    "Next.JS",
    "ThemeUI",
    "GraphQL",
  ];

  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all">
      <h3 className="text-xl font-bold mb-2">My Movie</h3>
      <p className="text-gray-400 mb-4">
        Fetched movies from the TMDB API and populated them into the application’s interface, ensuring a smooth and dynamic display of movie data. 
        Additionally, implemented a search functionality that allows users to easily 
        filter and find specific movies based on their queries, enhancing overall user experience and accessibility.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {DUTechStack.map((tech, key) => {
          return (
            <span
              key={key}
              className="
                  bg-blue-500/10 text-blue-500 py-1 px-3 
                  rounded-full text-sm
                  transition
                  hover:bg-blue-500/20 hover:-translate-y-0.5
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                "
            >
              {tech}
            </span>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <a
          href="https://digitalu.af.mil/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};
