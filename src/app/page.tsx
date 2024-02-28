import Link from "next/link";

export default function Home() {
  return (
    <Link href="/dashboard" 
      className="w-max flex self-center m-auto px-4 py-2 bg-mygreen-200 hover:bg-mygreen-800 transition-colors rounded-md text-white-100"
    >
      Start test
    </Link>
  )
}
