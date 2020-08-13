import * as React from "react";
import axios from "axios";
import { BackGround, Input, Button } from "./addProfiles.styled";
import { useDispatch } from "react-redux";
import { getPeople } from "../../store/actions/index";
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export const AddProfiles: React.FC = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = React.useState<any>({
    name: "",
    lastName: "",
    participation: "",
  });

  const createNewUser = async () => {
    await axios.post("http://localhost:8080/person", {
      FirstName: info.name,
      LastName: info.lastName,
      Participation: Number(info.participation),
      Color: getRandomColor(),
    });
    setInfo({
      name: "",
      lastName: "",
      participation: "",
    });
    dispatch(getPeople());
  };
  return (
    <BackGround>
      <Input
        type="text"
        placeholder={"First Name"}
        value={info.name}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setInfo({ ...info, name: e.currentTarget.value })
        }
      />
      <Input
        type="text"
        placeholder={"Last Name"}
        value={info.lastName}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setInfo({ ...info, lastName: e.currentTarget.value })
        }
      />
      <Input
        type="number"
        placeholder={"Participation"}
        value={info.participation}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setInfo({ ...info, participation: e.currentTarget.value })
        }
      />
      <Button onClick={() => createNewUser()}>SEND</Button>
    </BackGround>
  );
};
