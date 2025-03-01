import MainLayout from "./components/Layouts/MainLatout"
import Contents from "./components/ui/Contents";
import Footer from "./components/ui/Footer";
import FourthSlider from "./components/ui/FourthSlider";
import Header from "./components/ui/Header";
import LastSlider from "./components/ui/LastSlider";

import Section from "./components/ui/Section";
import Sliders from "./components/ui/Sliders";

const App=()=>{
  return(
<MainLayout>
<Header/> 
<Section/>
<Sliders/>
<FourthSlider/>
<LastSlider/>
<Contents/>
<Footer/>
</MainLayout>
  )
}
export default App