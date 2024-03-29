import React, { useEffect } from 'react';

const AdsenseComponent = ({ adClient, adSlot, adFormat }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client={adClient}
         data-ad-slot={adSlot}
         data-ad-format={adFormat}></ins>
  );
};

export default AdsenseComponent;
/*
import React from 'react';

export default class Ad extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <div className='ad'>
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-xxxxxxxxxx'
          data-ad-slot='xxxxxxxxxx'
          data-ad-format='auto' />
      </div>
    );
  }
}
*/