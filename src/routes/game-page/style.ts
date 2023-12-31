import styled from "styled-components";

export const Container = styled.div`
  //display
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //style
  border-radius: 8px;
  
  color: #333;
  //dimensao
  padding: 16px;
  width:100%;
  min-height: 100vh;
  max-width:970px;
  margin: auto;
  padding-top: 120px;
  //sub-components
  h2{
    margin: 30px auto 0px auto;
    text-align: center;
    span{
      color:#007BFF;
    }
  }
`;
 
export const InfoContainer = styled.div`
  //display
  display:flex;
  flex-direction: column;
  align-items:center;
  //dimensao
  width: 100%;
  max-width: 554px;
  @media (max-width:1020px) {
    align-items: flex-start;
    max-width:700px;
  }
`;

export const Thumbnail = styled.img`
  //dimensao
  width: 100%;
  max-width:700px;
  height: auto;
  margin: auto;
  margin-bottom: 16px;
  //style
  border-radius: 10px;
`;

export const Title = styled.h1`
  //dimensao
  margin-bottom: 8px;
  margin-left: 20px;
  //style
  font-size: 24px;
  color: #333;
  //display
  align-items: center;
  text-align: center;
  margin: auto;
  
`;

export const Description = styled.p`
  //dimensao
  max-width: 400px;
  margin: auto;
  margin-bottom: 16px;
  //style
  text-align: center;
  font-size: 16px;
  color: #333;
  
   
   
`;

export const Details = styled.p`
  //dimensao
  margin: auto;
  display: flex;
  margin-bottom: 8px;
  //style
  font-size: 14px;
  align-items: center;
  color: #333;
  
`;
export const Avaliation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

`;

export const Platforms = styled.p`
  //dimensao
  margin-bottom: 16px;
  //style
  font-size: 14px;
  color: #333;
   
`;

 

export const DownloadLink = styled.a`
  //dimensao
  padding: 10px 20px;
  margin: auto;
  margin-top: 20px;
  //style
  font-size: 14px;
  text-decoration: none;
  color: #fff;
  background-color: #007BFF;
  transition: 0.5s;
  border-radius: 4px;
  border:1px solid #007BFF;
  
  &:hover {
    background-color: #fff;
    color:#007BFF;
    border:1px solid #007BFF;
  }
`;
export const SubContainer = styled.div`
  //dimensao
  width: 100%;
  max-width:1108px;
  margin-top: auto;
  margin-bottom: auto;
  //display
  display: flex;
  align-items: start;
  color: #333;
  @media (max-width:1020px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const FlexContainer = styled.div`
  //dimensao
  width: 100%;
  margin-bottom: auto;
  //display
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  @media  (max-width:960px) {
    justify-content: center;
  }
`;
type prop ={
  tumb:string
}
export const FlexItem = styled.div<prop>`
  //style
  background: url(${props => props.tumb});
  background-position:center;
  background-size: cover;
  cursor:pointer;
  width: 100%;
  max-width:300px;
  height:150px;
  margin: 5px;
  border-radius: 10px;
  transition: 0.5s;
  &:hover{
    box-shadow: 0px 0px 20px #333;
  }
`;
