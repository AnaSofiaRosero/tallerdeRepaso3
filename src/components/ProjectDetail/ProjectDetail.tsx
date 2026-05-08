import { Link, useParams } from "react-router-dom";

import data from "../../data.json";

import "./ProjectDetail.css";

function ProjectDetail() {

  const { id } = useParams();

  const project = data.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return <h1>Proyecto no encontrado</h1>;
  }

  return (
    <div className="detail-container">

      <div className="detail-card">

        <Link to="/">
          ← Volver
        </Link>

        <h1>{project.name}</h1>

        <h3>{project.location}</h3>

        <p>
          <strong>Capacidad:</strong>{" "}
          {project.capacity} kWh
        </p>

        <p>
          <strong>Estado:</strong>{" "}
          {project.status}
        </p>

        <p>
          <strong>Descripción:</strong>{" "}
          {project.description}
        </p>

      </div>

    </div>
  );
}

export default ProjectDetail;