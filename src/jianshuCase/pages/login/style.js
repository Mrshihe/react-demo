import styled from 'styled-components';

export const LoginWrapper = styled.div`
  background: #f1f1f1;
  height: 100vh;
  .loginBox{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 400px;
    margin: 0 auto;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
  }
  .loginBtn{
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #187cb7;
    cursor: pointer;
    outline: none;
    display: block;
    box-sizing: border-box;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px;
  border: 1px solid #c8c8c8;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
  box-sizing: border-box;
  &.text{
    border-bottom: 0;
  }
  &:focus{
    outline: none;
  }
`;