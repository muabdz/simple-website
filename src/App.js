import Navbar from './components/Navbar';
import './App.css';
import TitleText from './components/TitleText';
import TaglineText from './components/TaglineText';
import ParagraphText from './components/ParagraphText';
import { Button } from '@mui/material';
import { ChevronRight, HistoryEdu, Inventory, ThumbUp, Widgets } from '@mui/icons-material';
import WaveFooter from './components/WaveFooter';
import PortfolioCard from './components/PortfolioCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <div className='section-one'>
            <TitleText text="Catering should be an experience" />
            <TaglineText text="We only use the finest and freshest ingredients." />
            <ParagraphText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <Button variant="contained" endIcon={<ChevronRight/>} style={{textTransform: 'none'}}>
              Request a Quote
            </Button>
            <WaveFooter />
        </div>
        <div className='section-two'>
            <TitleText text="Catering should be an experience" />
            <TaglineText text="We only use the finest and freshest ingredients." />
            <ParagraphText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>
        <br/>
        <div className='section-three'>
          <h3 className='my-portfolio'>My Portfolio</h3>
          <div className="portfolios">
            <PortfolioCard text="Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={<Inventory />} />
            <PortfolioCard text="Develop" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={<Widgets />} />
            <PortfolioCard text="Write" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={<HistoryEdu />} />
            <PortfolioCard text="Promote" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={<ThumbUp />} />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
