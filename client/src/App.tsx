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

        <TabPanel className="-mt-8">
          <CharacterConversion />
        </TabPanel>
        <TabPanel className="-mt-8">
          <CharacterConversionHistory />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
