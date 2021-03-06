import React from 'react';
import PropTypes from 'prop-types';
import { FiBarChart } from 'react-icons/fi';
import styles from './style/noiseandrec.css';

const Noise = ({ noiseLevel }) => {
  const { avgNoiseRating } = noiseLevel;

  let noise = '';
  if (avgNoiseRating === 1) {
    noise = 'Do Not Recall';
  } else if (avgNoiseRating === 2) {
    noise = 'Quiet';
  } else if (avgNoiseRating === 3) {
    noise = 'Moderate';
  } else if (avgNoiseRating === 4) {
    noise = 'Energetic';
  }

  return (
    <div className={styles.container}>
      <div className={styles.noiseoverall}>
        <FiBarChart />
        <span className={styles.noise}>
          Noise&nbsp;&#183;&nbsp;
          <span id={styles.normal}>{noise}</span>
        </span>
      </div>
    </div>
  );
};

Noise.propTypes = {
  noiseLevel: PropTypes.shape({
    avgNoiseRating: PropTypes.number,
  }).isRequired,
};


export default Noise;
