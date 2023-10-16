import { ChangeEvent, FormEvent, useState } from "react";
import { Title } from "../../components/Navbar/Navbar.styled";
import { Container } from "../WebSite/WebSite. module";
import { Form, TextArea } from "./Contact.module.styled";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    navigate("/");
  };

  return (
    <>
      <Title>Me envie uma mensagem</Title>
      <Container>
        <Form onChange={handleSubmit}>
          <TextArea
            cols={80}
            rows={20}
            placeholder="Digitar..."
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
          />
          <input type="submit" value="Enviar" />
        </Form>
      </Container>
    </>
  );
};

export default Contact;
