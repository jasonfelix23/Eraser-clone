import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import { PiEraserFill } from "react-icons/pi";

export default function Page() {
    return (
        <section className="bg-white dark:bg-zinc-900" >
            <div className="md:grid md:min-h-screen md:grid-cols-12">
                <aside className="relative block h-16 md:order-last md:col-span-5 md:h-full xl:col-span-6">
                    <img
                        alt="Eraser"
                        src="https://images.unsplash.com/photo-1605106925746-22f723ca945b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main
                    className="flex items-center justify-center min-h-screen px-8 py-8 sm:px-12 md:col-span-7 md:px-16 md:py-2 xl:col-span-6"
                >
                    <div className="flex flex-col max-w-xl lg:max-w-3xl">
                        <a className="block mx-auto text-center mb-2" href="/">
                            <span className="sr-only">Home</span>
                            <a className="block text-blue-600 dark:text-blue-600" href="/">
                                <span className="sr-only">Home</span>
                                <PiEraserFill size={60} />
                            </a>
                        </a>

                        <SignUp />
                    </div>
                </main>
            </div>
        </section >

    );
}