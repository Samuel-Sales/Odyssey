import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex justify-between items-center ml-120 mt-16">
            <div>
                <img src="/Logo.svg" alt="Logo" />
            </div>
            <nav className="flex gap-12 font-semibold text-lg">
                <Link>Stay Connected</Link>
                <Link>Education</Link>
                <Link>Community</Link>
                <Link>About Us</Link>
                <div>
                    <Link className="mr-120 bg-botao-preto text-white py-5 px-12 rounded-2xl">Sign in</Link>
                </div>
            </nav>
        </header>
    );
};