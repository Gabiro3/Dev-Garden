export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              This is a private Garden
            </h2>
            <p className="mt-4 text-gray-600">
              Consult one of our agents at your university to join or contact us at:
            </p>
            <p className="mt-2 text-gray-600">
              <a href="mailto:thegardenrwanda@gmail.com" className="text-blue-600 underline">
                oleonpublishers@gmail.com
              </a>
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}

