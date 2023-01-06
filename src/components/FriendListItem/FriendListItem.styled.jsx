import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 10px 14px;
  border-radius: 5px;
  box-shadow: rgba(7, 7, 7, 0.35) 0px 8px 14px;
`;

export const IsOnline = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 40%;
  background-color: ${props => (props.variant ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-size: 16px;
  font-weight: 500;
  `;
