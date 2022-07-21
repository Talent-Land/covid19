import { GoogleMap } from "./map.component";

export const ClincStudyOverview = () => {
  return (
    <div className="flex flex-grow">
      <div className="basis-8/12 flex flex-col bg-blue-themeTertiary/80 rounded-md drop-shadow-2xl m-2 p-2">
        <div className="flex flex-row">
          <div className="basis-3/4 flex flex-col">
            <div className="flex flex-row">
              <p className="">TITLE</p>
            </div>
            <div className="flex flex-row">
              <p className="">SCIENTIFIC TITLE</p>
            </div>
          </div>
          <div className="basis-1/4 flex flex-col">
            <div className="flex flex-row self-end">
              <p className="">INCLUSION AGE</p>
            </div>
            <div className="flex flex-row">
              <p className="">DATE PUBLICATION</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-2/4 flex flex-col">
            <GoogleMap />
          </div>
          <div className="basis-2/4 flex flex-col"></div>
        </div>
        <div className="flex flex-row"></div>
      </div>
    </div>
  );
};
