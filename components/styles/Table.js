import styled from 'styled-components';

const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  border: 1px solid ${props => props.theme.offWhite};
  thead {
    font-size: 1.5rem
  }
  td,
  th {
    border-bottom: 1px solid ${props => props.theme.offWhite};
    border-right: 1px solid ${props => props.theme.offWhite};
    position: relative;
    &:last-child {
      border-right: none;
      width: 150px;
      button {
        width: 80%;
      }
    }
    label{
       /* background: red; */
    /* padding: 10px 5px; */
    display:block;
    }
  }
  tr {
    &:hover {
      background: ${props => props.theme.offWhite};
    }
  }
`;

export default Table;
