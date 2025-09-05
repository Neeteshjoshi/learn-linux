import CommandLayout from "../CommandLayout";

export default function Ls() {
  const normalContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        The <code className="bg-gray-100 px-1 rounded">ls</code> command is your first step into the Linux file system. It lists the contents of directories, helping you understand what files and folders are present at any location.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">🔧 Basic Usage</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        ls
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">🧪 Common Options</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">ls -l</code> — Long format with permissions, owner, size, and date</li>
        <li><code className="bg-gray-100 px-1 rounded">ls -a</code> — Includes hidden files</li>
        <li><code className="bg-gray-100 px-1 rounded">ls -lh</code> — Human-readable file sizes</li>
        <li><code className="bg-gray-100 px-1 rounded">ls -la</code> — Combines long format and hidden files</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">📘 Example</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        ls -alh /home/user/projects
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        This command gives you a detailed, readable view of all files—including hidden ones—in your project directory.
      </p>
    </>
  );

  const kidContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        🧒 Imagine your computer is like a big toy box. Inside the toy box are lots of smaller boxes, each with different toys. If you want to know what toys are in a box, you use the <code className="bg-gray-100 px-1 rounded">ls</code> command. It's like saying, “Hey computer, show me what’s inside this box!” And the computer will list out all the toys (files and folders) so you can see them.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        You can even ask it to show secret toys (hidden files) or give you more details like how big the toys are and when you last played with them!
      </p>
    </>
  );

  return (
    <CommandLayout
      title="📂 Command:"
      command="ls"
      normalContent={normalContent}
      kidContent={kidContent}
    />
  );
}
