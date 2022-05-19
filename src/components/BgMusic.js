import bgMusic from '../assets/background-music.mp3';
import { useEffect , useRef } from 'react';

const BgMusic = (props) => {
    const audioElement = useRef();
    useEffect(() => {
        document.addEventListener("touchmove", ()=> {
           // audioElement.current.play();
        });
            document.addEventListener("mousemove", ()=> {
                //audioElement.current.play();
            });
                document.addEventListener("scroll", ()=> {
                    // audioElement.current.play();
                });
        
    },[]);

    return  <audio
    ref={audioElement}
    hidden    
    loop
    controls
    autoPlay
    src={bgMusic}>
        {/* Your browser does not support the */}
        {/* <code>audio</code> element. */}
</audio>;
};

export default BgMusic;