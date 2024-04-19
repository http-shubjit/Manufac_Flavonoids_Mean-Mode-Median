import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Flavanoids } from "./components/Flavanoids";

export default function App() {
  return (
    <MantineProvider>
      <Flavanoids />
    </MantineProvider>
  );
}
