import styled from "@emotion/styled"

export const Badge = styled.div({
  color: "black",
  textDecoration: "none",
  padding: "3px 3px",
  postion: "relative",
  display: "inline-block",
  borderRadius: "12px",
  margin: "1px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
}, props => ({ backgroundColor: props.backgroundColor }))