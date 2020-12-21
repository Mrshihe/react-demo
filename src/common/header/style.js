import styled from 'styled-components';

import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: solid 1px #f0f0f0;
`;

export const Logo = styled.a`
  position: absolute;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: cover;
`;

export const Nav = styled.div`
  width: 960px;
  height: 56px;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .slide-enter{
    width: 160px;
    transition: all .2s ease-out;
  }
  .slide-enter-active{
    width: 240px;
  }
  .slide-exit{
    transition: all .2s ease-out;
  }
  .slide-exit-active{
    width: 160px;
  }
  .iconfont{
    position: absolute;
    right: 0;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
  }
`;

export const NavSearch = styled.input`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  font-size: 14px;
  color: #666;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  box-sizing: border-box;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 200px;
  }
  &.focused + .iconfont{
    background: #969696;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  &.reg{
    color: #ec6149;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
  }
`;