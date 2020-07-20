import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const Container = styled.div`
  flex: 1;
  margin-right: 16px;

  ul {
    margin-top: 16px;
  }
`;

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#0030ff',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const ListItem = styled.li`
  list-style: none;
  /* //background: rgba(0, 48, 255, 0.05); */
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  transition: all 0.2s;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  label {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
  }

  &:hover {
    background: rgba(0, 48, 255, 0.15);
  }
`;

export const Actions = styled.div`
  width: 100%;
  margin-right: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: 0;
    background: transparent;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.2);
    }

    svg {
      margin-right: 16px;
    }
  }
`;
