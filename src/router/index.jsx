import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../components/layout/Layout';
import PageTransition from '../components/ui/PageTransition';

// 页面懒加载 / Lazy-loaded pages
const Home = lazy(() => import('../pages/Home/Home'));
const Attractions = lazy(() => import('../pages/Attractions/Attractions'));
const AttractionDetail = lazy(() => import('../pages/Attractions/AttractionDetail'));
const Food = lazy(() => import('../pages/Food/Food'));
const FoodDetail = lazy(() => import('../pages/Food/FoodDetail'));
const Transportation = lazy(() => import('../pages/Transportation/Transportation'));
const Accommodation = lazy(() => import('../pages/Accommodation/Accommodation'));
const AccommodationDetail = lazy(() => import('../pages/Accommodation/AccommodationDetail'));
const Seasons = lazy(() => import('../pages/Seasons/Seasons'));
const Itineraries = lazy(() => import('../pages/Itineraries/Itineraries'));

function PageLoader() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', fontFamily: 'var(--font-body-cn)', color: 'var(--ink-medium)',
    }}>
      <p>加载中 / Loading...</p>
    </div>
  );
}

function wrapPage(Component) {
  return (
    <Suspense fallback={<PageLoader />}>
      <PageTransition>
        <Component />
      </PageTransition>
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: wrapPage(Home) },
      { path: 'attractions', element: wrapPage(Attractions) },
      { path: 'attractions/:id', element: wrapPage(AttractionDetail) },
      { path: 'food', element: wrapPage(Food) },
      { path: 'food/:id', element: wrapPage(FoodDetail) },
      { path: 'transportation', element: wrapPage(Transportation) },
      { path: 'accommodation', element: wrapPage(Accommodation) },
      { path: 'accommodation/:id', element: wrapPage(AccommodationDetail) },
      { path: 'seasons', element: wrapPage(Seasons) },
      { path: 'itineraries', element: wrapPage(Itineraries) },
    ],
  },
]);