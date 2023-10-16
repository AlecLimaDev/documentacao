import { Header, Links, OrderLink, Title } from "./Navbar.styled";

const Navbar = () => {
  return (
    <>
      <Header>
        <Title>Projetos</Title>
        <OrderLink>
          <Links>WebSite</Links>
        </OrderLink>
        <OrderLink>
          <Links>IBGE</Links>
        </OrderLink>
      </Header>
    </>
  );
};

export default Navbar;
