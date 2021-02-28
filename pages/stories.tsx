import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PageTemplate from '../components/common/PageTemplate';
import Search from '../components/common/Search';
import StoryCard from '../components/stories/StoryCard';

function StoriesPage() {
  return (
    <PageTemplate>
      <PageHeader title={'THE Y 이야기'} />
      
      <div className="container py-2 pb-4">
        <Search />
      </div>

      <div className="container py-2 pb-5">
        <div className="row">
          <StoryCard
            image={'story1'}
            title={'인생을 내것으로 만들기 위한 소크라테스의 질문들'}
            date={'2021.03.03. ~ 03.03.'}
          />
          <StoryCard
            image={'story2'}
            title={'심리학 기반의 긍정성 함양'}
            date={'2021.03.03 ~ 03.03.'}
          />
          <StoryCard image={'story3'} title={'리더십 스킬 향상'} date={'2021.03.04 ~ 03.05.'} />
        </div>
      </div>
    </PageTemplate>
  );
}

export default StoriesPage;
