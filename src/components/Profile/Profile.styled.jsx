import styled from 'styled-components';

export const UserCard = styled.div`
  display: flex;
  align-items: center;
  margin: 30px auto;
  flex-direction: column;
  width: 400px;
  border: 4px solid #2e2b2b;
  border-radius: 10px;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
`;

export const UserFoto = styled.img`
  border-radius: 30% 30%;
`;

export const UserName = styled.h3`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.8;
`;

export const UserTag = styled.p`
  font-size: 15px;
  color: grey;
`;

export const UserLocation = styled.p`
  color: grey;
  font-size: 18px;
`;

export const UserStats = styled.ul`
  display: flex;
  width: 100%;
  font-size: 30px;
  align-items: center;
  justify-content: center;
`;

export const UserStatsItem = styled.ul`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 35%;
  padding: 20px 0;
  outline: 1px solid grey;
`;

  export const UserStatsLabel = styled.ul`
    color: grey;

  `;

  export const UserStatsQuantity = styled.ul`
    color: black;
    font-weight: 500;
  `;
