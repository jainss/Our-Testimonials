import styled from "@emotion/styled";
import "./App.css";
import Testimonial from "./Components/Testimonial";
import reviews from "./data";


const Container = styled("div")`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width:100vw;
  align-items: center;
  flex-direction:column;
  background-color: #DCDCDC;
`;

const Text = styled("div")`
    text-align:center;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;


function App() {
  return (
    <Container>
      <Text>
        <h1 style={{ fontWeight: 900 }}>Our Testimonials</h1>
        <div style={{ height: 4, backgroundColor: "#AF69EF", width: 130, }}></div>
      </Text>
      <Testimonial reviews={reviews} />
    </Container>
  );
}

export default App;
