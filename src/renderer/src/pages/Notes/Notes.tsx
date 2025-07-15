import { Link } from "react-router-dom";
import { Sidebar } from "../../components/menu/Sidebar";
import { IoCreateOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import type { INote } from "../../interfaces/INote";
import { Loader } from "../../components/load/Loader";
import { MdEdit } from "react-icons/md";
import "./Notes.css";

export function Notes() {
  const [notes, setNotes] = useState<INote[]>();
  const [selectedNoteIds, setSelectedNoteIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const { code, message, body } = await window.api.getAllNotes();

    if (code < 200 || (code > 299 && code != 404)) alert(message);

    setNotes(body);
  }

  async function handleDeleteNote() {
    try {
      await window.api.deleteManyNotes(selectedNoteIds);

      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      const { code, message, body } = await window.api.getAllNotes();
      if (code < 200 || (code > 299 && code != 404)) alert(message);
      setNotes(body);
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <Sidebar />

      <div className="wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {" "}
            <div className="header">
              <Link
                to="/notes/register"
                className="button-primary"
                style={{ display: "flex", alignItems: "center" }}
              >
                <IoCreateOutline size={20} />
                Cadastrar Nota
              </Link>
              <button className="button-logout" onClick={handleDeleteNote}>
                Excluir
              </button>
            </div>
            <div className="table-container">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          if (e.target.checked && notes) {
                            setSelectedNoteIds(notes.map((note) => note.id));
                          } else {
                            setSelectedNoteIds([]);
                          }
                        }}
                        checked={
                          notes?.length === selectedNoteIds.length &&
                          notes?.length > 0
                        }
                      />
                    </th>
                    <th>Nº da Nota</th>
                    <th>Cliente</th>
                    <th>Data de Emissão</th>
                    <th>Cidade</th>
                    <th>Rota</th>
                    <th>Valor Total</th>
                    <th>Peso</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {notes?.map((note, idx) => (
                    <tr key={idx}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedNoteIds.includes(note.id)}
                          onChange={(e) => {
                            setSelectedNoteIds((prev) =>
                              e.target.checked
                                ? [...prev, note.id]
                                : prev.filter((id) => id !== note.id)
                            );
                          }}
                        />
                      </td>
                      <td>{note.numberNote}</td>
                      <td>{note.client}</td>
                      <td>
                        {new Date(note.emissionDate).toLocaleDateString()}
                      </td>
                      <td>{note.cityName}</td>
                      <td>{note.routeName}</td>
                      <td>R$ {note.totValue.toFixed(2)}</td>
                      <td>{note.weight} kg</td>
                      <td>
                        <Link to="/notes/register" className="button-edit">
                          <MdEdit />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
