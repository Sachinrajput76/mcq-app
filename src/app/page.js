
import LandingPage from "./landingPage/page";
import RootLayout from "./layout";

function Home() {

  return (
    <RootLayout>
      <main>
        <LandingPage />
      </main>
      <footer className="text-center p-4 bg-gray-100">footer</footer>
    </RootLayout>
  );
}

export default Home;
