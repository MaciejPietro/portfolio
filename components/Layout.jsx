import Footer from "@components/Footer";
import Header from "@components/Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-zinc-100/30 ring-1 ring-zinc-200 transition-all dark:bg-zinc-900 dark:ring-zinc-300/20 " />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto min-h-[calc(100vh-21rem)] overflow-hidden">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
