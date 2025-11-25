// app/page.jsx
import { services, portfolio, testimonials } from '../data/data';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Zina Tech Global</h1>
          <p>We provide mobile phone repair, motherboard engineering, social media & digital marketing services.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          {services.map(s => (
            <div key={s.id} className="mb-4">
              <h3 className="font-semibold">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          {portfolio.map(p => (
            <div key={p.id} className="mb-2">
              <h4>{p.title}</h4>
              <p>{p.tag}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          {testimonials.map(t => (
            <div key={t.id} className="mb-2">
              <p>"{t.quote}"</p>
              <p>- {t.name}, {t.role}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
