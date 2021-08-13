import styled from 'styled-components'

const NavigatorStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  box-shadow: 0 1px 10px -6px rgba(0,0,0,0.42), 0 1px 10px 0 rgba(0,0,0,0.12), 0 4px 5px -2px rgba(0,0,0,0.1);
  background-color: #fff;
  z-index: 99;
  font-size: 16px;
  padding: 0 70px;
  .logo{
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    color: #444;
    .avatar {
      width: 40px;
      height: 40px;
      padding: 4px;
      margin-right: 10px;
      border-radius: 50%;
      border: 1px solid #999;
    }
    }
    .navgatorList {
      .navItem {
        text-decoration: none;
        margin: 0 15px;
        color: #444;
        font-size: 14px;
        span {
          margin-left: 5px;
        }
      }
      span {
        padding-left: 5px;
      }
    }
`;

export default NavigatorStyle;