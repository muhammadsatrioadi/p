import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

function ProjectCards({ project, onDelete, onEdit }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={project.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {project.description}
        </Card.Text>
        <Button
          variant="danger"
          className="me-2"
          onClick={() => onDelete(project.id)}
        >
          Delete
        </Button>
        <Button variant="primary" onClick={() => onEdit(project)}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      imgPath: "https://imgur.com/K9RDIFB.png",
      title: "Desain Feed",
      description:
        "Pembuatan desain feed instagram dengan menggunakan tools Canva,img spltter.",
    },
    {
      id: 2,
      imgPath: "https://imgur.com/YwZ3Aaq.png",
      title: "Develope Website",
      description:
        "Pembuatan web UMKM lokal menggunakan Html,Css,Java dengan tools VSCode ",
    },
    {
      id: 3,
      imgPath: "https://imgur.com/LMDvtM9.jpg",
      title: "Dokumentasi Kegiatan",
      description:
        "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code.",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleAdd = () => {
    setCurrentProject(null); // Reset form for new project
    setShowModal(true);
  };

  const handleEdit = (project) => {
    setCurrentProject(project); // Set project data for editing
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleSave = (project) => {
    if (project.id) {
      // Update existing project
      setProjects(
        projects.map((p) => (p.id === project.id ? project : p))
      );
    } else {
      // Add new project
      setProjects([
        ...projects,
        { ...project, id: projects.length + 1 },
      ]);
    }
    setShowModal(false);
  };

  return (
    <Container fluid className="project-section">
     
      <Container>
        <h1 className="project-heading">
          Projek <strong className="purple">Satrio </strong>
        </h1>
        <p style={{ color: "white" }}>
          Beberapa Projek yang pernah saya kerjakan .
        </p>
        <Button variant="success" onClick={handleAdd} className="mb-4">
          Add Project
        </Button>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCards
                project={project}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Add/Edit Project */}
      <ProjectModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleSave}
        project={currentProject}
      />
    </Container>
  );
}

function ProjectModal({ show, onHide, onSave, project }) {
  const [formData, setFormData] = useState({
    imgPath: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (project) {
      setFormData(project);
    } else {
      setFormData({ imgPath: "", title: "", description: "" });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{project ? "Edit Project" : "Add Project"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formImgPath">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="imgPath"
              value={formData.imgPath}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </Form.Group>
          <Form.Group controlId="formTitle" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter project title"
            />
          </Form.Group>
          <Form.Group controlId="formDescription" className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter project description"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Projects;
