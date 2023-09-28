import { SingleZaffe } from "../types/SingleZaffe";

type SingleEntryProps = {
  zaffe: SingleZaffe;
  displayDateAsTitle?: boolean;
};

export const SingleEntry: React.FC<SingleEntryProps> = ({
  zaffe,
  displayDateAsTitle,
}) => {
  return (
    <div className="collapse collapse-arrow mb-5 ml-auto mr-auto mt-5 w-[75vw] bg-base-200">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary font-bold text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
        {displayDateAsTitle ? zaffe.date : zaffe.place}
      </div>
      <div className="collapse-content bg-primary font-medium text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">


        <div className="flow-root ">
          <dl className="-my-3 divide-y  text-sm">
            {displayDateAsTitle ? (
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-normal">Place:</dt>
                <dd className="font-bold sm:col-span-2">{zaffe.place}</dd>
              </div>
            ) : null}

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-normal">Costume:</dt>
              <dd className="font-bold sm:col-span-2">{zaffe.costume}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-normal">Music:</dt>
              <dd className="font-bold sm:col-span-2">{zaffe.music}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-normal">Team:</dt>
              <dd className="font-bold sm:col-span-2">
                <ul className="list-decimal ml-5">
                  {zaffe.team.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-normal">Additional Info:</dt>
              <dd className="font-bold sm:col-span-2">
                {zaffe.additionalInfo}
              </dd>
            </div>
          </dl>
        </div>

        {/* <div className="flow-root rounded-lg border  py-3 shadow-sm ">
          <dl className="-my-3 divide-y  text-sm">
            {displayDateAsTitle ? (
              <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium  italic">Place:</dt>
                <dd className="font-bold  sm:col-span-2">{zaffe.place}</dd>
              </div>
            ) : null}

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium  italic">Costume:</dt>
              <dd className="font-bold  sm:col-span-2">{zaffe.costume}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium  italic">Music:</dt>
              <dd className="font-bold  sm:col-span-2">{zaffe.music}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium  italic">Team</dt>
              <dd className="font-bold  sm:col-span-2">
                {" "}
                <ul className="list-decimal ml-5">
                  {zaffe.team.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium  italic">Additional Info:</dt>
              <dd className="font-bold  sm:col-span-2">{zaffe.additionalInfo}</dd>
            </div>
          </dl>
        </div> */}
      </div>
    </div>
  );
};
