import React from 'react';
import useMap from '../../libs/useMap';
import PageHeader from '../common/PageHeader';
import LocateMap from './LocateMap';

function Locate() {
  const kakaoMap = useMap();

  return (
    <>
      <PageHeader title={'오시는 길'} />

      <div className="container py-2 mb-5">
        <div className="row">
          <div className="col-md-12 mb-4 mb-lg-0 p-0" style={{ background: 'silver' }}>
            <LocateMap ref={kakaoMap} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Locate;
