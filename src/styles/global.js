import styled from "styled-components";

export const StyledCard = styled('div')({
    height: "200px",
    maxWidth: '200px',
    marginBottom: '10px', 
    background: '#aab2db',
    borderRadius: '4px', 
    color: 'white',
    fontSize: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

export const LoadingContainer = styled('div')({
    color: 'black',
    fontSize: '30px',
    fontWeight: 'bold'
})