import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import div from "next/link";
import { getUniversity } from "@/lib/getInfo";

export default function Request() {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    axios
      .get("https://nicsite-production.up.railway.app/api/application/")
      .then((resp) => {
        setRequest(resp.data);
        console.log(resp.data);
      });
  }, []);

  const downloadResume = (resumeUrl) => {
    window.open(resumeUrl, "_blank");
  };

  const filtration = request.filter((f) => f.status == 'rejected')

  return (
    <Layout>
      <h2>Список тех кто идей нахуй</h2>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Имя</td>
            <td>Контакты</td>
            <td>Профессия</td>
            <td>Университет</td>
            <td>Ссылка на портфолио</td>
            <td>Сопроводительное</td>
          </tr>
        </thead>
        <tbody>
          {filtration.map((item) => (
            <tr key={item.id}>
              <td>
                {item.firstname} {item.lastname}
              </td>
              <td>
                {item.email} {item.phone}
              </td>
              <td>{item.division}</td>
              <td>{getUniversity(item.university)}</td>
              <td onClick={() => downloadResume(item.portfolio_link)}>
                {item.portfolio_link}
              </td>
              <td onClick={() => downloadResume(item.letter)}>
                <span className="cursor-pointer underline">Скачать резюме</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
