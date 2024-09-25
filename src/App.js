import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Media from "./Components/Media";
import Members from "./Components/Members";
import Opensourse from "./Components/Opensourse";
import Profile from "./Components/Profile";
import Questions from "./Components/questions";
import Topside from "./Components/Topside";

function App() {
  return (
    <div className="bg-[#18181B] box-border" >
      <Topside />
      <Profile />
      <Features />
      <Media />
      <Opensourse />
      <Questions />
      <Members />
      <Footer/>
    </div>
  );
}

export default App;
