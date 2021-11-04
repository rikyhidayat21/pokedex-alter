import styled from "@emotion/styled";

export const PokemonTitleCard = styled.div({
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "bold"
})

export const CardPoke = styled.div({
  marginTop: "2vh",
  marginBottom: "2vh",
  border: "1px solid #bacdd8",
  padding: "8px",
  borderRadius: "12px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  ":hover": {
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    transform: "scale(1.1)"
  }
}, props => ({ backgroundColor: props.backgroundColor }))

export const Image = styled.img`
  width: 100%;
  border-radius: 24px;
  background-color: white;
  margin-bottom: 10px;
`;

export const Button = styled("div")`
  padding: 2px;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 25px 6px;
  background-color: red;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
`;