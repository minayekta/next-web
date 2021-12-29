import { Reveal, Tween } from "react-gsap"


const Backfix = (props) => {
    return (
        <Reveal repeat={true} threshold={0.3} >
            <Tween from={{ filter: 'grayscale(1)' }} to={{ filter: 'grayscale(0)' }} duration={0.5} ease="easeinout(0.5, 0.1)" >
                <div className={`col-12 px-0 ${props.backgroundclass}`} style={{ "backgroundImage": `url(${props.src})` }}>

                </div>
            </Tween>
        </Reveal>

    )
}

export default Backfix