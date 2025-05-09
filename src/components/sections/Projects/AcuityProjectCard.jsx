export const AcuityProjectCard = () => {
  const acuityTechStack = [
    "Typescript",
    "React",
    "MUI",
    "Vite",
    "Vitest",
    "GraphQL",
    "Asynchronous Progrogramming",
  ];

  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all">
      <h3 className="text-xl font-bold mb-2">Government Contract Project</h3>
      <p className="text-gray-400 mb-4">
        Delivered comprehensive UI/UX design support for a data analytics platform empowering large-scale, complex analytical initiatives in support
          of HSI’s mission to enforce and investigate violations of U.S. criminal, civil, and administrative laws.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {acuityTechStack.map((tech, key) => {
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
    </div>
  );
};
