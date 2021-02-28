import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PageTemplate from '../components/common/PageTemplate';
import Search from '../components/common/Search';

function QnaPage() {
  return (
    <PageTemplate>
      <PageHeader title={'교육문의'} />

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
              <tr>
                <td style={{ textAlign: 'center' }}>2</td>
                <td>
                  <i className="fa fa-lock" /> 교육 문의
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}></td>
                <td>
                  <i className="fa fa-lock" />
                  <i className="fa fa-arrow-right ml-2" /> Re) 교육 문의
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}>1</td>
                <td>
                  <i className="fa fa-lock" /> 더와이컴퍼니의 홈페이지가 새롭게 개편되었습니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PageTemplate>
  );
}

export default QnaPage;
