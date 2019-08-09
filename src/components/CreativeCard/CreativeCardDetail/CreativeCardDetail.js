import React from 'react';
import { Fail, Success } from '../../../assets/icons';
import './styles.css';

const CreativeCardDetail = () => (
  <div className="creative-card-detail">
    <table>
      <thead>
        <tr>
          <th>mark</th>
          <th>Tests</th>
          <th>Current</th>
          <th colSpan="2">Specification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={Fail} alt="icon" /></td>
          <td>Dimensions</td>
          <td>970X250</td>
          <td>3 dimensions supported</td>
          <td>Details</td>
        </tr>
        <tr>
          <td><img src={Fail} alt="icon" /></td>
          <td>Dimensions</td>
          <td>970X250</td>
          <td>3 dimensions supported</td>
          <td>Details</td>
        </tr>
        <tr>
          <td><img src={Success} alt="icon" /></td>
          <td colSpan="3">3 tests passed</td>
          <td className="green">View</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CreativeCardDetail;
