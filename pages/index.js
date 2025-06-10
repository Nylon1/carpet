// components/GlowingCard.jsx
import Link from 'next/link';

export default function GlowingCard({ href, imageSrc, title, description }) {
  return (
    <Link href={href}>
      <a className="block rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 shadow-md hover:shadow-glow">
        <div className="relative">
          <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </a>
    </Link>
  );
}


// pages/index.js
import Head from 'next/head';
import GlowingCard from '../components/GlowingCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>BookMyCarpet – Expert Flooring Advice & Home Consultations UK</n        <meta name="description" content="Get personalised flooring recommendations, carpets or LVT, plus book a home consultation across the UK. Try our AI Advisor today!" />
      </Head>
      <main className="container mx-auto p-6">
        {/* 1. Hero */}
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to BookMyCarpet</h1>
          <p className="mb-6">Find the perfect carpet or LVT for your home—schedule a free consultation today.</p>
          <a href="/booking" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">Book a Free Home Consultation</a>
        </section>

        {/* 2. Service Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <GlowingCard href="/carpets" imageSrc="/images/carpets-overview.jpg" title="Carpets" description="Explore our range of styles and materials." />
          <GlowingCard href="/lvt" imageSrc="/images/lvt-overview.jpg" title="LVT" description="Durable luxury vinyl tile options." />
          <GlowingCard href="/visualizer" imageSrc="/images/visualizer.jpg" title="Room Visualizer" description="See your new flooring in your space." />
          <GlowingCard href="/advisor" imageSrc="/images/ai-advisor.jpg" title="AI Advisor" description="Instant expert advice." />
        </section>

        {/* 3. How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Tell us about your project.</li>
            <li>Get bespoke flooring recommendations.</li>
            <li>Book a free home consultation.</li>
          </ol>
        </section>

        {/* 4. Featured Products Teaser */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="flex space-x-4">
            <a href="/carpets" className="underline">Explore Carpets</a>
            <a href="/lvt" className="underline">Explore LVT</a>
          </div>
        </section>

        {/* 5. Coverage Areas Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Areas We Cover</h2>
          <GlowingCard href="/areas-we-cover" imageSrc="/images/map-preview.jpg" title="Our Service Regions" description="Discover where we offer home consultations." />
        </section>

        {/* 6. Gallery Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <GlowingCard href="/gallery" imageSrc="/images/gallery-preview.jpg" title="Completed Projects" description="Browse our installation gallery." />
        </section>

        {/* 7. Testimonials Carousel Placeholder */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
          <div className="bg-gray-100 p-8 rounded-lg text-center">Testimonials carousel goes here.</div>
        </section>
      </main>
    </>
  );
}

// pages/areas-we-cover.js
import Head from 'next/head';
export default function AreasWeCover() {
  return (
    <>
      <Head>
        <title>Areas We Cover – BookMyCarpet UK Service Regions</title>
        <meta name="description" content="Discover the regions across the UK where BookMyCarpet offers home flooring consultations and expert advice." />
      </Head>
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Areas We Cover</h1>
        <div className="mb-6">/* Map component goes here */</div>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#london" className="text-purple-600 underline">London</a></li>
          <li><a href="#manchester" className="text-purple-600 underline">Manchester</a></li>
          {/* More cities... */}
        </ul>
      </main>
    </>
  );
}

// pages/gallery.js
import Head from 'next/head';
export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery – BookMyCarpet Completed Projects</title>
        <meta name="description" content="Browse our gallery of completed carpet and LVT flooring installations across homes in the UK." />
      </Head>
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Map over image array */}
        </div>
      </main>
    </>
  );
}

// (Other pages: carpets.js, lvt.js, visualizer.js, advisor.js, booking.js, contact.js)
// can be created similarly with Head metadata and skeleton markup.
