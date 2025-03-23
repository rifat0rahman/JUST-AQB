import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="m-4 mt-10 text-center">
        <h1 className="text-center font-bold">Contribute by uploading questions</h1>
        <i className="text-center text-sm text-red-500">N.B. we are currently taking only pdf</i>
      </div>
      <div className="m-10 text-center">
        <Link href="/core" className="border-1 m-2 p-2 text-red-700 border-green-700 rounded-sm">
          Start Contributing
        </Link>
        <Link href="/departments" className="border-1 text-red-700 m-2 p-2 border-green-700 rounded-sm">
          Find Questions
        </Link>
      </div>
    </section>

  );
}
