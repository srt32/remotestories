/* @flow */

import './styles.css';
import React from 'react';

export default function Submit() {
  return (
    <div className="Submit">
      <h1 className="Submit-heading">
        Submit your Story. It’s anonymous.
      </h1>

      <div className="Submit-box Submit-form">
        <form>
          <label>
            <span className="Submit-form-label">Your story</span>
            <textarea className="Submit-form-textarea" />
          </label>

          <div className="Submit-form-action">
            <p className="Submit-form-tos">By submitting your story, you accept the <a href="#">terms&nbsp;of&nbsp;use.</a></p>
            <button className="Submit-form-button">post</button>
          </div>
        </form>
      </div>

      <h2 className="Submit-heading">
        Tips about posting your story
      </h2>

      <p className="Submit-tip">
        Do not share names, location or information that could help… Pease Ben Kenobi, I need your help to write super good tips about posting a story.
      </p>
      <p className="Submit-tip">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut massa in dolor pulvinar efficitur. Phasellus lacinia, quam et hendrerit elementum, metus sem convallis augue, ac euismod turpis sapien a arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
    </div>
  );
}