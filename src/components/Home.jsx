export default function Home() {
  return (
    <div className="space-y-8 px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
        Welcome to the Linux Command Explorer
      </h1>
      <p className="text-xl text-gray-700 leading-relaxed">
        Whether you're just starting your journey into the world of <span className="font-semibold text-gray-900">Linux</span> or you're looking to sharpen your command-line skills, you've landed in the right place. This project is designed as a structured, hands-on guide to mastering essential Linux commands—one step at a time.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Each command is presented on its own dedicated page, complete with:
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
          <li><span className="font-medium text-gray-900">Clear explanations</span> that break down what the command does and how it works</li>
          <li><span className="font-medium text-gray-900">Real-world examples</span> to help you understand its practical use</li>
          <li><span className="font-medium text-gray-900">Tips and variations</span> to deepen your understanding and expand your toolkit</li>
        </ul>
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        The goal is simple: to make learning Linux commands intuitive, enjoyable, and empowering. Whether you're navigating directories, managing files, or scanning your system like a pro, this guide will help you build confidence and fluency in the terminal.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        So dive in, explore, and let the command line become your playground. Happy hacking! 🖥️✨
      </p>
    </div>
  );
}
