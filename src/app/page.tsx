import Carousel from '../../components/Carousel';
import HeroSection from '../../components/HeroSection';  // Mengimpor HeroSection
import Footer from '../../components/Footer';  // Mengimpor Footer
import CalltoAction from '../../components/CallToAction'; // Menjaga import komponen CalltoAction

const HomePage = () => {
  const traditionalCakes = [
    {
      image: '/images_traditional_cake/kue_lapis.jpg',
      title: 'Kue Lapis',
      description: 'Kue lapis dengan tekstur lembut dan manis.',
    },
    {
      image: '/images_traditional_cake/jalangkote.jpg',
      title: 'Jalangkote',
      description: 'Klepon isi gula merah dengan parutan kelapa.',
    },
    {
      image: '/images_traditional_cake/ondeonde.jpg',
      title: 'Onde-Onde',
      description: 'Onde-onde dengan isian kacang hijau.',
    },
    {
      image: '/images_traditional_cake/klepon.jpg',
      title: 'Klepon',
      description: 'blom ada',
    },
    {
      image: '/images_traditional_cake/barongko.jpg',
      title: 'Barongko',
      description: 'blom ada',
    },
    {
      image: '/images_traditional_cake/cucur.jpg',
      title: 'Cucur',
      description: 'blom ada',
    },
    {
      image: '/images_traditional_cake/putu.jpg',
      title: 'Putu',
      description: 'blom ada',
    },
    {
      image: '/images_traditional_cake/dadar_gulung.jpg',
      title: 'Dadar Gulung',
      description: 'blom ada',
    },
  ];

  const modernCakes = [
    {
      image: '/images_modern_cake/croissant.jpg',
      title: 'Croissant',
      description: 'Cheesecake dengan rasa creamy dan lezat.',
    },
    {
      image: '/images_modern_cake/donat.jpg',
      title: 'Donat',
      description: 'Brownies coklat dengan tekstur fudgy.',
    },
    {
      image: '/images_modern_cake/cookies.jpg',
      title: 'Cookies',
      description: 'Tiramisu dengan sentuhan kopi yang kuat.',
    },
    {
      image: '/images_modern_cake/japanese_cheseecake.jpg',
      title: 'Japanese Cheesecake',
      description: 'blom ada',
    },
    {
      image: '/images_modern_cake/choco_muffin.jpg',
      title: 'Choco Muffin',
      description: 'blom ada',
    },
    {
      image: '/images_modern_cake/ichigo_daifuku.jpg',
      title: 'Ichigo Daifuku',
      description: 'blom ada',
    },
    {
      image: '/images_modern_cake/brownies.jpg',
      title: 'Brownies',
      description: 'blom ada',
    },
    {
      image: '/images/choux_pastry.jpg',
      title: 'Choux Pastry',
      description: 'blom ada',
    },
  ];

  return (
    <div>
      <div className="container mx-auto mt-8">
        {/* Menggunakan HeroSection yang sudah dipisah */}
        <HeroSection />

        {/* Traditional Cakes Section */}
        <section className="my-8 pt-8 tratitional-cake-section">
          <h2 className="text-2xl font-semibold mb-4">Recipes Cake Recomendation</h2>
          <Carousel items={traditionalCakes}  />
        </section>

        {/* Jika ingin tetap menggunakan CalltoAction dari komponen lain, biarkan tetap ada */}
        <CalltoAction />

      </div>

      {/* Menambahkan Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
