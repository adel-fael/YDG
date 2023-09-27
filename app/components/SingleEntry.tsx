import { SingleZaffe } from "../types/SingleZaffe";

type SingleEntryProps = {
  zaffe: SingleZaffe;
	displayDateAsTitle?: boolean
};

export const SingleEntry: React.FC<SingleEntryProps> = ({ zaffe,displayDateAsTitle }) => {
  return (
    <div className="collapse collapse-arrow ml-auto mr-auto mt-10 w-[75vw] bg-base-200">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-">
			{displayDateAsTitle ? zaffe.date:  zaffe.place}
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <div className="flow-root">
          <dl className="-my-3 divide-y  text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Place</dt>
              <dd className="font-bold sm:col-span-2">{zaffe.place}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Costime</dt>
              <dd className="font-bold sm:col-span-2">{zaffe.costume}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Music</dt>
              <dd className="font-bold sm:col-span-2">{zaffe.music}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Team</dt>
              <dd className="font-bold sm:col-span-2">{zaffe.team}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Additional info</dt>
              <dd className="font-bold sm:col-span-2">
               {zaffe.additionalInfo}
              </dd>
            </div>
          </dl>
        </div>
      </div>

    </div>
  );
};
