import "./AddStudent.css";
// import "./PreviewImg.css"
import { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

interface ContainerProps {
  postData: (data: any) => void;
  addPageActive: boolean;
  setAddPageActive: (flag: boolean) => void;
}

const AddStudent: React.FC<ContainerProps> = ({
  postData,
  addPageActive,
  setAddPageActive,
}) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [score, setScore] = useState("");
  const [progre, setProgre] = useState(false);

  // const location = useLocation();

  const handleClick = async () => {
    console.log(progre);

    if (progre && id !== "" && score !== "") {
      await postData({ id, name, address, avatar, score });
      setAddPageActive(!addPageActive);
    }
    // window.location.reload();
  };

  return (
    <div className="container">
      <div className="container-table">
        <table>
          <tbody>
            <tr>
              <td>Id</td>
              <td>
                <input
                  type="text"
                  name="id"
                  id=""
                  placeholder="Your id...."
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your name..."
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input
                  type="text"
                  name="address"
                  id=""
                  placeholder="Your address..."
                  onChange={(e) => setAddress(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Avatar</td>
              {avatar ? (
                <td>
                  <label htmlFor="avatar1">
                    <img
                      src={avatar}
                      alt="Avatar"
                      id="avatar"
                      className="avatar"
                    />
                  </label>
                  <input
                    style={{ display: "none" }}
                    accept="image/*"
                    type="file"
                    name="avatar"
                    id="avatar1"
                    multiple={false}
                  />
                </td>
              ) : (
                <td>
                  <label htmlFor="avatar">
                    <img
                      className="pre"
                      src="https://i.ibb.co/j6J7147/svgviewer-png-output.png"
                      alt=""
                    />
                  </label>
                  <input
                    style={{ display: "none" }}
                    accept="image/*"
                    type="file"
                    name="avatar"
                    id="avatar"
                    multiple={false}
                  />
                </td>
              )}
            </tr>
            <tr>
              <td>Score</td>
              <td>
                <input
                  type="number"
                  name="score"
                  id=""
                  required
                  placeholder="Your score..."
                  onChange={(e) => setScore(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container-btn">
        <button className="btn-a" onClick={handleClick}>
          Thêm
        </button>
        <button
          className="btn-a"
          onClick={() => setAddPageActive(!addPageActive)}
        >
          Quay lại
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
