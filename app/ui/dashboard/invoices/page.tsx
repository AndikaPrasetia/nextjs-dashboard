import Link from "next/link";
export default function Page() {
    return (
        <div>
            <p>Invoices Page</p>
            <Link className='text-blue-800' href='/ui/dashboard'>back to Dashboard</Link>
        </div>
    );
}