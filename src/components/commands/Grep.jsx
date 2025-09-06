import CommandLayout from '../CommandLayout';

export default function Grep() {
  const normalContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        The <code className="bg-gray-100 px-1 rounded">grep</code> command stands for <strong>Global Regular Expression Print</strong>. It’s used to search for patterns inside files and display the matching lines. Whether you're scanning logs, filtering output, or debugging code, <code>grep</code> is a must-have tool for developers and sysadmins.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">🔧 Basic Syntax</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        grep [options] "pattern" filename
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">🧪 Common Examples</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">grep "error" logfile.txt</code> — Find lines containing "error"</li>
        <li><code className="bg-gray-100 px-1 rounded">grep -i "warning" logfile.txt</code> — Case-insensitive search</li>
        <li><code className="bg-gray-100 px-1 rounded">grep -r "TODO" .</code> — Search recursively in all files</li>
        <li><code className="bg-gray-100 px-1 rounded">grep -w "main"</code> — Match whole word only</li>
        <li><code className="bg-gray-100 px-1 rounded">grep -c "404"</code> — Count matching lines</li>
        <li><code className="bg-gray-100 px-1 rounded">grep -v "debug"</code> — Show lines that do NOT contain "debug"</li>
        <li><code className="bg-gray-100 px-1 rounded">grep -n "root"</code> — Show line numbers with matches</li>
        <li><code className="bg-gray-100 px-1 rounded">grep -o "http"</code> — Show only the matched word</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">📁 Special Use Cases</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">grep " " filename</code> — Find lines with spaces</li>
        <li><code className="bg-gray-100 px-1 rounded">grep "^start"</code> — Match lines that begin with "start"</li>
        <li><code className="bg-gray-100 px-1 rounded">grep "end$"</code> — Match lines that end with "end"</li>
        <li><code className="bg-gray-100 px-1 rounded">grep -E "cat|dog"</code> — Match either "cat" or "dog" using extended regex</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">📘 Example</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        grep -i "linux" notes.txt
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        This finds all lines in <code>notes.txt</code> that mention "linux", regardless of case.
      </p>
    </>
  );

  const kidContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        🧒 Imagine you have a big book full of stories. You want to find every page that talks about dragons. Instead of flipping through every page, you ask your robot: “Can you find all the pages with the word ‘dragon’?” That’s what <code className="bg-gray-100 px-1 rounded">grep</code> does—it finds the word you’re looking for and shows you the whole sentence!
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        You can even say things like “Don’t show me the pages with ‘monster’,” or “Show me only the pages where ‘dragon’ is the first word.” Your robot listens carefully and brings back exactly what you asked for!
      </p>
    </>
  );

  return (
    <CommandLayout
      title="🔎 Command:"
      command="grep"
      normalContent={normalContent}
      kidContent={kidContent}
    />
  );
}
