import CommandLayout from "../CommandLayout";

export default function Cd() {
  const normalContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        The <code className="bg-gray-100 px-1 rounded">cd</code> command stands for <strong>change directory</strong>. It’s used to move between folders in the Linux file system. Whether you're jumping to your home directory, stepping into a project folder, or backing out to a parent directory, <code>cd</code> is your navigation tool.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">🔧 Basic Usage</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        cd /path/to/directory
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        This moves you into the specified directory. If no path is given, it takes you to your home directory.

        You can also use shortcuts:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">cd</code> or <code className="bg-gray-100 px-1 rounded">cd ~</code> — Go to your home directory</li>
        <li><code className="bg-gray-100 px-1 rounded">cd ..</code> — Move up one level (to the parent directory)</li>
        <li><code className="bg-gray-100 px-1 rounded">cd -</code> — Switch to the previous directory</li>
        <li><code className="bg-gray-100 px-1 rounded">cd ./folder</code> — Move into a subfolder from your current location</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">📁 Handling Spaces in Folder Names</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">cd "My Documents"</code> — Use quotes</li>
        <li><code className="bg-gray-100 px-1 rounded">cd My\ Documents</code> — Escape spaces with backslashes</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">📘 Example</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        cd ~/downloads/images
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        This takes you to the <code>images</code> folder inside your <code>downloads</code> directory.
      </p>
    </>
  );

  const kidContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        🧒 Imagine your computer is like a big house with lots of rooms. Each room has different toys or books. If you want to go from the living room to the toy room, you use the <code className="bg-gray-100 px-1 rounded">cd</code> command. It’s like saying, “Hey computer, take me to the toy room!”
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        If you want to go back to the room you came from, you say <code>cd -</code>. If you want to go upstairs (to the parent room), you say <code>cd ..</code>. And if you want to go home, just say <code>cd</code> or <code>cd ~</code>. It’s like having a magic map that lets you jump between rooms with a single word!
      </p>
    </>
  );

  return (
    <CommandLayout
      title="🚪 Command:"
      command="cd"
      normalContent={normalContent}
      kidContent={kidContent}
    />
  );
}
