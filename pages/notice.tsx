import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PageTemplate from '../components/common/PageTemplate';
import Search from '../components/common/Search';

function NoticePage() {
  return (
    <PageTemplate>
      <PageHeader title={'공지사항'} />

      <div className="container py-2 mb-5">
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <Search />
          <table className="table table-hover mt-2" style={{ cursor: 'pointer' }}>
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>No.</th>
                <th>제 목</th>
              </tr>
            </thead>
            <tbody>
              <tr className="info">
                <td style={{ textAlign: 'center' }}>공지</td>
                <td>[교육홍보] 워크숍(회의) 설계 컨설팅 OPEN</td>
              </tr>
              <tr className="info">
                <td style={{ textAlign: 'center' }}>공지</td>
                <td>2021년 더와이컴퍼니 교육일정</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>1</td>
                <td>더와이컴퍼니의 홈페이지가 새롭게 개편되었습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PageTemplate>
  );
}

export default NoticePage;
