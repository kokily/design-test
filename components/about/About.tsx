import React from 'react';

function About() {
  const Title = (
    <div className="row pb-5">
      <div className="col-md-9 mx-md-auto">
        <div className="overflow-hidden mb-5">
          <h1
            className="word-rotator slide font-weight-bold text-8 mb-0 appear-animation text-center"
            data-appear-animation="maskUp"
          >
            <span>더와이컴퍼니는 행복한 삶을 꿈꾸는</span>
            <br />
            <span className="word-rotator-words bg-primary">
              <b className="is-visible">커뮤니케이션</b>
              <b>커뮤니케이션</b>
            </span>
            <span>전문 교육 컨설팅 회사입니다.</span>
          </h1>
        </div>

        <div className="overflow-hidden mb-3">
          <p
            className="lead mb-0 appear-animation"
            data-appear-animation="maskUp"
            data-appear-animation-delay="200"
          >
            강의를 시작한 건 2007년 부터입니다. 사내 강사로 시작하여 2014년 프리랜서, 현재는 The Y
            컴퍼니를 이야기 하고자 합니다.
          </p>
        </div>
      </div>
    </div>
  );

  const FirstContent = {
    title: '우리가 존재하는 이유는 "행복한 관계"를 꿈꾸는 것입니다.',
    body: 'ddddd',
    gist:
      '그래서 더와이컴퍼니는\n첫째, 출근길에 콧노래 나오는 직장\n둘째, 주말에도 보고 싶은 상사\n셋째, 밥한끼 먹을 수 있는 고객과의 관계를 상상합니다.',
  };

  const SecondContent = { title: '', body: '', gist: '' };

  const Content = ({ title, body, gist }: { title: string; body: string; gist: string }) => (
    <>
      <div className="col-lg-8">
        <div className="overflow-hidden mb-2">
          <h2
            className="font-weight-normal text-7 mb-2 appear-animation"
            data-appear-animation="maskUp"
            data-appear-animation-delay="200"
          >
            {title}
          </h2>
        </div>
        <div className="overflow-hidden mb-4">
          <p
            className="lead mb-0 appear-animation"
            data-appear-animation="maskUp"
            data-appear-animation-delay="400"
          >
            {body}
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="testimonial testimonial-primary appear-animation"
          data-appear-animation="fadeIn"
          data-appear-animation-delay="800"
        >
          <blockquote>
            <p className="mb-0" style={{ whiteSpace: 'pre', wordBreak: 'break-all' }}>
              {gist}
            </p>
          </blockquote>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col">{Title}</div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Content title={FirstContent.title} body={FirstContent.body} gist={FirstContent.gist} />
          <Content
            title={SecondContent.title}
            body={SecondContent.body}
            gist={SecondContent.gist}
          />
        </div>
      </div>
    </>
  );
}

export default About;
