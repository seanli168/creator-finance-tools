{/* Tools */}
import Link from 'next/link';
<section className="mt-28">
  <h2 className="text-4xl font-bold">
    Creator Tools
  </h2>

  <div className="grid md:grid-cols-3 gap-8 mt-12">
    <Link
      href="/tools/rpm-calculator"
      className="border rounded-2xl p-8 hover:border-black transition"
    >
      <h3 className="text-2xl font-semibold">
        RPM Calculator
      </h3>

      <p className="mt-4 text-gray-600">
        Estimate creator earnings using RPM and views.
      </p>
    </Link>
  </div>
</section>