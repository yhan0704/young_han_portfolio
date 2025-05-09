export const ComingSoonCard = () => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all">
      <h3 className="text-xl font-bold mb-2">More to come...</h3>
      <p className="text-gray-400 mb-4">
        I am currently expanding my skill set through projects using Next.js, Prisma, and Tailwind CSS,
building scalable, high-performance web applications with modern tooling and best practices. I
am eager to bring this technical versatility and commitment to continuous learning to your team.
      </p>
      <div className="flex justify-between items-center">
        <a
          href="https://www.linkedin.com/in/yhan1205/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Check my LinkedIn for more 🙂
        </a>
      </div>
    </div>
  );
};
