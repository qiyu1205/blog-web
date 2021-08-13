import styled from 'styled-components'

export const TableWrapper = styled.p`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
`

export const Content = styled.article`
  max-width: 58rem;
  margin: 20px auto;

  h2 {
    margin: 2.5rem 0 1.25rem;
    font-size: 2rem;
  }

  h3 {
    margin: 1.875rem 0 1.25rem;
    font-size: 1.5rem;
  }

  li, p {
    line-height: 2em;
  }


  pre {
    font-size: 1em;
    margin: 2rem 0;
    border-radius: 0.4rem;
    padding: 1rem !important;
    line-height: 1.5em;
    background-color: rgb(40, 44, 52) !important;
  }

  code {
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }

  pre code span {
    line-height: 1.5em;
  }

  p>code, li>code {
    color: #da615c;
    background-color: #ededeb;
    border-radius: .25rem;
    padding: 0 .25rem;
  }
`
