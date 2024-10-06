import React from 'react';

export default function Space(props) {
  // Conditionally apply styles for the line based on the 'lineType' prop
  const lineStyle = 
    props.lineType === 'horizontal' ? 'horizontal-line' : 
    props.lineType === 'vertical' ? 'vertical-line' : 
    props.lineType === 'diagonal-45' ? 'diagonal-line-45' : 
    props.lineType === 'diagonal45' ? 'diagonal-line45' : 
    '';

  return (
    <button className={`spc ${lineStyle}`}>
      {props.value}
    </button>
  );
}
