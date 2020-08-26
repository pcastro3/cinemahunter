import '../App.css';
import styled from 'styled-components';

export const StyledH1 = styled.h1`
  color: lightblue;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: .8rem;
  text-transform: uppercase;
  text-align: center;
`;

export const Input = styled.input`
  width: 50%;
  padding: .5rem;
  font-size: 1rem;
  border: none;
  border-radius: .2rem;
`;

export const Button = styled.button`
  background: #A4DAD2;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
`;

export const StyledH2 = styled.h2`
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  margin-left: 2rem;
`;

export const Noms = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 2rem;
`;

export const StyledH3 = styled.h3`
  font-size: 1.2rem;
  margin-left: 2rem;
`;

export const Weight = styled.div`
  font-size: 1.2rem;
  margin-left: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  display: flex;
  align-items: center;
`;

export const Strong = styled.p`
  font-weight: 500;
  margin-right: 1rem;
`;

export const Form = styled.form`
  text-align: center;
`;

export const Error = styled.h2`
  color: lightblue;
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  text-align: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  color: black;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  margin-top: 1rem;
  /* margin-left: 4rem; */
  background: #ECECEF;
  border-radius: .2rem;
  padding-top: 2.5rem;
`;

export const Details = styled.div`
  margin-left: 1rem;
  /* margin-right: -3rem; */
  border-radius: .3rem;
  line-height: .5rem;
`;

export const Plot = styled.p`
  line-height: 2rem;
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 1rem;
  font-weight: 300;
`;

export const Block0 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #FFF;
  box-shadow: 2px 2px 11px -7px black;
  padding: 1rem;
`;

export const Block1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #A4DAD2;
  box-shadow: 4px 4px 9px -7px black;
  margin-top: 1rem;
  padding: 1rem;
`;

export const Block2 = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFF;
  box-shadow: 2px 2px 11px -7px black;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  width: 60vw;
`;

export const Image = styled.div`
  margin-top: 4rem;
  margin-bottom: 14rem;
  box-shadow: -19px -15px 26px -13px black;
`;
