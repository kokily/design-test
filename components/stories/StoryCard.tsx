import React from 'react';

interface StoryCardProps {
  image: string;
  title: string;
  date: string;
}

function StoryCard({ image, title, date }: StoryCardProps) {
  return (
    <div
      className="col-md-6 col-lg-4 mb-5 mb-lg-0 appear-animation"
      data-appear-animation="fadeInUpShorter"
      data-appear-animation-delay="200"
    >
      <div className="card" style={{ height: '100%' }}>
        <img className="card-img-top" src={`/image/${image}.png`} alt="Card Image" />
        <div className="card-body">
          <h4 className="card-title mb-1 text-4 font-weight-bold">
            <a href={`/stories`} className="text-decoration-none">{title}</a>
          </h4>
          <span className="read-more">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
