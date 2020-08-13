import * as React from "react";
import { Main, Content } from "./Profiles.styled";
import { PieChart } from "react-minimal-pie-chart";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
interface iProps {
  mock: Array<any>;
}
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const Profiles: React.FC<iProps> = ({ mock }) => {
  const classes = useStyles();
  const createData = (
    firstname: string,
    lastname: string,
    Participation: number
  ) => {
    return { firstname, lastname, Participation };
  };
  const rows = mock.map((persons: any) =>
    createData(persons.firstname, persons.lastname, persons.Participation)
  );

  const pieData = (mock: Array<any>) => {
    let data = [];

    for (let i = 0; i <= mock.length - 1; i++) {
      data.push({
        title: mock[i].firstname,
        value: mock[i].participation ? mock[i].Participation : 60,
        color: mock[i].Color,
      });
    }
    return data;
  };

  return (
    <Main>
      <h2>DATA</h2>
      <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
      <Content>
        <div style={{ margin: "1.4vw" }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Participation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, key) => (
                  <TableRow key={row.firstname}>
                    <TableCell component="th" scope="row">
                      {key + 1}
                    </TableCell>
                    <TableCell align="right">{row.firstname}</TableCell>
                    <TableCell align="right">{row.lastname}</TableCell>
                    <TableCell align="right">
                      {row.Participation ? row.Participation + "%" : "60%"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ margin: "0", display: "flex" }}>
          <div>
            <PieChart
              style={{ alignSelf: "flex-end" }}
              radius={40}
              data={pieData(mock)}
            />
          </div>
          <div>
            {pieData(mock).map((people) => {
              return (
                <div
                  style={{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      margin: "0.2vw",
                      height: "30px",
                      width: "30px",
                      backgroundColor: `${people.color}`,
                    }}
                  ></div>
                  <h4 style={{ color: `${people.color}` }}>{people.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </Content>
    </Main>
  );
};
