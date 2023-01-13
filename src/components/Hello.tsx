import tw, { styled } from "twin.macro";

export default function Hello() {
  return (
    <Container className="text-3xl font-bold underline">Hello world!</Container>
  );
}

const Container = styled.div`
  ${tw`bg-[#F3e]`}
`;
