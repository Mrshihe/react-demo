import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
  float: right;
  margin-top: 30px;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
  .topicItem{
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
      display: block;
      float: left;
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
  }
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
  }
  .info{
    width: 500px;
    float: left;
    .title {
      line-height: 27px;
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    .desc {
      line-height: 24px;
      font-size: 13px;
      color: #999;
    }
  }
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
`;

export const WriterItem = styled.div`
  margin-top: 15px;
  line-height: 1;
  overflow: hidden;
  .img{
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .name{
    float: left;
    margin-top: 17px;
    font-size: 14px;
  }
  .follow{
    float: right;
    font-size: 13px;
    line-height: 48px;
    color: #42c02e;
  }
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #dcdcdc;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  background: rgba(182, 182, 182, .1);
`;