import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-5">
            <h2 className="text-xl mb-5">Dashboard</h2>
            <ul>
                <li className="mb-3">
                    <Link href="/">
                        <span className="text-gray-300 hover:text-white">Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/countries">
                        <span className="text-gray-300 hover:text-white">Countries</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
