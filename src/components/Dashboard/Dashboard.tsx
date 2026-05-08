import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import data from "../../data.json";

import type { Project } from "../../types/Project";

import "./Dashboard.css";

function Dashboard() {

  const [projects, setProjects] = useState<Project[]>([]);

  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    setProjects(data);
  }, []);

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter(
          (project) => project.status === filter
        );

  return (
    <div className="dashboard">

      <h1>Proyectos Instalados</h1>

      <select
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>Todos</option>
        <option>Activo</option>
        <option>Mantenimiento</option>
        <option>Pendiente</option>
      </select>

      <div className="cards-container">

        {filteredProjects.map((project) => (

          <div className="card" key={project.id}>

            <h2>{project.name}</h2>

            <p>{project.location}</p>

            <p>{project.status}</p>

            <Link to={`/proyecto/${project.id}`}>
              Ver detalles
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;