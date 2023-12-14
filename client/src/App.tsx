import "./App.css";
import "react-tabs/style/react-tabs.css";
import { CharacterConversion } from "./characterConversion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CharacterConversionHistory } from "./characterConversionHistory";

function App() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Character Conversion</Tab>
          <Tab>History</Tab>
        </TabList>

        <TabPanel>
          <CharacterConversion />
        </TabPanel>
        <TabPanel>
          <CharacterConversionHistory />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
