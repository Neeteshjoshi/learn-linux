import CommandLayout from '../CommandLayout';

export default function Find() {
  const normalContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        The <code className="bg-gray-100 px-1 rounded">find</code> command is one of the most powerful tools in Linux. It searches for files and directories by name, type, size, permissions, modification time, and more. You can even perform actions on the results, like deleting or executing commands.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">🔧 Basic Syntax</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        find [path] [options] [expression]
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        - <strong>path</strong>: where to start searching<br />
        - <strong>options</strong>: refine the search (e.g., <code>-type</code>, <code>-size</code>)<br />
        - <strong>expression</strong>: what to match (e.g., <code>-name</code>, <code>-perm</code>)
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">🧪 Common Examples</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">find . -name "notes.txt"</code> — Find a file by name in current directory</li>
        <li><code className="bg-gray-100 px-1 rounded">find /home -iname "*.jpg"</code> — Case-insensitive search for images</li>
        <li><code className="bg-gray-100 px-1 rounded">find . -type d</code> — Find all directories</li>
        <li><code className="bg-gray-100 px-1 rounded">find . -size +10M</code> — Find files larger than 10MB</li>
        <li><code className="bg-gray-100 px-1 rounded">find . -perm 0777</code> — Find files with 777 permissions</li>
        <li><code className="bg-gray-100 px-1 rounded">find . -empty</code> — Find empty files or folders</li>
        <li><code className="bg-gray-100 px-1 rounded">find . -name "*.txt" -exec cat {} \;</code> — Read all `.txt` files</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">📁 Handling Special Cases</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">find . -name "* *"</code> — Find files with spaces in their names</li>
        <li><code className="bg-gray-100 px-1 rounded">find . -name "-secret.txt"</code> — Use <code>--</code> or <code>./</code> to avoid option confusion</li>
        <li><code className="bg-gray-100 px-1 rounded">find . -type f -exec file {} + | grep 'text'</code> — Find human-readable files</li>
      </ul>
    </>
  );

  const kidContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        🧒 Imagine your computer is a giant treasure chest with lots of drawers and boxes. You want to find your favorite toy, but you forgot where you put it. So you ask your robot: “Can you look in every drawer and find the toy named ‘notes.txt’?” That’s what <code className="bg-gray-100 px-1 rounded">find</code> does—it searches everywhere until it finds what you’re looking for.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        You can say things like “Find all the big toys,” or “Find all the empty boxes,” or “Find all the books with the word ‘story’ in the name.” Your robot listens carefully and brings back exactly what you asked for!
      </p>
    </>
  );

  return (
    <CommandLayout
      title="🔍 Command:"
      command="find"
      normalContent={normalContent}
      kidContent={kidContent}
    />
  );
}
