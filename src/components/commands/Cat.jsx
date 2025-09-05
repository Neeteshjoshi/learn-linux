import CommandLayout from "../CommandLayout";

export default function Cat() {
    const normalContent = (
        <>
            <p className="text-lg text-gray-700 leading-relaxed">
                The <code className="bg-gray-100 px-1 rounded">cat</code> command stands for <strong>concatenate</strong>. It’s used to read, display, and combine the contents of files directly in the terminal.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">🔧 Basic Usage</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
                cat filename.txt
            </pre>

            <h2 className="text-2xl font-semibold text-gray-800">🧪 Common Options</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><code className="bg-gray-100 px-1 rounded">cat -n</code> — Number all lines</li>
                <li><code className="bg-gray-100 px-1 rounded">cat -b</code> — Number non-blank lines</li>
                <li><code className="bg-gray-100 px-1 rounded">cat -s</code> — Suppress repeated empty lines</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800">📘 Example</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
                cat -n /etc/passwd
            </pre>

            <h2 className="text-2xl font-semibold text-gray-800">📁 Reading Dashed Files</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                If your file starts with a dash (like <code>-example.txt</code>), the shell might think it’s an option. To fix this, use one of these:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><code className="bg-gray-100 px-1 rounded">cat -- -example.txt</code> : The <code>--</code> tells <code>cat</code> to stop looking for options</li>
                <li><code className="bg-gray-100 px-1 rounded">cat ./-example.txt</code> : Using <code>./</code> makes it clear it’s a file in the current directory</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-800">📂 Reading Files with Spaces</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                If your filename contains spaces (like <code>my notes.txt</code>), the shell will treat each word as a separate argument unless you wrap the name properly.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><code className="bg-gray-100 px-1 rounded">cat "my notes.txt"</code> — Use double quotes to treat the entire name as one argument</li>
                <li><code className="bg-gray-100 px-1 rounded">cat 'my notes.txt'</code> — Single quotes work too</li>
                <li><code className="bg-gray-100 px-1 rounded">cat my\ notes.txt</code> — Escape each space with a backslash</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
                Quoting is the safest and cleanest method, especially in scripts or when filenames get complex.
            </p>

        </>
    );

    const kidContent = (
        <>
            <p className="text-lg text-gray-700 leading-relaxed">
                🧒 Imagine you have a bunch of storybooks. If you want to read one, you open it and look inside. That’s what <code className="bg-gray-100 px-1 rounded">cat</code> does—it opens a file and shows you what’s written inside.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
                And if your book has a funny name like “-Dinosaurs,” your robot might get confused and think you’re giving it a secret code. So you say, “Hey robot, this is a book!” by using <code>--</code> or <code>./</code> before the name. That way, your robot knows it’s a book and not a command.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
                🧒 Imagine you have a book called “My Favorite Toys.” If you just say “Read My Favorite Toys,” your robot might think you’re asking it to read three different books: “My,” “Favorite,” and “Toys.” That’s confusing!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
                So you wrap the name in quotes like this: <code>"My Favorite Toys"</code>. Now your robot knows it’s one book with a fun name. You can also use a magic backslash <code>\</code> to glue the words together like this: <code>My\ Favorite\ Toys</code>. Either way, your robot reads the whole title correctly!
            </p>
        </>
    );

    return (
        <CommandLayout
            title="📖 Command:"
            command="cat"
            normalContent={normalContent}
            kidContent={kidContent}
        />
    );
}
``