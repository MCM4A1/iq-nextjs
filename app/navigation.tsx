import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="sticky top-0 shadow">
            <ul className={"flex flex-row justify-center gap-3"}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/events"}>Events</Link>
                </li>
            </ul>
        </nav>
)}