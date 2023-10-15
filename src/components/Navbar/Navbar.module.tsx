import { Header, Links, OrderLink, Title } from "./Navbar.styled";

const Navbar = () => {
  return (
    <>
      <Header>
        <Title>Navegação</Title>
        <OrderLink>
          <Links>Teste</Links>
        </OrderLink>
        <OrderLink>
          <Links>De</Links>
        </OrderLink>
        <OrderLink>
          <Links>Coluna</Links>
        </OrderLink>
      </Header>
    </>
  );
};

export default Navbar;
