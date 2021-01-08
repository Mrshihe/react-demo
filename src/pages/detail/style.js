import styled from 'styled-components';

export const DetailWrapper = styled.div`
	overflow: hidden;
	width: 620px;
	margin: 0 auto;
	padding-bottom: 100px;
  .title{
    margin: 50px 0 20px 0;
    line-height: 44px;
    font-size: 34px;
    color: #333;
    font-weight: bold;
  }
  .content{
    color: #2f2f2f;
    img {
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
    p {
      margin: 25px 0;
      font-size: 16px;
      line-height: 30px;
    }
  }
`;