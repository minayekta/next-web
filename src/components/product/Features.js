import { motion } from 'framer-motion';
const Features = (props) => {

    let easing = [0.175, .1, 0.42, 0.96];
    const fadeIn = {
        exit: { opacity: 0, transition: { duration: 0.3, ease: easing } },
        enter: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.3,
                ease: easing
            }
        }
    };
    return (
        <motion.Fragment initial="exit" animate="enter" exit="exit">
            <motion.div variants={fadeIn} className={'col-12 px-0 pt-4 mt-1 product-features-box border-bottom pb-4'}>
                {/* <p className={'font-13 mb-4'}>Featuers</p> */}
                <ul className={`font-13 `} dangerouslySetInnerHTML={{ __html: props.FeaturesItem }}></ul>
            </motion.div>
        </motion.Fragment>
    );
}
export default Features
