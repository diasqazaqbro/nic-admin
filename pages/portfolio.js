import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Portfolio({}) {
  useEffect(() => {
    axios.get("/api/portfolio").then((response) => {
      setOneTitle(response.data[0].oneTitle);
      setOneDesc(response.data[0].oneDesc);
      setTwoTitle(response.data[0].twoTitle);
      setTwoDesc(response.data[0].twoDesc);
      setThreeTitle(response.data[0].threeTitle);
      setThreeDesc(response.data[0].threeDesc);
      setFourTitle(response.data[0].fourTitle);
      setFourDesc(response.data[0].fourDesc);
      setFiveTitle(response.data[0].fiveTitle);
      setFiveDesc(response.data[0].fiveDesc);
      setSixTitle(response.data[0].sixTitle);
      setSixDesc(response.data[0].sixDesc);
      setSevenTitle(response.data[0].sevenTitle);
      setSevenDesc(response.data[0].sevenDesc);
      setEightTitle(response.data[0].eightTitle);
      setEightDesc(response.data[0].eightDesc);
    });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=27")
      .then((response) => {
        setImagesOne(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=28")
      .then((response) => {
        setImagesTwo(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=29")
      .then((response) => {
        setImagesThree(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=30")
      .then((response) => {
        setImagesFour(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=31")
      .then((response) => {
        setImagesFive(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=32")
      .then((response) => {
        setImagesSix(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=33")
      .then((response) => {
        setImagesSeven(response.data.results.path);
      });
    axios
      .get("https://timkaqwerty.pythonanywhere.com/hds/img/?id=34")
      .then((response) => {
        setImagesEight(response.data.results.path);
      });
  }, []);

  const [oneTitle, setOneTitle] = useState();
  const [oneDesc, setOneDesc] = useState();
  const [twoTitle, setTwoTitle] = useState();
  const [twoDesc, setTwoDesc] = useState();
  const [threeTitle, setThreeTitle] = useState();
  const [threeDesc, setThreeDesc] = useState();
  const [fourTitle, setFourTitle] = useState();
  const [fourDesc, setFourDesc] = useState();
  const [fiveTitle, setFiveTitle] = useState();
  const [fiveDesc, setFiveDesc] = useState();
  const [sixTitle, setSixTitle] = useState();
  const [sixDesc, setSixDesc] = useState();
  const [sevenTitle, setSevenTitle] = useState();
  const [sevenDesc, setSevenDesc] = useState();
  const [eightTitle, setEightTitle] = useState();
  const [eightDesc, setEightDesc] = useState();
  const [imagesOne, setImagesOne] = useState();
  const [imagesTwo, setImagesTwo] = useState();
  const [imagesThree, setImagesThree] = useState();
  const [imagesFour, setImagesFour] = useState();
  const [imagesFive, setImagesFive] = useState();
  const [imagesSix, setImagesSix] = useState();
  const [imagesSeven, setImagesSeven] = useState();
  const [imagesEight, setImagesEight] = useState();
  const [fileOne, setFileOne] = useState(null);
  const [fileTwo, setFileTwo] = useState(null);
  const [fileThree, setFileThree] = useState(null);
  const [fileFour, setFileFour] = useState(null);
  const [fileFive, setFileFive] = useState(null);
  const [fileSix, setFileSix] = useState(null);
  const [fileSeven, setFileSeven] = useState(null);
  const [fileEight, setFileEight] = useState(null);
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      oneTitle,
      oneDesc,
      twoTitle,
      twoDesc,
      threeTitle,
      threeDesc,
      fourTitle,
      fourDesc,
      fiveTitle,
      fiveDesc,
      sixTitle,
      sixDesc,
      sevenTitle,
      sevenDesc,
      eightTitle,
      eightDesc,
    };
    await axios.put("/api/portfolio", data);

    const formDataOne = new FormData();
    formDataOne.append("id", "27");
    formDataOne.append("image", fileOne);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataOne,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const formDataTwo = new FormData();
    formDataTwo.append("id", "28");
    formDataTwo.append("image", fileTwo);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataTwo,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const formDataThree = new FormData();
    formDataThree.append("id", "29");
    formDataThree.append("image", fileThree);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataThree,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataFour = new FormData();
    formDataFour.append("id", "30");
    formDataFour.append("image", fileFour);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataFour,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataFive = new FormData();
    formDataFive.append("id", "31");
    formDataFive.append("image", fileFive);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataFive,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataSix = new FormData();
    formDataSix.append("id", "32");
    formDataSix.append("image", fileSix);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataSix,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataSeven = new FormData();
    formDataSeven.append("id", "33");
    formDataSeven.append("image", fileSeven);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataSeven,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const formDataEight = new FormData();
    formDataEight.append("id", "34");
    formDataEight.append("image", fileEight);

    await axios.put(
      "https://timkaqwerty.pythonanywhere.com/hds/img/",
      formDataEight,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
  return (
    <Layout>
      <h1 className="my-4">Настройка портфолио</h1>
      <form onSubmit={saveProduct}>
        <hr style={{
          border: '1px solid black',
          margin: '20px 0'
        }}/>
        <h2 className="my-2">01</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={oneTitle}
          onChange={(ev) => setOneTitle(ev.target.value)}
        />

        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={oneDesc}
          onChange={(ev) => setOneDesc(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileOne(event.target.files[0]);
          }}
        />
        <img src={imagesOne} style={{ width: "400px", height: "400px" }} />
        <hr style={{
          border: '1px solid black',
          margin: '20px 0'
        }}/>
        <h2 className="my-2">02</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={twoTitle}
          onChange={(ev) => setTwoTitle(ev.target.value)}
        />

        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={twoDesc}
          onChange={(ev) => setTwoDesc(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileTwo(event.target.files[0]);
          }}
        />
        <img src={imagesTwo} style={{ width: "400px", height: "400px" }} />
        <hr style={{
          border: '1px solid black',
          margin: '20px 0'
        }}/>
        <h2 className="my-2">03</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={threeTitle}
          onChange={(ev) => setThreeTitle(ev.target.value)}
        />

        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={threeDesc}
          onChange={(ev) => setThreeDesc(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileThree(event.target.files[0]);
          }}
        />
        <img src={imagesThree} style={{ width: "400px", height: "400px" }} />
        <hr style={{
          border: '1px solid black',
          margin: '20px 0'
        }}/>
        <h2 className="my-2">04</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={fourTitle}
          onChange={(ev) => setFourTitle(ev.target.value)}
        />

        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={fourDesc}
          onChange={(ev) => setFourDesc(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileFour(event.target.files[0]);
          }}
        />
        <img src={imagesFour} style={{ width: "400px", height: "400px" }} />
        <hr style={{
          border: '1px solid black',
          margin: '20px 0'
        }}/>
        <h2 className="my-2">05</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={fiveTitle}
          onChange={(ev) => setFiveTitle(ev.target.value)}
        />
        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={fiveDesc}
          onChange={(ev) => setFiveDesc(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileFive(event.target.files[0]);
          }}
        />
        <img src={imagesFive} style={{ width: "400px", height: "400px" }} />
        <hr style={{
          border: '1px solid black',
          margin: '20px 0'
        }}/>
        <h2 className="my-2">06</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={sixTitle}
          onChange={(ev) => setSixTitle(ev.target.value)}
        />
        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={sixDesc}
          onChange={(ev) => setSixDesc(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileSix(event.target.files[0]);
          }}
        />
        <img src={imagesSix} style={{ width: "400px", height: "400px" }} />
        <hr style={{
          border: '1px solid black',
          margin: '20px 0'
        }}/>
        <h2 className="my-2">07</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={sevenTitle}
          onChange={(ev) => setSevenTitle(ev.target.value)}
        />
        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={sevenDesc}
          onChange={(ev) => setSevenDesc(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileSeven(event.target.files[0]);
          }}
        />
        <img src={imagesSeven} style={{ width: "400px", height: "400px" }} />
        <hr style={{
          border: '1px solid black',
          margin: '20px 0'
        }}/>
        <h2 className="my-2">08</h2>
        <label>Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={eightTitle}
          onChange={(ev) => setEightTitle(ev.target.value)}
        />
        <label>Подзаголовок</label>
        <input
          type="text"
          placeholder="Подзаголовок"
          value={eightDesc}
          onChange={(ev) => setEightDesc(ev.target.value)}
        />
        <input
          type="file"
          onChange={(event) => {
            setFileEight(event.target.files[0]);
          }}
        />
        <img src={imagesEight} style={{ width: "400px", height: "400px" }} />
        <button type="submit" className="btn-primary">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}
