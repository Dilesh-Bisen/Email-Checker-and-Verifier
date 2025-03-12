import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';
import SixthPage from './components/SixthPage';
import SeventhPage from './components/SeventhPage';
import EighthPage from './components/EighthPage';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#09061A] text-white">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EighthPage />
    </div>
  );
}