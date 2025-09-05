import CommandLayout from "../CommandLayout";

export default function Ssh() {
    const normalContent = (
        <>
            <p className="text-lg text-gray-700 leading-relaxed">
                <code className="bg-gray-100 px-1 rounded">ssh</code> (Secure Shell) lets you securely connect to remote machines. It encrypts your communication so no one can snoop on your commands or data.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">🔧 Basic Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
                ssh username@hostname
            </pre>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><code className="bg-gray-100 px-1 rounded">ssh -p 2222</code> — Use a custom port</li>
                <li><code className="bg-gray-100 px-1 rounded">ssh -i ~/.ssh/id_rsa</code> — Use a private key</li>
                <li><code className="bg-gray-100 px-1 rounded">ssh user@host command</code> — Run a command remotely</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-800">📘 Example</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
                ssh john@192.168.1.100
            </pre>
            <p className="text-lg text-gray-700 leading-relaxed">
                This connects John to a remote machine at that IP address using username.
            </p>
        </>
    );

    const kidContent = (
        <>
            <p className="text-lg text-gray-700 leading-relaxed">
                🧒 Imagine you have a robot friend far away. You want to tell it what to do, but only you and the robot should understand the message. So you use a magic walkie-talkie—that’s what <code className="bg-gray-100 px-1 rounded">ssh</code> is!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
                It lets your computer talk to another computer safely, like a superhero sending secret missions.
            </p>
        </>
    );

    return (
        <CommandLayout
            title="🔐 Command:"
            command="ssh"
            normalContent={normalContent}
            kidContent={kidContent}
        />
    );
}
