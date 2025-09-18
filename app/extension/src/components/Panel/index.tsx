import { IURyenneLogo } from "../Icon";

const Panel = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="tw:h-full tw:relative tw:bg-neutral-900 tw:z-[2147483647] tw:text-white">
      <div className="tw:w-full tw:p-3 tw:flex tw:items-center tw:gap-2 ">
        <div className="tw:flex tw:items-center tw:gap-2">
          <IURyenneLogo />
          <div className="tw:font-bold">
            <span>IU Ryenne</span>
          </div>
        </div>
        <div className="tw:flex-1"></div>
        <button
          type="button"
          onClick={onClose}
          className="tw:bg-transparent tw:[&_svg]:size-4 tw:border-none tw:hover:bg-neutral-800 tw:p-2 tw:rounded-lg tw:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
            ></path>
          </svg>
        </button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Panel;
