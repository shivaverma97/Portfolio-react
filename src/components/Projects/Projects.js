import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import contentHub from "../../Assets/Projects/contentHub.png";
import imageEditor from "../../Assets/Projects/imageEditor.png";
import primeBooks from "../../Assets/Projects/primeBooks.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "rgba(64, 64, 64)" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={primeBooks}
              isBlog={false}
              title="Prime Books"
              description="Introducing our book website where you can search for books and authors by name, genre, or keyword. Our extensive database is regularly updated, and we offer recommendations and reviews to help you find your next read. Join us on our mission to bring the joy of reading to book lovers worldwide."
              ghLink="https://github.com/shivaverma97/primeBooks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contentHub}
              isBlog={false}
              title="Content Hub"
              description="Introducing our content hub website where you can share your love of food by posting your favorite recipes as blogs. Our platform allows you to interact with other food enthusiasts by liking, commenting, and sharing recipes. With a user-friendly interface, you can easily search for recipes by name, ingredient, or cuisine. We encourage our community to share their culinary experiences and inspire others with their creativity. Join us on our journey to create a thriving hub of food lovers and culinary enthusiasts."
              ghLink="https://github.com/shivaverma97/Content-Hub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageEditor}
              isBlog={false}
              title="Image Editor"
              description="Introducing our image editor, where you can transform your photos into works of art. Our platform allows you to enhance your images with various filters, adjust brightness, contrast, saturation, and more. With a simple and user-friendly interface, you can easily edit and fine-tune your images to achieve the desired effect. Whether you're a professional photographer or just an amateur looking to spruce up your photos, our image editor has everything you need."
              ghLink="https://github.com/shivaverma97/Photoshop-clone"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
