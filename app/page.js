import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="m-3 mt-12 sm:m-10 text-center">
       <div>
          <h2 className="text-[25px] font-bold text-green-800">JUST ACADEMIC QUESTIONS BANK</h2>
          <p className="w-full max-w-[400px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[600px] mb-5 mt-5 mx-auto text-sm text-center">
            JUST Academic Questions Bank is a centralized platform offering easy access to a wide range of academic resources. 
            It enhances exam preparation and encourages collaborative contributions, fostering a culture of academic excellence.
          </p>

        </div>
        <Link href="/core" className="border-1 m-2 p-2 core_color rounded-sm hover:border-green-1000">
          Start Contributing
        </Link>
        <Link href="/departments" className="border-1 m-2 p-2 core_color rounded-sm">
          Find Questions
        </Link>
      </div>
      <div className="mt-20 m-3 sm:m-10 text-center">
        <h2 className="text-[25px] font-bold text-green-800">HERE IS HOW YOU CAN CONTRIBUTE</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-lg drop-shadow-lg">
            <p className="text-lg font-bold text-green-800 mb-3">COLLECT THE QUESTIONS</p>
            <p className="text-sm">
              It&apos;s better to collect a fresh question. After collecting the question, take a photo of that single question.
              Please try to take the photo as clear as you can.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg drop-shadow-lg">
            <p className="text-lg font-bold text-green-800 mb-3">MAKE PDF AND RESIZE</p>
            <p className="text-sm">
              You may use one of the apps to make the photo to pdf. Don&apos;t make the pdf above <b className="text-red-500">5 mb</b>.
              To resize it you can use
              <Link href="https://www.ilovepdf.com/compress_pdf" target="_blank">
                <i className="text-red-500"> ilovepdf </i>
              </Link>
              or
              <Link href="https://pdfresizer.com/resize" target="_blank">
                <i className="text-red-500"> pdfresizer</i>
              </Link>.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg drop-shadow-lg">
            <p className="text-lg font-bold text-green-800 mb-3">ADDRESS THE QUESTION</p>
            <p className="text-sm">
              Please kindly write properly the course title, faculty, and the session
              of the question. So students do not waste time in super PL.
            </p>
          </div>
        </div>

      </div>
    </section>

  );
}
