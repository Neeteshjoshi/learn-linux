import CommandLayout from '../CommandLayout';

export default function Strings() {
  const normalContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        The <code className="bg-gray-100 px-1 rounded">strings</code> command in Linux extracts human-readable text from binary or non-text files. It scans for sequences of printable characters—typically 4 or more—and displays them, making it useful for inspecting executables, compiled programs, or unknown file types.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">🔧 Basic Syntax</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        strings [options] filename
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">🧪 Common Options</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">-n N</code> — Minimum string length (default is 4)</li>
        <li><code className="bg-gray-100 px-1 rounded">-f</code> — Show filename before each string (useful with multiple files)</li>
        <li><code className="bg-gray-100 px-1 rounded">-t x</code> — Show offset in hexadecimal before each string</li>
        <li><code className="bg-gray-100 px-1 rounded">-e encoding</code> — Specify character encoding (e.g., UTF-8)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">📘 Examples</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        strings /bin/ls
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        Extracts readable strings from the <code>ls</code> binary—often includes error messages, function names, or embedded text.

        You can also adjust the minimum length:
      </p>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        strings -n 6 myfile.bin
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">📁 Use Cases</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Inspecting compiled programs for embedded messages</li>
        <li>Extracting readable content from unknown or corrupted files</li>
        <li>Reverse engineering or debugging binaries</li>
        <li>Scanning malware or suspicious executables</li>
      </ul>
    </>
  );

  const kidContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        🧒 Imagine you have a robot toy that speaks, but you don’t know what it’s going to say. You open it up and look for little notes hidden inside. That’s what <code className="bg-gray-100 px-1 rounded">strings</code> does—it peeks inside a file and finds any words or messages that humans can read.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Even if the file looks like a bunch of gibberish, <code>strings</code> finds the secret messages and shows them to you. It’s like having X-ray vision for computer files!
      </p>
    </>
  );

  return (
    <CommandLayout
      title="🔤 Command:"
      command="strings"
      normalContent={normalContent}
      kidContent={kidContent}
    />
  );
}
