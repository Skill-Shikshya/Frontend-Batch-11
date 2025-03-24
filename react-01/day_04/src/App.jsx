import "./App.css";

import {
  Button,
  Badge,
  OTPInput,
  Alert,
  AlertTitle,
  AlertDescription,
  Calendar,
  Input,
  ProgressBar,
} from "shipfaster-ui";
import "shipfaster-ui/dist/shipfaster.css";
import { FaShip } from "react-icons/fa";
import { BiChevronLeft, BiDownload } from "react-icons/bi";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
function App() {
  return (
    <div className="">
      <div className="">
        <h1>Input</h1>
        <div className="w-2xs my-2">
          <Input type="text" className="bg-slate-300 " />
        </div>
        {/* <Calendar /> */}
        <ProgressBar
          progress={75}
          label="Download Status"
          description="Downloading your files..."
          position="center"
          className="w-[500px] bg-primary-50 rounded-xl p-2"
          rootClassName="h-4 rounded-full"
          indicatorClassName="bg-blue-500"
          icon={<BiDownload size={16} />}
        />{" "}
      </div>
      <Button
        variant="link"
        size="lg"
        endIcon={<FaShip />}
        startIcon={<BiChevronLeft />}
      >
        Button
      </Button>
      <div className="flex gap-1.5">
        {" "}
        <Badge disabled="false" shape="pill" variant="primary" size={"lg"}>
          Badge
        </Badge>
        <Badge disabled="" shape="pill" variant="destructive" size={"lg"}>
          Badge
        </Badge>
        <Badge disabled="true" shape="pill" variant="primary" size={"sm"}>
          Badge
        </Badge>
        <Badge
          disabled="false"
          shape="dot"
          className={`text-green-400`}
          variant="primary"
          size={"lg"}
        >
          Badge
        </Badge>
        <Badge
          disabled="false"
          shape="circle"
          className={`text-green-400`}
          variant="primary"
          size={"lg"}
        >
          Badge
        </Badge>
        <Badge
          disabled="false"
          shape="pill"
          className={`text-green-400`}
          variant="secondary"
          size="md"
          startIcon={<CgChevronLeft className="text-2xl text-amber-300" />}
          endIcon={<CgChevronRight className="text-2xl text-amber-300" />}
        >
          Badge
        </Badge>
      </div>
      <OTPInput
        length={4}
        shape=""
        inputSize="md"
        variant=""
        label="Verification Code"
        helperText="Enter the code sent to your phone"
      />
      <OTPInput
        length={6}
        shape=""
        inputSize="sm"
        variant=""
        label="Verification Code"
        helperText="Enter the code sent to your phone"
      />
      <OTPInput
        length={6}
        shape="underline"
        inputSize="sm"
        variant="success"
        label="Verification Code"
        helperText="Enter the code sent to your phone"
      />
      <OTPInput
        length={6}
        shape="underline"
        inputSize="sm"
        variant="success"
        label="Verification Code"
        helperText="Enter the code sent to your phone"
      />
      <OTPInput
        length={5}
        shape="underline"
        inputSize="md"
        variant="error"
        label="Verification Code"
        helperText="Enter the code sent to your phone"
      />
      <h1>Alert example</h1>
      <Alert
        variant="primary"
        style="accent"
        className="flex items-center h-15"
      >
        <>
          <span className="flex flex-col gap-1">
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is a primary alert with accent style.
            </AlertDescription>
          </span>
        </>
      </Alert>
      <Alert
        variant="secondary"
        style="accent"
        className="flex items-center h-15"
      >
        <>
          <span className="flex flex-col gap-1">
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is a primary alert with accent style.
            </AlertDescription>
          </span>
        </>
      </Alert>
    </div>
  );
}

export default App;
