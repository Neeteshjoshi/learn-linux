import CommandLayout from '../CommandLayout';

export default function Base64() {
  const normalContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        The <code className="bg-gray-100 px-1 rounded">base64</code> command in Linux is used to encode binary data into ASCII text and decode it back. It’s commonly used for transmitting data over text-based protocols like email, URLs, or APIs, where raw binary might break formatting or cause corruption.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800">🔧 Basic Syntax</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        base64 [options] [file]
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">🧪 Common Options</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><code className="bg-gray-100 px-1 rounded">-d</code> or <code>--decode</code> — Decode base64 back to original</li>
        <li><code className="bg-gray-100 px-1 rounded">-w N</code> — Wrap encoded output at N characters per line</li>
        <li><code className="bg-gray-100 px-1 rounded">--help</code> — Show usage info</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">📘 Examples</h2>

      <h3 className="text-xl font-semibold text-gray-800">🔐 Encode a string</h3>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        echo -n "Hello, User!" | base64
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        Output: <code>SGVsbG8sIE5pdGVzaCE=</code> — This is the base64-encoded version of your message.

        The <code>-n</code> flag with <code>echo</code> avoids adding a newline character.
      </p>

      <h3 className="text-xl font-semibold text-gray-800">🔓 Decode a string</h3>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        echo "SGVsbG8sIE5pdGVzaCE=" | base64 -d
      </pre>
      <p className="text-lg text-gray-700 leading-relaxed">
        Output: <code>Hello, User!</code>
      </p>

      <h3 className="text-xl font-semibold text-gray-800">📁 Encode a file</h3>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        `base64 input.txt {'>'} encoded.txt`
      </pre>

      <h3 className="text-xl font-semibold text-gray-800">📁 Decode a file</h3>
      <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
        `base64 -d encoded.txt {'>'} decoded.txt`
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">⚠️ Note</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Base64 is <strong>not encryption</strong>. It’s just a way to represent binary data as readable text. Anyone can decode it easily.
      </p>
    </>
  );

  const kidContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed">
        🧒 Imagine you want to send a secret message to your friend, but you can only use letters and numbers. So you use a special robot that turns your message into a scrambled code made of safe characters. That’s what <code className="bg-gray-100 px-1 rounded">base64</code> does—it turns your message into a safe format for travel!
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        And when your friend gets the message, they use the same robot to turn it back into the original words. It’s like sending a puzzle that only your robot knows how to solve!
      </p>
    </>
  );

  return (
    <CommandLayout
      title="🔐 Command:"
      command="base64"
      normalContent={normalContent}
      kidContent={kidContent}
    />
  );
}
