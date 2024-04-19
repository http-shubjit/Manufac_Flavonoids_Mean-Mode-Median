import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { TableScrollArea } from "./components/Flavanoids";

export default function App() {
  return (
    <MantineProvider>
      <TableScrollArea />
    </MantineProvider>
  );
}
