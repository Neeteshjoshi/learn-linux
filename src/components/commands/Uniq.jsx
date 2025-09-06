import CommandLayout from '../CommandLayout';

export default function Sort() {
  const normalContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        The <code className="bg-gray-100 px-1 rounded">sort</code> command in Linux arranges lines in a text file in a specific order—alphabetically, numerically, by month, or even randomly. It’s often paired with <code className="bg-gray-100 px-1 rounded">uniq</code> to remove duplicates after sorting.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">🔧 Basic Syntax</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        sort [options] filename
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">🧪 Common Options</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">-n</code> — Sort numerically</li>
        <li><code className="bg-gray-100 px-1 rounded">-r</code> — Reverse order</li>
        <li><code className="bg-gray-100 px-1 rounded">-k 2</code> — Sort by second column</li>
        <li><code className="bg-gray-100 px-1 rounded">-u</code> — Remove duplicates (shortcut for <code>sort | uniq</code>)</li>
        <li><code className="bg-gray-100 px-1 rounded">-M</code> — Sort by month names</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">📘 Examples</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        sort names.txt | uniq
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        Sorts the lines and removes adjacent duplicates. Use this when your file has repeated entries that aren’t grouped together.
      </p>

      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        sort -u names.txt
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        A shortcut that sorts and removes duplicates in one step.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">🧹 What is <code>uniq</code>?</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        The <code className="bg-gray-100 px-1 rounded">uniq</code> command filters out <strong>adjacent duplicate lines</strong> from a file or input stream. It’s most effective when used after <code>sort</code>, since duplicates must be grouped together to be removed.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">uniq</code> — Removes adjacent duplicates</li>
        <li><code className="bg-gray-100 px-1 rounded">uniq -c</code> — Counts how many times each line appears</li>
        <li><code className="bg-gray-100 px-1 rounded">uniq -d</code> — Shows only repeated lines</li>
        <li><code className="bg-gray-100 px-1 rounded">uniq -u</code> — Shows only unique lines</li>
      </ul>
      <p className="text-lg text-gray-700 leading-relaxed">
        Think of <code>uniq</code> as a cleanup tool that works best after you've lined everything up with <code>sort</code>.
      </p>

      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        sort scores.txt | uniq -c
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        Sorts the scores and shows how many times each score appears.
      </p>
    </>
  );

  const kidContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        🧒 Imagine you have a bunch of cards with names or numbers, and some are repeated. You ask your robot: “Put these in order, and don’t show me the same card twice!” Your robot uses <code className="bg-gray-100 px-1 rounded">sort</code> to line them up, and <code className="bg-gray-100 px-1 rounded">uniq</code> to remove the extras.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        You can even say “Tell me how many times each card showed up,” and your robot will count them for you. It’s like organizing your toy shelf and making sure no toy is listed twice!
      </p>
    </>
  );

  return (
    <CommandLayout
      title="📊 Command:"
      command="sort"
      normalContent={normalContent}
      kidContent={kidContent}
    />
  );
}
