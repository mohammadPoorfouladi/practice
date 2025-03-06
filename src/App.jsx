import MainLayout from "./components/Layouts/MainLatout";
import Contents from "./components/ui/Contents";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import HighlightsSlider from "./components/ui/HighlightsSlider";
import Slider from "./components/ui/Slider";
import NewClipSlider from "./components/ui/NewClipSlider";
import NewSpeechComposite from "./components/ui/NewSpeechComposite";
import NextSetction from "./components/ui/NextSetction";
import Section from "./components/ui/Section";
import TweetSlider from "./components/ui/TweetSlider";

const App = () => {
  return (
    <MainLayout>
      <Header />
      <Section />
      <NewSpeechComposite />
      <NewClipSlider />
      <TweetSlider />
      <NextSetction />
      <HighlightsSlider />
      <Slider />
      <Contents />
      <Footer />

    </MainLayout>
  )
}
export default App