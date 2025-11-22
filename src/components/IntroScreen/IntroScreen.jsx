import './IntroScreen.css';
import BgLogo from '../BgLogo/BgLogo';

function IntroScreen({ progress, isLoaded, onClick }) {
    console.log(isLoaded)
    return (
        <div className="intro-screen" onClick={onClick} style={{opacity: isLoaded ? "0%" : "100%"}}>
            <div className="intro-content">
                <div className="bg-container">
                {(() => {
                    const images = [];
                    for (let i = 0; i < 12; i++) {
                        images.push(<BgLogo key={i}/>);
                    }
                    return images;
                })()}
                </div>
                <h1>WATCH SHORTS</h1>
                <p>FILM FESTIVAL</p>

                <div className="loading-container">
                    <div className="loading-text">
                        {/* {Math.round(progress)}% */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroScreen;