import './FestivalInfo.scss';

function FestivalInfo({ contentRef }) {
    return (
        <div className="festival-info-container">
            <div ref={contentRef} className="festival-content">
                <h2>ABOUT FESTIVAL</h2>
                <p>
                    Watch Shorts organises film screenings
                    with films submitted and selected from
                    our <a href="#" className="highlight-link">filmmythway</a> page.
                </p>
            </div>
        </div>
    );
}

export default FestivalInfo;