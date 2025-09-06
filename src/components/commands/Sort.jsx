import CommandLayout from '../CommandLayout';

export default function Sort() {
  const normalContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        The <code className="bg-gray-100 px-1 rounded">sort</code> command in Linux is used to arrange lines in a text file in a specific order—alphabetically, numerically, by month, or even randomly. It’s a powerful tool for organizing data and improving readability.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">🔧 Basic Syntax</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        sort [options] filename
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">🧪 Common Options</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">-n</code> — Sort numerically (e.g., 2 before 10)</li>
        <li><code className="bg-gray-100 px-1 rounded">-r</code> — Reverse the sort order</li>
        <li><code className="bg-gray-100 px-1 rounded">-k 2</code> — Sort by the second column</li>
        <li><code className="bg-gray-100 px-1 rounded">-u</code> — Remove duplicate lines</li>
        <li><code className="bg-gray-100 px-1 rounded">-M</code> — Sort by month names (Jan–Dec)</li>
        <li><code className="bg-gray-100 px-1 rounded">-h</code> — Sort human-readable sizes (e.g., 2K, 1G)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">📘 Examples</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        sort names.txt
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        Sorts the lines in <code>names.txt</code> alphabetically.

        You can also sort numbers:
      </p>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        sort -n scores.txt
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">📁 Special Use Cases</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">sort -k 3 data.txt</code> — Sort by the third column</li>
        <li><code className="bg-gray-100 px-1 rounded">sort -u items.txt</code> — Remove duplicates</li>
        <li><code className="bg-gray-100 px-1 rounded">sort -M months.txt</code> — Sort by month names</li>
      </ul>
    </>
  );

  const kidContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        🧒 Imagine you have a bunch of cards with names or numbers on them. They’re all mixed up! You ask your robot: “Can you put these in order for me?” That’s what <code className="bg-gray-100 px-1 rounded">sort</code> does—it lines everything up from A to Z or 1 to 100.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        You can even say “Put the biggest number first,” or “Sort by the second word on each card,” or “Don’t show me the same card twice.” Your robot listens and arranges everything just the way you want!
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
