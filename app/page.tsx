import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h1 className="text-xl text-white">
            Welcome to InterQueo.
            <a
                className={"link"}
                href="https://discord.gg/eBtpQDPxMh"
                target="_blank"
                rel="noopener noreferrer"
            >

            </a>
        </h1>
        <Link href={"/events"}>Checkout our events.</Link>
        <p>
          Join us on{" "}
          <a
              className={"link"}
              href="https://discord.gg/eBtpQDPxMh"
              target="_blank"
              rel="noopener noreferrer"
          >
            Discord
          </a>
        </p>
      </main>
    </div>
  );
}
