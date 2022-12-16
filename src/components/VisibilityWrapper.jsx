import React from 'react'
import { motion } from 'framer-motion';
import InView from 'react-intersection-observer';

const VisibilityWrapper = ({children}) => {
    return (
        <InView threshold={0.25}>
            {({ ref, inView }) => (
                <motion.div ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1, translateY: -25 } : {opacity: 0}}
                    transition={{ duration: 1 }}
                >
                {children}
                </motion.div>
            )}
        </InView>
    );
}

export default VisibilityWrapper