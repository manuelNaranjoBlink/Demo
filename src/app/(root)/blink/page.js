import { Suspense } from 'react';
import ViewBooksSection from './components/ViewBooks'
import './blink.css';

export default async function MainPage() {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ViewBooksSection />
      </Suspense>
    </div>
  )
}