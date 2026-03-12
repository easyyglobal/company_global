import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import BackToTop from '../common/BackToTop';
import AIRecommendation from '../common/AIRecommendation';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <AIRecommendation />
      <BackToTop />
    </div>
  );
}
