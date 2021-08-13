import styled from 'styled-components'

export const TableWrapper = styled.p`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
`

export const Content = styled.article`
  max-width: 58rem;
  margin: 0 auto;

  h2 {
    margin: 2.5rem 0 1.25rem;
    font-size: 2rem;
  }

  h3 {
    margin: 1.875rem 0 1.25rem;
    font-size: 1.5rem;
  }

  pre {
    font-size: 90%;
    margin: 2rem 0;
    border-radius: 0.4rem;
    padding: 1rem !important;
    line-height: 1.5;
    background-color: rgb(40, 44, 52) !important;
  }
`
