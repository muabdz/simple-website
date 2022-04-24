import Navbar from './components/Navbar';
import './App.css';
import TitleText from './components/TitleText';
import TaglineText from './components/TaglineText';
import ParagraphText from './components/ParagraphText';
import { Button } from '@mui/material';
import { ChevronRight, HistoryEdu, Inventory, ThumbUp, Widgets } from '@mui/icons-material';
import WaveFooter from './components/WaveFooter';
import PortfolioCard from './components/PortfolioCard';
import ReactStickyBox from 'react-sticky-box';
import StickyMenu from './components/StickyMenu';

function App() {

  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  const sectionTitle = "Catering should be an experience"
  const sectionTagline = "We only use the finest and freshest ingredients."

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <ReactStickyBox className="sticky-menu">
          <StickyMenu />
        </ReactStickyBox>
        <div className='section-one'>
            <TitleText text={sectionTitle} />
            <TaglineText text={sectionTagline} />
            <ParagraphText text={lorem} />
            <Button variant="contained" endIcon={<ChevronRight/>} style={{textTransform: 'none'}}>
              Request a Quote
            </Button>
            <WaveFooter />
        </div>
        <div className='section-two'>
            <TitleText text={sectionTitle} />
            <TaglineText text={sectionTagline} />
            <ParagraphText text={lorem} />
        </div>
        <br/>
        <div className='section-three'>
          <h3 className='my-portfolio'>My Portfolio</h3>
          <div className="portfolios">
            <PortfolioCard text="Design" description={lorem} icon={<Inventory />} />
            <PortfolioCard text="Develop" description={lorem} icon={<Widgets />} />
            <PortfolioCard text="Write" description={lorem} icon={<HistoryEdu />} />
            <PortfolioCard text="Promote" description={lorem} icon={<ThumbUp />} />
          </div>
          <div className='services'>
            <h3>Services</h3>
            <h4>{lorem}</h4>
            <p>{lorem}</p>
            <span>
              <Button variant="outlined" style={{textTransform: 'none'}}>
                Download CV
              </Button>
              <Button variant="outlined" style={{textTransform: 'none'}}>
                Check My Portfolio
              </Button>
            </span>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
