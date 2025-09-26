import HomePage from "@/components/home-page";
import BackToTop from "@/components/shared/back-to-top";

export default function Home() {
  return (
    <div className="relative" >
      <HomePage/>
      <div className="bg-red-500">
        <BackToTop/>
      </div>
    </div>
  );
}
