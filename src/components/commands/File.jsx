import CommandLayout from "../CommandLayout";

export default function File() {
  const normalContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        The <code className="bg-gray-100 px-1 rounded">file</code> command in Linux is used to determine the type of a file by inspecting its content—not just its name or extension. It’s a powerful tool for identifying unknown files, debugging, and scripting.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">🔧 Basic Usage</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        file filename
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        This will return something like <code>ASCII text</code>, <code>PNG image data</code>, or <code>PDF document</code> depending on the file’s content.

        You can also inspect multiple files:
      </p>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        file file*
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">🧪 Common Options</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">-b</code> — Brief mode (hides filename in output)</li>
        <li><code className="bg-gray-100 px-1 rounded">-i</code> — Show MIME type (e.g., <code>text/plain</code>)</li>
        <li><code className="bg-gray-100 px-1 rounded">-f namefile</code> — Read filenames from a file</li>
        <li><code className="bg-gray-100 px-1 rounded">-z</code> — Examine compressed files</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">📁 Special Cases</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        If a file starts with a dash (e.g., <code>-secret.txt</code>), use:
      </p>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        file -- -secret.txt
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        Or use a relative path:
      </p>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        file ./-secret.txt
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">📘 Example</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        file report.pdf
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        Output: <code>report.pdf: PDF document, version 1.4</code>
      </p>
    </>
  );

  const kidContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        🧒 Imagine you have a bunch of mystery boxes. You don’t know what’s inside just by looking at the label. So you ask your robot: “Open it and tell me what’s inside.” The robot peeks in and says, “This one’s a book,” “That one’s a picture,” or “This one’s a toy that makes noise!” That’s what <code className="bg-gray-100 px-1 rounded">file</code> does—it peeks inside and tells you what kind of thing you’re dealing with.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        If a box has a tricky name like “-secret,” your robot might get confused. So you say, “Hey robot, this is a name, not a command!” by using <code>--</code> or <code>./</code> before the name. That way, your robot knows it’s a box to open, not a secret instruction.
      </p>
    </>
  );

  return (
    <CommandLayout
      title="🕵️ Command:"
      command="file"
      normalContent={normalContent}
      kidContent={kidContent}
    />
  );
}
