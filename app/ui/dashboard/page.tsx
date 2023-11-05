import Link from "next/link";
export default function Page() {
    return (
        <div>
            <p>Dashboard Page</p>
            <Link className="text-blue-800" href='/ui/dashboard/invoices'>back to Invoices</Link>
        </div>
    );
}